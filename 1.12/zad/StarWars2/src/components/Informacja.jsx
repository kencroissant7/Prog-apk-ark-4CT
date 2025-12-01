import { useContext } from "react";
import { NazwaMotywu } from "../App";

export default function Informacja(){
    const {stronamocy}= useContext(NazwaMotywu);
    return(<>
    <div>Aktualny motyw to: {stronamocy==="ciemna" ? "Przemysl swoje zycie" : "Jestes na dobrej drodze"}</div>
    </>)
}