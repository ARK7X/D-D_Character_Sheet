type TableFoot= {
    points:number,
    footName:string
}

export const TableFoot = ({points, footName}:TableFoot) => {
  return (
    <>
        <td colSpan={3}>{points}{footName}</td>
    </>
  )
}
