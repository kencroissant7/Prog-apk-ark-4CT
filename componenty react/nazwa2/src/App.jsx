import { useEffect, useState } from 'react'
import Zero from '../../nazwa/src/components/zero'
import Imie from '../../nazwa/src/components/imie'
import Foto from '../../nazwa/src/components/foto'


function App() {
const[w,setw] = useState("0")
const[k,setk] = useState(<Zero/>)

useEffect(()=>{
  if(w === "0") setk(<Zero/>)
    if(w === "1") setk(<Imie/>)
      if(w === "2") setk(<Foto/>)
})
  return (
    <>
    <select onChange={(e)=>setw(e.target.value)}>
      <option value="0">start</option>
      <option value="1">imie</option>
      <option value="2">foto</option>
    </select>
    {k}
    </>
    
  )

}
export default App
