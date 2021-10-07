import { Frame, Trigger, Timer } from "w3ts/index";
import { onlyNumbers } from "Custom Functions/NumbersOnly";
import { ExtPlayer } from "./ExtPlayer";

export class Checkbox extends Frame {

    trigCHECK: Trigger;
    trigUNCHECK: Trigger

    constructor(owner: Frame, funcCHECK?: () => void, funcUNCHECK?: () => void) {
            super("QuestCheckBox", owner, 0, 0)

            this.trigCHECK = new Trigger()
            this.trigCHECK.triggerRegisterFrameEvent(this, FRAMEEVENT_CHECKBOX_CHECKED)
            funcCHECK && this.trigCHECK.addAction(funcCHECK);

            this.trigUNCHECK = new Trigger()
            this.trigUNCHECK.triggerRegisterFrameEvent(this, FRAMEEVENT_CHECKBOX_UNCHECKED)
            funcUNCHECK && this.trigUNCHECK.addAction(funcUNCHECK);
        }


    public newActionsCHECK(func: () => void) {
        this.trigCHECK.removeActions();
        this.trigCHECK.addAction(func);
    }

    public newActionsUNCHECK(func: () => void) {
        this.trigUNCHECK.removeActions();
        this.trigUNCHECK.addAction(func);
    }
}
