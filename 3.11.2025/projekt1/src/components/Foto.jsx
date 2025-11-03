function Foto(props){
    return(
        <>
            <div style={{width:"30%",height:"30%",border:"1px black solid",textAlign:"center"}}>
                <img src={props.src} alt={props.alt} style={{width:"80%", height:"80%"}}/>
            </div>
        </>
    )
}
export default Foto