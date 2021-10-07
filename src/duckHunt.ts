import { ExtPlayer, ExtPlayers } from "Custom Classes/ExtPlayer";
import { FrameAnimation } from "Custom Classes/FramesAnimations";
import { Frame, Timer, Trigger } from "w3ts"

class Duck {
   target: Frame;
   backdrop: Frame

   duckHunt: DuckHunt
   timer = 0;

   color: 'Red' | 'Blue' | 'Black'
   duckStatus: 'flap' | 'fall' | 'null' = 'flap'
   startingMinX = 0.234;
   startingY = 0.207;
   startingMaxX = 0.6;
   BackgroundMaxY = 0.56;
   BackgroundMaxX = 0.73
   BackgroundMinX = 0.088
   duckX = 0.334;
   duckY = 0.223;

   duckAng = 45;
   duckSpd = 0.02
   duckSpdLimit = {low: 0.01, high: 0.03}
   duckFallSpd = 0.02

   flapCounter = 0
   fallCounter = 0

   direction: 'Right' | 'Left' = 'Right'

   constructor(duck: DuckHunt, color: 'Red' | 'Blue' | 'Black') {
      this.duckHunt = duck
      this.color = color

      this.target = new Frame("duckTarget", this.duckHunt.duckScreen, 0,0, "GLUEBUTTON", "")
      this.target.setAbsPoint(FRAMEPOINT_TOPLEFT, 0.425800, 0.397970) 
      this.target.setSize(0.071, 0.071)
      this.backdrop = new Frame(" this.backdrop ", this.target, 1, 1, "BACKDROP", "") 
      this.backdrop.setAllPoints(this.target) 
      this.backdrop.setTexture(`duck${color}Right1.dds`, 0, true) 
      let t = new Trigger() 
      t.triggerRegisterFrameEvent(this.target, FRAMEEVENT_CONTROL_CLICK) 
      t.addAction( () => {
         this.target.enabled = false 
         this.target.enabled = true 
         this.duckClick()
      })

      this.duckAnimFlap()
      this.duckSetupFall()
      this.duckSetupFly()
      this.duckSpawn()
   }

   duckAnimFlap() {
      new Timer().start(0.25, true, ()=> {
         if(this.duckStatus != 'flap') return;

         this.flapCounter++
         if(this.flapCounter > 3) this.flapCounter = 1
         this.backdrop.setTexture(`duck${this.color}${this.direction}${this.flapCounter}.dds`, 0, true)
      })
   }

   duckSpawn() {

      this.target.clearPoints()
      this.duckY = this.startingY
      this.duckX = GetRandomReal(this.startingMinX, this.startingMaxX)

      if(this.duckHunt.mode == 'off') return;

      this.duckAng = GetRandomInt(30, 150)
      this.duckSpd = GetRandomReal(this.duckSpdLimit.low, this.duckSpdLimit.high)
      if(this.duckAng > 90) this.direction = 'Left'
      else this.direction = 'Right'

      this.target.setAbsPoint(FRAMEPOINT_BOTTOMLEFT, this.duckX, this.duckY)
      this.timer = 0;
      this.duckStatus = 'flap'
      if(this.duckHunt.bulletCounter < 3) this.duckHunt.bulletCounter += 1
      for(let i = 1; i <= 3; i++) {
         if (this.duckHunt.bulletCounter >= i) 
            this.duckHunt.duckBulletT[i-1].visible = true
      }
   }

   duckSetupFall() {
      new Timer().start(0.1, true, () => {
         if(this.duckStatus != 'fall') return;

         this.duckY -= this.duckFallSpd
         if(this.duckY <= this.startingY) {
            this.duckSpawn()
         } else {
            this.target.clearPoints()
            this.target.setAbsPoint(FRAMEPOINT_BOTTOMLEFT, this.duckX, this.duckY)
         }
      })
   }

   duckSetupFly() {
      new Timer().start(0.1, true, () => {
         if(this.duckStatus != 'flap') return;

         this.duckX += this.duckSpd * CosBJ(this.duckAng)
         this.duckY += this.duckSpd * SinBJ(this.duckAng)
         if(this.duckY >= this.BackgroundMaxY) {
            this.duckEscapes()
         } else if(this.duckX >= this.BackgroundMaxX) {
            this.duckEscapes()
         } else if(this.duckX <= this.BackgroundMinX) {
            this.duckEscapes()
         } else {
            this.timer += 0.1
            this.target.clearPoints()
            this.target.setAbsPoint(FRAMEPOINT_BOTTOMLEFT, this.duckX, this.duckY)
         }
      })
   }

   duckEscapes() {
      this.duckHunt.duckEscapes()
      this.duckSpawn()
   }

   duckClick() {
      if(this.duckStatus == 'flap') {
         if(this.duckHunt.bulletCounter <= 0) return;

         this.duckStatus = 'null'         
         this.backdrop.setTexture(`duck${this.color}Fall1.dds`, 0, true)

         let tim = new Timer()
         tim.start(0.5, false, () => {
            this.duckStatus = 'fall'
            this.backdrop.setTexture(`duck${this.color}Fall2.dds`, 0, true)
            
            tim.destroy()
         })
         
         let score = 1000;
         if(this.timer < 1.5)
            score += 1350 * (1.5-this.timer);

         score *= (this.duckSpd / this.duckSpdLimit.low) /2
         this.duckHunt.duckShot(R2I(score))
      }
   }
}

export class DuckHunt {

   Ducks: Duck[] = []

   duckScreen: Frame
   duckRedTarget: Frame
   duckBlueTarget: Frame
   duckBlackTarget: Frame
   duckScreenInvis: Frame
   BackdropduckTarget: Frame 
   duckBottomUI: Frame
   duckTextScore: Frame
   duckScoreT: Frame[] = []
   duckBulletT: Frame[] = []
   duckTextRound: Frame

   mode: 'on' | 'off' = 'on'
   totalScore = 0;
   duckCounter = 0;
   roundCounter = 0;


   bulletCounter = 3;


   setup() {
      this.Ducks.push(new Duck(this, 'Red'))
      this.Ducks.push(new Duck(this, 'Blue'))
      this.Ducks.push(new Duck(this, 'Black'))
      FrameAnimation.blink([this.duckTextScore], [ExtPlayer.fromIndex(0)], 0.5, 20)
   }

   duckShot(score: number) {
      this.totalScore += score
      let length = `${this.totalScore}`.length
      let text = ""
      for(let i = 0; i <= 5-length; i++) {
         text += "0"
      }
      text += this.totalScore
      this.duckTextScore.text = `${text}`
      if(this.duckCounter == 8) {
         this.duckEndRound()
      } else {
         this.duckScoreT[this.duckCounter].setTexture('duckDuckRed.dds',0, true)
         this.duckCounter++;
      }
   }

   duckEscapes() {
      if(this.duckCounter == 8) {
         this.duckEndRound()
      } else {
         this.duckScoreT[this.duckCounter].setTexture('duckDuckGrey.dds',0, true)
         this.duckCounter++;
      }
   }

   duckEndRound() {
      this.mode = 'off'
      this.roundCounter += 1
      this.duckTextRound.text = `${this.roundCounter}`

   }

   duckScreenClick() {
      if(this.bulletCounter <= 0) return;
      this.bulletCounter -= 1
      this.duckBulletT[this.bulletCounter].visible = false
   }

   constructor() {try{
      let t: Trigger;

BlzHideOriginFrames(true) 
BlzFrameSetSize(BlzGetFrameByName("ConsoleUIBackdrop",0), 0, 0.0001)

this.duckScreen = new Frame("this.duckScreen", Frame.fromName("ConsoleUIBackdrop",0), 1, 1, "BACKDROP", "") 
this.duckScreen.setAbsPoint(FRAMEPOINT_TOPLEFT, 0.0862700, 0.565600) 
this.duckScreen.setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, 0.732570, 0.111200) 
this.duckScreen.setTexture("duckBackground.dds", 0, true) 

this.duckScreenInvis = new Frame("duckScreenInvis", this.duckScreen, 0,0, "GLUEBUTTON", "") 
this.duckScreenInvis.setAbsPoint(FRAMEPOINT_TOPLEFT, 0.0862700, 0.569900) 
this.duckScreenInvis.setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, 0.732570, 0.108500) 
t = new Trigger() 
t.triggerRegisterFrameEvent(this.duckScreenInvis, FRAMEEVENT_CONTROL_CLICK) 
t.addAction( () => {
this.duckScreenInvis.enabled = false 
this.duckScreenInvis.enabled = true 
this.duckScreenClick()
})

this.duckBottomUI = new Frame("this.duckBottomUI", this.duckScreen, 1, 1, "BACKDROP", "") 
this.duckBottomUI.setAbsPoint(FRAMEPOINT_TOPLEFT, 0.0862700, 0.290600) 
this.duckBottomUI.setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, 0.732570, 0.112300) 
this.duckBottomUI.setTexture("duckBottomLayout.dds", 0, true) 

this.duckTextScore = new Frame("duckTextScore", this.duckBottomUI, 0,0, "TEXT", "") 
this.duckTextScore.setAbsPoint(FRAMEPOINT_TOPLEFT, 0.512100, 0.174400) 
this.duckTextScore.setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, 0.598430, 0.147600) 
this.duckTextScore.text = "|cffFFFFFF000000|r" 
this.duckTextScore.enabled = false 
this.duckTextScore.setScale(2.43) 
BlzFrameSetTextAlignment(this.duckTextScore.handle, TEXT_JUSTIFY_TOP, TEXT_JUSTIFY_RIGHT) 

this.duckScoreT[0] = new Frame("this.duckScoreT[0]", this.duckBottomUI, 1, 1, "BACKDROP", "") 
this.duckScoreT[0].setAbsPoint(FRAMEPOINT_TOPLEFT, 0.341100, 0.172110) 
this.duckScoreT[0].setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, 0.358600, 0.152300) 
this.duckScoreT[0].setTexture("duckDuckWhite.dds", 0, true) 

this.duckScoreT[1] = new Frame("this.duckScoreT[1]", this.duckBottomUI, 1, 1, "BACKDROP", "") 
this.duckScoreT[1].setAbsPoint(FRAMEPOINT_TOPLEFT, 0.359600, 0.172110) 
this.duckScoreT[1].setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, 0.377100, 0.152300) 
this.duckScoreT[1].setTexture("duckDuckWhite.dds", 0, true) 

this.duckScoreT[2] = new Frame("this.duckScoreT[2]", this.duckBottomUI, 1, 1, "BACKDROP", "") 
this.duckScoreT[2].setAbsPoint(FRAMEPOINT_TOPLEFT, 0.378100, 0.172110) 
this.duckScoreT[2].setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, 0.395600, 0.152300) 
this.duckScoreT[2].setTexture("duckDuckWhite.dds", 0, true) 

this.duckScoreT[3] = new Frame("this.duckScoreT[3]", this.duckBottomUI, 1, 1, "BACKDROP", "") 
this.duckScoreT[3].setAbsPoint(FRAMEPOINT_TOPLEFT, 0.396600, 0.172110) 
this.duckScoreT[3].setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, 0.414100, 0.152300) 
this.duckScoreT[3].setTexture("duckDuckWhite.dds", 0, true) 

this.duckScoreT[4] = new Frame("this.duckScoreT[4]", this.duckBottomUI, 1, 1, "BACKDROP", "") 
this.duckScoreT[4].setAbsPoint(FRAMEPOINT_TOPLEFT, 0.415100, 0.172110) 
this.duckScoreT[4].setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, 0.432600, 0.152300) 
this.duckScoreT[4].setTexture("duckDuckWhite.dds", 0, true) 

this.duckScoreT[5] = new Frame("this.duckScoreT[5]", this.duckBottomUI, 1, 1, "BACKDROP", "") 
this.duckScoreT[5].setAbsPoint(FRAMEPOINT_TOPLEFT, 0.433600, 0.172110) 
this.duckScoreT[5].setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, 0.451100, 0.152300) 
this.duckScoreT[5].setTexture("duckDuckWhite.dds", 0, true) 

this.duckScoreT[6] = new Frame("this.duckScoreT[6]", this.duckBottomUI, 1, 1, "BACKDROP", "") 
this.duckScoreT[6].setAbsPoint(FRAMEPOINT_TOPLEFT, 0.452100, 0.172110) 
this.duckScoreT[6].setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, 0.469600, 0.152300) 
this.duckScoreT[6].setTexture("duckDuckWhite.dds", 0, true) 

this.duckScoreT[7] = new Frame("this.duckScoreT[7]", this.duckBottomUI, 1, 1, "BACKDROP", "") 
this.duckScoreT[7].setAbsPoint(FRAMEPOINT_TOPLEFT, 0.470600, 0.172110) 
this.duckScoreT[7].setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, 0.488100, 0.152300) 
this.duckScoreT[7].setTexture("duckDuckWhite.dds", 0, true) 

this.duckBulletT[0] = new Frame("this.duckBulletT[0]", this.duckBottomUI, 1, 1, "BACKDROP", "") 
this.duckBulletT[0].setAbsPoint(FRAMEPOINT_TOPLEFT, 0.230800, 0.177300) 
this.duckBulletT[0].setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, 0.247130, 0.157300) 
this.duckBulletT[0].setTexture("duckBullet.dds", 0, true) 

this.duckBulletT[1] = new Frame("this.duckBulletT[1]", this.duckBottomUI, 1, 1, "BACKDROP", "") 
this.duckBulletT[1].setAbsPoint(FRAMEPOINT_TOPLEFT, 0.244800, 0.177300) 
this.duckBulletT[1].setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, 0.261130, 0.157300) 
this.duckBulletT[1].setTexture("duckBullet.dds", 0, true) 

this.duckBulletT[2] = new Frame("this.duckBulletT[2]", this.duckBottomUI, 1, 1, "BACKDROP", "") 
this.duckBulletT[2].setAbsPoint(FRAMEPOINT_TOPLEFT, 0.258800, 0.177300) 
this.duckBulletT[2].setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, 0.275130, 0.157300) 
this.duckBulletT[2].setTexture("duckBullet.dds", 0, true) 

this.duckTextRound = new Frame("duckTextRound", this.duckBottomUI, 0,0, "TEXT", "") 
this.duckTextRound.setAbsPoint(FRAMEPOINT_TOPLEFT, 0.258100, 0.204940) 
this.duckTextRound.setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, 0.291930, 0.186300) 
this.duckTextRound.text = "|cffFFFFFF0|r" 
this.duckTextRound.enabled = false 
this.duckTextRound.setScale(2.00) 
BlzFrameSetTextAlignment(this.duckTextRound.handle, TEXT_JUSTIFY_TOP, TEXT_JUSTIFY_LEFT) 

this.setup()
}catch(e){print(e)}}

}
