type labelType = {
    labelText: string,
    forName:string
}

export const GenericLabel = ({labelText, forName}:labelType) => {
  return (
    <>
        <label htmlFor={forName} style={{textTransform: "uppercase"}}>{labelText}</label>
    </>
  )
}
