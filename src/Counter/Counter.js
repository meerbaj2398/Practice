import React, { useState } from 'react'

function Counter() {
    const[count, setCount] = useState(0);

    const handleChange=(e)=>{
        const{name,value}= e.target;
    }


    const handleDelete=()=>{
        if(count>0){
            setCount(count-1);
        }
      
    }

  return (
    <>
    <h1>Counter Application</h1>
    <div>
      <input type="number" name='count' value={count} onClick={handleChange}></input>
      <button onClick={()=>setCount(count+1)}>Add</button>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={()=>setCount(0)}>Reset</button>
    </div>
    </>
  )
}

export default Counter