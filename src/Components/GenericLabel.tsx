type labelType = {
    labelText: string,
    forName:string,
    isSavingThrows?: boolean
};

export const GenericLabel = ({labelText, forName, isSavingThrows}:labelType) => {
  return (
    <>
      {
        isSavingThrows ? <label htmlFor={forName} style={{textTransform: "uppercase"}}>{Number(labelText) >= 0 ? "+"+labelText : labelText}{" "+forName}</label>
         : <label htmlFor={forName} style={{textTransform: "uppercase"}}>{labelText}</label>
      }
        
    </>
  )
}
