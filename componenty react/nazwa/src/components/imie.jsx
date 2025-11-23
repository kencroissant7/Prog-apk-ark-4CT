import { useDebugValue, useEffect, useState } from "react";

function Imie(){
    const[i,seti] = useState("")
    const[n,setn] = useState("")
    useEffect(()=>{
        seti("Kuba")
        setn("Czarnuch")
    },[])
     return(<><h1>{i}{n}</h1></>)
}

export default Imie;
