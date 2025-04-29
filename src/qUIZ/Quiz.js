import React, { useState } from 'react';
import questionData from './Ques.json';

function Quiz() {
    const[ques, setQues] = useState(questionData);
    const[currId, setCurrId] = useState(1);

    const[rightAns, setIsRightAns] = useState(0);
    const[wrongAns, setWrongAns] =useState(0);
    const[userAns, setUserAns] = useState([]);
    const[isQuestionFinished, setIsQuestionFinished] = useState(false);

    const pageQuestionShow = ques.filter((q)=>q.id === currId);
   
    const handleClick=(selectedAns)=>{
        const nextAns = currId+1;
        const currQues = ques.find((q)=> q.id === currId);
        
    
       const isCorrect = selectedAns === currQues.answer;
       if(isCorrect){
        setIsRightAns((prev)=>prev+1);
       }else{
        setWrongAns((prev)=>prev+1);
       }


       setUserAns((prev)=>[
        ...prev,
        {
            question: currQues.question,
            answer: currQues.answer,
            Correct: isCorrect,
            selected: selectedAns
        }
       ]);


       const nextQuesExists = ques.some((q)=> q.id === nextAns);
        if(nextQuesExists) {
            setCurrId(nextAns);
        }else{
            setIsQuestionFinished(true);
        }
        
    }
  return (
    <div>
         {!isQuestionFinished ? (
    <div>
        {/* <h1>Quiz Application</h1> */}
        {
            pageQuestionShow.map((item, idx)=>(
                <div key={idx}>
                    <h3>{item.id}. {item.question}</h3>
                    {
                        item.options.map((ans, idex)=>(
                            <p key={idex} onClick={()=>handleClick(ans)} >{ans}</p>
                        ))
                    }
                    </div>
            ))
        }
     
            
        </div>
        ) : (
            <div>
                <h2>Quiz Completed</h2>
                <p>✅ Correct: {rightAns}</p>
                <p>❌ Wrong: {wrongAns}</p>
                <hr />
                {
                    userAns.map((item, idx) => (
                        <div key={idx}>
                            <p><strong>Q{idx + 1}: {item.question}</strong></p>
                            <p>Your Answer: {item.selected}</p>
                            <p style={{ color: item.isCorrect ? 'green' : 'red' }}>
                                {item.isCorrect ? 'Correct ✅' : `Wrong ❌ (Correct: ${item.correct})`}
                            </p>
                            <hr />
                        </div>
                    ))
                }
            </div>
        )}
    </div>
);
}

export default Quiz