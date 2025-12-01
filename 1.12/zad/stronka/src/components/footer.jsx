import { useContext } from "react";
import { ThemeContext } from "../App"

export default function Footer(){
    const {motyw} = useContext(ThemeContext)

    return(
        <div className={`footer ${motyw}`}>
            Stopka aplikacji - obecny motyw: {motyw}
        </div>
    )
}