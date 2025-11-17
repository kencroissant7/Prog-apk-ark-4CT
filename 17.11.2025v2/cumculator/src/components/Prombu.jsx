import { useState } from "react";
function Prombu(){
     const [liczba1,setLiczba1] = useState(0);
     const [liczba2,setLiczba2] = useState(0);
     const [wynik,setWynik] = useState(0);

    const oblicz = () =>{
        setWynik(parseInt(liczba1) * parseInt(liczba2))
    }

    return(

       
<>
<h1>Operacja pole rombu</h1>
<hr />
liczba1: <input onChange={(par)=>setLiczba1(par.target.value)} placeholder = "podaj a"/><br />
liczba2: <input onChange={(par)=>setLiczba2(par.target.value)} placeholder = "podaj h"/>
<hr />
<button onClick={()=>oblicz()}> Oblicz</button>
<hr/>
wynik: {wynik}
</>

    )
}

export default Prombu