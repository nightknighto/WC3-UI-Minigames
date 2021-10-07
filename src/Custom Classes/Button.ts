import { Frame, Trigger } from "w3ts/index";
import { BackdropFrame } from "./BackdropFrame";

export class Button {
    button: Frame;
    backdrop?: Frame;
    trig: Trigger;
    owner;
    highlighter: Frame;

    constructor(buttonName?: string, backdropName?: string, buttonFrame? : Frame, backdropFrame?: Frame, owner?: Frame, backdropNew?: string, func?: () => void) {
        if (buttonFrame) this.button = buttonFrame;
        else if (buttonName) this.button = Frame.fromName(buttonName, 0);
        else if (owner) this.button = new Frame("ScriptDialogButton", owner,0,0);
        else this.button = new Frame("ScriptDialogButton", Frame.fromOrigin(ORIGIN_FRAME_GAME_UI,0),0,0);

        if (backdropNew) {
            this.backdrop = new Frame("test", this.button, 0,0,"BACKDROP", "")
            this.backdrop.setTexture(backdropNew,0,true)
            this.backdrop.setAllPoints(this.button)
        }
        else if (backdropFrame) this.backdrop = backdropFrame;
        else if (backdropName) this.backdrop = Frame.fromName(backdropName, 0);
        
        if (owner) this.owner = owner;
        else this.owner = Frame.fromOrigin(ORIGIN_FRAME_GAME_UI,0)

        this.trig = new Trigger();
        this.trig.triggerRegisterFrameEvent(this.button, FRAMEEVENT_CONTROL_CLICK);
        func && this.trig.addAction( func )
    }
    
    public set icon(path: string) {
        this.backdrop && this.backdrop.setTexture(path, 0, true);
    }

    public get icon() {
        return this.icon;
    }

    public newActions( func: () => void ) {
        this.trig.removeActions()
        this.trig.addAction( func )
    }

    /**context point is top-left, so y => -y */
    public NewPointsTL(topleft: {x: number, y: number}, bottomright?: {x: number, y: number}, width?: number, height?: number) {
        if(this.owner != Frame.fromOrigin(ORIGIN_FRAME_GAME_UI,0)) {
            this.button.setPoint(FRAMEPOINT_TOPLEFT, this.owner, FRAMEPOINT_TOPLEFT, topleft.x,topleft.y);
            if(bottomright) this.button.setPoint(FRAMEPOINT_BOTTOMRIGHT, this.owner, FRAMEPOINT_TOPLEFT, bottomright.x, bottomright.y)
        } else {
            this.button.setAbsPoint(FRAMEPOINT_TOPLEFT, topleft.x,topleft.y)
            if(bottomright) this.button.setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, bottomright.x, bottomright.y);

        }
        if(width) this.button.width = width;
        if(height) this.button.height = height;
        if(this.backdrop) this.backdrop.setAllPoints(this.button);
        return this;
    }
    
    /**context point is bottom-left, so y => maxY - y*/
    public NewPointsBL(bottomleft: {x: number, y: number}, topright?: {x: number, y: number}, width?: number, height?: number) {
        if(this.owner != Frame.fromOrigin(ORIGIN_FRAME_GAME_UI,0)) {
            this.button.setPoint(FRAMEPOINT_BOTTOMLEFT, this.owner, FRAMEPOINT_BOTTOMLEFT, bottomleft.x,bottomleft.y);
            if(topright) this.button.setPoint(FRAMEPOINT_TOPRIGHT, this.owner, FRAMEPOINT_BOTTOMLEFT, topright.x, topright.y)
        } else {
            this.button.setAbsPoint(FRAMEPOINT_BOTTOMLEFT, bottomleft.x,bottomleft.y)
            if(topright) this.button.setAbsPoint(FRAMEPOINT_TOPRIGHT, topright.x, topright.y);

        }
        if(width) this.button.width = width;
        if(height) this.button.height = height;
        if(this.backdrop) this.backdrop.setAllPoints(this.button);
        return this;
    }
    
    public TALENTSdisable(boolean: boolean) {
        this.button.enabled = false;
        if (boolean) {
            if(this.highlighter) this.highlighter.destroy();
            let owner = this.button
            if(this.backdrop) owner = this.backdrop;
            this.highlighter = new Frame("highlight", owner, 0, 0, "BACKDROP", "")
            this.highlighter.setTexture("Redhighlighter.blp", 0, true)
            this.highlighter.setAllPoints(owner);
        
        } else {
            if(this.highlighter) this.highlighter.destroy();
        }
        return this;
    }

    public TALENTSunlockable(boolean: boolean) {
        //if there is no highlighter, that means it was not disabled, meaning it is owned
        if(!this.highlighter) {
            return this;
        }
        this.button.enabled = true;
        if (boolean) {
            if(this.highlighter) this.highlighter.destroy();
            let owner = this.button
            if(this.backdrop) owner = this.backdrop;
            this.highlighter = new Frame("highlight", owner, 0, 0, "BACKDROP", "")
            this.highlighter.setTexture("darkhighlighter.blp", 0, true)
            this.highlighter.setAllPoints(owner);
        
        } else {
            if(this.highlighter) this.highlighter.destroy();
        }
        return this;
    }

    public set visible(boolean: boolean) {
        this.button.visible = boolean
        if(this.backdrop) this.backdrop.visible = boolean;
    }

    public get visible() {
        return this.button.visible;
    }
}