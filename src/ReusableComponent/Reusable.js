import React, { useState } from 'react';
import './comp.css';

function Reusable() {
    const[isVisible, setIsVisible] = useState(false);

    const handleClick=()=>{
        setIsVisible(true);
    }

    
    return (
        <>
            <h1>Reusable component</h1>
            <button onClick={()=>setIsVisible(true)}>Open</button>
 
                {isVisible && (
                    <div className='popup'>
                    <>
                    <h3>Practice</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
                    Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at
                    nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus
                    sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.
                    Class aptent taciti sociosqu ad litora torquent per conubia nostra. In
                    consectetur, risus ac eleifend viverra, nunc libero suscipit justo. Nullam
                    quis risus eget urna mollis ornare vel eu leo. Donec ullamcorper nulla non metus auctor
                    fringilla. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Curabitur blandit
                    tempus porttitor. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
                    Vestibulum id ligula porta felis euismod semper. Maecenas faucibus mollis interdum. </p>
                    <button onClick={()=>setIsVisible(false)}>Close</button>
                    </>
                    </div>
                   )}  
         
            
          

            
        </>
    )
}

export default Reusable