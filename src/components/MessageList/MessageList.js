import React from 'react';

import Message from "../Message/Message";

const MessageList = ({messages}) => {
    console.log(messages);
    return (
        <div className="MessagePanel-Form">
            {messages.map(({id, text, name}) => <Message key={id} text={text} name={name}/> )}
        </div>
    );
};

export default MessageList;