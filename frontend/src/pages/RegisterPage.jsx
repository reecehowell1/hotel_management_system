import React, { useState } from 'react';
import{TextField,Button} from '@mui/material';
import '../styles/AuthStyle.css'
import {Link} from 'react-router-dom';
 
const LoginPage = () => {
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const[forename,setForename]=useState('');
    const[surname,setSurname]=useState('');
    const[loading,setLoading]=useState('')
    const handleEmailChange=(event)=>{
        setEmail(event.target.value);
    }
    const handlePasswordChange=(event)=>{
        setPassword(event.target.value);
    }
    const handleForenameChange=(event)=>{
        setForename(event.target.value);
    }
    const handleSurnameChange=(event)=>{
        setSurname(event.target.value);
    }

  return (
    <div className='auth-page d-flex justify-content-center align-items-center vh-100'>
        <div className='card p-4 m-4 shadow rounded'>
            <div className='text-center mb-4'>
                <img src='/logo192.png' width='80' alt='logo'/>
            </div>
            <h3 className='text-center mb-3 text-primary font-bold'>Paradise View</h3>
            <form>
                <TextField label='First Name' type='forename' variant='outlined' margin='normal' value={forename} onChange={handleForenameChange} fullWidth/>
                <TextField label='Surname' type='surname' variant='outlined' margin='normal' value={surname} onChange={handleSurnameChange} fullWidth/>
                <TextField label='Email' type='email' variant='outlined' margin='normal' value={email} onChange={handleEmailChange} fullWidth/>
                <TextField label='Password' type='password' variant='outlined' margin='normal' value={password} onChange={handlePasswordChange} fullWidth/>
                <div className='mb-2'>
                    <Button className='px-3 py-2 rounded-3' variant='contained' color='primary' type='submit' fullWidth> {loading?"Registering...":"Register"} </Button>

                
                </div>
                <div className='mt-2'>
                    <Link to='/login'>
                        <Button className='px-3 py-2 rounded-3' variant='outlined' color='secondary' type='submit' fullWidth>Login</Button>
                    </Link>
                </div>
            </form>
        </div>
     
    </div>
  )
}
 
export default LoginPage