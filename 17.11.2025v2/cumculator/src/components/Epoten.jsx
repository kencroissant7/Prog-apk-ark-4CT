import { useState } from "react";
function Epoten(){
     const [liczba1,setLiczba1] = useState(0);
     const [liczba2,setLiczba2] = useState(0);
     const [wynik,setWynik] = useState(0);

    const oblicz = () =>{
        parseFloat(setWynik((parseFloat(liczba1)*9.81*parseFloat(liczba2))))
       
    }

    return(

       
<>
<h1>Operacja oblicz E potencjalna</h1>
<hr />
liczba1 (kg): <input onChange={(par)=>setLiczba1(par.target.value)} placeholder = "podaj mase w (kg)"/><br />
liczba2 (m): <input onChange={(par)=>setLiczba2(par.target.value)} placeholder = "podaj wysokosc w (metrach)"/><br />

<hr />
<button onClick={()=>oblicz()}> Oblicz</button>
<hr/>
wynik: {wynik}
</>

    )
}

export default Epoten