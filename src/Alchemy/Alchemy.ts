import { AlchemyCraftScreen } from "Alchemy/Alchemy-Craft-UI";
import { ExtPlayer } from "Custom Classes/ExtPlayer";
import { FrameUtils } from "Custom Classes/FramesUtils";
import { Frame, Timer, Trigger } from "w3ts";
import { AlchemyItem } from "./Alchemy-Items";

const textColor = '|cff462901'

export class Alchemy {
    static alchemyUI: AlchemyCraftScreen
    static shelfItemsFrames: Frame[];
    static shelfItemsButtonsFrames: Frame[];
    static shelfButtonsTriggers: Trigger[] = []

    player: ExtPlayer
    shelfItems: AlchemyItem[] = []
    selectedItem: AlchemyItem;
    chosenItems: AlchemyItem[] = []

    state: 'paused' | 'normal' = 'normal'

    /**Disables the "Use" button, and hides its highlight */
    disableUseButton(disable: boolean) {

    }

    craftResults() {try{
        let result = AlchemyItem.craftItem(this.chosenItems)
        print(result)
        if(result) {
            print(result.name)
            this.shelfItems.push(result)
            this.fillShelf()
        }
        
    }catch(e){print('Alchem craftResults: '+e)}}

    startCrafting() {
        if(this.chosenItems.length < 3) return;

        this.state = 'paused'
        let ui = Alchemy.alchemyUI;
        ui.alchemLoadingBackground.visible = true;
        ui.alchemLoadingBar.visible = true;
        let int = 0
        let t = new Timer();
        t.start(0.01, true, () => {try{
            int++;
            if(int < 100)
                //filling up in 1 second
                ui.alchemLoadingBar.value = int;
            else if(int === 100) {
                //on reaching 1 second
                this.state = 'normal'
                this.craftResults()
                this.removeItem()
            } else if(int >= 200) {
                //1 seconds delay before hiding and finishing
                ui.alchemLoadingBackground.visible = false;
                ui.alchemLoadingBar.visible = false;
                t.destroy();
                t.pause()
            }

        }catch(e){print('Alchem LoadBar: '+e)}})
    }

    /**Removes the chosen item of that index. If not given, remove all chosen items. */
    removeItem(index?: number) {try{

        if(index) {
            if(this.chosenItems[index]) {
                Alchemy.alchemyUI.alchemChosenItem[index].visible = false;
                this.chosenItems[index] = null
            }
        } else {
            this.chosenItems.forEach((val, i) => {
                Alchemy.alchemyUI.alchemChosenItem[i].visible = false;
            })
            this.chosenItems = []
        }

    }catch(e){print('Alchemy ClickItemRemove: '+e)}}

    itemClickRemove(index: number) {try{
        if(this.state === 'paused') return;
        this.removeItem(index)
    }catch(e){print('Alchemy ClickItemRemove: '+e)}}

    itemClickUse() {
        if(this.state === 'paused') return;
        if(!this.selectedItem) return;

        for(let i = 0; i < 3; i++) {
            if(!this.chosenItems[i]) {
                Alchemy.alchemyUI.alchemChosenItem[i].visible = true;
                Alchemy.alchemyUI.alchemChosenItem[i].setTexture(this.selectedItem.path, 0, true)
                this.chosenItems[i] = this.selectedItem
                break;
            }
        }

    }

    itemClicked(index: number) {
        if(this.state === 'paused') return;
        if(!this.shelfItems[index]) return;

        let item = this.shelfItems[index]
        Alchemy.alchemyUI.alchemItemInfo.setTexture(item.path, 0, true)
        Alchemy.alchemyUI.AlchemInfoTitle.text = textColor + item.name
        Alchemy.alchemyUI.AlchemInfoDesc.text = textColor + item.desc

        this.selectedItem = item

    }

    /**
     * Edits the shelf frame's texture. Automatically shows the frame if hidden.
     * @param index the index of the frame to be edited.
     * @param item (optional) the item to get the path from. if not given, will instead hide the frame
     */
    fillSlot(index: number, item?: AlchemyItem) {
        if(!Alchemy.shelfItemsFrames[index]) return;
        
        if(!item) {
            if(ExtPlayer.fromLocal() == this.player) {
                Alchemy.shelfItemsFrames[index].visible = false;
                Alchemy.shelfItemsButtonsFrames[index].visible = false;
            }
        } else {
            if(ExtPlayer.fromLocal() == this.player) {
                Alchemy.shelfItemsFrames[index].visible = true;
                Alchemy.shelfItemsButtonsFrames[index].visible = true;
                Alchemy.shelfItemsFrames[index].setTexture(item.path, 0, true)
            }
        }

    }

    hideAllShelfItems() {
        if(ExtPlayer.fromLocal() == this.player) {
            Alchemy.shelfItemsFrames.forEach(fr => fr.visible = false)
            Alchemy.shelfItemsButtonsFrames.forEach(fr => fr.visible = false)
        }
        
    }

    fillShelf() {
        this.hideAllShelfItems()

        for(let i = 0; i < this.shelfItems.length; i++) {
            this.fillSlot(i, this.shelfItems[i])
        }
    }

    constructor(player: ExtPlayer) {try{
        print('d')
        this.player = player;

        for(let i = 0; i < Alchemy.shelfItemsButtonsFrames.length; i++) {
            const ii = i;
            Alchemy.shelfButtonsTriggers[i].addAction(() => {
                if(ExtPlayer.fromEvent() == this.player)
                    this.itemClicked(ii);
            })
        }
        this.shelfItems = [AlchemyItem.items.bone, AlchemyItem.items.carrot, AlchemyItem.items.claw, AlchemyItem.items.eye] 
        this.fillShelf()

        
        let t = new Trigger()
        t.triggerRegisterFrameEvent(Alchemy.alchemyUI.alchemUseButton, FRAMEEVENT_CONTROL_CLICK)
        t.addAction( () => { this.itemClickUse() })

        for(let i = 0; i < 3; i++) {
            t = new Trigger()
            t.triggerRegisterFrameEvent(Alchemy.alchemyUI.alchemChosenItemButton[i], FRAMEEVENT_CONTROL_CLICK)
            let ii = i
            t.addAction( () => { this.itemClickRemove(ii) })
        }
        
        t = new Trigger()
        t.triggerRegisterFrameEvent(Alchemy.alchemyUI.alchemCraftButton, FRAMEEVENT_CONTROL_CLICK)
        t.addAction( () => { this.startCrafting() })

    }catch(e){print('Alchemy Const: '+e)}}

    static initShelfButtons() {
        for(let i = 0; i < this.shelfItemsButtonsFrames.length; i++) {
            this.shelfButtonsTriggers[i] = new Trigger()
            this.shelfButtonsTriggers[i].triggerRegisterFrameEvent(this.shelfItemsButtonsFrames[i], FRAMEEVENT_CONTROL_CLICK)
            
        }
    }

    static init() {try{
        this.alchemyUI = new AlchemyCraftScreen()
        this.shelfItemsFrames = this.alchemyUI.alchemShelfItemT
        this.shelfItemsButtonsFrames = this.alchemyUI.alchemShelfItemButtonT
        this.initShelfButtons()
        let alc = this.alchemyUI
        for(let fr of [alc.alchemUseButton, alc.alchemHomeButton, alc.alchemRecipeBooks]) new FrameUtils.addHighlight(fr)
        for(let fr of alc.alchemChosenItemButton) new FrameUtils.addHighlight(fr)
        for(let fr of alc.alchemShelfItemButtonT) new FrameUtils.addHighlight(fr)

        this.alchemyUI.alchemLoadingBackground.visible = false;
        this.alchemyUI.alchemLoadingBar.visible = false;
        this.alchemyUI.alchemChosenItem.forEach( fr => fr.visible = false)

        AlchemyItem.itemsInit()
    }catch(e){print('Alchemy Init: '+e)}}


}