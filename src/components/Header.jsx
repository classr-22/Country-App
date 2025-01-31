import React from 'react'
import halfMoon from '../assets/half-moon.png';
import sun from '../assets/brightness.png';
import {useSelector,useDispatch } from 'react-redux'
import { change } from '../store/modeSlice.jsx'

function Header() {

  const dispatch = useDispatch();
  const mode = useSelector((state) => state.mode);


  return (
    <div className= {mode ? 'headerchanged' : 'header'}>
        <h3>Where in the world?</h3>
        <div className='modechange' style={{cursor: "pointer"}} onClick={()=>{dispatch(change())}}>
            <img src={mode? sun : halfMoon} style={{
                width: mode ? '20px' : '15px', height: mode ? '20px' : '15px',
            }} alt="half moon logo" />
            {mode? <div>Light mode</div> : <div>Dark mode</div>}
        </div>
    </div>
  )
}

export default Header