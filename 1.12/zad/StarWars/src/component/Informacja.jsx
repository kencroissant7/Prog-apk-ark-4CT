import { useContext } from "react";
import { NazwaMotywu } from "../App";

export default function Informacja(){
    const motyw = useContext(NazwaMotywu);
    return(<>
    <div>Aktualny motyw to: {motyw==="ciemny" ? "Lord Sith" : "Jedi"}</div>
    </>)
}