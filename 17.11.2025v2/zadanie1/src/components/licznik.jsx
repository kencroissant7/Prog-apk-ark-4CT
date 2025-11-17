
import { useState } from "react";
function Licznik(){
    const[licznik,setLicznik] = useState(0);
    return(
    <>
    <h2>licznik: {licznik}</h2><hr />
    <div><button onClick={()=>setLicznik(wartosc=>wartosc + 1)}>Licznik++</button>
    <button onClick={()=>setLicznik(0)}>Reset</button></div>
     
    </>
    )
}
export default Licznik;