import { useDebugValue, useEffect, useState } from "react";

function Foto(){
    const[u,setu] = useState("")
    useEffect(()=>{
        setu("https://assetsskul.iplsc.com/images/logo.svg")
        
    },[])
    return(<>{u && <img src={u} alt="czarnuch"></img>}</>)
}

export default Foto