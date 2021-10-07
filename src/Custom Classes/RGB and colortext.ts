import {TreeMath} from "Custom Functions/TreeMath";

export class RGB {
    get blue(): number {
        return this._blue;
    }

    set blue(value: number) {
        this._blue = math.floor(TreeMath.Clamp(value, 0, 255));
    }

    get green(): number {
        return this._green;
    }

    set green(value: number) {
        this._green = math.floor(TreeMath.Clamp(value, 0, 255));
    }

    get red(): number {
        return this._red;
    }

    set red(value: number) {
        this._red = math.floor(TreeMath.Clamp(value, 0, 255));
    }

    public copy() {
        return new RGB(this.red, this.blue, this.green);
    }

    public toString(): string {
        return "r: " + this.red + " g: " + this.green + " b: " + this.blue;
    }

    private _red: number = 0;
    private _green: number = 0;
    private _blue: number = 0;

    constructor(red: number, green: number, blue: number) {
        this.red = red;
        this.green = green;
        this.blue = blue;
    }

    public static getFull() {
        return new RGB(255, 255, 255);
    }

    public static get red() {
        return new RGB(255, 0, 0);
    }

    public static get green() {
        return new RGB(0, 255, 0);
    }

    public static get blue() {
        return new RGB(0, 0, 255);
    }

    public static get teal() {
        return new RGB(0, 255, 255);
    }
}

export function RGBTextString(color: RGB, ...input: any[]) {
    let ret = "|cFF" + string.format('%02x', color.red) + string.format('%02x', color.green) + string.format('%02x', color.blue);
    for (let i = 0; i < input.length; i++) {
        ret += tostring(input[i]);
        ret += " ";
    }
    ret += "|r";
    return ret
}

export namespace ColorText {
    export const yellow: string = "|c00FFFF00"
    export const darkYellow: string = "|cffffde00"
    export const orange: string = "|c00FF7F00"
    export const pink: string = "|c00FF9696"
    export const red: string = "|c00FF0000"
    export const darkRed: string = "|c00640000"
    export const lightGreen: string = "|c0096FF96"
    export const green: string = "|c0000FF00"
    export const darkGreen: string = "|c00006400"
    export const lightBlue: string = "|c006969FF"
    export const blue: string = "|c000000FF"
    export const darkBlue: string = "|c00000064"
    export const grey: string = "|c007d7d7d"
    export const black: string = "|c00000000"
    export const violet: string = "|cfff700ff"
    export const purple: string = "|cff6f2583"
    export const teal: string = "|cff1ce6b9"
    export const brown: string = "|cff4a2a04"
    export const lightTeal: string = "|cff00eaff"
    export const lightBrown: string = "|cffa46f33"
}