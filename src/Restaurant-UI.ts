import { Frame, Trigger } from "w3ts";

export class RestaurantUI {

    burgerScreen: Frame
    burgerLowerBread: Frame
    burgerButtonsMainT: Frame[] = []
    burgerScoreText: Frame
    burgerScoreTargetText: Frame
    burgerBoard: Frame
    burgerTimerSeconds: Frame
    burgerTimerMinutes: Frame
    burgerBlackScreen: Frame
    burgerBoardSideItem: Frame
    burgerBoardItemT: Frame[] = []
    burgerArrow: Frame
    burgerBlackScreenScoreTextStatic: Frame
    burgerBlackScreenGoldTextStatic: Frame
    burgerBlackScreenExpTextStatic: Frame
    burgerBlackScreenScoreTextDynamic: Frame
    burgerBlackScreenGoldTextDynamic: Frame
    burgerBlackScreenExpTextDynamic: Frame
 
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
 
 this.burgerScoreText = new Frame("burgerScoreText", this.burgerScreen, 0,0, "TEXT", "") 
 this.burgerScoreText.setAbsPoint(FRAMEPOINT_TOPLEFT, 0.444500, 0.143220) 
 this.burgerScoreText.setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, 0.557600, 0.106300) 
 this.burgerScoreText.text = "|cffFFFFFF0|r" 
 this.burgerScoreText.enabled = false 
 this.burgerScoreText.setScale(3.57) 
 BlzFrameSetTextAlignment(this.burgerScoreText.handle, TEXT_JUSTIFY_TOP, TEXT_JUSTIFY_RIGHT) 
 
 this.burgerScoreTargetText = new Frame("burgerScoreTargetText", this.burgerScreen, 0,0, "TEXT", "") 
 this.burgerScoreTargetText.setAbsPoint(FRAMEPOINT_TOPLEFT, 0.441400, 0.0868400) 
 this.burgerScoreTargetText.setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, 0.554500, 0.0499200) 
 this.burgerScoreTargetText.text = "|cff9492940|r" 
 this.burgerScoreTargetText.enabled = false 
 this.burgerScoreTargetText.setScale(3.57) 
 BlzFrameSetTextAlignment(this.burgerScoreTargetText.handle, TEXT_JUSTIFY_TOP, TEXT_JUSTIFY_RIGHT) 
 
 this.burgerBoard = new Frame("this.burgerBoard", this.burgerScreen, 1, 1, "BACKDROP", "") 
 this.burgerBoard.setAbsPoint(FRAMEPOINT_TOPLEFT, 0.540200, 0.589500) 
 this.burgerBoard.setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, 0.741800, 0.292600) 
 this.burgerBoard.setTexture("burgerBoard.dds", 0, true) 
 
 this.burgerTimerSeconds = new Frame("burgerTimerSeconds", this.burgerScreen, 0,0, "TEXT", "") 
 this.burgerTimerSeconds.setAbsPoint(FRAMEPOINT_TOPLEFT, 0.323900, 0.588100) 
 this.burgerTimerSeconds.setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, 0.393910, 0.518100) 
 this.burgerTimerSeconds.text = "|cffFFFFFF43|r" 
 this.burgerTimerSeconds.enabled = false 
 this.burgerTimerSeconds.setScale(6.14) 
 BlzFrameSetTextAlignment(this.burgerTimerSeconds.handle, TEXT_JUSTIFY_TOP, TEXT_JUSTIFY_LEFT) 
 
 this.burgerTimerMinutes = new Frame("burgerTimerMinutes", this.burgerScreen, 0,0, "TEXT", "") 
 this.burgerTimerMinutes.setAbsPoint(FRAMEPOINT_TOPLEFT, 0.275800, 0.589570) 
 this.burgerTimerMinutes.setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, 0.322730, 0.518800) 
 this.burgerTimerMinutes.text = "|cffFFFFFF4|r" 
 this.burgerTimerMinutes.enabled = false 
 this.burgerTimerMinutes.setScale(6.14) 
 BlzFrameSetTextAlignment(this.burgerTimerMinutes.handle, TEXT_JUSTIFY_TOP, TEXT_JUSTIFY_LEFT) 
 
 this.burgerBlackScreen = new Frame("this.burgerBlackScreen", this.burgerScreen, 1, 1, "BACKDROP", "") 
 this.burgerBlackScreen.setAbsPoint(FRAMEPOINT_TOPLEFT, 0.0398100, 0.592310) 
 this.burgerBlackScreen.setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, 0.761510, 0.0408100) 
 this.burgerBlackScreen.setTexture("burgerBlackScreen.dds", 0, true) 
 
 this.burgerBoardSideItem = new Frame("this.burgerBoardSideItem", this.burgerBoard, 1, 1, "BACKDROP", "") 
 this.burgerBoardSideItem.setAbsPoint(FRAMEPOINT_TOPLEFT, 0.648400, 0.493000) 
 this.burgerBoardSideItem.setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, 0.714560, 0.384500) 
 this.burgerBoardSideItem.setTexture("", 0, true) 
 
 this.burgerBoardItemT[0] = new Frame("this.burgerBoardItemT[0]", this.burgerBoard, 1, 1, "BACKDROP", "") 
 this.burgerBoardItemT[0].setAbsPoint(FRAMEPOINT_TOPLEFT, 0.555300, 0.344620) 
 this.burgerBoardItemT[0].setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, 0.638390, 0.300000) 
 this.burgerBoardItemT[0].setTexture("burgerBreadLowerNoPlate.dds", 0, true) 
 
 this.burgerBoardItemT[2] = new Frame("this.burgerBoardItemT[2]", this.burgerBoard, 1, 1, "BACKDROP", "") 
 this.burgerBoardItemT[2].setAbsPoint(FRAMEPOINT_TOPLEFT, 0.554500, 0.441820) 
 this.burgerBoardItemT[2].setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, 0.637590, 0.397200) 
 this.burgerBoardItemT[2].setTexture("", 0, true) 
 
 this.burgerBoardItemT[5] = new Frame("this.burgerBoardItemT[5]", this.burgerBoard, 1, 1, "BACKDROP", "") 
 this.burgerBoardItemT[5].setAbsPoint(FRAMEPOINT_TOPLEFT, 0.555300, 0.586220) 
 this.burgerBoardItemT[5].setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, 0.638390, 0.541600) 
 this.burgerBoardItemT[5].setTexture("burgerBreadUpper.dds", 0, true) 
 
 this.burgerBoardItemT[1] = new Frame("this.burgerBoardItemT[1]", this.burgerBoard, 1, 1, "BACKDROP", "") 
 this.burgerBoardItemT[1].setAbsPoint(FRAMEPOINT_TOPLEFT, 0.555300, 0.393880) 
 this.burgerBoardItemT[1].setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, 0.638390, 0.348500) 
 this.burgerBoardItemT[1].setTexture("", 0, true) 
 
 this.burgerBoardItemT[3] = new Frame("this.burgerBoardItemT[3]", this.burgerBoard, 1, 1, "BACKDROP", "") 
 this.burgerBoardItemT[3].setAbsPoint(FRAMEPOINT_TOPLEFT, 0.555300, 0.489920) 
 this.burgerBoardItemT[3].setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, 0.638390, 0.445300) 
 this.burgerBoardItemT[3].setTexture("", 0, true) 
 
 this.burgerBoardItemT[4] = new Frame("this.burgerBoardItemT[4]", this.burgerBoard, 1, 1, "BACKDROP", "") 
 this.burgerBoardItemT[4].setAbsPoint(FRAMEPOINT_TOPLEFT, 0.555300, 0.537620) 
 this.burgerBoardItemT[4].setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, 0.638390, 0.493000) 
 this.burgerBoardItemT[4].setTexture("", 0, true) 
 
 this.burgerArrow = new Frame("this.burgerArrow", this.burgerBoard, 1, 1, "BACKDROP", "") 
 this.burgerArrow.setAbsPoint(FRAMEPOINT_TOPLEFT, 0.493000, 0.590480) 
 this.burgerArrow.setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, 0.538390, 0.545100) 
 this.burgerArrow.setTexture("burgerArrow.dds", 0, true) 
 
 this.burgerBlackScreenScoreTextStatic = new Frame("burgerBlackScreenScoreTextStatic", this.burgerBlackScreen, 0,0, "TEXT", "") 
 this.burgerBlackScreenScoreTextStatic.setAbsPoint(FRAMEPOINT_TOPLEFT, 0.156000, 0.426780) 
 this.burgerBlackScreenScoreTextStatic.setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, 0.430700, 0.373700) 
 this.burgerBlackScreenScoreTextStatic.text = "|cff12d1f3SCORE: |r" 
 this.burgerBlackScreenScoreTextStatic.enabled = false 
 this.burgerBlackScreenScoreTextStatic.setScale(4.57) 
 BlzFrameSetTextAlignment(this.burgerBlackScreenScoreTextStatic.handle, TEXT_JUSTIFY_TOP, TEXT_JUSTIFY_LEFT) 
 
 this.burgerBlackScreenGoldTextStatic = new Frame("burgerBlackScreenGoldTextStatic", this.burgerBlackScreen, 0,0, "TEXT", "") 
 this.burgerBlackScreenGoldTextStatic.setAbsPoint(FRAMEPOINT_TOPLEFT, 0.156000, 0.351970) 
 this.burgerBlackScreenGoldTextStatic.setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, 0.429900, 0.301200) 
 this.burgerBlackScreenGoldTextStatic.text = "|cff12d1f3GOLD EARNED:|r" 
 this.burgerBlackScreenGoldTextStatic.enabled = false 
 this.burgerBlackScreenGoldTextStatic.setScale(4.57) 
 BlzFrameSetTextAlignment(this.burgerBlackScreenGoldTextStatic.handle, TEXT_JUSTIFY_TOP, TEXT_JUSTIFY_LEFT) 
 
 this.burgerBlackScreenExpTextStatic = new Frame("burgerBlackScreenExpTextStatic", this.burgerBlackScreen, 0,0, "TEXT", "") 
 this.burgerBlackScreenExpTextStatic.setAbsPoint(FRAMEPOINT_TOPLEFT, 0.156000, 0.283870) 
 this.burgerBlackScreenExpTextStatic.setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, 0.429900, 0.233100) 
 this.burgerBlackScreenExpTextStatic.text = "|cff12d1f3EXP EARNED:|r" 
 this.burgerBlackScreenExpTextStatic.enabled = false 
 this.burgerBlackScreenExpTextStatic.setScale(4.57) 
 BlzFrameSetTextAlignment(this.burgerBlackScreenExpTextStatic.handle, TEXT_JUSTIFY_TOP, TEXT_JUSTIFY_LEFT) 
 
 this.burgerBlackScreenScoreTextDynamic = new Frame("burgerBlackScreenScoreTextDynamic", this.burgerBlackScreen, 0,0, "TEXT", "") 
 this.burgerBlackScreenScoreTextDynamic.setAbsPoint(FRAMEPOINT_TOPLEFT, 0.440600, 0.427380) 
 this.burgerBlackScreenScoreTextDynamic.setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, 0.584500, 0.374300) 
 this.burgerBlackScreenScoreTextDynamic.text = "|cff12d1f399999|r" 
 this.burgerBlackScreenScoreTextDynamic.enabled = false 
 this.burgerBlackScreenScoreTextDynamic.setScale(4.57) 
 BlzFrameSetTextAlignment(this.burgerBlackScreenScoreTextDynamic.handle, TEXT_JUSTIFY_TOP, TEXT_JUSTIFY_LEFT) 
 
 this.burgerBlackScreenGoldTextDynamic = new Frame("burgerBlackScreenGoldTextDynamic", this.burgerBlackScreen, 0,0, "TEXT", "") 
 this.burgerBlackScreenGoldTextDynamic.setAbsPoint(FRAMEPOINT_TOPLEFT, 0.441400, 0.352180) 
 this.burgerBlackScreenGoldTextDynamic.setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, 0.585300, 0.299100) 
 this.burgerBlackScreenGoldTextDynamic.text = "|cff12d1f399999|r" 
 this.burgerBlackScreenGoldTextDynamic.enabled = false 
 this.burgerBlackScreenGoldTextDynamic.setScale(4.57) 
 BlzFrameSetTextAlignment(this.burgerBlackScreenGoldTextDynamic.handle, TEXT_JUSTIFY_TOP, TEXT_JUSTIFY_LEFT) 
 
 this.burgerBlackScreenExpTextDynamic = new Frame("burgerBlackScreenExpTextDynamic", this.burgerBlackScreen, 0,0, "TEXT", "") 
 this.burgerBlackScreenExpTextDynamic.setAbsPoint(FRAMEPOINT_TOPLEFT, 0.443700, 0.284480) 
 this.burgerBlackScreenExpTextDynamic.setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, 0.587600, 0.231400) 
 this.burgerBlackScreenExpTextDynamic.text = "|cff12d1f399999|r" 
 this.burgerBlackScreenExpTextDynamic.enabled = false 
 this.burgerBlackScreenExpTextDynamic.setScale(4.57) 
 BlzFrameSetTextAlignment(this.burgerBlackScreenExpTextDynamic.handle, TEXT_JUSTIFY_TOP, TEXT_JUSTIFY_LEFT) 
 }
 
 }
 
 
 
 
 
 
 
 
 
 
 
 
 