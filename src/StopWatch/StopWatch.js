import React, { useEffect, useState } from 'react'

function StopWatch() {
    const[val, setVal] = useState(0);
    const[isRunning, setIsRunning] = useState(false);

useEffect(()=>{
    let timer;
    if(isRunning) {
       timer =  setInterval(()=>{
           
            setVal((prev)=>prev+1);
        },1000)
}
return()=>{
    clearInterval(timer)
}
    }, [isRunning]);
   
const handleStop=()=>{
    setVal(0);
}
  return (
    <>
    <h1>Stop Watch</h1>
    <div>
        <p>{val}</p>
        <button onClick={()=>setIsRunning(false)}>Stop</button>
        <button onClick={()=>setIsRunning(true)}>Start</button>
        <button>Reset</button>
    </div>
    </>
  )
}

export default StopWatch