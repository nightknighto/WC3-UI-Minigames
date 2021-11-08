
export class AlchemyItem {
    name: string;
    desc: string;
    path: string;
    
    static items: {
        bone: AlchemyItem, carrot: AlchemyItem, claw: AlchemyItem, dragonroot: AlchemyItem, egg1: AlchemyItem, 
        eye: AlchemyItem, fat1: AlchemyItem, fat2: AlchemyItem, feather: AlchemyItem, flower1: AlchemyItem, 
        horn1: AlchemyItem, leaves1: AlchemyItem, leaves2: AlchemyItem, liver1: AlchemyItem, liver2: AlchemyItem,
        mushroom1: AlchemyItem, plant1: AlchemyItem,plant2: AlchemyItem, plant3: AlchemyItem, root1: AlchemyItem, 
        root2: AlchemyItem, salt1: AlchemyItem, salt2: AlchemyItem, shell: AlchemyItem, starfish: AlchemyItem, 
        sting: AlchemyItem, stone1: AlchemyItem, tail: AlchemyItem, tongue: AlchemyItem, tooth1: AlchemyItem, tooth2
    }

    static recipes: AlchemyItem[][] = []

    constructor({name, desc, path}: 
    {
        name: string, 
        desc: string,
        /**Path of the texture.*/ 
        path: string
    }) {
        this.name = name;
        this.desc = desc;
        this.path = path;
        
    }

    static craftItem(items: AlchemyItem[]) : AlchemyItem | null {
        for(let recipe of this.recipes) {
            let failed = false
            let recip = recipe.slice(0, -1)
            for(let ingred of items) {
                let index = recip.indexOf(ingred)
                if(index < 0) {
                    failed = true;
                    break;
                } else {
                    recip.splice(index, 1)
                }
            }
            if(failed) continue;
            return recipe[3]
            
        }
        return null
    }
    
    private static recipeInit() {
        let t = this.items
        this.recipes = [
            [t.bone, t.carrot, t.eye, t.dragonroot],
            [t.bone, t.carrot, t.claw, t.feather],
            [t.carrot, t.eye, t.claw, t.tongue],
            [t.tongue, t.dragonroot, t.feather, t.starfish],
            [t.starfish, t.horn1, t.mushroom1, t.tail],
            [t.dragonroot, t.carrot, t.claw, t.horn1],
            [t.dragonroot, t.feather, t.eye, t.mushroom1]
        ]
    }

    static itemsInit() {
        const qp = (name: string) => ("AlchemyItems/alchemIng"+name+".dds")
        this.items = {
            bone: new AlchemyItem({name: 'Bone', path: qp('Bone'), desc: "d"}),
            carrot: new AlchemyItem({name: 'Carrot', path: qp('Carrot'), desc: "d"}),
            claw: new AlchemyItem({name: 'Claw', path: qp('Claw'), desc: "d"}),
            dragonroot : new AlchemyItem({name: 'Dragonroot', path: qp('Dragonroot'), desc: "d"}),
            egg1 : new AlchemyItem({name: 'Egg1', path: qp('Egg1'), desc: "d"}),
            eye : new AlchemyItem({name: 'Eye', path: qp('Eye'), desc: "d"}),
            fat1 : new AlchemyItem({name: 'Fat1', path: qp('Fat1'), desc: "d"}),
            fat2 : new AlchemyItem({name: 'Fat2', path: qp('Fat2'), desc: "d"}),
            feather : new AlchemyItem({name: 'Feather', path: qp('Feather'), desc: "d"}),
            flower1 : new AlchemyItem({name: 'Flower1', path: qp('Flower1'), desc: "d"}),
            horn1 : new AlchemyItem({name: 'Horn1', path: qp('Horn1'), desc: "d"}),
            leaves1 : new AlchemyItem({name: 'Leaves1', path: qp('Leaves1'), desc: "d"}),
            leaves2 : new AlchemyItem({name: 'Leaves2', path: qp('Leaves2'), desc: "d"}),
            liver1 : new AlchemyItem({name: 'Liver1', path: qp('Liver1'), desc: "d"}),
            liver2 : new AlchemyItem({name: 'Liver2', path: qp('Liver2'), desc: "d"}),
            mushroom1 : new AlchemyItem({name: 'Mushroom1', path: qp('Mushroom1'), desc: "d"}),
            plant1 : new AlchemyItem({name: 'Plant1', path: qp('Plant1'), desc: "d"}),
            plant2 : new AlchemyItem({name: 'Plant2', path: qp('Plant2'), desc: "d"}),
            plant3 : new AlchemyItem({name: 'Plant3', path: qp('Plant3'), desc: "d"}),
            root1 : new AlchemyItem({name: 'Root1', path: qp('Root1'), desc: "d"}),
            root2 : new AlchemyItem({name: 'Root2', path: qp('Root2'), desc: "d"}),
            salt1 : new AlchemyItem({name: 'Salt1', path: qp('Salt1'), desc: "d"}),
            salt2 : new AlchemyItem({name: 'Salt2', path: qp('Salt2'), desc: "d"}),
            shell : new AlchemyItem({name: 'Shell', path: qp('Shell'), desc: "d"}),
            starfish : new AlchemyItem({name: 'Starfish', path: qp('Starfish'), desc: "d"}),
            sting : new AlchemyItem({name: 'Sting', path: qp('Sting'), desc: "d"}),
            stone1 : new AlchemyItem({name: 'Stone1', path: qp('Stone1'), desc: "d"}),
            tail : new AlchemyItem({name: 'Tail', path: qp('Tail'), desc: "d"}),
            tongue : new AlchemyItem({name: 'Tongue', path: qp('Tongue'), desc: "d"}),
            tooth1 : new AlchemyItem({name: 'Tooth1', path: qp('Tooth1'), desc: "d"}),
            tooth2 : new AlchemyItem({name: 'Tooth2', path: qp('Tooth2'), desc: "d"}),
        }
            //  : new AlchemyItem({name: '', path: qp(''), desc: "d"}),
        AlchemyItem.recipeInit()
    }
}