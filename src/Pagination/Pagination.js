import React, { useEffect, useState } from 'react';
import page from './Page.json';

function Pagination() {
const[userData, setUserData] = useState(page);
const[currDataOnPage, setCurrDataOnPage] = useState(5);
const[currIdx, setCurrIdx] = useState(1);
const[but, setBut] = useState(1);


    const startIndex = (currIdx-1)*currDataOnPage;
    const endIndex = startIndex + currDataOnPage;
    const pageItems = userData.slice(startIndex, endIndex);

    const lastIDx =  userData.length-10;
    const totalPages = Math.ceil(userData.length / currDataOnPage)


const handleCurrPage=(page)=>{
  setCurrIdx(page);
}

    const handleNext=()=>{
        const newIdx = currIdx+1;
        if(newIdx > totalPages ){
        setCurrIdx(currIdx);
        }else{
            setCurrIdx(newIdx);
        }
    }


    const handlePrev=()=>{
        const prevIdx = currIdx-1;
        if(startIndex < currIdx){
            setCurrIdx(currIdx);
        }else{
            setCurrIdx(prevIdx)
        }
    }




  return (
    <div>
        <div>
            {
                pageItems.map((item, idx)=>(
                    <div key={idx}>
                        <p >{item.name}</p>
                        
                        
                    </div>
                    
                 
                    
                ))
            }
        </div>
        <button onClick={()=>handlePrev()}>Prev</button>
     {
      Array.from({length: totalPages}, (_, idx)=>(
        <button onClick={()=>handleCurrPage(idx+1)}
         >{idx+1}</button>
      ))
     }
        <button onClick={()=>handleNext()}>Next</button>


        

    </div>
  )
}

export default Pagination