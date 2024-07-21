import React, { useState } from 'react';
import axios from './axiosConfig';
import { useNavigate } from 'react-router-dom';
import './App.css'

const Login = ({ setAuth }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/login/', { username, password });
            setAuth(true);
            setMessage('Login successful');
            navigate('/users');
        } catch (error) {
            setMessage('Login failed');
        }
    };

    return (

        <div className="container">
            <div className="row">
                <div className="col-md-12 left">

                    <form onSubmit={handleSubmit}>

                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label"><strong>Username</strong></label>
                            <input type="text" required className='form-control len' style={{ width: '50%' }} value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
                        </div>

                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label"><strong>Password</strong></label>
                            <input type="password" style={{ width: '50%' }} className='form-control len' value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                        </div>
                        <button className='btn btn-success' type="submit">Login</button>

                        <p>{message}</p>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Login;