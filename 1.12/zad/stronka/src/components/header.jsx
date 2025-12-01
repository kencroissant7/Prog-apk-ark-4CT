import { useContext } from "react";
import { ThemeContext } from "../App";

export default function Header(){
    const { motyw } = useContext(ThemeContext);
    return(
        <div className={`header ${motyw}`}>
            <h1>Moja aplikacja (zyjacy motyw: {motyw})</h1>
        </div>
    )
}