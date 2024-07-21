import React from 'react';
import axios from './axiosConfig';
import { useNavigate } from 'react-router-dom';

const Logout = ({ setAuth }) => {
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await axios.post('/api/logout/');
            setAuth(false);
            navigate('/login');
        } catch (error) {
            console.error('Logout failed');
        }
    };

    return (
        <button onClick={handleLogout}>Logout</button>
    );
};

export default Logout;
