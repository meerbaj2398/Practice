// import React, { useEffect, useState } from 'react';
// import userData from './Ques.json';

// function PracQuiz() {
//     const [ques, setQues] = useState(userData);
//     const [currId, setCurrId] = useState(1);
//     const [correctCount, setCorrectCount] = useState(0);
//     const [wrongCount, setWrongCount] = useState(0);
//     const [userAnswers, setUserAnswers] = useState([]);
//     const [isQuizFinished, setIsQuizFinished] = useState(false);

//     const quesLength = ques.filter((q) => q.id === currId);

//     const handleClick = (selectedAns) => {
//         const nextAns = currId + 1;
//         const currentQues = ques.find(q => q.id === currId);

//         const isCorrect = selectedAns === currentQues.answer;
//         if (isCorrect) {
//             setCorrectCount(prev => prev + 1);
//         } else {
//             setWrongCount(prev => prev + 1);
//         }

//         setUserAnswers(prev => [
//             ...prev,
//             {
//                 question: currentQues.question,
//                 selected: selectedAns,
//                 correct: currentQues.answer,
//                 isCorrect: isCorrect
//             }
//         ]);

//         const nextQuesExists = ques.some((q) => q.id === nextAns);
//         if (nextQuesExists) {
//             setCurrId(nextAns);
//         } else {
//             setIsQuizFinished(true);
//         }
//     };

//     return (np
//         <div>
//             {!isQuizFinished ? (
//                 <div>
//                     {
//                         quesLength.map((item, idx) => (
//                             <div key={item.id}>
//                                 <h3>{item.question}</h3>
//                                 {
//                                     item.options.map((ans, index) => (
//                                         <p key={index} onClick={() => handleClick(ans)}>{ans}</p>
//                                     ))
//                                 }
//                             </div>
//                         ))
//                     }
//                 </div>
//             ) : (
//                 <div>
//                     <h2>Quiz Completed</h2>
//                     <p>✅ Correct: {correctCount}</p>
//                     <p>❌ Wrong: {wrongCount}</p>
//                     <hr />
//                     {
//                         userAnswers.map((item, idx) => (
//                             <div key={idx}>
//                                 <p><strong>Q{idx + 1}: {item.question}</strong></p>
//                                 <p>Your Answer: {item.selected}</p>
//                                 <p style={{ color: item.isCorrect ? 'green' : 'red' }}>
//                                     {item.isCorrect ? 'Correct ✅' : `Wrong ❌ (Correct: ${item.correct})`}
//                                 </p>
//                                 <hr />
//                             </div>
//                         ))
//                     }
//                 </div>
//             )}
//         </div>
//     );
// }

// export default PracQuiz;
