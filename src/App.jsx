import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Filterheader from './components/Filterheader'
import Card from './components/Card'
import { Route, Routes } from 'react-router'
import Country from './components/Country'
import { useSelector } from 'react-redux'



function App() {
  const [filterstring, setFilterstring] = useState("");
  const [country,setCountry] = useState({});
  const mode = useSelector((state) => state.mode);
  return (
    <div className= {mode? "mode" : ""}>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Filterheader filter={filterstring} setFilterstring={setFilterstring}></Filterheader>}></Route>
      </Routes>
      <Routes>
        <Route path="/" element={<Card filter={filterstring} setCountry={setCountry}></Card>}>
        </Route>
        <Route path='/name/:country' element={<Country country={country}></Country>}></Route>
      </Routes>
      
    </div>
  )
}

export default App
