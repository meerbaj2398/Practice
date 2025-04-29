import React, { useContext, useState } from 'react'
import ChildToggle from './ChildToggle';


const data = useContext();
function ContextToggle() {
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
        <input type='checkbox'></input>
        <data.Provider value={handleClick()}>
             <ChildToggle/>
        </data.Provider>
    </div>
    
  )
}

export default ContextToggle;
export {data};