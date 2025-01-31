import React from 'react'
import { useNavigate } from 'react-router'

function Country({country}) {

    const navigate = useNavigate();

  return (
    <>
        <div>{country.name.common}</div>
        <button onClick={()=>{
            navigate('/');
        }}>back</button>
    </>
  )
}

export default Country