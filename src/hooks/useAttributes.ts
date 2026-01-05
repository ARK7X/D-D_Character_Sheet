import { useState } from "react";
import { attributeRules } from "../helpers/AttributeRules";

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

type AttributeHook = {
    Points: number,
    Attribute: Attributes,
    Level: number,
    SavingAttribute: savingAttribute,
    updateAttributes: (atributeName:string, newValue:number, prevValue:number) => void,
    changeChecked: (atrr:string) => void,
    handleLevel: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

export const useAttributes = (): AttributeHook => {

    const [Points, setPoints] = useState<AttributeHook["Points"]>(27);
    const [Attribute, setAttribute] = useState<AttributeHook["Attribute"]>({
        Strength: {value: 8, bonus: -1, proficiency: 0},
        Dexterity: {value: 8, bonus: -1 , proficiency: 0},
        Constitution:{value: 8, bonus: -1 , proficiency: 0},
        Intelligence:{value: 8, bonus: -1 , proficiency: 0},
        Wisdom:{value: 8, bonus: -1 , proficiency: 0},
        Charisma:{value: 8, bonus: -1 , proficiency: 0}
    })

  const [Level, setLevel] = useState<AttributeHook["Level"]>(1);

  const [SavingAttribute, setSavingAttribute] = useState<AttributeHook["SavingAttribute"]>({
        Strength: true,
        Dexterity: true,
        Constitution:false,
        Intelligence:false,
        Wisdom:false,
        Charisma:false 
    })

  const updateAttributes = (atributeName:string, newValue:number, prevValue:number): void => {
        const newTotal = prevValue + newValue;
        if (attributeRules.isAttributeValid(prevValue, newValue)) {
            if (newValue >= 1) {
                const newPoints = Points;
                    const totalCost = attributeRules.getCostForAttribute(prevValue, true);
                    if (newPoints < totalCost) {
                        alert("No hay puntos disponibles")
                    } else {
                        setPoints(prev => prev - totalCost )
                        setAttribute(prev => ({
                            ...prev, [atributeName]: {
                                ...prev[atributeName as keyof typeof prev], 
                                value: newTotal,
                                bonus: attributeRules.getBonusForAttribute(newTotal)
                            }
                        }));
                    }
            }else {
                    setPoints(prev => prev + attributeRules.getCostForAttribute(Attribute[atributeName as keyof typeof Attribute].value, false) )
                    setAttribute(prev => ({
                        ...prev, [atributeName]: {
                                ...prev[atributeName as keyof typeof prev], 
                                value: newTotal,
                                bonus: attributeRules.getBonusForAttribute(newTotal)
                            }
                    })); 
            }
         
        }else {
            alert("Limite alcanzado")
        }
  }
  
  const changeChecked = (atrr:string): void => {
          setSavingAttribute(prev => {
              const selectedCheckbox = Object.values(prev).filter(v => v).length;
              if (!prev[atrr as keyof typeof SavingAttribute] && selectedCheckbox >= 2) {
                return prev;
              } else {
                    setAttribute(prev => ({
                        ...prev, [atrr]: {
                            ...prev[atrr as keyof typeof prev], 
                                proficiency: attributeRules.getProficiencyByLevel(Level)
                            }
                    }));
                    return {
                        ...prev, [atrr]: !prev[atrr as keyof typeof SavingAttribute]
                    };
              }
          });
  
      }

  const handleLevel = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setLevel(prev => prev = Number(e.target.value))
  }
    
    return {Points, Attribute: {...Attribute}, updateAttributes, handleLevel, Level, changeChecked, SavingAttribute}
}

