import { Frame, Trigger } from "w3ts";
const highlightPath = 'Highlighter2.blp'

export namespace FrameUtils {

    export class addHighlight {


        constructor(frame: Frame) {
            const high = new Frame('highlight', frame, 0, 0, 'BACKDROP', '')
            high.setTexture(highlightPath, 0, true)
            high.setAllPoints(frame)
            high.enabled = false
            high.visible = false

            let t = new Trigger()
            t.triggerRegisterFrameEvent(frame, FRAMEEVENT_MOUSE_ENTER)
            t.addAction(() => {
                high.visible = true
            })

            t = new Trigger()
            t.triggerRegisterFrameEvent(frame, FRAMEEVENT_MOUSE_LEAVE)
            t.addAction(() => {
                high.visible = false
            })

        }
    }
}