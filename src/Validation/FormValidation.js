import React, { useState } from 'react'

function FormValidation() {
    const[field, setField] = useState({
        Name:'',
        email: '',
        password: ''
    })

    const[arr, setArr] = useState([]);

    const[error, setError] = useState({});

    const validateForm=()=>{
        let newError = {};
        if(!field.Name || !field.Name.trim()){
            newError.Name = 'Name field is Invalid plz write again';
        }
        if(!field.email || !field.email.trim()){
            newError.email = 'Invalid Email';
        }
        if(!field.password || !field.password.trim()){
            newError.password = 'Invalid password';
        }
        setError(newError);
        return Object.keys(newError).length === 0;
    }

    const handleChange=(e)=>{
        const{name, value} = e.target;
        setField ({
            ...field,
            [name]: value
        })
        setError({
            ...error,
            [name] : ''
        })
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        const isValid = validateForm();
        if(isValid){
        setArr((prev)=>[...prev, field]);
        setField({ Name: '', email: '', password: ''});
        setError({});
        // console.log(`Name: ${Name}\n Email: ${email}\n Password: ${password}`);
    }
}
    
  return (
    <>
    <h1>Form Validation</h1>
    <form onSubmit={handleSubmit}>
    <div>
        <label>Name </label>
        <input type='text' name='Name' value={field.Name} onChange={handleChange}></input>
    </div>
    {error.Name &&<div style={{color: 'red'}}>{error.Name}</div>}
    <div>
        <label>Email </label>
        <input type='text' name='email' value={field.email} onChange={handleChange}></input>
    </div>
    {error.email &&<div style={{color: 'red'}}>{error.email}</div>}
    <div>
        <label>Password </label>
        <input type='password' name='password' value={field.password} onChange={handleChange}></input>
    </div>
    {error.password &&<div style={{color: 'red'}}>{error.password}</div>}
    <button>Submit</button>
    </form>
    <div>
        <h3>Submition</h3>
        {
            arr.map((item, idx)=>(
                <div key={idx}>
                    <p>{item.Name}</p>
                    <p>{item.email}</p>
                    <p>{item.password}</p>
                </div>
            ))
        }
    </div>
    </>
  )
}

export default FormValidation