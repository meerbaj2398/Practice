import React, { useState } from 'react';

import './Thme.css';

function ToggleSwitch() {
  const[mode , setMode] = useState('light');

  const handleClick=()=>{
    if(mode === 'light') {
      setMode('black');
      document.body.style.backgroundColor = 'black';
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
   
  }
  return (
    <div>
     <h2>Basic Toggle Switch</h2>

<label className="toggle-switch">
    <input type="checkbox" onClick={handleClick}/>
    <span className="slider"></span>
</label>

    </div>
  )
}

export default ToggleSwitch