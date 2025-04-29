import React from 'react';

import { data } from './Contxapi';

function childc() {
  return (
    <div>
       <data.Consumer>
        {
        (name)=>{
            return(
                <h1>{name}</h1>
            )
        }}
        </data.Consumer> 
    </div>
  )
}

export default childc