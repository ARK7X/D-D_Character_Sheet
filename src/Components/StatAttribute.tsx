import { useCharacterContext } from "../hooks/useCharacterContext";
import { Stat } from "./Stat";

export const StatAttribute = () => {
  const { Attribute, updateAttributes } = useCharacterContext();
  return (
    <div>
      {Object.entries(Attribute).map(([attribute, objAttribute]) => (
        <Stat key={attribute} attributeName={attribute} value={objAttribute.value} bonus={objAttribute.bonus} updateAttributes={updateAttributes}/>
      ))}
    </div>
  );
};
