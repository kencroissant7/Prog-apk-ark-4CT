import Epoten from "./components/Epoten"
import Ekine from "./components/Ekine"
import Pkola from "./components/Pkola"
import Pprostokata from "./components/Pprostokata"
import Prombu from "./components/Prombu"
import Ptrojkata from "./components/Ptrojkata"
import Zerowy from "./components/Zerowy"
import {useEffect,useState} from "react"
function App() {
  const [sterowanie,setSterowanie] = useState("0");
  const [operacje,setOperacje] = useState(<Zerowy/>);
  useEffect(()=>{
    if(sterowanie==="0") setOperacje(<Zerowy/>)
    if(sterowanie==="1") setOperacje(<Pkola/>)
    if(sterowanie==="2") setOperacje(<Prombu/>)
    if(sterowanie==="3") setOperacje(<Ptrojkata/>)
    if(sterowanie==="4") setOperacje(<Pprostokata/>)
    if(sterowanie==="5") setOperacje(<Epoten/>)
    if(sterowanie==="6") setOperacje(<Ekine/>)
  },[operacje])

  return (
    <>
        <div>
          <select onChange={(e)=>setSterowanie(e.target.value)}>
            <option value="0">ZERO</option>
            <option value="1">Pkola</option>
            <option value="2">Prombu</option>
            <option value="3">Ptrojkata</option>
            <option value="4">Pprostokata</option>
            <option value="5">Epoten</option>
            <option value="6">Ekine</option>
          </select>
          <hr />
          {operacje}
        </div>
    </>
  )
}

export default App
