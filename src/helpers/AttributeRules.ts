const costByValue: Record<number, number> = {
    8:0,
    9:1,
    10:2,
    11:3,
    12:4,
    13:5,
    14:7,
    15:9
}

const bonusByValue: Record<number, number> = {
    8:-1,
    9:-1,
    10:1,
    11:1,
    12:2,
    13:2,
    14:3,
    15:3
}

const proficiencyByLevel: Record<number, number> = {
    1: 2,
    2: 2,
    3: 2,
    4: 2,
    5: 3,
    6: 3,
    7: 3,
    8: 3,
    9: 4,
    10: 4,
    11: 4,
    12: 4,
    13: 5,
    14: 5,
    15: 5,
    16: 5,
    17: 6,
    18: 6,
    19: 6,
    20: 6

}

const getCostForAttribute = (attribute:number, operation:boolean): number => {
    return operation ? (costByValue[attribute + 1] - costByValue[attribute]) : (costByValue[attribute] - costByValue[attribute - 1])
}

const getBonusForAttribute = (attribute:number): number => {
    return bonusByValue[attribute];
}

const isAttributeValid = (attribute:number, newValue:number): boolean => {
    const newAttribute:number = attribute + newValue;
    return newAttribute >= 8 && newAttribute <= 15 ?  true :  false;
}

const getProficiencyByLevel = (level:number): number => {
    return proficiencyByLevel[level + 1];
}

export const attributeRules = {
    getCostForAttribute,
    getBonusForAttribute,
    isAttributeValid,
    getProficiencyByLevel,
};


