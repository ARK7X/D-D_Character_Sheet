import { CharacterInfo } from "../Components/CharacterInfo"
import { SavingThrows } from "../Components/SavingThrows"
import { StatAttribute } from "../Components/StatAttribute"
import "../styles/characterSheet.css"

export const CharacterSheet = () => {
  return (
    <div className="container">
        <div className="item1"><CharacterInfo/></div>
        <div className="item3">
          <StatAttribute/>
          <SavingThrows/>
        </div>
        <div className="item4">4</div>
        <div className="item5">5</div>
        <div className="item6">6</div>
        <div className="item7">7</div>
    </div>
  )
}
