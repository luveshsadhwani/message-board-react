import React from 'react';
import shortid, { generate } from 'shortid';
// Input form for our messages
const Input =(props) => {
    const submitHandler = async function(e) {
        e.preventDefault();
        let item = {
            user: props.user,
            message: props.message, 
            shortid: shortid.generate()
        }
        props.setMessages([
            ...props.messages, 
            item
        ])
        const response = await fetch('http://localhost/restful_api/api/messages',
            {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(item)
            })
        return response.json().then(props.setUser("")).then(props.setMessage(""))
    }
    
    return (
        <div>
            <h2>What message do you want to send?</h2>
            <form>
                <input type="text" placeholder="Name" value={props.user} onChange={(e)=> props.setUser(e.target.value)}/>
                <br/>
                <input type="text" placeholder="Message" value={props.message} onChange={(e)=> props.setMessage(e.target.value)}/>
                <br/>
                <button type="submit" onClick={submitHandler}>Send</button>
            </form>
        </div>
    )
}

export default Input;