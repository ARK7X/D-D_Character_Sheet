import { GenericLabel } from "./GenericLabel";
import { InputText } from "./InputText";
import { useCharacterContext } from "../hooks/useCharacterContext";

export const SavingThrows = () => {

    const {Attribute, SavingAttribute, changeChecked} = useCharacterContext();

  return (
    <div>
      {Object.entries(Attribute).map(([attribute]) => {
        return (
          <div key={attribute + " Container"}>
            <InputText
              key={attribute + "input"}
              id={attribute}
              type="checkbox"
              value={attribute}
              checked={
                SavingAttribute[attribute as keyof typeof SavingAttribute]
              }
              onChange={changeChecked}
            />
            <GenericLabel
              key={attribute + "label"}
              forName={attribute}
              labelText={`${
                Attribute[attribute as keyof typeof Attribute].bonus
              } ${
                Attribute[attribute as keyof typeof Attribute].proficiency
              } ${attribute}`}
            />
          </div>
        );
      })}
    </div>
  );
};
