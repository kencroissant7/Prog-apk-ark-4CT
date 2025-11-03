function Contact(props) {
    return(
        <>
            <div>
                <ul>
                    <li>{props.imie}</li>
                    <li>{props.nazwisko}</li>
                    <li>{props.email}</li>
                </ul>
            </div>
        </>
    )
}
export default Contact