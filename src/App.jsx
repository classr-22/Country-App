import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Filterheader from './components/Filterheader'
import Card from './components/Card'


function App() {
  const [filterstring, setFilterstring] = useState("");

  return (
    <>
      <Header></Header>
      <Filterheader filter={filterstring} setFilterstring={setFilterstring}></Filterheader>
      <Card filter={filterstring}></Card>
      
    </>
  )
}

export default App
