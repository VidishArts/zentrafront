// src/components/Register.js
import React, { useState } from 'react';
import axios from './axiosConfig';
import './App.css'

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/register/', { username, password, email });
            setMessage('Registration successful');
        } catch (error) {
            setMessage('Registration failed');
        }
    };

    return (

        <div className="container">
         <div className="row">
          <div className="col-md-12 left">
          
         
        <form onSubmit={handleSubmit}>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label"> <strong>Email address</strong></label>
            <input type="email" required class="form-control" style={{width:'50%'}} value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" /> 
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        </div>
         
        
        <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label"><strong>Username</strong></label>
        <input required className='form-control len' style={{width:'50%'}} type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
        </div>
        
        <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label"><strong>Password</strong></label>
        <input class="form-control len" required type="password" style={{width:'50%'}} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
        </div>
        
       
            
            <button className='btn btn-success' type="submit">Register</button>
        
            <p>{message}</p>
        </form>
        </div>
        </div>
       </div>
        
        
    );
};

export default Register;
