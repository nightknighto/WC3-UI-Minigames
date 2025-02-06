import { Frame, Timer } from "w3ts";
import { ExtPlayer } from "./ExtPlayer";

interface point {x: number, y: number}

function DistanceBetweenPoints(point1: point, point2: point) {
    let x = point1.x - point2.x;
    let y = point1.y - point2.y;

    return math.sqrt( x*x + y*y );
}

export namespace FrameAnimation {

    export function Init() {
        Blink.init()
        Slide.init()
        Expand.init()
    }

    interface I_expand {
        /**frames to be moved*/
        frames: Frame[],
        /**players for whom the frames will be moved */
        players: ExtPlayer[],
        /**location of the FRAMEPOINT */
        location: point,
        /**starting x: (width) & y: (height) of the frame */
        startSize: point,
        /**ending x: (width) & y: (height) of the frame */
        endSize: point,
        /**Time taken from start size to end size */
        time: number
        /**frequency of the expansion; the frequency of the timer that changes size. Default: 0.01 */
        frequency?: number,
        /**The framepoint which will be constant during the expansion. Default: FRAMEPOINT_CENTER */
        FRAMEPOINT?: framepointtype,
        /**false to expand once, true to keep expanding and contracting. Default: false */
        periodic?: boolean,
        /**if periodic is true, periodic laps determine the number of expansions and contractions for the frame. 1 direction counts as 1 lap, so expanding and contracting are 2 laps. Default: 2 */
        periodicLaps?: number,
    }

    export class Expand {
        frames: Frame[]
        players: ExtPlayer[]
        startSize: point
        endSize: point
        speed: point;
        frequency = 0.01;
        freqTimer = 0;
        FRAMEPOINT: framepointtype = FRAMEPOINT_CENTER
        periodic: boolean
        periodicLaps: number = 2

        /**Put a function that will be run after the animation ends */
        onEnding: () => void;

        sizeX = 0
        sizeY = 0

        static expandArray: Expand[] = []

        static init() {
            new Timer().start(0.01, true, () => this.expandTimerActions())
        }

        static expandTimerActions() {
        try{
            for(let ob of this.expandArray) {
                ob.freqTimer += 0.01;
                if(ob.freqTimer >= ob.frequency) {
                    ob.freqTimer = 0;

                    let end = false;
                    if(DistanceBetweenPoints({x: ob.sizeX, y: ob.sizeY}, ob.endSize) <= DistanceBetweenPoints({x: 0, y: 0}, ob.speed)) {
                        ob.sizeX = ob.endSize.x
                        ob.sizeY = ob.endSize.y
                        end = true;
                    } else {
                        ob.sizeX += ob.speed.x 
                        ob.sizeY += ob.speed.y 
                    }

                    for(let f of ob.frames) {
                        if(ob.players.length < 10) {
                            for(let p of ob.players) {
                                if(GetLocalPlayer() == p.handle) f.setSize(ob.sizeX, ob.sizeY)
                            }
                        } else {
                            f.setSize(ob.sizeX, ob.sizeY)
                        }
                        
                    }

                        const ending = () => {
                            this.expandArray.splice(this.expandArray.indexOf(ob), 1)
                            if(ob.onEnding) ob.onEnding()
                        }

                    if(end) {
                        if(ob.periodic) {
                            ob.periodicLaps--;
                            ob.speed.x *= -1
                            ob.speed.y *= -1;
                            [ob.startSize, ob.endSize] = [ob.endSize, ob.startSize]
                            if(ob.periodicLaps <= 0) {
                                ending()
                            }
                        } else {
                            ending()
                        }
                    }
                }
            }
        }catch(e){print('Expand Timer: '+e)}}

        /**Makes the frame expands in size or contracts. Automatically turns on visibility for selected players */
        constructor(props: I_expand) {
            this.frames = props.frames
            this.players = props.players
            this.startSize = props.startSize
            this.endSize = props.endSize
            if(props.frequency) this.frequency = props.frequency
            if(props.FRAMEPOINT) this.FRAMEPOINT = props.FRAMEPOINT
            if(props.periodic) this.periodic = props.periodic
            if(props.periodicLaps) this.periodicLaps = props.periodicLaps

            this.speed = {x: (this.endSize.x - this.startSize.x) * this.frequency / (props.time), y: (this.endSize.y - this.startSize.y) * this.frequency / (props.time)}

            this.sizeX = this.startSize.x
            this.sizeY = this.startSize.y

            for(let f of this.frames) {
                for(let p of this.players) {
                    if(GetLocalPlayer() == p.handle) {
                        f.clearPoints()
                        f.setAbsPoint(this.FRAMEPOINT, props.location.x, props.location.y)
                        f.setSize(this.startSize.x, this.startSize.y)
                    
                        f.visible = true;
                    }
                }
            }

            Expand.expandArray.push(this)
        }

    }


    interface I_slide {
        /**frames to be moved*/
        frames: Frame[],
        /**players for whom the frames will be moved */
        players: ExtPlayer[],
        /**starting point of the slide */
        startPoint: point,
        /**ending point of the slide */
        endPoint:point,
        /**speed of sliding. Default: 0.01 */
        speed?: number,
        /**frequency of the sliding; the frequency of the timer that changes position. Default: 0.01 */
        frequency?: number,
        /**The framepoint which will be on the start and end points. Default: FRAMEPOINT_BOTTOMLEFT */
        FRAMEPOINT?: framepointtype,
        /**false to slide once, true to keep sliding in both directions. Default: false */
        periodic?: boolean,
        /**if periodic is true, periodic laps determine the number of slides for the frame. 1 direction counts as 1 lap, so going and returning are 2 laps. Default: 2 */
        periodicLaps?: number,
        /**replaces (speed). time taken from start to end points */
        time?: number
    }

    export class Slide {
        frames: Frame[]
        players: ExtPlayer[]
        startPoint: point
        endPoint: point
        speed: point;
        frequency = 0.01;
        freqTimer = 0;
        FRAMEPOINT: framepointtype = FRAMEPOINT_BOTTOMLEFT
        periodic: boolean
        periodicLaps: number = 2

        posX = 0;
        posY = 0

        static slideArray: Slide[] = []

        /**Pauses/Stops the animation */
        pause() {
            if(Slide.slideArray.indexOf(this) >= 0) {
                Slide.slideArray.splice(Slide.slideArray.indexOf(this), 1)
            }
        }

        /**Resumes/Continues the animation */
        resume() {
            if(Slide.slideArray.indexOf(this) < 0) {
                Slide.slideArray.push(this);
            }
        }

        static init() {
            new Timer().start(0.01, true, () => this.slideTimerActions())
        }

        static slideTimerActions() {try{
            for(let ob of this.slideArray) {
                ob.freqTimer += 0.01;
                if(ob.freqTimer >= ob.frequency) {
                    ob.freqTimer = 0;

                    let end = false;
                    if(DistanceBetweenPoints({x: ob.posX, y: ob.posY}, ob.endPoint) <= DistanceBetweenPoints({x: 0, y: 0}, ob.speed)) {
                        ob.posX = ob.endPoint.x
                        ob.posY = ob.endPoint.y
                        end = true;
                    } else {
                        ob.posX += ob.speed.x 
                        ob.posY += ob.speed.y 
                    }

                    for(let f of ob.frames) {
                        if(ob.players.length < 10) {
                            for(let p of ob.players) {
                                if(GetLocalPlayer() == p.handle) f.setAbsPoint(ob.FRAMEPOINT, ob.posX, ob.posY)
                            }
                        } else {
                            f.setAbsPoint(ob.FRAMEPOINT, ob.posX, ob.posY)
                        }
                        
                    }

                        const ending = () => {
                            this.slideArray.splice(this.slideArray.indexOf(ob), 1)
                        }

                    if(end) {
                        if(ob.periodic) {
                            ob.periodicLaps--;
                            ob.speed.x *= -1
                            ob.speed.y *= -1;
                            [ob.startPoint, ob.endPoint] = [ob.endPoint, ob.startPoint]
                            if(ob.periodicLaps <= 0) {
                                ending()
                            }
                        } else {
                            ending()
                        }
                    }
                }
            }
        }catch(e){print('Slide Timer: '+e)}}

        /**
         * Makes the frame slide between 2 points.
         */
        constructor(props: I_slide) {try{
            

            this.frames = props.frames
            this.players = props.players
            this.startPoint = props.startPoint
            this.endPoint = props.endPoint
            if(props.frequency) this.frequency = props.frequency
            if(props.FRAMEPOINT) this.FRAMEPOINT = props.FRAMEPOINT
            if(props.periodic) this.periodic = props.periodic
            if(props.periodicLaps) this.periodicLaps = props.periodicLaps

            this.posX = props.startPoint.x
            this.posY = props.startPoint.y
            let spd = 0
            if(props.time && props.time > 0) spd = DistanceBetweenPoints(this.startPoint, this.endPoint) / (props.time * this.frequency)
            else if(props.speed) spd = props.speed 
            else spd = 0.01 //default value
    

            for(let f of this.frames) {
                let wid = f.width
                let hei = f.height
                for(let p of this.players) {
                    if(GetLocalPlayer() == p.handle) {
                        f.clearPoints()
                        f.setAbsPoint(this.FRAMEPOINT, this.posX, this.posY)
                        f.setSize(wid, hei)
                    }
                }
            }
            Slide.slideArray.push(this)
            print(spd)

            this.speed = {x: spd * (this.endPoint.x - this.startPoint.x) / DistanceBetweenPoints(this.startPoint, this.endPoint), y: spd * (this.endPoint.y - this.startPoint.y) / DistanceBetweenPoints(this.startPoint, this.endPoint)}
        }catch(e){print('Slide Construct: '+e)}}

    }

    export class Blink {
        frames: Frame[]
        players: ExtPlayer[] 
        frequency: number;
        duration?: number;
        count?: number;
        timer: number = 0
        freqTimer: number = 0
        visible: boolean = false

        private static blinkArray: Blink[] = []
        
        static init() {
            new Timer().start(0.1, true, () => this.blinkTimerActions())
        }

        static blinkTimerActions() {try{
            for(let ob of Blink.blinkArray) {
                print('2')
                ob.timer += 0.1
                ob.freqTimer += 0.1
    
                const actions = (ending?: boolean) => {try{
                    print('actions')
                    for(let f of ob.frames) {
                        if(ending) {
                            f.visible = true
                            continue;
                        }
                        print('yay')
                        if(ob.visible) f.visible = true
                        else f.visible = false
                    }
                }catch(e){print(e)}}
    
                const completeActions = (ending?: boolean) => {try{
                    print(ob.players[0].name)
                    let local = true
                    if(ob.players.length >= 10) {
                        local = false;
                    }
                    print(local)
                    if(local) {
                        for(let p of ob.players) {
                            if(GetLocalPlayer() == p.handle) actions(ending)
                        }
                    } else {
                        print('hello')
                        actions(ending)
                    }
                }catch(e){print(e)}}
    
                if(ob.freqTimer >= ob.frequency) {
                    ob.freqTimer = 0;
                    print('passed')
                    ob.visible = !ob.visible
                    if(ob.visible) {
                        if(ob.count) ob.count--;
                    }
                    print('passed2')
    
                    completeActions()
                }
    
                if(ob.duration) {
                    if(ob.timer >= ob.duration) {
                        completeActions(true)
                        Blink.blinkArray.splice(Blink.blinkArray.indexOf(ob), 1)
                    }
                } else if(ob.count && ob.count <= 0) {
                    completeActions(true)
                    Blink.blinkArray.splice(Blink.blinkArray.indexOf(ob), 1)
                }
    
            }
        }catch(e){print('Animation-Blinking: '+e)}}

        /**Blinks the frame by quickly showing and hiding it.
         * @frame: Pass a single frame, or an array in case of a button.
         * @player: Pass a single player or multiple players. Animation will happen for them only.
         * @frequency: Time between each successive showing or hiding. Default: 0.5
         * @duration: Total time of the animation. Default: 2
         * @count: Number of blinks. Replaces (duration) if given a value.
         * @Resolution: 0.1 seconds.
        */
        constructor(frames: Frame[], players: ExtPlayer[], frequency = 0.5, duration = 2, count?: number) {

            this.frames = frames
            this.players = players
            this.frequency = frequency
            if(count && count > 0) this.count = count
            else this.duration = duration 
    
            for(let f of this.frames) {
                for(let p of this.players) {
                    if(GetLocalPlayer() == p.handle) f.visible = false
                }
            }
            
            Blink.blinkArray.push(this)
        }
    }


    

}