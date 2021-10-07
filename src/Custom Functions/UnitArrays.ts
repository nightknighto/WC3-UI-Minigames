import { Unit } from "w3ts/handles/unit";

export namespace UnitArrays {
    let _enumGroupToUse: group;

    function enumGroupToUse() {
        if (!_enumGroupToUse) _enumGroupToUse = CreateGroup();
        return _enumGroupToUse;
    }

    export function ArrayUnitsInRange(x: number, y: number, radius: number, filter?: (filterUnit: unit) => boolean) {
        let array: Unit[] = [];
        let filterEnum = Filter(() => {
            if (filter == null || filter(GetFilterUnit()))
                array.push(Unit.fromHandle(GetFilterUnit()));
            return false;
        });
        GroupEnumUnitsInRange(enumGroupToUse(), x, y, radius, filterEnum);
        DestroyFilter(filterEnum);
        return array;
    }

    export function ArrayUnitsInRect(region: rect, filter?: (filterUnit: unit) => boolean) {
        let array: Unit[] = [];
        let filterEnum = Filter(() => {
            if (filter == null || filter(GetFilterUnit()))
                array.push(Unit.fromHandle(GetFilterUnit()));
            return false;
        });
        GroupEnumUnitsInRect(enumGroupToUse(), region, filterEnum);
        DestroyFilter(filterEnum);
        return array;
    }

    export function ArrayUnitsOfPlayer(p: player, filter?: (filterUnit: unit) => boolean) {
        let array: Unit[] = [];
        let filterEnum = Filter(() => {
            if (filter == null || filter(GetFilterUnit()))
                array.push(Unit.fromHandle(GetFilterUnit()));
            return false;
        });
        GroupEnumUnitsOfPlayer(enumGroupToUse(), p, filterEnum);
        DestroyFilter(filterEnum);
        return array;
    }

    export function isDead(array: Unit[]) {
        if(array.length == 0) return true;

        for(let u of array) {
            if (u.isAlive()) {
                return false;
            }
        }
        return true;
    }
}