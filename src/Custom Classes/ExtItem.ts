import { Item, Trigger, Unit } from "w3ts/index";
let ExtItems: ExtItem[] = []

const DAMAGE_ABILITY           = FourCC('Z001')
const ARMOR_ABILITY            = FourCC('Z002')
const STATS_ABILITY            = FourCC('Z003')
const HEALTHREGEN_ABILITY      = FourCC('Z006')
const MANAREGEN_ABILITY        = FourCC('Z007')
const ATTACKSPEED_ABILITY      = FourCC('Z008')
const MOVEMENTSPEED_ABILITY    = FourCC('Z009')
const MAGIC_RESISTANCE_ABILITY = FourCC('Z00B')

const DAMAGE_FIELD           = ABILITY_ILF_ATTACK_BONUS
const ARMOR_FIELD            = ABILITY_ILF_DEFENSE_BONUS_IDEF
const AGILITY_FIELD          = ABILITY_ILF_AGILITY_BONUS
const STRENGTH_FIELD         = ABILITY_ILF_STRENGTH_BONUS_ISTR
const INTELLIGENCE_FIELD     = ABILITY_ILF_INTELLIGENCE_BONUS
const MOVEMENTSPEED_FIELD    = ABILITY_ILF_MOVEMENT_SPEED_BONUS
const HEALTHREGEN_FIELD      = ABILITY_RLF_AMOUNT_OF_HIT_POINTS_REGENERATED
const MANAREGEN_FIELD        = ABILITY_RLF_AMOUNT_REGENERATED
const ATTACKSPEED_FIELD      = ABILITY_RLF_ATTACK_SPEED_INCREASE_ISX1
const MAGIC_RESISTANCE_FIELD = ABILITY_RLF_DAMAGE_REDUCTION_ISR2

export class ExtItem extends Item {
    private _damage: number = 0
    private _armor: number = 0
    private _magic_resistance: number = 0
    private _strength: number = 0
    private _agility: number = 0
    private _intelligence: number = 0
    ////private _evasion: number = 0
    private _move_speed = 0
    private _life_regen = 0
    private _mana_regen = 0
    ////private _immolation = 0
    ////private _life_steal = 0
    private _attack_speed = 0
    //needs bonus HP, MP, evasion
    


    constructor(itemId: number, x: number, y: number) {
        super(itemId, x, y)
        ExtItems.push(this)
    }

    public static fromHandle(handle: item): ExtItem {
        return this.getObject(handle);
    }

    public static fromHandlePushArray(handle: item): ExtItem {
        ExtItems.push(this.getObject(handle))
        return this.getObject(handle);
    }


    public set damage(amount: number) {
        this._damage = amount
        BlzSetAbilityIntegerLevelField(BlzGetItemAbility(this.handle, DAMAGE_ABILITY), DAMAGE_FIELD, 0, amount)
    }
 
    public get damage() {
        return this._damage
    }


    public set armor(amount: number) {
       this._armor = amount
       BlzSetAbilityIntegerLevelField(BlzGetItemAbility(this.handle, ARMOR_ABILITY), ARMOR_FIELD, 0, amount)
    }

    public get armor() {
        return this._armor
    }
    
    public set agility(amount: number) {
        this._agility = amount/*
        if (BlzItemAddAbility) {
            UnitAddAbility(u, abilCode)
            UnitMakeAbilityPermanent(u, true, abilCode)
        }   */
        BlzSetAbilityIntegerLevelField(BlzGetItemAbility(this.handle, STATS_ABILITY), AGILITY_FIELD, 0, amount)
    }
 
     public get agility() {
        return this._agility
    }
     
    public set strength(amount: number) {
        this._strength = amount
        BlzSetAbilityIntegerLevelField(BlzGetItemAbility(this.handle, STATS_ABILITY), STRENGTH_FIELD, 0, amount)
    }
 
     public get strength() {
        return this._strength
    }
     
    public set intelligence(amount: number) {
        this._intelligence = amount
        BlzSetAbilityIntegerLevelField(BlzGetItemAbility(this.handle, STATS_ABILITY), INTELLIGENCE_FIELD, 0, amount)
    }
 
     public get intelligence() {
        return this._intelligence
    }
         
    public set attackSpeed(amount: number) {
        this._attack_speed = amount
        BlzSetAbilityRealLevelField(BlzGetItemAbility(this.handle, ATTACKSPEED_ABILITY), ATTACKSPEED_FIELD, 0, amount)
    }
 
    public get attackSpeed() {
        return this._attack_speed
    }
         
    public set Life_Regen(amount: number) {
        this._life_regen = amount
        BlzSetAbilityRealLevelField(BlzGetItemAbility(this.handle, HEALTHREGEN_ABILITY), HEALTHREGEN_FIELD, 0, amount)
    }
 
    public get Life_Regen() {
        return this._life_regen
    }
         
    public set Mana_Regen(amount: number) {
        this._mana_regen = amount
        BlzSetAbilityRealLevelField(BlzGetItemAbility(this.handle, MANAREGEN_ABILITY), MANAREGEN_FIELD, 0, amount)
    }
 
    public get Mana_Regen() {
        return this._mana_regen
    }
         
    public set MoveSpeed(amount: number) {
        this._move_speed = amount
        BlzSetAbilityIntegerLevelField(BlzGetItemAbility(this.handle, MOVEMENTSPEED_ABILITY), MOVEMENTSPEED_FIELD, 0, amount)
    }
 
    public get MoveSpeed() {
        return this._move_speed
    }

    public set MagicResistance(amount: number) {
        this._magic_resistance = amount
        BlzSetAbilityRealLevelField(BlzGetItemAbility(this.handle, MAGIC_RESISTANCE_ABILITY), MAGIC_RESISTANCE_FIELD, 0, amount)
    }
 
    public get MagicResistance() {
        return this._magic_resistance
    }
}

export function ExtItemInit() {
    let t = new Trigger()

    t.registerAnyUnitEvent(EVENT_PLAYER_UNIT_PICKUP_ITEM)

    t.addCondition( Condition( () => {
        return ExtItems.indexOf(ExtItem.fromHandle(GetManipulatedItem())) >= 0
    }))

    t.addAction( () => {
        let it = ExtItem.fromHandle(GetManipulatedItem())
        let u = GetTriggerUnit()

        if (it.damage) { 
            IncUnitAbilityLevel(u, DAMAGE_ABILITY)
            DecUnitAbilityLevel(u, DAMAGE_ABILITY)
        } else if (it.armor) { 
            IncUnitAbilityLevel(u, ARMOR_ABILITY)
            DecUnitAbilityLevel(u, ARMOR_ABILITY)
        } else if (it.agility) { 
            IncUnitAbilityLevel(u, STATS_ABILITY)
            DecUnitAbilityLevel(u, STATS_ABILITY)
        } else if (it.strength) { 
            IncUnitAbilityLevel(u, STATS_ABILITY)
            DecUnitAbilityLevel(u, STATS_ABILITY)
        } else if (it.intelligence) { 
            IncUnitAbilityLevel(u, STATS_ABILITY)
            DecUnitAbilityLevel(u, STATS_ABILITY)
        } else if (it.MoveSpeed) { 
            IncUnitAbilityLevel(u, MOVEMENTSPEED_ABILITY)
            DecUnitAbilityLevel(u, MOVEMENTSPEED_ABILITY)
        } else if (it.Life_Regen ) {
            IncUnitAbilityLevel(u, HEALTHREGEN_ABILITY)
            DecUnitAbilityLevel(u, HEALTHREGEN_ABILITY)
        } else if (it.Mana_Regen) {
            IncUnitAbilityLevel(u, MANAREGEN_ABILITY)
            DecUnitAbilityLevel(u, MANAREGEN_ABILITY)
        } else if (it.attackSpeed) {
            IncUnitAbilityLevel(u, ATTACKSPEED_ABILITY)
            DecUnitAbilityLevel(u, ATTACKSPEED_ABILITY)
        } else if (it.MagicResistance) {
            IncUnitAbilityLevel(u, MAGIC_RESISTANCE_ABILITY)
            DecUnitAbilityLevel(u, MAGIC_RESISTANCE_ABILITY)
        }
    })
    
}

