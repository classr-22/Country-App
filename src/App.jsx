import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Filterheader from './components/Filterheader'
import Card from './components/Card'
import { Route, Routes } from 'react-router'
import Country from './components/Country'


function App() {
  const [filterstring, setFilterstring] = useState("");
  const [country,setCountry] = useState({});

  return (
    <>
      <Header></Header>
      <Filterheader filter={filterstring} setFilterstring={setFilterstring}></Filterheader>
      <Routes>
        <Route path="/" element={<Card filter={filterstring} setCountry={setCountry}></Card>}>
        </Route>
        <Route path='/name/:country' element={<Country country={country}></Country>}></Route>
      </Routes>
      
    </>
  )
}

export default App
