import { useState,useEffect } from "react";

function Imie(){
  const[i,seti] = useState("")
  const[n,setn] = useState("")

  useEffect(()=>{
    seti("let")
    setn("net")
  },[])
  return(<><h1>{i}{n}</h1></>)

}

export default Imie;