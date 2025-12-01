import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"


function ONas() {
return <h1>Strona o nas</h1>
}

function Kontakt(){
  return <h1> Strona Kontakt</h1>
}

function Aktualnosci(){
  return <h1>Strona aktualnosci</h1>
}

function App(){
  return (
    
      <Router>
        <nav style={{display: "flex",gap:"20px", padding:"20px"}}>
          <Link to="/o-nas">O nas</Link>
          <Link to="/kontakt">Kontakt</Link>
          <Link to="/aktualnosci">Aktualnosci</Link>
        </nav>
<Routes>
  <Route path="/o-nas" element={<ONas />} />
  <Route path="kontakt" element={<Kontakt />} />
  <Route path="/aktualnosci" element={<Aktualnosci />} />

</Routes>

      </Router>
    
  )
}

export default App
