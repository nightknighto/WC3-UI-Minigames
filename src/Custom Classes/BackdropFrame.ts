import { Frame } from "w3ts/index";

export class BackdropFrame extends Frame {
    constructor(owner: Frame, texture: string, topleft: {x: number, y: number}, bottomright?: {x: number, y: number}, Width?: number, Height?: number) {
        super("backdrop", owner, 0, 0, "BACKDROP", "")
        this.setTexture(texture, 0, true);

        if (owner === Frame.fromOrigin(ORIGIN_FRAME_GAME_UI,0) || owner === Frame.fromName("ConsoleUIBackdrop",0)) {
            this.setAbsPoint(FRAMEPOINT_TOPLEFT, topleft.x, topleft.y)
        } else 
            this.setPoint(FRAMEPOINT_TOPLEFT, owner, FRAMEPOINT_TOPLEFT, topleft.x, topleft.y)

        if (bottomright) this.setPoint(FRAMEPOINT_BOTTOMRIGHT, owner, FRAMEPOINT_TOPLEFT, bottomright.x, bottomright.y)
        else this.setSize(Width, Height)
    }
}