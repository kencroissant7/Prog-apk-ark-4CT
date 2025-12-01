import { useState,createContext } from 'react'
import React from 'react'
export const ThemeContext = React.createContext()
import './App.css'
import Header from './components/header'
import Main from './components/main'
import Footer from './components/footer'

function App() {
  const [motyw, setMotyw] = useState("czerwony")

  return (
    <>
      <ThemeContext.Provider value={{motyw,setMotyw}}>
        <Header/>
        <Main/>
        <Footer/>
      </ThemeContext.Provider>
    </>
  );
}

export default App
