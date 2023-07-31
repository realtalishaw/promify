import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header'

function Chat() {
    const location = useLocation();
    const { input } = location.state || {};
    const [messages, setMessages] = useState([input]); // The initial message is the user's input
    const [newMessage, setNewMessage] = useState(''); // The message currently being typed

    const handleSend = () => {
        setMessages((prevMessages) => [...prevMessages, newMessage, 'Bot response']);
        setNewMessage('');
    };

    return (
        <>
        <Header/>

        <div className="drawer lg:drawer-open">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col items-center justify-center">
            <div className="h-screen flex flex-col justify-between chat chat-end pt-20">
                <div className="overflow-y-auto p-4 ">
                    {messages.map((message, index) => (
                        <div key={index} className="mb-4  chat-bubble chat-bubble-primary">
                            {message}
                        </div>
                    ))}
                </div>
                <div className="border-t-2 border-gray-200 px-4 py-2 flex items-center bg-white fixed bottom-0 w-full">
                    <input 
                        type="text" 
                        value={newMessage} 
                        onChange={(e) => setNewMessage(e.target.value)} 
                        className="flex-grow mr-4 p-2 border-2 border-gray-300 rounded-lg" 
                        placeholder="Type a message..."
                    />
                    <button 
                        className="py-2 px-4 bg-blue-500 text-white rounded-lg" 
                        onClick={handleSend}
                    >
                        Send
                    </button>
                </div>
            </div>
          </div> 
          <div className="drawer-side">
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
            <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
              <li><a>Sidebar Item 1</a></li>
              <li><a>Sidebar Item 2</a></li>
            </ul>
          </div>
        </div>
        </>
    );
}

export default Chat;
