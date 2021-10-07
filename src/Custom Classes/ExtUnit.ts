import { Unit, Item } from "w3ts/index";
import { ExtPlayer } from "./ExtPlayer";
import { ExtItem } from "./ExtItem";

export class ExtUnit extends Unit {
    CurrentWeapon: ExtItem = null;
    /*cooldown: number;
    MaxCooldown: number;

    charge: number = 1;
    MaxCharge: number = 3;
    ChargeRate: number = 2;

    damage: number = 10;
    AttackReady: boolean = true;

    ProjectileSpeed: number = 400;
    ProjectileCollisionSize: number = 200;
    ProjectileRange: number = 1600;
    ProjectileModel: number = 0;
    
    ProjectileMain: number = 0;
    ProjectileSide: number = 0;
    MaxBounces: number = 10;

    respawnX: number;
    respawnY: number;*/

    constructor(owner: ExtPlayer | number, unitId: number, x: number, y: number, face: number, skinId?: number) {
        super(owner, unitId, x, y, face, skinId);
        /*
        //this.cooldown = this.getAttackCooldown(0);
        this.cooldown = 1.5;
        //this.MaxCooldown = this.getAttackCooldown(0);
        this.MaxCooldown = 1.5;
        */
    }

  public get owner() {
    return ExtPlayer.fromHandle(GetOwningPlayer(this.handle));
  }
    
  public static foodMadeByType(unitId: number) {
    return GetFoodMade(unitId);
  }

  public static foodUsedByType(unitId: number) {
    return GetFoodUsed(unitId);
  }

  public static fromEvent() {
    return this.fromHandle(GetTriggerUnit());
  }

  public static fromHandle(handle: unit): ExtUnit {
    return this.getObject(handle);
  }

  public static getPointValueByType(unitType: number) {
    return GetUnitPointValueByType(unitType);
  }

  public static isUnitIdHero(unitId: number) {
    return IsHeroUnitId(unitId);
  }

  public static isUnitIdType(unitId: number, whichUnitType: unittype) {
    return IsUnitIdType(unitId, whichUnitType);
  }
}