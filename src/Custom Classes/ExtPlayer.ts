import { MapPlayer, Unit, Timer } from "w3ts/index";
import { ExtUnit } from "Custom Classes/ExtUnit";
import { RGB } from "./RGB and colortext";

const hintsMax = 10

export class ExtPlayer extends MapPlayer {


    hero?: ExtUnit;
    AnimationRun: boolean = false;
    MoveUp: boolean = false;
    MoveDown: boolean = false;
    MoveRight: boolean = false;
    MoveLeft: boolean = false;
    MoveRightSidestep: boolean = false;
    MoveLeftSidestep: boolean = false;
    PressSpace: boolean = false;
    ThirdPerson: boolean = false;
    LookRight: boolean = false;
    LookLeft: boolean = false;
    LookTimeTillReturn: number = 0;
    LookCurrentAngle: number = 0;

    hints: boolean[] = [];

    bankBalance: number = 0;
    bankDebt: number = 0;
    bankDebtTimer: number = 0;
    bankDebtPayment: number = 0;
    bankDebtsUnpaid: number = 0;
    bankMaxDebtsUpaid: number = 0;
    bankDebtPenalty: number = 0;
    bankDeductJob: boolean = false;
    LoanPopupValue: number = 0;
    bankDailyDeposit: number = 0;
    bankDailyWithdraw: number = 0;

    bankPenaltyData: {timer: number, condition: number, totalTime: number}[] = [];

    RGBcolor: RGB;

    constructor(index: number) {
        super(index);
    }

    public set gold(amount: number) {
        this.setState(PLAYER_STATE_RESOURCE_GOLD, amount)
    }

    public get gold() {
        return this.getState(PLAYER_STATE_RESOURCE_GOLD)
    }

    public set lumber(amount: number) {
        this.setState(PLAYER_STATE_RESOURCE_LUMBER , amount)
    }

    public get lumber() {
        return this.getState(PLAYER_STATE_RESOURCE_LUMBER)
    }

    public static fromHandle(handle: player): ExtPlayer {
        return ExtPlayers[GetPlayerId(handle)];
    }

    public static fromEnum() {
        return ExtPlayer.fromHandle(GetEnumPlayer());
    }

    public static fromEvent() {
        return ExtPlayer.fromHandle(GetTriggerPlayer());
    }

    public static fromFilter() {
        return ExtPlayer.fromHandle(GetFilterPlayer());
    }

    public static fromIndex(index: number) {
        return this.fromHandle(Player(index));
    }

    public static fromLocal() {
        return this.fromHandle(GetLocalPlayer());
    }

}

export const ExtPlayers: ExtPlayer[] = [];
export const ExtPlayersUsers: ExtPlayer[] = [];

export function SetupExtPlayers() {
    for(let i = 0; i < bj_MAX_PLAYER_SLOTS; i++) {
        ExtPlayers[i] = new ExtPlayer(i);
        for(let l = 0; l < hintsMax; l++) {
            ExtPlayers[i].hints[l] = false;
        }
    }

    new Timer().start(0, false, () => {
    for(let i = 0; i < bj_MAX_PLAYER_SLOTS; i++) {
        let p = ExtPlayers[i];
        if((p.slotState === PLAYER_SLOT_STATE_PLAYING && p.controller === MAP_CONTROL_USER)) {
            ExtPlayersUsers.push(p);
        }
    }});
    
    ExtPlayers[0].RGBcolor = new RGB(255, 3, 3);
    ExtPlayers[1].RGBcolor = new RGB(0,66 ,255 );
    ExtPlayers[2].RGBcolor = new RGB(28 ,230 ,185 );
    ExtPlayers[3].RGBcolor = new RGB(84 ,0 ,129 );
    ExtPlayers[4].RGBcolor = new RGB(255,252 ,0 );
    ExtPlayers[5].RGBcolor = new RGB(254 ,138 ,14 );
    ExtPlayers[6].RGBcolor = new RGB( 32, 192,0 );
    ExtPlayers[7].RGBcolor = new RGB(229 ,91 , 176);
    ExtPlayers[8].RGBcolor = new RGB( 149,150,151 );
    ExtPlayers[9].RGBcolor = new RGB(126,191 ,241 );
    ExtPlayers[10].RGBcolor = new RGB( 16,98 ,70 );
    ExtPlayers[11].RGBcolor = new RGB(78,42,4);
    ExtPlayers[12].RGBcolor = new RGB(155,0,0);
}