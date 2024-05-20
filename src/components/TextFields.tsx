import React from 'react'
import { FormEvent } from 'react';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
export const TextFields = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({
      username: false,
      password: false,
    });
    const handleSubmit = (e :FormEvent<HTMLFormElement> ) => {
        e.preventDefault();
        const newErrors = {
          username: username === '',
          password: password === '',
        };
        setErrors(newErrors);
      };
  return (

    <form onSubmit={handleSubmit} className='my-10 flex flex-col gap-5 max-w-md'>
         <TextField
         error ={errors.username}
          required
          label="Username"
          value={username}
          helperText={errors.username ? "Incorrect username" : ""}
          onChange={(e)=> setUsername(e.target.value)}
        />
        <TextField
          error=  {errors.password}
          label="Password"
          value={password}
          type='password'
          helperText={errors.password ? "Incorrect password" : ""}
         onChange={(e)=> setPassword(e.target.value)}
        />
        <button type='submit' className='bg-green-300 hover:bg-green-600 py-2 px-6 rounded-lg text-white'>submit</button>

    </form>
  )
}
