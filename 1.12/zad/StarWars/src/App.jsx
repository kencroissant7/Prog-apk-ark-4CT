import React from "react"
import Informacja from "./component/informacja"

export const NazwaMotywu = React.createContext('ciemny')
function App() {

  return (
    <>
      <NazwaMotywu.Provider value="ciemny">
        <Informacja/>
      </NazwaMotywu.Provider>
    </>
  )
}

export default App
