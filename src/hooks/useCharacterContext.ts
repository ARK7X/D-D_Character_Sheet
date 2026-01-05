import { useContext } from "react"
import { CharacterSheetContext } from "../context/CharacterSheetContext"

export const useCharacterContext = () => {
    const context = useContext(CharacterSheetContext);

    if (!context) {
        throw new Error("useCharacterSheet must be used inside CharacterSheetProvider");
    }

    return context;
}