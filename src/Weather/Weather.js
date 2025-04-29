import React, { useState } from 'react'
import dummy from './Dummy.json';
import './work.css';

function Weather() {
    const[store, setStore] = useState(dummy);
    const[data, setData] = useState(" ");

    const handleChange=(e)=>{
        // console.log(e.target.value);
        setData(e.target.value);    
    }
    let  filt = store.filter((val)=>{
        return val.location.toLowerCase().includes(data);
    })
  return (
    <div>
        <h1>Weather Application</h1>
        <input type='search' placeholder='Search here...' onChange={handleChange}></input>
        {/* <button>Submit</button> */}
        {
            filt.map((item, idx)=>(
                <div className='cart' style={{ border: '1px solid gray', margin: '10px', padding: '10px' }}>
                    <h3>{item.date}</h3>
                    <p>W/sp {item.windSpeed}</p>
                    <p>{item.condition}</p>
                    <p>Tempreture min {item.temperature.min}  max {item.temperature.max}</p>
                    <h1>{item.location}</h1>
                </div>
            ))
        }

    </div>
  )
}

export default Weather