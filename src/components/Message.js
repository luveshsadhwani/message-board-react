import React from 'react';

function Message(props) {
    return (
        <div>
            {props.user}: {props.text}
        </div>
    )
}

export default Message