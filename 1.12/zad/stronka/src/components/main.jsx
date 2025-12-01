import { useContext } from "react";
import { ThemeContext } from "../App";

export default function Main(){
    const{motyw,setMotyw} = useContext(ThemeContext);
    return(<>
    <div className="wybor">
        <label><strong>wybierz motyw:</strong></label>
        <select value={motyw} onChange={(e) => setMotyw(e.target.value)}>
            <option value="czerwony">Czerwony (tło: czerwone, tekst: biały)</option>
            <option value="zielony">Zielony (tło: zielone, tekst: pomaranczowe)</option>
            <option value="niebieski">Niebieski (tło: niebieski, tekst: czarny)</option>
        </select>
    </div>

    <div className={`main ${motyw}`}>
        <p style={{marginTop:"30px"}}>
            To jest sekcja główna. Wszytskie komponenty korzystaja z aktualnego stylu przekazywanego przez <code>Context</code> <code>useContent</code>
        </p>
    </div>
    </>)
}