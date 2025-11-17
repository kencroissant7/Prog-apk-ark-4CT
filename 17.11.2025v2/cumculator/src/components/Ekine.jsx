import { useState } from "react";
function Ekine(){
     const [liczba1,setLiczba1] = useState(0);
     const [liczba2,setLiczba2] = useState(0);
     const [wynik,setWynik] = useState(0);

    const oblicz = () =>{
        parseFloat(setWynik(0.5*parseInt(liczba1)*(parseFloat(liczba2)*parseFloat(liczba2))))
       
    }

    return(

       
<>
<h1>Operacja oblicz E kinetyczna</h1>
<hr />
liczba1 (kg): <input onChange={(par)=>setLiczba1(par.target.value)} placeholder = "podaj mase w (kg)"/><br />
liczba2 (m/s): <input onChange={(par)=>setLiczba2(par.target.value)} placeholder = "podaj predkosc w (m/s)"/><br />

<hr />
<button onClick={()=>oblicz()}> Oblicz</button>
<hr/>
wynik: {wynik}
</>

    )
}

export default Ekine