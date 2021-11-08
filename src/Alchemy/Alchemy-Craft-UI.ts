import { Frame, Trigger } from "w3ts"

export class AlchemyCraftScreen {

    alchemCraftScreen: Frame
    alchemCraftButton: Frame
    BackdropalchemCraftButton: Frame 
    alchemRecipeBooks: Frame
    alchemUseButton: Frame
    alchemHomeButton: Frame
    alchemShelfItemT: Frame[] = []
    alchemItemInfo: Frame
    alchemChosenItem: Frame[] = []
    AlchemInfoTitle: Frame
    AlchemInfoTitleOwnedStatic: Frame
    AlchemInfoTitleOwnedDynamic: Frame
    AlchemInfoDesc: Frame
    alchemLoadingBackground: Frame
    alchemShelfItemButtonT: Frame[] = []
    alchemChosenItemButton: Frame[] = []
    alchemLoadingBar: Frame
 
    constructor() {
       let t: Trigger;
 
 BlzHideOriginFrames(true) 
 BlzFrameSetSize(BlzGetFrameByName("ConsoleUIBackdrop",0), 0, 0.0001)
 
 
 this.alchemCraftScreen = new Frame("this.alchemCraftScreen", Frame.fromOrigin(ORIGIN_FRAME_WORLD_FRAME, 0), 1, 1, "BACKDROP", "") 
 this.alchemCraftScreen.setAbsPoint(FRAMEPOINT_TOPLEFT, 0.00110300, 0.550840) 
 this.alchemCraftScreen.setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, 0.801403, 0.0638400) 
 this.alchemCraftScreen.setTexture("alchemCraftScreen.dds", 0, true) 
 
 this.alchemCraftButton = new Frame("ScriptDialogButton", this.alchemCraftScreen, 0, 0) 
 this.alchemCraftButton.setAbsPoint(FRAMEPOINT_TOPLEFT, 0.172600, 0.175220) 
 this.alchemCraftButton.setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, 0.260100, 0.142600) 
 this.BackdropalchemCraftButton = new Frame(" this.BackdropalchemCraftButton ", this.alchemCraftButton, 1, 1, "BACKDROP", "") 
 this.BackdropalchemCraftButton.setAllPoints(this.alchemCraftButton) 
 this.BackdropalchemCraftButton.setTexture("alchemCraftButton.dds", 0, true) 
 t = new Trigger() 
 t.triggerRegisterFrameEvent(this.alchemCraftButton, FRAMEEVENT_CONTROL_CLICK) 
 t.addAction( () => {
 this.alchemCraftButton.enabled = false 
 this.alchemCraftButton.enabled = true 
 })
 
 this.alchemRecipeBooks = new Frame("alchemRecipeBooks", this.alchemCraftScreen, 0,0, "GLUEBUTTON", "") 
 this.alchemRecipeBooks.setAbsPoint(FRAMEPOINT_TOPLEFT, 0.569300, 0.284050) 
 this.alchemRecipeBooks.setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, 0.679000, 0.245600) 
 t = new Trigger() 
 t.triggerRegisterFrameEvent(this.alchemRecipeBooks, FRAMEEVENT_CONTROL_CLICK) 
 t.addAction( () => {
 this.alchemRecipeBooks.enabled = false 
 this.alchemRecipeBooks.enabled = true 
 })
 
 this.alchemUseButton = new Frame("alchemUseButton", this.alchemCraftScreen, 0,0, "GLUEBUTTON", "") 
 this.alchemUseButton.setAbsPoint(FRAMEPOINT_TOPLEFT, 0.545900, 0.335270) 
 this.alchemUseButton.setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, 0.593730, 0.314300) 
 t = new Trigger() 
 t.triggerRegisterFrameEvent(this.alchemUseButton, FRAMEEVENT_CONTROL_CLICK) 
 t.addAction( () => {
 this.alchemUseButton.enabled = false 
 this.alchemUseButton.enabled = true 
 })
 
 this.alchemHomeButton = new Frame("alchemHomeButton", this.alchemCraftScreen, 0,0, "GLUEBUTTON", "") 
 this.alchemHomeButton.setAbsPoint(FRAMEPOINT_TOPLEFT, 0.737100, 0.549710) 
 this.alchemHomeButton.setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, 0.798930, 0.529900) 
 t = new Trigger() 
 t.triggerRegisterFrameEvent(this.alchemHomeButton, FRAMEEVENT_CONTROL_CLICK) 
 t.addAction( () => {
 this.alchemHomeButton.enabled = false 
 this.alchemHomeButton.enabled = true 
 })
 
 this.alchemShelfItemT[0] = new Frame("this.alchemShelfItemT[0]", this.alchemCraftScreen, 1, 1, "BACKDROP", "") 
 this.alchemShelfItemT[0].setAbsPoint(FRAMEPOINT_TOPLEFT, 0.310400, 0.444250) 
 this.alchemShelfItemT[0].setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, 0.346570, 0.405800) 
 this.alchemShelfItemT[0].setTexture("alchemIngEye.dds", 0, true) 
 
 this.alchemShelfItemT[1] = new Frame("this.alchemShelfItemT[1]", this.alchemCraftScreen, 1, 1, "BACKDROP", "") 
 this.alchemShelfItemT[1].setAbsPoint(FRAMEPOINT_TOPLEFT, 0.346570, 0.444250) 
 this.alchemShelfItemT[1].setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, 0.382740, 0.405800) 
 this.alchemShelfItemT[1].setTexture("alchemIngEye.dds", 0, true) 
 
 this.alchemShelfItemT[2] = new Frame("this.alchemShelfItemT[2]", this.alchemCraftScreen, 1, 1, "BACKDROP", "") 
 this.alchemShelfItemT[2].setAbsPoint(FRAMEPOINT_TOPLEFT, 0.382740, 0.444250) 
 this.alchemShelfItemT[2].setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, 0.418910, 0.405800) 
 this.alchemShelfItemT[2].setTexture("alchemIngEye.dds", 0, true) 
 
 this.alchemShelfItemT[3] = new Frame("this.alchemShelfItemT[3]", this.alchemCraftScreen, 1, 1, "BACKDROP", "") 
 this.alchemShelfItemT[3].setAbsPoint(FRAMEPOINT_TOPLEFT, 0.418910, 0.444250) 
 this.alchemShelfItemT[3].setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, 0.455080, 0.405800) 
 this.alchemShelfItemT[3].setTexture("alchemIngEye.dds", 0, true) 
 
 this.alchemShelfItemT[4] = new Frame("this.alchemShelfItemT[4]", this.alchemCraftScreen, 1, 1, "BACKDROP", "") 
 this.alchemShelfItemT[4].setAbsPoint(FRAMEPOINT_TOPLEFT, 0.310400, 0.404800) 
 this.alchemShelfItemT[4].setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, 0.346570, 0.366350) 
 this.alchemShelfItemT[4].setTexture("alchemIngEye.dds", 0, true) 
 
 this.alchemShelfItemT[5] = new Frame("this.alchemShelfItemT[5]", this.alchemCraftScreen, 1, 1, "BACKDROP", "") 
 this.alchemShelfItemT[5].setAbsPoint(FRAMEPOINT_TOPLEFT, 0.346570, 0.404800) 
 this.alchemShelfItemT[5].setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, 0.382740, 0.366350) 
 this.alchemShelfItemT[5].setTexture("alchemIngEye.dds", 0, true) 
 
 this.alchemShelfItemT[6] = new Frame("this.alchemShelfItemT[6]", this.alchemCraftScreen, 1, 1, "BACKDROP", "") 
 this.alchemShelfItemT[6].setAbsPoint(FRAMEPOINT_TOPLEFT, 0.382740, 0.404800) 
 this.alchemShelfItemT[6].setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, 0.418910, 0.366350) 
 this.alchemShelfItemT[6].setTexture("alchemIngEye.dds", 0, true) 
 
 this.alchemShelfItemT[7] = new Frame("this.alchemShelfItemT[7]", this.alchemCraftScreen, 1, 1, "BACKDROP", "") 
 this.alchemShelfItemT[7].setAbsPoint(FRAMEPOINT_TOPLEFT, 0.418910, 0.404800) 
 this.alchemShelfItemT[7].setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, 0.455080, 0.366350) 
 this.alchemShelfItemT[7].setTexture("alchemIngEye.dds", 0, true) 
 
 this.alchemShelfItemT[8] = new Frame("this.alchemShelfItemT[8]", this.alchemCraftScreen, 1, 1, "BACKDROP", "") 
 this.alchemShelfItemT[8].setAbsPoint(FRAMEPOINT_TOPLEFT, 0.310400, 0.365350) 
 this.alchemShelfItemT[8].setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, 0.346570, 0.326900) 
 this.alchemShelfItemT[8].setTexture("alchemIngEye.dds", 0, true) 
 
 this.alchemShelfItemT[9] = new Frame("this.alchemShelfItemT[9]", this.alchemCraftScreen, 1, 1, "BACKDROP", "") 
 this.alchemShelfItemT[9].setAbsPoint(FRAMEPOINT_TOPLEFT, 0.346570, 0.365350) 
 this.alchemShelfItemT[9].setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, 0.382740, 0.326900) 
 this.alchemShelfItemT[9].setTexture("alchemIngEye.dds", 0, true) 
 
 this.alchemShelfItemT[10] = new Frame("this.alchemShelfItemT[10]", this.alchemCraftScreen, 1, 1, "BACKDROP", "") 
 this.alchemShelfItemT[10].setAbsPoint(FRAMEPOINT_TOPLEFT, 0.382740, 0.365350) 
 this.alchemShelfItemT[10].setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, 0.418910, 0.326900) 
 this.alchemShelfItemT[10].setTexture("alchemIngEye.dds", 0, true) 
 
 this.alchemShelfItemT[11] = new Frame("this.alchemShelfItemT[11]", this.alchemCraftScreen, 1, 1, "BACKDROP", "") 
 this.alchemShelfItemT[11].setAbsPoint(FRAMEPOINT_TOPLEFT, 0.418910, 0.365350) 
 this.alchemShelfItemT[11].setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, 0.455080, 0.326900) 
 this.alchemShelfItemT[11].setTexture("alchemIngEye.dds", 0, true) 
 
 this.alchemShelfItemT[12] = new Frame("this.alchemShelfItemT[12]", this.alchemCraftScreen, 1, 1, "BACKDROP", "") 
 this.alchemShelfItemT[12].setAbsPoint(FRAMEPOINT_TOPLEFT, 0.310400, 0.325900) 
 this.alchemShelfItemT[12].setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, 0.346570, 0.287450) 
 this.alchemShelfItemT[12].setTexture("alchemIngEye.dds", 0, true) 
 
 this.alchemShelfItemT[13] = new Frame("this.alchemShelfItemT[13]", this.alchemCraftScreen, 1, 1, "BACKDROP", "") 
 this.alchemShelfItemT[13].setAbsPoint(FRAMEPOINT_TOPLEFT, 0.346570, 0.325900) 
 this.alchemShelfItemT[13].setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, 0.382740, 0.287450) 
 this.alchemShelfItemT[13].setTexture("alchemIngEye.dds", 0, true) 
 
 this.alchemShelfItemT[14] = new Frame("this.alchemShelfItemT[14]", this.alchemCraftScreen, 1, 1, "BACKDROP", "") 
 this.alchemShelfItemT[14].setAbsPoint(FRAMEPOINT_TOPLEFT, 0.382740, 0.325900) 
 this.alchemShelfItemT[14].setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, 0.418910, 0.287450) 
 this.alchemShelfItemT[14].setTexture("alchemIngEye.dds", 0, true) 
 
 this.alchemShelfItemT[15] = new Frame("this.alchemShelfItemT[15]", this.alchemCraftScreen, 1, 1, "BACKDROP", "") 
 this.alchemShelfItemT[15].setAbsPoint(FRAMEPOINT_TOPLEFT, 0.418910, 0.325900) 
 this.alchemShelfItemT[15].setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, 0.455080, 0.287450) 
 this.alchemShelfItemT[15].setTexture("alchemIngEye.dds", 0, true) 
 
 this.alchemShelfItemT[16] = new Frame("this.alchemShelfItemT[16]", this.alchemCraftScreen, 1, 1, "BACKDROP", "") 
 this.alchemShelfItemT[16].setAbsPoint(FRAMEPOINT_TOPLEFT, 0.310400, 0.286450) 
 this.alchemShelfItemT[16].setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, 0.346570, 0.248000) 
 this.alchemShelfItemT[16].setTexture("alchemIngEye.dds", 0, true) 
 
 this.alchemShelfItemT[17] = new Frame("this.alchemShelfItemT[17]", this.alchemCraftScreen, 1, 1, "BACKDROP", "") 
 this.alchemShelfItemT[17].setAbsPoint(FRAMEPOINT_TOPLEFT, 0.346570, 0.286450) 
 this.alchemShelfItemT[17].setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, 0.382740, 0.248000) 
 this.alchemShelfItemT[17].setTexture("alchemIngEye.dds", 0, true) 
 
 this.alchemShelfItemT[18] = new Frame("this.alchemShelfItemT[18]", this.alchemCraftScreen, 1, 1, "BACKDROP", "") 
 this.alchemShelfItemT[18].setAbsPoint(FRAMEPOINT_TOPLEFT, 0.382740, 0.286450) 
 this.alchemShelfItemT[18].setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, 0.418910, 0.248000) 
 this.alchemShelfItemT[18].setTexture("alchemIngEye.dds", 0, true) 
 
 this.alchemShelfItemT[19] = new Frame("this.alchemShelfItemT[19]", this.alchemCraftScreen, 1, 1, "BACKDROP", "") 
 this.alchemShelfItemT[19].setAbsPoint(FRAMEPOINT_TOPLEFT, 0.418910, 0.286450) 
 this.alchemShelfItemT[19].setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, 0.455080, 0.248000) 
 this.alchemShelfItemT[19].setTexture("alchemIngEye.dds", 0, true) 
 
 this.alchemShelfItemT[20] = new Frame("this.alchemShelfItemT[20]", this.alchemCraftScreen, 1, 1, "BACKDROP", "") 
 this.alchemShelfItemT[20].setAbsPoint(FRAMEPOINT_TOPLEFT, 0.310400, 0.247000) 
 this.alchemShelfItemT[20].setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, 0.346570, 0.208550) 
 this.alchemShelfItemT[20].setTexture("alchemIngEye.dds", 0, true) 
 
 this.alchemShelfItemT[21] = new Frame("this.alchemShelfItemT[21]", this.alchemCraftScreen, 1, 1, "BACKDROP", "") 
 this.alchemShelfItemT[21].setAbsPoint(FRAMEPOINT_TOPLEFT, 0.346570, 0.247000) 
 this.alchemShelfItemT[21].setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, 0.382740, 0.208550) 
 this.alchemShelfItemT[21].setTexture("alchemIngEye.dds", 0, true) 
 
 this.alchemShelfItemT[22] = new Frame("this.alchemShelfItemT[22]", this.alchemCraftScreen, 1, 1, "BACKDROP", "") 
 this.alchemShelfItemT[22].setAbsPoint(FRAMEPOINT_TOPLEFT, 0.382740, 0.247000) 
 this.alchemShelfItemT[22].setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, 0.418910, 0.208550) 
 this.alchemShelfItemT[22].setTexture("alchemIngEye.dds", 0, true) 
 
 this.alchemShelfItemT[23] = new Frame("this.alchemShelfItemT[23]", this.alchemCraftScreen, 1, 1, "BACKDROP", "") 
 this.alchemShelfItemT[23].setAbsPoint(FRAMEPOINT_TOPLEFT, 0.418910, 0.247000) 
 this.alchemShelfItemT[23].setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, 0.455080, 0.208550) 
 this.alchemShelfItemT[23].setTexture("alchemIngEye.dds", 0, true) 
 
 this.alchemShelfItemT[24] = new Frame("this.alchemShelfItemT[24]", this.alchemCraftScreen, 1, 1, "BACKDROP", "") 
 this.alchemShelfItemT[24].setAbsPoint(FRAMEPOINT_TOPLEFT, 0.310400, 0.207550) 
 this.alchemShelfItemT[24].setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, 0.346570, 0.169100) 
 this.alchemShelfItemT[24].setTexture("alchemIngEye.dds", 0, true) 
 
 this.alchemShelfItemT[25] = new Frame("this.alchemShelfItemT[25]", this.alchemCraftScreen, 1, 1, "BACKDROP", "") 
 this.alchemShelfItemT[25].setAbsPoint(FRAMEPOINT_TOPLEFT, 0.346570, 0.207550) 
 this.alchemShelfItemT[25].setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, 0.382740, 0.169100) 
 this.alchemShelfItemT[25].setTexture("alchemIngEye.dds", 0, true) 
 
 this.alchemShelfItemT[26] = new Frame("this.alchemShelfItemT[26]", this.alchemCraftScreen, 1, 1, "BACKDROP", "") 
 this.alchemShelfItemT[26].setAbsPoint(FRAMEPOINT_TOPLEFT, 0.382740, 0.207550) 
 this.alchemShelfItemT[26].setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, 0.418910, 0.169100) 
 this.alchemShelfItemT[26].setTexture("alchemIngEye.dds", 0, true) 
 
 this.alchemShelfItemT[27] = new Frame("this.alchemShelfItemT[27]", this.alchemCraftScreen, 1, 1, "BACKDROP", "") 
 this.alchemShelfItemT[27].setAbsPoint(FRAMEPOINT_TOPLEFT, 0.418910, 0.207550) 
 this.alchemShelfItemT[27].setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, 0.455080, 0.169100) 
 this.alchemShelfItemT[27].setTexture("alchemIngEye.dds", 0, true) 
 
 this.alchemItemInfo = new Frame("this.alchemItemInfo", this.alchemCraftScreen, 1, 1, "BACKDROP", "") 
 this.alchemItemInfo.setAbsPoint(FRAMEPOINT_TOPLEFT, 0.544800, 0.394730) 
 this.alchemItemInfo.setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, 0.593800, 0.345800) 
 this.alchemItemInfo.setTexture("alchemIngClaw.dds", 0, true) 
 
 this.alchemChosenItem[0] = new Frame("this.alchemChosenItem[0]", this.alchemCraftScreen, 1, 1, "BACKDROP", "") 
 this.alchemChosenItem[0].setAbsPoint(FRAMEPOINT_TOPLEFT, 0.191300, 0.417830) 
 this.alchemChosenItem[0].setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, 0.240300, 0.368900) 
 this.alchemChosenItem[0].setTexture("alchemIngClaw.dds", 0, true) 
 
 this.alchemChosenItem[1] = new Frame("this.alchemChosenItem[1]", this.alchemCraftScreen, 1, 1, "BACKDROP", "") 
 this.alchemChosenItem[1].setAbsPoint(FRAMEPOINT_TOPLEFT, 0.191100, 0.335130) 
 this.alchemChosenItem[1].setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, 0.240100, 0.286200) 
 this.alchemChosenItem[1].setTexture("alchemIngClaw.dds", 0, true) 
 
 this.alchemChosenItem[2] = new Frame("this.alchemChosenItem[2]", this.alchemCraftScreen, 1, 1, "BACKDROP", "") 
 this.alchemChosenItem[2].setAbsPoint(FRAMEPOINT_TOPLEFT, 0.190400, 0.253730) 
 this.alchemChosenItem[2].setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, 0.239400, 0.204800) 
 this.alchemChosenItem[2].setTexture("alchemIngClaw.dds", 0, true) 
 
 this.AlchemInfoTitle = new Frame("AlchemInfoTitle", this.alchemCraftScreen, 0,0, "TEXT", "") 
 this.AlchemInfoTitle.setAbsPoint(FRAMEPOINT_TOPLEFT, 0.608900, 0.406370) 
 this.AlchemInfoTitle.setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, 0.712700, 0.385400) 
 this.AlchemInfoTitle.text = "|cff462901Spider Fang|r" 
 this.AlchemInfoTitle.enabled = false 
 this.AlchemInfoTitle.setScale(1.57) 
 BlzFrameSetTextAlignment(this.AlchemInfoTitle.handle, TEXT_JUSTIFY_TOP, TEXT_JUSTIFY_LEFT) 
 
 this.AlchemInfoTitleOwnedStatic = new Frame("AlchemInfoTitleOwnedStatic", this.alchemCraftScreen, 0,0, "TEXT", "") 
 this.AlchemInfoTitleOwnedStatic.setAbsPoint(FRAMEPOINT_TOPLEFT, 0.608900, 0.381870) 
 this.AlchemInfoTitleOwnedStatic.setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, 0.656730, 0.360900) 
 this.AlchemInfoTitleOwnedStatic.text = "|cff462901Owned:|r" 
 this.AlchemInfoTitleOwnedStatic.enabled = false 
 this.AlchemInfoTitleOwnedStatic.setScale(1.14) 
 BlzFrameSetTextAlignment(this.AlchemInfoTitleOwnedStatic.handle, TEXT_JUSTIFY_TOP, TEXT_JUSTIFY_LEFT) 
 
 this.AlchemInfoTitleOwnedDynamic = new Frame("AlchemInfoTitleOwnedDynamic", this.alchemCraftScreen, 0,0, "TEXT", "") 
 this.AlchemInfoTitleOwnedDynamic.setAbsPoint(FRAMEPOINT_TOPLEFT, 0.656800, 0.381870) 
 this.AlchemInfoTitleOwnedDynamic.setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, 0.704630, 0.360900) 
 this.AlchemInfoTitleOwnedDynamic.text = "|cff462901999|r" 
 this.AlchemInfoTitleOwnedDynamic.enabled = false 
 this.AlchemInfoTitleOwnedDynamic.setScale(1.14) 
 BlzFrameSetTextAlignment(this.AlchemInfoTitleOwnedDynamic.handle, TEXT_JUSTIFY_TOP, TEXT_JUSTIFY_LEFT) 
 
 this.AlchemInfoDesc = new Frame("AlchemInfoDesc", this.alchemCraftScreen, 0,0, "TEXT", "") 
 this.AlchemInfoDesc.setAbsPoint(FRAMEPOINT_TOPLEFT, 0.610100, 0.364440) 
 this.AlchemInfoDesc.setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, 0.711600, 0.319000) 
 this.AlchemInfoDesc.text = "|cff462901Has a lot of healing properties. Used for making soup|r" 
 this.AlchemInfoDesc.enabled = false 
 this.AlchemInfoDesc.setScale(1.14) 
 BlzFrameSetTextAlignment(this.AlchemInfoDesc.handle, TEXT_JUSTIFY_TOP, TEXT_JUSTIFY_LEFT) 
 
 this.alchemLoadingBackground = new Frame("this.alchemLoadingBackground", this.alchemCraftScreen, 1, 1, "BACKDROP", "") 
 this.alchemLoadingBackground.setAbsPoint(FRAMEPOINT_TOPLEFT, 0.305600, 0.131420) 
 this.alchemLoadingBackground.setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, 0.489900, 0.0813200) 
 this.alchemLoadingBackground.setTexture("alchemLoadEmpty.dds", 0, true) 
 
 this.alchemShelfItemButtonT[0] = new Frame("alchemShelfItemButtonT[0]", this.alchemShelfItemT[0], 0,0, "GLUEBUTTON", "") 
 this.alchemShelfItemButtonT[0].setAbsPoint(FRAMEPOINT_TOPLEFT, 0.311400, 0.447050) 
 this.alchemShelfItemButtonT[0].setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, 0.347570, 0.408600) 
 t = new Trigger() 
 t.triggerRegisterFrameEvent(this.alchemShelfItemButtonT[0], FRAMEEVENT_CONTROL_CLICK) 
 t.addAction( () => {
 this.alchemShelfItemButtonT[0].enabled = false 
 this.alchemShelfItemButtonT[0].enabled = true 
 })
 
 this.alchemShelfItemButtonT[1] = new Frame("alchemShelfItemButtonT[1]", this.alchemShelfItemT[1], 0,0, "GLUEBUTTON", "") 
 this.alchemShelfItemButtonT[1].setAbsPoint(FRAMEPOINT_TOPLEFT, 0.347570, 0.447050) 
 this.alchemShelfItemButtonT[1].setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, 0.383740, 0.408600) 
 t = new Trigger() 
 t.triggerRegisterFrameEvent(this.alchemShelfItemButtonT[1], FRAMEEVENT_CONTROL_CLICK) 
 t.addAction( () => {
 this.alchemShelfItemButtonT[1].enabled = false 
 this.alchemShelfItemButtonT[1].enabled = true 
 })
 
 this.alchemShelfItemButtonT[2] = new Frame("alchemShelfItemButtonT[2]", this.alchemShelfItemT[2], 0,0, "GLUEBUTTON", "") 
 this.alchemShelfItemButtonT[2].setAbsPoint(FRAMEPOINT_TOPLEFT, 0.383740, 0.447050) 
 this.alchemShelfItemButtonT[2].setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, 0.419910, 0.408600) 
 t = new Trigger() 
 t.triggerRegisterFrameEvent(this.alchemShelfItemButtonT[2], FRAMEEVENT_CONTROL_CLICK) 
 t.addAction( () => {
 this.alchemShelfItemButtonT[2].enabled = false 
 this.alchemShelfItemButtonT[2].enabled = true 
 })
 
 this.alchemShelfItemButtonT[3] = new Frame("alchemShelfItemButtonT[3]", this.alchemShelfItemT[3], 0,0, "GLUEBUTTON", "") 
 this.alchemShelfItemButtonT[3].setAbsPoint(FRAMEPOINT_TOPLEFT, 0.419910, 0.447050) 
 this.alchemShelfItemButtonT[3].setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, 0.456080, 0.408600) 
 t = new Trigger() 
 t.triggerRegisterFrameEvent(this.alchemShelfItemButtonT[3], FRAMEEVENT_CONTROL_CLICK) 
 t.addAction( () => {
 this.alchemShelfItemButtonT[3].enabled = false 
 this.alchemShelfItemButtonT[3].enabled = true 
 })
 
 this.alchemShelfItemButtonT[4] = new Frame("alchemShelfItemButtonT[4]", this.alchemShelfItemT[4], 0,0, "GLUEBUTTON", "") 
 this.alchemShelfItemButtonT[4].setAbsPoint(FRAMEPOINT_TOPLEFT, 0.311400, 0.407600) 
 this.alchemShelfItemButtonT[4].setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, 0.347570, 0.369150) 
 t = new Trigger() 
 t.triggerRegisterFrameEvent(this.alchemShelfItemButtonT[4], FRAMEEVENT_CONTROL_CLICK) 
 t.addAction( () => {
 this.alchemShelfItemButtonT[4].enabled = false 
 this.alchemShelfItemButtonT[4].enabled = true 
 })
 
 this.alchemShelfItemButtonT[5] = new Frame("alchemShelfItemButtonT[5]", this.alchemShelfItemT[5], 0,0, "GLUEBUTTON", "") 
 this.alchemShelfItemButtonT[5].setAbsPoint(FRAMEPOINT_TOPLEFT, 0.347570, 0.407600) 
 this.alchemShelfItemButtonT[5].setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, 0.383740, 0.369150) 
 t = new Trigger() 
 t.triggerRegisterFrameEvent(this.alchemShelfItemButtonT[5], FRAMEEVENT_CONTROL_CLICK) 
 t.addAction( () => {
 this.alchemShelfItemButtonT[5].enabled = false 
 this.alchemShelfItemButtonT[5].enabled = true 
 })
 
 this.alchemShelfItemButtonT[6] = new Frame("alchemShelfItemButtonT[6]", this.alchemShelfItemT[6], 0,0, "GLUEBUTTON", "") 
 this.alchemShelfItemButtonT[6].setAbsPoint(FRAMEPOINT_TOPLEFT, 0.383740, 0.407600) 
 this.alchemShelfItemButtonT[6].setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, 0.419910, 0.369150) 
 t = new Trigger() 
 t.triggerRegisterFrameEvent(this.alchemShelfItemButtonT[6], FRAMEEVENT_CONTROL_CLICK) 
 t.addAction( () => {
 this.alchemShelfItemButtonT[6].enabled = false 
 this.alchemShelfItemButtonT[6].enabled = true 
 })
 
 this.alchemShelfItemButtonT[7] = new Frame("alchemShelfItemButtonT[7]", this.alchemShelfItemT[7], 0,0, "GLUEBUTTON", "") 
 this.alchemShelfItemButtonT[7].setAbsPoint(FRAMEPOINT_TOPLEFT, 0.419910, 0.407600) 
 this.alchemShelfItemButtonT[7].setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, 0.456080, 0.369150) 
 t = new Trigger() 
 t.triggerRegisterFrameEvent(this.alchemShelfItemButtonT[7], FRAMEEVENT_CONTROL_CLICK) 
 t.addAction( () => {
 this.alchemShelfItemButtonT[7].enabled = false 
 this.alchemShelfItemButtonT[7].enabled = true 
 })
 
 this.alchemShelfItemButtonT[8] = new Frame("alchemShelfItemButtonT[8]", this.alchemShelfItemT[8], 0,0, "GLUEBUTTON", "") 
 this.alchemShelfItemButtonT[8].setAbsPoint(FRAMEPOINT_TOPLEFT, 0.311400, 0.368150) 
 this.alchemShelfItemButtonT[8].setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, 0.347570, 0.329700) 
 t = new Trigger() 
 t.triggerRegisterFrameEvent(this.alchemShelfItemButtonT[8], FRAMEEVENT_CONTROL_CLICK) 
 t.addAction( () => {
 this.alchemShelfItemButtonT[8].enabled = false 
 this.alchemShelfItemButtonT[8].enabled = true 
 })
 
 this.alchemShelfItemButtonT[9] = new Frame("alchemShelfItemButtonT[9]", this.alchemShelfItemT[9], 0,0, "GLUEBUTTON", "") 
 this.alchemShelfItemButtonT[9].setAbsPoint(FRAMEPOINT_TOPLEFT, 0.347570, 0.368150) 
 this.alchemShelfItemButtonT[9].setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, 0.383740, 0.329700) 
 t = new Trigger() 
 t.triggerRegisterFrameEvent(this.alchemShelfItemButtonT[9], FRAMEEVENT_CONTROL_CLICK) 
 t.addAction( () => {
 this.alchemShelfItemButtonT[9].enabled = false 
 this.alchemShelfItemButtonT[9].enabled = true 
 })
 
 this.alchemShelfItemButtonT[10] = new Frame("alchemShelfItemButtonT[10]", this.alchemShelfItemT[10], 0,0, "GLUEBUTTON", "") 
 this.alchemShelfItemButtonT[10].setAbsPoint(FRAMEPOINT_TOPLEFT, 0.383740, 0.368150) 
 this.alchemShelfItemButtonT[10].setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, 0.419910, 0.329700) 
 t = new Trigger() 
 t.triggerRegisterFrameEvent(this.alchemShelfItemButtonT[10], FRAMEEVENT_CONTROL_CLICK) 
 t.addAction( () => {
 this.alchemShelfItemButtonT[10].enabled = false 
 this.alchemShelfItemButtonT[10].enabled = true 
 })
 
 this.alchemShelfItemButtonT[11] = new Frame("alchemShelfItemButtonT[11]", this.alchemShelfItemT[11], 0,0, "GLUEBUTTON", "") 
 this.alchemShelfItemButtonT[11].setAbsPoint(FRAMEPOINT_TOPLEFT, 0.419910, 0.368150) 
 this.alchemShelfItemButtonT[11].setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, 0.456080, 0.329700) 
 t = new Trigger() 
 t.triggerRegisterFrameEvent(this.alchemShelfItemButtonT[11], FRAMEEVENT_CONTROL_CLICK) 
 t.addAction( () => {
 this.alchemShelfItemButtonT[11].enabled = false 
 this.alchemShelfItemButtonT[11].enabled = true 
 })
 
 this.alchemShelfItemButtonT[12] = new Frame("alchemShelfItemButtonT[12]", this.alchemShelfItemT[12], 0,0, "GLUEBUTTON", "") 
 this.alchemShelfItemButtonT[12].setAbsPoint(FRAMEPOINT_TOPLEFT, 0.311400, 0.328700) 
 this.alchemShelfItemButtonT[12].setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, 0.347570, 0.290250) 
 t = new Trigger() 
 t.triggerRegisterFrameEvent(this.alchemShelfItemButtonT[12], FRAMEEVENT_CONTROL_CLICK) 
 t.addAction( () => {
 this.alchemShelfItemButtonT[12].enabled = false 
 this.alchemShelfItemButtonT[12].enabled = true 
 })
 
 this.alchemShelfItemButtonT[13] = new Frame("alchemShelfItemButtonT[13]", this.alchemShelfItemT[13], 0,0, "GLUEBUTTON", "") 
 this.alchemShelfItemButtonT[13].setAbsPoint(FRAMEPOINT_TOPLEFT, 0.347570, 0.328700) 
 this.alchemShelfItemButtonT[13].setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, 0.383740, 0.290250) 
 t = new Trigger() 
 t.triggerRegisterFrameEvent(this.alchemShelfItemButtonT[13], FRAMEEVENT_CONTROL_CLICK) 
 t.addAction( () => {
 this.alchemShelfItemButtonT[13].enabled = false 
 this.alchemShelfItemButtonT[13].enabled = true 
 })
 
 this.alchemShelfItemButtonT[14] = new Frame("alchemShelfItemButtonT[14]", this.alchemShelfItemT[14], 0,0, "GLUEBUTTON", "") 
 this.alchemShelfItemButtonT[14].setAbsPoint(FRAMEPOINT_TOPLEFT, 0.383740, 0.328700) 
 this.alchemShelfItemButtonT[14].setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, 0.419910, 0.290250) 
 t = new Trigger() 
 t.triggerRegisterFrameEvent(this.alchemShelfItemButtonT[14], FRAMEEVENT_CONTROL_CLICK) 
 t.addAction( () => {
 this.alchemShelfItemButtonT[14].enabled = false 
 this.alchemShelfItemButtonT[14].enabled = true 
 })
 
 this.alchemShelfItemButtonT[15] = new Frame("alchemShelfItemButtonT[15]", this.alchemShelfItemT[15], 0,0, "GLUEBUTTON", "") 
 this.alchemShelfItemButtonT[15].setAbsPoint(FRAMEPOINT_TOPLEFT, 0.419910, 0.328700) 
 this.alchemShelfItemButtonT[15].setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, 0.456080, 0.290250) 
 t = new Trigger() 
 t.triggerRegisterFrameEvent(this.alchemShelfItemButtonT[15], FRAMEEVENT_CONTROL_CLICK) 
 t.addAction( () => {
 this.alchemShelfItemButtonT[15].enabled = false 
 this.alchemShelfItemButtonT[15].enabled = true 
 })
 
 this.alchemShelfItemButtonT[16] = new Frame("alchemShelfItemButtonT[16]", this.alchemShelfItemT[16], 0,0, "GLUEBUTTON", "") 
 this.alchemShelfItemButtonT[16].setAbsPoint(FRAMEPOINT_TOPLEFT, 0.311400, 0.289250) 
 this.alchemShelfItemButtonT[16].setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, 0.347570, 0.250800) 
 t = new Trigger() 
 t.triggerRegisterFrameEvent(this.alchemShelfItemButtonT[16], FRAMEEVENT_CONTROL_CLICK) 
 t.addAction( () => {
 this.alchemShelfItemButtonT[16].enabled = false 
 this.alchemShelfItemButtonT[16].enabled = true 
 })
 
 this.alchemShelfItemButtonT[17] = new Frame("alchemShelfItemButtonT[17]", this.alchemShelfItemT[17], 0,0, "GLUEBUTTON", "") 
 this.alchemShelfItemButtonT[17].setAbsPoint(FRAMEPOINT_TOPLEFT, 0.347570, 0.289250) 
 this.alchemShelfItemButtonT[17].setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, 0.383740, 0.250800) 
 t = new Trigger() 
 t.triggerRegisterFrameEvent(this.alchemShelfItemButtonT[17], FRAMEEVENT_CONTROL_CLICK) 
 t.addAction( () => {
 this.alchemShelfItemButtonT[17].enabled = false 
 this.alchemShelfItemButtonT[17].enabled = true 
 })
 
 this.alchemShelfItemButtonT[18] = new Frame("alchemShelfItemButtonT[18]", this.alchemShelfItemT[18], 0,0, "GLUEBUTTON", "") 
 this.alchemShelfItemButtonT[18].setAbsPoint(FRAMEPOINT_TOPLEFT, 0.383740, 0.289250) 
 this.alchemShelfItemButtonT[18].setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, 0.419910, 0.250800) 
 t = new Trigger() 
 t.triggerRegisterFrameEvent(this.alchemShelfItemButtonT[18], FRAMEEVENT_CONTROL_CLICK) 
 t.addAction( () => {
 this.alchemShelfItemButtonT[18].enabled = false 
 this.alchemShelfItemButtonT[18].enabled = true 
 })
 
 this.alchemShelfItemButtonT[19] = new Frame("alchemShelfItemButtonT[19]", this.alchemShelfItemT[19], 0,0, "GLUEBUTTON", "") 
 this.alchemShelfItemButtonT[19].setAbsPoint(FRAMEPOINT_TOPLEFT, 0.419910, 0.289250) 
 this.alchemShelfItemButtonT[19].setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, 0.456080, 0.250800) 
 t = new Trigger() 
 t.triggerRegisterFrameEvent(this.alchemShelfItemButtonT[19], FRAMEEVENT_CONTROL_CLICK) 
 t.addAction( () => {
 this.alchemShelfItemButtonT[19].enabled = false 
 this.alchemShelfItemButtonT[19].enabled = true 
 })
 
 this.alchemShelfItemButtonT[20] = new Frame("alchemShelfItemButtonT[20]", this.alchemShelfItemT[20], 0,0, "GLUEBUTTON", "") 
 this.alchemShelfItemButtonT[20].setAbsPoint(FRAMEPOINT_TOPLEFT, 0.311400, 0.249800) 
 this.alchemShelfItemButtonT[20].setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, 0.347570, 0.211350) 
 t = new Trigger() 
 t.triggerRegisterFrameEvent(this.alchemShelfItemButtonT[20], FRAMEEVENT_CONTROL_CLICK) 
 t.addAction( () => {
 this.alchemShelfItemButtonT[20].enabled = false 
 this.alchemShelfItemButtonT[20].enabled = true 
 })
 
 this.alchemShelfItemButtonT[21] = new Frame("alchemShelfItemButtonT[21]", this.alchemShelfItemT[21], 0,0, "GLUEBUTTON", "") 
 this.alchemShelfItemButtonT[21].setAbsPoint(FRAMEPOINT_TOPLEFT, 0.347570, 0.249800) 
 this.alchemShelfItemButtonT[21].setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, 0.383740, 0.211350) 
 t = new Trigger() 
 t.triggerRegisterFrameEvent(this.alchemShelfItemButtonT[21], FRAMEEVENT_CONTROL_CLICK) 
 t.addAction( () => {
 this.alchemShelfItemButtonT[21].enabled = false 
 this.alchemShelfItemButtonT[21].enabled = true 
 })
 
 this.alchemShelfItemButtonT[22] = new Frame("alchemShelfItemButtonT[22]", this.alchemShelfItemT[22], 0,0, "GLUEBUTTON", "") 
 this.alchemShelfItemButtonT[22].setAbsPoint(FRAMEPOINT_TOPLEFT, 0.383740, 0.249800) 
 this.alchemShelfItemButtonT[22].setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, 0.419910, 0.211350) 
 t = new Trigger() 
 t.triggerRegisterFrameEvent(this.alchemShelfItemButtonT[22], FRAMEEVENT_CONTROL_CLICK) 
 t.addAction( () => {
 this.alchemShelfItemButtonT[22].enabled = false 
 this.alchemShelfItemButtonT[22].enabled = true 
 })
 
 this.alchemShelfItemButtonT[23] = new Frame("alchemShelfItemButtonT[23]", this.alchemShelfItemT[23], 0,0, "GLUEBUTTON", "") 
 this.alchemShelfItemButtonT[23].setAbsPoint(FRAMEPOINT_TOPLEFT, 0.419910, 0.249800) 
 this.alchemShelfItemButtonT[23].setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, 0.456080, 0.211350) 
 t = new Trigger() 
 t.triggerRegisterFrameEvent(this.alchemShelfItemButtonT[23], FRAMEEVENT_CONTROL_CLICK) 
 t.addAction( () => {
 this.alchemShelfItemButtonT[23].enabled = false 
 this.alchemShelfItemButtonT[23].enabled = true 
 })
 
 this.alchemShelfItemButtonT[24] = new Frame("alchemShelfItemButtonT[24]", this.alchemShelfItemT[24], 0,0, "GLUEBUTTON", "") 
 this.alchemShelfItemButtonT[24].setAbsPoint(FRAMEPOINT_TOPLEFT, 0.311400, 0.210350) 
 this.alchemShelfItemButtonT[24].setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, 0.347570, 0.171900) 
 t = new Trigger() 
 t.triggerRegisterFrameEvent(this.alchemShelfItemButtonT[24], FRAMEEVENT_CONTROL_CLICK) 
 t.addAction( () => {
 this.alchemShelfItemButtonT[24].enabled = false 
 this.alchemShelfItemButtonT[24].enabled = true 
 })
 
 this.alchemShelfItemButtonT[25] = new Frame("alchemShelfItemButtonT[25]", this.alchemShelfItemT[25], 0,0, "GLUEBUTTON", "") 
 this.alchemShelfItemButtonT[25].setAbsPoint(FRAMEPOINT_TOPLEFT, 0.347570, 0.210350) 
 this.alchemShelfItemButtonT[25].setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, 0.383740, 0.171900) 
 t = new Trigger() 
 t.triggerRegisterFrameEvent(this.alchemShelfItemButtonT[25], FRAMEEVENT_CONTROL_CLICK) 
 t.addAction( () => {
 this.alchemShelfItemButtonT[25].enabled = false 
 this.alchemShelfItemButtonT[25].enabled = true 
 })
 
 this.alchemShelfItemButtonT[26] = new Frame("alchemShelfItemButtonT[26]", this.alchemShelfItemT[26], 0,0, "GLUEBUTTON", "") 
 this.alchemShelfItemButtonT[26].setAbsPoint(FRAMEPOINT_TOPLEFT, 0.383740, 0.210350) 
 this.alchemShelfItemButtonT[26].setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, 0.419910, 0.171900) 
 t = new Trigger() 
 t.triggerRegisterFrameEvent(this.alchemShelfItemButtonT[26], FRAMEEVENT_CONTROL_CLICK) 
 t.addAction( () => {
 this.alchemShelfItemButtonT[26].enabled = false 
 this.alchemShelfItemButtonT[26].enabled = true 
 })
 
 this.alchemShelfItemButtonT[27] = new Frame("alchemShelfItemButtonT[27]", this.alchemShelfItemT[27], 0,0, "GLUEBUTTON", "") 
 this.alchemShelfItemButtonT[27].setAbsPoint(FRAMEPOINT_TOPLEFT, 0.419910, 0.210350) 
 this.alchemShelfItemButtonT[27].setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, 0.456080, 0.171900) 
 t = new Trigger() 
 t.triggerRegisterFrameEvent(this.alchemShelfItemButtonT[27], FRAMEEVENT_CONTROL_CLICK) 
 t.addAction( () => {
 this.alchemShelfItemButtonT[27].enabled = false 
 this.alchemShelfItemButtonT[27].enabled = true 
 })
 
 this.alchemChosenItemButton[0] = new Frame("alchemChosenItemButton[0]", this.alchemChosenItem[0], 0,0, "GLUEBUTTON", "") 
 this.alchemChosenItemButton[0].setAbsPoint(FRAMEPOINT_TOPLEFT, 0.192400, 0.419000) 
 this.alchemChosenItemButton[0].setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, 0.243730, 0.368900) 
 t = new Trigger() 
 t.triggerRegisterFrameEvent(this.alchemChosenItemButton[0], FRAMEEVENT_CONTROL_CLICK) 
 t.addAction( () => {
 this.alchemChosenItemButton[0].enabled = false 
 this.alchemChosenItemButton[0].enabled = true 
 })
 
 this.alchemChosenItemButton[1] = new Frame("alchemChosenItemButton[1]", this.alchemChosenItem[1], 0,0, "GLUEBUTTON", "") 
 this.alchemChosenItemButton[1].setAbsPoint(FRAMEPOINT_TOPLEFT, 0.190400, 0.333800) 
 this.alchemChosenItemButton[1].setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, 0.241730, 0.283700) 
 t = new Trigger() 
 t.triggerRegisterFrameEvent(this.alchemChosenItemButton[1], FRAMEEVENT_CONTROL_CLICK) 
 t.addAction( () => {
 this.alchemChosenItemButton[1].enabled = false 
 this.alchemChosenItemButton[1].enabled = true 
 })
 
 this.alchemChosenItemButton[2] = new Frame("alchemChosenItemButton[2]", this.alchemChosenItem[2], 0,0, "GLUEBUTTON", "") 
 this.alchemChosenItemButton[2].setAbsPoint(FRAMEPOINT_TOPLEFT, 0.189600, 0.254500) 
 this.alchemChosenItemButton[2].setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, 0.240930, 0.204400) 
 t = new Trigger() 
 t.triggerRegisterFrameEvent(this.alchemChosenItemButton[2], FRAMEEVENT_CONTROL_CLICK) 
 t.addAction( () => {
 this.alchemChosenItemButton[2].enabled = false 
 this.alchemChosenItemButton[2].enabled = true 
 })
 
 this.alchemLoadingBar = new Frame("alchemLoadingBar", this.alchemLoadingBackground, 0,0, "SIMPLESTATUSBAR", "") 
 this.alchemLoadingBar.setTexture("alchemLoadFull.dds", 0, true) 
 this.alchemLoadingBar.setAbsPoint(FRAMEPOINT_TOPLEFT, 0.304800, 0.128420) 
 this.alchemLoadingBar.setAbsPoint(FRAMEPOINT_BOTTOMRIGHT, 0.489100, 0.0813200) 
 this.alchemLoadingBar.value = 100 
 }
 
 }
 
 
 
 
 
 