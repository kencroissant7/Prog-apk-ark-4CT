import Dodawanie from "./components/Dodawanie"
import Odejmowanie from "./components/Odejmowanie"
import Dzielenie from "./components/Dzielenie"
import Mnozenie from "./components/Mnozenie"
import Zerowy from "./components/Zerowy"
import {useEffect,useState} from "react"
function App() {
  const [sterowanie,setSterowanie] = useState("0");
  const [operacje,setOperacje] = useState(<Zerowy/>);
  useEffect(()=>{
    if(sterowanie==="0") setOperacje(<Zerowy/>)
    if(sterowanie==="1") setOperacje(<Dodawanie/>)
    if(sterowanie==="2") setOperacje(<Odejmowanie/>)
    if(sterowanie==="3") setOperacje(<Dzielenie/>)
    if(sterowanie==="4") setOperacje(<Mnozenie/>)
  },[operacje])

  return (
    <>
        <div>
          <select onChange={(e)=>setSterowanie(e.target.value)}>
            <option value="0">ZERO</option>
            <option value="1">Dodawanie</option>
            <option value="2">Odejmowanie</option>
            <option value="3">Dzielenie</option>
            <option value="4">Mnozenie</option>
          </select>
          <hr />
          {operacje}
        </div>
    </>
  )
}

export default App
