import React, { useEffect, useState } from 'react';
import axios from './axiosConfig';

const InterestList = () => {
    const [interests, setInterests] = useState([]);

    useEffect(() => {
        const fetchInterests = async () => {
            try {
                const response = await axios.get('/api/interests/');
                setInterests(response.data);
            } catch (error) {
                console.error('Failed to fetch interests:', error);
            }
        };
        fetchInterests();
    }, []);

    return (
        <ul>
            {interests.map((interest) => (
                <li key={interest.id}>
                    {/* Adjust according to actual data structure */}
                    {interest.sender} -&gt; {interest.receiver} : {interest.accepted ? 'Accepted' : 'Pending'}
                </li>
            ))}
        </ul>
    );
};

export default InterestList;
