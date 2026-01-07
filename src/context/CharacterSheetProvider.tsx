import { useEffect, useState, type JSX } from "react";
import type { InitialStateType } from "../interfaces/attributesInterface";
import { attributeRules } from "../helpers/AttributeRules";
import { CharacterSheetContext } from "./CharacterSheetContext";
import { initialStateData } from "../mocks/initialState";

const initialState: InitialStateType = initialStateData;

interface props {
  children: JSX.Element | JSX.Element[];
}

export const CharacterSheetProvider = ({ children }: props) => {
  const [Points, setPoints] = useState<InitialStateType["Points"]>(
    initialState.Points
  );
  const [Attribute, setAttribute] = useState<InitialStateType["Attribute"]>(
    initialState.Attribute
  );

  const [Level, setLevel] = useState<InitialStateType["Level"]>(
    initialState.Level
  );

  const [SavingAttribute, setSavingAttribute] = useState<
    InitialStateType["SavingAttribute"]
  >(initialState.SavingAttribute);

  const updateAttributes = (
    attributeName: string,
    newValue: number,
    prevValue: number
  ): void => {
    const newTotal = prevValue + newValue;
    if (attributeRules.isAttributeValid(prevValue, newValue)) {
      if (newValue >= 1) {
        const newPoints = Points;
        const totalCost = attributeRules.getCostForAttribute(prevValue, true);
        if (newPoints < totalCost) {
          alert("No hay puntos disponibles");
        } else {
          setPoints((prev) => prev - totalCost);
          setAttribute((prev) => ({
            ...prev,
            [attributeName]: {
              ...prev[attributeName as keyof typeof prev],
              value: newTotal,
              bonus: attributeRules.getBonusForAttribute(newTotal),
            },
          }));
        }
      } else {
        setPoints(
          (prev) =>
            prev +
            attributeRules.getCostForAttribute(
              Attribute[attributeName as keyof typeof Attribute].value,
              false
            )
        );
        setAttribute((prev) => ({
          ...prev,
          [attributeName]: {
            ...prev[attributeName as keyof typeof prev],
            value: newTotal,
            bonus: attributeRules.getBonusForAttribute(newTotal),
          },
        }));
      }
    } else {
      alert("Limite alcanzado");
    }
  };

  const changeChecked = (attributeName: string): void => {
    setSavingAttribute((prev) => {
      const selectedCheckbox = Object.values(prev).filter((v) => v).length;
      const isCurrentlyChecked = prev[attributeName as keyof typeof SavingAttribute];

      if (!prev[attributeName as keyof typeof SavingAttribute] && selectedCheckbox >= 2) {
        return prev;
      }

      const nextChecked = !isCurrentlyChecked;
     

      return {
          ...prev,
          [attributeName]: nextChecked,
        };
      }
    );
  };

  const handleLevel = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setLevel((prev) => (prev = Number(e.target.value)));
  };

  useEffect(() => {
    setAttribute((prev) => {
      const updated = {...prev};
      Object.keys(updated).forEach((attribute) => {
        const isProficiency = SavingAttribute[attribute as keyof typeof SavingAttribute];
        updated[attribute as keyof typeof updated] = {
          ...updated[attribute as keyof typeof updated],
          proficiency: isProficiency ? attributeRules.getProficiencyByLevel(Level) : 0,
        };
      });
      return updated
    });

  }, [Level, SavingAttribute]);
  

  return (
    <CharacterSheetContext.Provider
      value={{
        handleLevel,
        changeChecked,
        updateAttributes,
        SavingAttribute,
        Level,
        Attribute,
        Points,
      }}
    >
      {children}
    </CharacterSheetContext.Provider>
  );
};
