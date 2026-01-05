import { TableRow } from "./TableRow";
import { TableHead } from "./TableHead";
import { TableFoot } from "./TableFoot";
import "../styles/table.css";
import { useCharacterContext } from "../hooks/useCharacterContext";

export const Stats = () => {
  const {
    Attribute,
    Points,
    updateAttributes,
  } = useCharacterContext();

  return (
    <>
      <table>
        <thead>
          <tr>
            <TableHead headName="Stats" />
            <TableHead headName="Value" />
            <TableHead headName={"Bonus"} />
          </tr>
        </thead>
        <tbody>
          {Object.entries(Attribute).map(([attribute, objAttr]) => (
            <TableRow
              key={attribute}
              attributeName={attribute}
              value={objAttr.value}
              isHeader={false}
              bonification={objAttr.bonus}
              updateAttributes={updateAttributes}
            />
          ))}
        </tbody>
        <tfoot>
          <tr>
            <TableFoot points={Points} footName={` points remaining`} />
          </tr>
        </tfoot>
      </table>
    </>
  );
};
