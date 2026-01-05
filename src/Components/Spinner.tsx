import type { dataType } from "../mocks/classMock"
import type { levelType } from "../mocks/levelMock"

type SpinnerProps = {
    option: dataType[] | levelType[];
    spinnerName: string;
    spinnerId: string;
    handleLevel?: (e : React.ChangeEvent<HTMLSelectElement>) => void
}

export const Spinner = ({option, spinnerName, spinnerId, handleLevel}:SpinnerProps) => {
  return (
    <>
        <select className={spinnerName} name={spinnerName} id={spinnerId} onChange={handleLevel}>
            {
                option.map((option) => (
                    <option key={option.id} value={option.id}>{option.option}</option>
                ))
            }
        </select>
    </>
  )
}
