type savingAttribute = {
    Strength: boolean,
    Dexterity: boolean,
    Constitution:boolean,
    Intelligence:boolean,
    Wisdom:boolean,
    Charisma:boolean 
}

type Attribute = {
    value: number;
    bonus: number;
    proficiency: number;
}

type Attributes = {
    Strength: Attribute,
    Dexterity: Attribute,
    Constitution: Attribute,
    Intelligence: Attribute,
    Wisdom: Attribute,
    Charisma: Attribute
}

export type ProviderType = {
    Points: number,
    Attribute: Attributes,
    Level: number,
    SavingAttribute: savingAttribute,
    updateAttributes: (atributeName:string, newValue:number, prevValue:number) => void,
    changeChecked: (atrr:string) => void,
    handleLevel: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

export type InitialStateType = {
    Points: number,
    Attribute: Attributes,
    Level: number,
    SavingAttribute: savingAttribute,
}