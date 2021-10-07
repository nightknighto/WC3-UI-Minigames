import { Frame, Trigger, Timer } from "w3ts/index";
import { onlyNumbers } from "Custom Functions/NumbersOnly";
import { ExtPlayer, ExtPlayers, ExtPlayersUsers } from "./ExtPlayer";
import { BackdropFrame } from "./BackdropFrame";

let EditboxNumbersOnlyArray: Editbox[] = []

export class Editbox extends Frame {

    trigEnter: Trigger;
    trigChange?: Trigger[];
    background?: BackdropFrame;
    owner: Frame;

    constructor(withCover: boolean, owner: Frame, OnlyNumbers: boolean, whiteBackground: boolean, funcENTER?: () => void) {
        if(whiteBackground) {
            let bg = new BackdropFrame(owner, "white.tga", {x: 0,y: 0}, null, 0.1, 0.1)
            if(withCover) {
                super("EscMenuEditBoxTemplate", bg, 0, 0)
            } else {
                super("Editbox", bg, 0, 0, "EDITBOX", "")
            }
            this.background = bg;
        } else {
            if(withCover) {
                super("EscMenuEditBoxTemplate", owner, 0, 0)
            } else {
                super("Editbox", owner, 0, 0, "EDITBOX", "")
            } 
        }
        

        if (OnlyNumbers) {
            EditboxNumbersOnlyArray.push(this);
        }

        this.trigEnter = new Trigger()
        this.trigEnter.triggerRegisterFrameEvent(this, FRAMEEVENT_EDITBOX_ENTER)
        funcENTER && this.trigEnter.addAction( funcENTER )


        
        this.owner = owner;
    }

    public ENTERnewActions(func: () => void) {
        this.trigEnter.removeActions();
        this.trigEnter.addAction(func);
    }

    public NewPoints(topleft: {x: number, y: number}, bottomright: {x: number, y: number}) {
        if(this.background) {
            this.background.setPoint(FRAMEPOINT_TOPLEFT, this.owner, FRAMEPOINT_TOPLEFT, topleft.x, topleft.y)
            this.background.setPoint(FRAMEPOINT_BOTTOMRIGHT, this.owner, FRAMEPOINT_TOPLEFT, bottomright.x, bottomright.y)
            this.setAllPoints(this.background)
        } else {
            this.setPoint(FRAMEPOINT_TOPLEFT, this.owner, FRAMEPOINT_TOPLEFT, topleft.x, topleft.y)
            this.setPoint(FRAMEPOINT_BOTTOMRIGHT, this.owner, FRAMEPOINT_TOPLEFT, bottomright.x, bottomright.y)
        }
    }
}

export function EditboxNumbersOnlyInit() {
    new Timer().start(0.05, true, () => {
        for(let e of EditboxNumbersOnlyArray) {
            for(let p of ExtPlayersUsers) {
                if(GetLocalPlayer() == p.handle) {
                    if(e.visible) {
                        let newText = onlyNumbers(e.text)
                        if (e.text != newText) {
                            e.text = newText
                        }
                    }
                }
            }
        }
    })

}