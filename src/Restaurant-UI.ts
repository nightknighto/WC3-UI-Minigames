import { Frame, Trigger } from "w3ts";

export class RestaurantUI {

    burgerScreen: Frame
    burgerLowerBread: Frame
    burgerButtonsMainT: Frame[] = []
    burgerArrow: Frame
 
    constructor() {
       let t: Trigger;
 
 
 
 this.burgerScreen = new Frame("this.burgerScreen", Frame.fromOrigin(ORIGIN_FRAME_GAME_UI, 0), 1, 1, "BACKDROP", "") 
 this.burgerScreen.setAbsPoint(FRAMEPOINT_TOPLEFT, 0.0398100, 0.589140) 
 this.burgerScreen.setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, 0.759910, 0.0422400) 
 this.burgerScreen.setTexture("burgerScreen.dds", 0, true) 
 
 this.burgerLowerBread = new Frame("this.burgerLowerBread", this.burgerScreen, 1, 1, "BACKDROP", "") 
 this.burgerLowerBread.setAbsPoint(FRAMEPOINT_TOPLEFT, 0.0628900, 0.320500) 
 this.burgerLowerBread.setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, 0.324490, 0.220500) 
 this.burgerLowerBread.setTexture("burgerBreadLower.dds", 0, true) 
 
 this.burgerButtonsMainT[0] = new Frame("burgerButtonsMainT[0]", this.burgerScreen, 0,0, "GLUEBUTTON", "") 
 this.burgerButtonsMainT[0].setAbsPoint(FRAMEPOINT_TOPLEFT, 0.0490400, 0.183050) 
 this.burgerButtonsMainT[0].setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, 0.105970, 0.119200) 
 t = new Trigger() 
 t.triggerRegisterFrameEvent(this.burgerButtonsMainT[0], FRAMEEVENT_CONTROL_CLICK) 
 t.addAction( () => {
 this.burgerButtonsMainT[0].enabled = false 
 this.burgerButtonsMainT[0].enabled = true 
 })
 
 this.burgerButtonsMainT[1] = new Frame("burgerButtonsMainT[1]", this.burgerScreen, 0,0, "GLUEBUTTON", "") 
 this.burgerButtonsMainT[1].setAbsPoint(FRAMEPOINT_TOPLEFT, 0.113970, 0.183050) 
 this.burgerButtonsMainT[1].setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, 0.170900, 0.119200) 
 t = new Trigger() 
 t.triggerRegisterFrameEvent(this.burgerButtonsMainT[1], FRAMEEVENT_CONTROL_CLICK) 
 t.addAction( () => {
 this.burgerButtonsMainT[1].enabled = false 
 this.burgerButtonsMainT[1].enabled = true 
 })
 
 this.burgerButtonsMainT[2] = new Frame("burgerButtonsMainT[2]", this.burgerScreen, 0,0, "GLUEBUTTON", "") 
 this.burgerButtonsMainT[2].setAbsPoint(FRAMEPOINT_TOPLEFT, 0.178900, 0.183050) 
 this.burgerButtonsMainT[2].setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, 0.235830, 0.119200) 
 t = new Trigger() 
 t.triggerRegisterFrameEvent(this.burgerButtonsMainT[2], FRAMEEVENT_CONTROL_CLICK) 
 t.addAction( () => {
 this.burgerButtonsMainT[2].enabled = false 
 this.burgerButtonsMainT[2].enabled = true 
 })
 
 this.burgerButtonsMainT[3] = new Frame("burgerButtonsMainT[3]", this.burgerScreen, 0,0, "GLUEBUTTON", "") 
 this.burgerButtonsMainT[3].setAbsPoint(FRAMEPOINT_TOPLEFT, 0.243830, 0.183050) 
 this.burgerButtonsMainT[3].setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, 0.300760, 0.119200) 
 t = new Trigger() 
 t.triggerRegisterFrameEvent(this.burgerButtonsMainT[3], FRAMEEVENT_CONTROL_CLICK) 
 t.addAction( () => {
 this.burgerButtonsMainT[3].enabled = false 
 this.burgerButtonsMainT[3].enabled = true 
 })
 
 this.burgerButtonsMainT[4] = new Frame("burgerButtonsMainT[4]", this.burgerScreen, 0,0, "GLUEBUTTON", "") 
 this.burgerButtonsMainT[4].setAbsPoint(FRAMEPOINT_TOPLEFT, 0.308760, 0.183050) 
 this.burgerButtonsMainT[4].setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, 0.365690, 0.119200) 
 t = new Trigger() 
 t.triggerRegisterFrameEvent(this.burgerButtonsMainT[4], FRAMEEVENT_CONTROL_CLICK) 
 t.addAction( () => {
 this.burgerButtonsMainT[4].enabled = false 
 this.burgerButtonsMainT[4].enabled = true 
 })
 
 this.burgerButtonsMainT[5] = new Frame("burgerButtonsMainT[5]", this.burgerScreen, 0,0, "GLUEBUTTON", "") 
 this.burgerButtonsMainT[5].setAbsPoint(FRAMEPOINT_TOPLEFT, 0.371500, 0.183050) 
 this.burgerButtonsMainT[5].setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, 0.428430, 0.119200) 
 t = new Trigger() 
 t.triggerRegisterFrameEvent(this.burgerButtonsMainT[5], FRAMEEVENT_CONTROL_CLICK) 
 t.addAction( () => {
 this.burgerButtonsMainT[5].enabled = false 
 this.burgerButtonsMainT[5].enabled = true 
 })
 
 this.burgerButtonsMainT[6] = new Frame("burgerButtonsMainT[6]", this.burgerScreen, 0,0, "GLUEBUTTON", "") 
 this.burgerButtonsMainT[6].setAbsPoint(FRAMEPOINT_TOPLEFT, 0.0490400, 0.111200) 
 this.burgerButtonsMainT[6].setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, 0.105970, 0.0473500) 
 t = new Trigger() 
 t.triggerRegisterFrameEvent(this.burgerButtonsMainT[6], FRAMEEVENT_CONTROL_CLICK) 
 t.addAction( () => {
 this.burgerButtonsMainT[6].enabled = false 
 this.burgerButtonsMainT[6].enabled = true 
 })
 
 this.burgerButtonsMainT[7] = new Frame("burgerButtonsMainT[7]", this.burgerScreen, 0,0, "GLUEBUTTON", "") 
 this.burgerButtonsMainT[7].setAbsPoint(FRAMEPOINT_TOPLEFT, 0.113970, 0.111200) 
 this.burgerButtonsMainT[7].setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, 0.170900, 0.0473500) 
 t = new Trigger() 
 t.triggerRegisterFrameEvent(this.burgerButtonsMainT[7], FRAMEEVENT_CONTROL_CLICK) 
 t.addAction( () => {
 this.burgerButtonsMainT[7].enabled = false 
 this.burgerButtonsMainT[7].enabled = true 
 })
 
 this.burgerButtonsMainT[8] = new Frame("burgerButtonsMainT[8]", this.burgerScreen, 0,0, "GLUEBUTTON", "") 
 this.burgerButtonsMainT[8].setAbsPoint(FRAMEPOINT_TOPLEFT, 0.178900, 0.111200) 
 this.burgerButtonsMainT[8].setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, 0.235830, 0.0473500) 
 t = new Trigger() 
 t.triggerRegisterFrameEvent(this.burgerButtonsMainT[8], FRAMEEVENT_CONTROL_CLICK) 
 t.addAction( () => {
 this.burgerButtonsMainT[8].enabled = false 
 this.burgerButtonsMainT[8].enabled = true 
 })
 
 this.burgerButtonsMainT[9] = new Frame("burgerButtonsMainT[9]", this.burgerScreen, 0,0, "GLUEBUTTON", "") 
 this.burgerButtonsMainT[9].setAbsPoint(FRAMEPOINT_TOPLEFT, 0.243830, 0.111200) 
 this.burgerButtonsMainT[9].setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, 0.300760, 0.0473500) 
 t = new Trigger() 
 t.triggerRegisterFrameEvent(this.burgerButtonsMainT[9], FRAMEEVENT_CONTROL_CLICK) 
 t.addAction( () => {
 this.burgerButtonsMainT[9].enabled = false 
 this.burgerButtonsMainT[9].enabled = true 
 })
 
 this.burgerButtonsMainT[10] = new Frame("burgerButtonsMainT[10]", this.burgerScreen, 0,0, "GLUEBUTTON", "") 
 this.burgerButtonsMainT[10].setAbsPoint(FRAMEPOINT_TOPLEFT, 0.308760, 0.111200) 
 this.burgerButtonsMainT[10].setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, 0.365690, 0.0473500) 
 t = new Trigger() 
 t.triggerRegisterFrameEvent(this.burgerButtonsMainT[10], FRAMEEVENT_CONTROL_CLICK) 
 t.addAction( () => {
 this.burgerButtonsMainT[10].enabled = false 
 this.burgerButtonsMainT[10].enabled = true 
 })
 
 this.burgerButtonsMainT[11] = new Frame("burgerButtonsMainT[11]", this.burgerScreen, 0,0, "GLUEBUTTON", "") 
 this.burgerButtonsMainT[11].setAbsPoint(FRAMEPOINT_TOPLEFT, 0.371500, 0.111200) 
 this.burgerButtonsMainT[11].setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, 0.428430, 0.0473500) 
 t = new Trigger() 
 t.triggerRegisterFrameEvent(this.burgerButtonsMainT[11], FRAMEEVENT_CONTROL_CLICK) 
 t.addAction( () => {
 this.burgerButtonsMainT[11].enabled = false 
 this.burgerButtonsMainT[11].enabled = true 
 })
 
 this.burgerArrow = new Frame("this.burgerArrow", this.burgerScreen, 1, 1, "BACKDROP", "") 
 this.burgerArrow.setAbsPoint(FRAMEPOINT_TOPLEFT, 0.493000, 0.417180) 
 this.burgerArrow.setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, 0.538390, 0.371800) 
 this.burgerArrow.setTexture("burgerArrow.dds", 0, true) 
 }
 
 }
 
 
 
 
 