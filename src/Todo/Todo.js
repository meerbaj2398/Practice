import React, { useState } from 'react'

function Todo() {
    // const[todo, setTodo] = useState('');
    const[todo, setTodo] = useState({
        task:''
    })
    const[error, setError] = useState({});
    const[arr, setArr] = useState([]);


    const handleChange=(e)=>{
        const{name,value} = e.target;
        setTodo({
            ...todo,
            [name] : value
        })
        setError({
            ...error,
            [name]:''
        })
    }

    const validateForm=()=>{
        let newError= {};
        if(!todo.task.trim()){
          newError.task = "please enter any todo";
        }
         setError(newError);
         return Object.keys(newError).length === 0;
    }
    const handleDelete=(index)=>{
        const del = arr.filter((_,item)=> item !== index);
      setArr(del);  
      console.log(index)
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        const isValid = validateForm();
        if(isValid){
        setArr((prev)=>([...prev, todo]));
        setTodo({task:''});
        setError({});
        }else {
            console.log('Form validation failed');
        }
    }
  return (
   <>
   <h1>Todo Application</h1>
   <form onSubmit={handleSubmit}>
    <input type='text' name='task' value={todo.task}  onChange={handleChange} placeholder='Type any task...'></input>
    <button >ADD</button>
    {error.task && <div style={{ color: 'red' }}>{error.task}</div>}
   </form>
   
   
   <div>
          <h3>All Submissions</h3>
          <ul>
            {arr.map((item, index) => (
              <li key={index}>
                {item.task} <button onClick={()=>handleDelete(index)}>delete</button>
              </li>
            ))}
          </ul>
        </div>
   </>
  )
}

export default Todo