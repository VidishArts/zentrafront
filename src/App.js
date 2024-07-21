// src/App.js
import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Register from './Register';
import Login from './Login';
import Logout from './Logout';
import UserList from './UserList';
import InterestList from './InterestList';
import Chat from './Chat';

function App() {
    const [isAuth, setIsAuth] = useState(!!localStorage.getItem('token'));

    return (
        <Router>
            <div>
                <nav className="navbar navbar-dark bg-dark">
                    <Link className='btn btn-lg resgiter btn-outline-success me-2' to="/register">Register</Link>
                    <Link className='btn login btn-lg btn-outline-danger' to="/login">Login</Link>
                    {isAuth && <Link className='btn btn-sm resgiter btn-outline-success me-2' to="/logout">Logout</Link>}
                    {isAuth && <Link className='btn login btn-sm btn-outline-danger' to="/users">Users</Link>}
                </nav>
                <h3 style={{ marginLeft: '520px', marginTop: '10px' }}>WELCOME TO ZENTRA PROJECT</h3>
                <Routes>
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login setAuth={setIsAuth} />} />
                    <Route path="/logout" element={<Logout setAuth={setIsAuth} />} />
                    <Route path="/users" element={<UserList />} />
                    <Route path="/interests" element={<InterestList />} />
                    <Route path="/chat" element={<Chat />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
