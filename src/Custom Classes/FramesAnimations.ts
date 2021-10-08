import { Frame, Timer } from "w3ts";
import { ExtPlayer } from "./ExtPlayer";

export namespace FrameAnimation {

    export function Init() {
        Blink.init()
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
    
            for(let f of this.frames) f.visible = false
            Blink.blinkArray.push(this)
        }
    }


    

}