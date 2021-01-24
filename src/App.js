import React, { useState } from 'react';
import './App.css';
import Board from './components/Board.js';
import Input from './components/Input';

function App() {
  const [userText, setUserText] = useState('');
  const [messageText, setMessageText] = useState('');
  const [messages, setMessages] = useState([]);
  
  
  return (
    <div className="App">
      <header>
        <h1>Message Board</h1>
      </header>
      <Input 
        user={userText}
        setUser={setUserText}
        message={messageText}
        setMessage={setMessageText}
        messages={messages}
        setMessages={setMessages}/>
      <Board 
        messages={messages}
        setMessages={setMessages}/>
    </div>
  );
}

export default App;
