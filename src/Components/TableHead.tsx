type TableHead = {
    headName: string,
}

export const TableHead = ({ headName}:TableHead) => {
  return (
    <>
        <th>{headName}</th>
    </>
  )
}
