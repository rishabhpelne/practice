import axios from 'axios';
import React, { useRef, useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Form = () => {
   const [inputData, setinputData] = useState();

   function handleChange(event) {
    const {name, value} = event.target;
    setinputData({...inputData, [name]: value})
   }

   const handleSubmit = async (event)=> {
   await axios.post("http://localhost:4000/users/", inputData)
   .then(res=> {
    alert("data added successfully")
   })
   }
  return (
    <div className='container'>
      <div className="row">
        <h3 className='text-center my-4'>Register User</h3>
        <TextField name='username' label="Username" className='my-3' variant="outlined" onChange={handleChange} />
        <TextField name='email' label="Email" className='my-3' variant="outlined" onChange={handleChange} />
        <TextField name='password' label="Password" className='my-3' variant="outlined" onChange={handleChange} />
        <TextField name='name' label="Name" className='my-3' variant="outlined" onChange={handleChange} />
        <TextField name='mobile' label="Mobile" className='my-3' variant="outlined" onChange={handleChange} />
        <div className='mt-4'>
        <Button variant="contained" type='submit' onClick={(event)=> handleSubmit(event)} className='me-3'>Register</Button>
        <Button color='secondary' type='reset'>Clear</Button>
        </div>
      </div>
    </div>
  )
}

export default Form