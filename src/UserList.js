// src/components/UserList.js
import React, { useEffect, useState } from 'react';
import axios from './axiosConfig';

const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('/api/users/');
                setUsers(response.data);
            } catch (error) {
                console.error('Failed to fetch users');
            }
        };
        fetchUsers();
    }, []);

    return (
      
        <div className="container">
         <div className="row">
          <div className="col-md-6">
        

        <ul>
            {users.map(user => (
                <li key={user.id}>{user.username}</li>
            ))}
        </ul>
        </div>
        </div>
        </div>
    );
};

export default UserList;
