import type { InitialStateType } from "../interfaces/attributesInterface"

export const initialStateData:InitialStateType = {
    Attribute: {
            Strength: {value: 8, bonus: -1, proficiency: 2},
            Dexterity: {value: 8, bonus: -1 , proficiency: 2},
            Constitution:{value: 8, bonus: -1 , proficiency: 0},
            Intelligence:{value: 8, bonus: -1 , proficiency: 0},
            Wisdom:{value: 8, bonus: -1 , proficiency: 0},
            Charisma:{value: 8, bonus: -1 , proficiency: 0}
    },
    Points: 27,
    SavingAttribute: {
        Strength: true,
        Dexterity: true,
        Constitution:false,
        Intelligence:false,
        Wisdom:false,
        Charisma:false 
    },
    Level: 1
}

console.log(initialStateData);
