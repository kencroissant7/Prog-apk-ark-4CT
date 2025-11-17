import { useState } from "react";
function Dodawanie(){
     const [liczba1,setLiczba1] = useState(0);
     const [liczba2,setLiczba2] = useState(0);
     const [wynik,setWynik] = useState(0);

    const oblicz = () =>{
        setWynik(parseInt(liczba1) + parseInt(liczba2))
    }

    return(

       
<>
<h1>Operacja dodawania</h1>
<hr />
liczba1: <input onChange={(par)=>setLiczba1(par.target.value)} placeholder = "podaj liczbe1"/><br />
liczba2: <input onChange={(par)=>setLiczba2(par.target.value)} placeholder = "podaj liczbe2"/>
<hr />
<button onClick={()=>oblicz()}> Oblicz</button>
<hr/>
wynik: {wynik}
</>

    )
}

export default Dodawanie