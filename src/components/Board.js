import React from 'react';
import Message from './Message';
// Input form for our messages
class Board extends React.Component {
    constructor(props) {
        super(props);
    }

    async componentDidMount() {
        const response = await fetch('http://localhost/restful_api/api/messages');
        const data = await response.json();
        console.log(data);
        this.props.setMessages(...this.props.messages, data);
    }

    render() {
        return(
            <div>
                <h2>Check out our messages. Can you find yours?</h2>
                {this.props.messages.map(message => (
                    <Message user={message.user} text={message.message} key={message.shortid}/>
                ))}
            </div>
        )
    }
}



export default Board;