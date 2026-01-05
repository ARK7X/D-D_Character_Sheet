import './App.css'
import { CharacterSheetProvider } from './context/CharacterSheetProvider'
import { CharacterSheet } from './pages/Charactersheet'

function App() {

  return (
    <CharacterSheetProvider>
      <CharacterSheet/>
    </CharacterSheetProvider>
  )
}

export default App
