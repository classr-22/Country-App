import React, { useState } from 'react'
import search from '../assets/search.png'
import {useSelector} from 'react-redux'

function Filterheader({filter,setFilterstring,f}) {
  
  const mode = useSelector((state) => state.mode);

  return (
    <div className= {mode?'Filterheader mode':'Filterheader'}>
        <div>
            <img style={{
                    width: "20px",height: "20px", marginLeft: "10px"
                }} src={search} alt="search icon" />
            <input type="text" value={filter} placeholder='Search for a country' onChange={(e)=>{setFilterstring(e.target.value)}}/>
        </div>
        <select>
            <option>filter by region</option>
        </select>
    </div>
  )
}

export default Filterheader