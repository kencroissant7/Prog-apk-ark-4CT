import Foto from "./Foto"
function Srodek() {
    return(
        <>
            <div style={{width:"calc(100% - 40px)",height:"calc(75% - 40px)",border:"1px black solid",textAlign:"center",display:"flex",justifyContent:"space-between", padding:"20px"}}>
                <Foto
                    src="https://brubeck.pl/wp-content/uploads/2024/06/tatry-wysokie-szlaki-1.webp"
                    alt="Tatry wysokie"
                />
                <Foto
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/West_Tatry.jpg/1200px-West_Tatry.jpg"
                    alt="Tatry zachodnie"
                />
                <Foto
                    src="https://upload.wikimedia.org/wikipedia/commons/9/97/Gerlachovsky_stit_from_Hozelec_01.jpg"
                    alt="Tatry wschodnie"
                />
                
            </div>
        </>
    )
}
export default Srodek