import { InputText } from "./InputText";
import "../mocks/classMock";
import { Spinner } from "./Spinner";
import { ClassMock } from "../mocks/classMock";
import type { dataType } from "../mocks/classMock";
import { speciesData } from "../mocks/spiciesMock";
import { backgroundData } from "../mocks/backgroundMock";
import { alignmentData } from "../mocks/alignmentMock";
import "../styles/characterInfo.css";
import { GenericLabel } from "./GenericLabel";
import { levelData, type levelType } from "../mocks/levelMock";
import { useAttributes } from "../hooks/useAttributes";

export const CharacterInfo = () => {
  const classes: dataType[] = ClassMock;
  const species: dataType[] = speciesData;
  const background: dataType[] = backgroundData;
  const alignment: dataType[] = alignmentData;
  const levels: levelType[] = levelData;

  const { handleLevel } = useAttributes();

  return (
    <div className="characterInfoContainer">
      <div className="characterNameContainer">
        <InputText
          type="text"
          id="Character name"
          name="Character name"
          placeholder="Write your character name"
        />
        <GenericLabel forName="Character name" labelText="Character name" />
      </div>
      <div className="infoContainer">
        <div className="class_level_backgorund_playerContainer">
          <div className="class_levelContainer">
            <div className="classContainer">
              <Spinner
                option={classes}
                spinnerName="Classes"
                spinnerId="Classes"
              />
              <GenericLabel forName="Classes" labelText="Class & " />
            </div>
            <div className="levelContainer">
              <Spinner
                option={levels}
                spinnerName="Level"
                spinnerId="Level"
                handleLevel={handleLevel}
              />
              <GenericLabel forName="Level" labelText="Level" />
            </div>
          </div>
          <div className="backgroundContainer">
            <Spinner
              option={background}
              spinnerName="Background"
              spinnerId="Background"
            />
            <GenericLabel forName="Background" labelText="Background" />
          </div>
          <div className="playerNameContainer">
            <InputText
              name="Player name"
              id="Player name"
              type="text"
              placeholder="Write your player name"
            />
            <GenericLabel forName="Player name" labelText="Player name" />
          </div>
        </div>
        <div className="species_alignment_experienceContainer">
          <div className="speciesContainer">
            <Spinner
              option={species}
              spinnerName="Species"
              spinnerId="Species"
            />
            <GenericLabel forName="Species" labelText="Species" />
          </div>
          <div className="alignmentContainer">
            <Spinner
              option={alignment}
              spinnerName="Alignment"
              spinnerId="Alignment"
            />
            <GenericLabel forName="Alignment" labelText="Alignment" />
          </div>
          <div className="experienceContainer">
            <InputText type="number" id="Experience points" min={0} />
            <GenericLabel
              forName="Experience points"
              labelText="Experience points"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
