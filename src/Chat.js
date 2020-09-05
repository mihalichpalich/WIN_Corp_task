import React, {useState} from 'react';

import MessagePanel from "./components/MessagePanel/MessagePanel";
import './Chat.less';

const Chat = () => {
    const [messages, setMessages] = useState([]);

    const onSendMessage = (text, name) => {
        const newMessage = {
            text,
            name
        };

        const newMessagesArray = [...messages, newMessage];
        setMessages(newMessagesArray)
    };

    return (
        <div className="Chat">
            <MessagePanel messages={messages} onSendMessage={onSendMessage}/>
        </div>
    );
};

export default Chat;
