import { RestaurantUI } from "Restaurant-UI"
import { Frame, Timer, Trigger } from "w3ts"
import { FrameAnimation } from "Custom Classes/FramesAnimations"
import { ExtPlayer, ExtPlayers } from "Custom Classes/ExtPlayer"

const burger = 'burger'
const upperBread = 'upperBread'
const lowerBread = 'lowerBread'
const cheese = 'cheese'
const onion = 'onion'
const tomato = 'tomato'
const fish = 'fish'
const ketchup = 'ketchup'
const mustard = 'mustard'
const lettuce = 'lettuce'
const bacon = 'bacon'
const prickles = 'prickles'
const Items = [burger, cheese, bacon, prickles, onion, tomato, 
    fish, ketchup, mustard, lettuce]
// const  = ''
// const  = ''

export class Restaurant extends RestaurantUI {

    dist = {
        startPoint: 0.2716,
        [burger]: 0.2958,
        [cheese]: 0.2776,
        [onion]: 0.2920,
        [tomato]: 0.2920,
        [fish]: 0.2882,
        [upperBread]: 0.2996,
        [ketchup]: 0.2763,
        [mustard]: 0.2763,
        [lettuce]: 0.2857,
        [bacon]: 0.2873,
        [prickles]: 0.2873,

    }

    paths = {
        [burger]: "burgerBurger.dds",
        [cheese]: "burgerCheese.dds",
        [onion]: "burgerOnions.dds",
        [tomato]: "burgerTomato.dds",
        [fish]: "burgerFish.dds",
        [upperBread]: "burgerBreadUpper.dds",
        [lowerBread]: "burgerBreadLower.dds",
        [ketchup]: "burgerKetchup.dds",
        [mustard]: "burgerMustard.dds",
        [lettuce]: "burgerLettuce.dds",
        [bacon]: "burgerBacon.dds",
        [prickles]: "burgerPrickles.dds"

    }

    player: ExtPlayer

    arrowPosY = [0.3021, 0.3521, 0.4021, 0.4471, 0.4971, 0.5451]

    constX = 0.1054
    height = 0.07028
    width = 0.1823

    startY = 0.2458
    highestY = this.startY
    fallingY = 0.5

    lowerBreadOn = false
    frameSuccess: Frame;

    frame: Frame[] = [];
    counter = 0;
    currentScore = 0;
    minimumScore = 0;
    timer = 30;
    state: 'playing' | 'paused' = 'playing'

    timerInstance: Timer;

    taskItems: string[] = []
    arrowAnim: FrameAnimation.Slide;

    buttonMainItems: string[] = [upperBread, mustard, prickles, onion, bacon, fish,
        lowerBread, ketchup, tomato, lettuce, burger, cheese]


    endGame() {try{
        print('end!')
        let color = '|cff12D1F3'
        this.timerInstance.pause()
        this.timerInstance.destroy()
        print('end x2')
        let t = new Timer()
        t.start(1, false, () => {
            print('1')
            for(let f of this.frame) f.visible = false

            this.burgerBlackScreen.visible = true;
            this.burgerBlackScreenScoreTextDynamic.text = color+this.currentScore
            this.burgerBlackScreenExpTextDynamic.text = color+"2"
            this.burgerBlackScreenGoldTextDynamic.text = color+(this.currentScore/10)
            print('2')
            t.destroy()
        })

        this.state = 'paused'
    }catch(e){print('burger endGame: '+e)}}

    startGame() {
        this.timer = 30;
        this.state = 'playing'

        if(this.timerInstance) {
            this.timerInstance.pause();
            this.timerInstance.destroy();
        }

        this.timerInstance = new Timer()
        this.timerInstance.start(1, true, () => this.gameTimer())

        this.newTask()
    }

    gameTimer() {
        this.timer--;

        let tim = this.timer
        let mins = 0;
        let secs = 0;
        while(tim >= 60) {
            mins++;
            tim -= 60;
        }
        secs = tim

        this.burgerTimerMinutes.text = mins+""
        this.burgerTimerSeconds.text = secs+""

        if(this.timer <= 0) {
            this.endGame()
        }

    }

    taskSuccess() {
        this.burgerArrow.visible = false
        this.currentScore += 100
        this.burgerScoreText.text = this.currentScore+""
        new FrameAnimation.Expand({
            frames: [this.frameSuccess],
            players: [ExtPlayers[0]],
            startSize: {x:0.02, y: 0.02},
            endSize: {x: 0.1, y: 0.1},
            location: {x: 0.607, y: 0.4413},
            time: 0.3,
        })
        TriggerSleepAction(1.5)
        this.newTask()
    }

    wrongItem() {
        this.currentScore -= 50
        this.burgerScoreText.text = this.currentScore+""

        this.lowerBreadOn = false
        this.counter = 0;
        this.highestY = this.startY
        for(let f of this.frame) f.destroy();
        new FrameAnimation.Expand({
            frames: [this.burgerLowerBread],
            players: [ExtPlayers[0]],
            startSize: {x: 0.2616, y: 0.1},
            endSize: {x: 0.005, y: 0.005},
            location: {x: 0.1936, y: 0.2708},
            time: 0.3,
            periodic: false
        })
        .onEnding = () => {
            this.burgerLowerBread.visible = false
        }

        this.updateArrow(0)
    }

    buttonClick(name: string) {
        if(this.state == 'paused') return;

        if(name == lowerBread) {
            if(this.lowerBreadOn) return;

            this.lowerBreadOn = true;
            new FrameAnimation.Expand({
                frames: [this.burgerLowerBread],
                players: [ExtPlayers[0]],
                startSize: {x: 0.04924, y: 0.02615},
                endSize: {x: 0.2616, y: 0.1},
                location: {x: 0.1936, y: 0.2708},
                time: 0.3,
                periodic: false
            })
            this.lowerBreadOn = true;
            this.updateArrow(this.counter + 1)
        } else {
            if(!this.lowerBreadOn) return;

            if(this.taskItems[this.counter] == name) {
                print('correct')
                this.newItem(name)
                
                if(this.counter >= this.taskItems.length) this.taskSuccess()
                else this.updateArrow(this.counter + 1)
            } else {
                print('wrong')
                print(this.taskItems[0])
                print(this.taskItems[1])
                print(this.taskItems[this.counter])
                this.wrongItem()
            }
        }

    }

    newItem(name: string) {try{

        const index = this.counter;
        print(name)
        let y = this.dist[name] - this.dist.startPoint + this.highestY
        print('passed')
        this.frame[index] = new Frame("this.burgerScreen", this.burgerScreen, 1, 1, "BACKDROP", "")
        this.frame[index].setSize(this.width, this.height)
        this.frame[index].setTexture(this.paths[name], 0 ,true)
        this.frame[index].setAbsPoint(FRAMEPOINT_BOTTOMLEFT, this.constX, y)
        new FrameAnimation.Slide({
            frames: [this.frame[index]], 
            players: [ExtPlayer.fromIndex(0)], 
            startPoint: {x: this.constX, y: this.fallingY}, 
            endPoint: {x: this.constX, y: y}, 
        })
        this.highestY = y
        this.counter++;
    }catch(e){print('Restaurant newItem: '+e)}}

    newTask() {try{
        if(this.state == 'paused') return;
        this.frameSuccess.visible = false
        this.burgerLowerBread.visible = false
        this.lowerBreadOn = false
        this.taskItems = []
        this.counter = 0;
        this.highestY = this.startY
        this.burgerArrow.visible = true
        for(let f of this.frame) f.destroy();

        let ii = 0;
        for(let i = 1; i <= 4; i++) {
            let it = Items[GetRandomInt(0, Items.length-1)]
            this.taskItems[i-1] = it
            this.burgerBoardItemT[i].setTexture(this.paths[it], 0, true)
            ii = i
        }
        this.taskItems[ii] = upperBread

        let t = new Timer()
        t.start(0.01, false, () => {this.updateArrow(0); t.destroy()})
    }catch(e){print('burger newTask: '+e)}}

    initButtons() {
        for(let i = 0; i < this.buttonMainItems.length; i++) {
            print('oak')
            let t = new Trigger()
            t.triggerRegisterFrameEvent(this.burgerButtonsMainT[i], FRAMEEVENT_CONTROL_CLICK)
            let ii = i
            t.addAction(() => {
                this.buttonClick(this.buttonMainItems[ii])
            })
        }
    }

    updateArrow(posIndex: number) {
        if(this.arrowAnim) this.arrowAnim.pause()

        this.arrowAnim = new FrameAnimation.Slide({
            frames: [this.burgerArrow],
            players: [ExtPlayers[0]],
            startPoint: {x: 0.49499, y: this.arrowPosY[posIndex]},
            endPoint: {x: 0.5137, y: this.arrowPosY[posIndex]},
            periodic: true,
            periodicLaps: 9999999999,
            speed: 0.0003

        })
    }

    init() {
        this.initButtons()
        this.burgerBlackScreen.visible = false
        this.burgerBoardSideItem.visible = false
        this.frameSuccess = new Frame("this.burgerScreen", this.burgerBoard, 1, 1, "BACKDROP", "") 
        this.frameSuccess.setTexture("burgerSuccess.dds", 0, true) 
        this.startGame()
    }

    constructor() {
        super()

        this.init()
    }
}