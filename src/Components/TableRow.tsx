type rowProps = {
  attributeName: string;
  value: number;
  isHeader: boolean;
  bonification?: number;
  updateAttributes?: (
    attributeName: string,
    newValue: number,
    prevValue: number
  ) => void;
};

export const TableRow = ({
  attributeName,
  value,
  isHeader,
  bonification,
  updateAttributes,
}: rowProps) => {
  return (
    <tr>
      <td>{attributeName}</td>
      {value && (
        <td
          style={{
            minWidth: "0",
            display: "flex",
            gap: "10px",
            alignItems: "center",
            flexWrap: "nowrap",
          }}
        >
          <button onClick={() => updateAttributes?.(attributeName, -1, value)}>
            -
          </button>
          <p>{value}</p>
          <button onClick={() => updateAttributes?.(attributeName, 1, value)}>
            +
          </button>
        </td>
      )}
      {!isHeader && value !== undefined && (
        <td>
          {bonification !== undefined && bonification >= -1 && bonification < 0
            ? bonification
            : "+" + bonification}
        </td>
      )}
    </tr>
  );
};
