import React from 'react';

import Message from "../Message/Message";

const MessageList = ({messages}) => {
    return (
        <div className="MessagePanel-Form">
            {Object.keys(messages).map(id => <Message key={id} text={messages[id].text} name={messages[id].name}/>)}
            {/*{messages.map(({id, text, name}) => <Message key={id} text={text} name={name}/> )}*/}
        </div>
    );
};

export default MessageList;