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
const Items = [burger, upperBread, cheese , onion, tomato, 
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
    }
    constX = 0.1054
    height = 0.07028
    width = 0.1823

    startY = 0.2458
    highestY = this.startY
    fallingY = 0.5

    lowerBreadOn = false

    frame: Frame[] = [];
    counter = 0;

    buttonMainItems: string[] = [upperBread, mustard, "", onion, "", fish,
        lowerBread, ketchup, tomato, lettuce, burger, cheese]

    newItem(name: string) {try{
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
                periodic: false,
                periodicLaps: 99999
            })
        }

        if(!this.lowerBreadOn) return;
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

    initButtons() {
        for(let i = 0; i < this.buttonMainItems.length; i++) {
            print('oak')
            let t = new Trigger()
            t.triggerRegisterFrameEvent(this.burgerButtonsMainT[i], FRAMEEVENT_CONTROL_CLICK)
            let ii = i
            t.addAction(() => {
                this.newItem(this.buttonMainItems[ii])
            })
        }
    }

    initArrow() {
        let tim = new Timer()
        tim.start(0.01, false, () => {
            new FrameAnimation.Slide({
                frames: [this.burgerArrow],
                players: [ExtPlayers[0]],
                startPoint: {x: 0.49499, y: 0.3727},
                endPoint: {x: 0.5137, y: 0.3727},
                periodic: true,
                periodicLaps: 9999999999,
                speed: 0.0003

            })
            tim.destroy()
        })
        
    }

    init() {
        this.initButtons()
        this.initArrow()
        this.burgerLowerBread.visible = false
    }

    constructor() {
        super()

        this.init()
    }
}