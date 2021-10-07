import { Frame } from "w3ts/index";

export class TextFrame extends Frame {

    /**
     * Creates a Text Frame.
     * @param owner 
     * @param text 
     * @param scale 
     * @param topleft context point is TOPLEFT of the owner, unless its GAME_UI, then its BOTTOMLEFT.
     * @param Width 
     * @param Height 
     */
    constructor(owner: Frame, text: string, scale: number, topleft: { x: number; y: number; }, Width: number, Height: number) {
        super("text", owner, 0, 0, "TEXT", "");
        if(owner == Frame.fromOrigin(ORIGIN_FRAME_GAME_UI,0)) {
            this.setAbsPoint(FRAMEPOINT_TOPLEFT, topleft.x, topleft.y)
        } else {
            this.setPoint(FRAMEPOINT_TOPLEFT, owner, FRAMEPOINT_TOPLEFT, topleft.x, topleft.y >= 0? -topleft.y : topleft.y);
        }
        this.text = text
        this.setScale(scale);
        this.setSize(Width, Height);
    }
}
