import React, {useEffect, useState} from 'react';

import MessagePanel from "./components/MessagePanel/MessagePanel";
import './Chat.less';
import firebaseDB from './api/firebase';

const Chat = () => {
    const [messages, setMessages] = useState({});

    useEffect(() => {
        firebaseDB.on('value', snapshot => {
            if (snapshot.val()) {
                setMessages({
                    ...snapshot.val()
                })
            }
        })
    }, []);


    const onSendMessage = (text, name) => {
        const newMessage = {
            text,
            name
        };

        const newMessagesArray = [messages, newMessage];
        setMessages(newMessagesArray)
    };

    return (
        <div className="Chat">
            <MessagePanel messages={messages} onSendMessage={onSendMessage}/>
        </div>
    );
};

export default Chat;
