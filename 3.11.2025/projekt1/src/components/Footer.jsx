import Contact from "./Contact"
function Footer() {
    return(
        <>
            <footer style={{width:"100%",height:"10%",border:"1px black solid",textAlign:"center"}}>
                Kontakt do mnie:
                <Contact
                    imie="Konrad"
                    nazwisko="Bienkowski"
                    email="email@email.com"
                />
            </footer>
        </>
    )
}
export default Footer