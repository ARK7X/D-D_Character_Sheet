type StatProps = {
  attributeName: string;
  value: number;
  bonus?: number;
  updateAttributes?: (
    attributeName: string,
    newValue: number,
    prevValue: number
  ) => void;
};

export const Stat = ({
  attributeName,
  value,
  bonus,
  updateAttributes,
}: StatProps) => {
  return (
    <>
      <p>{attributeName}</p>
      {value && (
        <div className="ValueButtons">
          <button onClick={() => updateAttributes?.(attributeName, -1, value)}>
            -
          </button>
          <p>{value}</p>
          <button onClick={() => updateAttributes?.(attributeName, 1, value)}>
            +
          </button>
        </div>
      )}
      { value !== undefined && (
        <p>
          {bonus !== undefined && bonus >= -1 && bonus < 0
            ? bonus
            : "+" + bonus}
        </p>
      )}
    </>
  );
};
