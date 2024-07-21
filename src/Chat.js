import React, { useEffect, useState } from 'react';
import axios from './axiosConfig';

const Chat = ({ user }) => {
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');

    useEffect(() => {
        const fetchMessages = async () => {
            const response = await axios.get('/api/messages/');
            setMessages(response.data);
        };
        fetchMessages();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.post('/api/messages/', { sender: user, content: message });
        setMessages([...messages, response.data]);
        setMessage('');
    };

    return (
        <div>
            <ul>
                {messages.map(msg => (
                    <li key={msg.id}>{msg.sender}: {msg.content}</li>
                ))}
            </ul>
            <form onSubmit={handleSubmit}>
                <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Message" />
                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default Chat;