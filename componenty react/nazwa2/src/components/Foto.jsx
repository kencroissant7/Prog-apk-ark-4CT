import { useState,useEffect } from "react";

function Foto(){
  const[n,setn] = useState("")


  useEffect(()=>{
    setn("niggas.com")

  },[])
  return(<>{u && <img src={u} alt="123"></img>}</>)

}

export default Foto