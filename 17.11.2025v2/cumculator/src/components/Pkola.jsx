import { useState } from "react";
function Pkola(){
     const [liczba1,setLiczba1] = useState(0);
     const [wynik,setWynik] = useState(0);

    const oblicz = () =>{
        parseFloat(setWynik(parseInt(3.14)*(parseInt(liczba1)*parseInt(liczba1))))
    }

    return(

       
<>
<h1>Operacja oblicz P kola</h1>
<hr />
liczba1: <input onChange={(par)=>setLiczba1(par.target.value)} placeholder = "podaj r"/><br />

<hr />
<button onClick={()=>oblicz()}> Oblicz</button>
<hr/>
wynik: {wynik}
</>

    )
}

export default Pkola