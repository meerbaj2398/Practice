import React, { createContext } from 'react';
import Childc from './childc';

const data = createContext();

function Contxapi() {
    const name = 'Meerbaj';
  return (
    <div>
        <data.Provider value = {name}>
         <Childc/>
        </data.Provider>
    </div>
  )
}

export default Contxapi;

export {data};