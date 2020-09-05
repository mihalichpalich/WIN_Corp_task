import React, {useEffect, useState} from 'react';

import MessagePanel from "./components/MessagePanel/MessagePanel";
import './Chat.less';
import firebaseDB from './api/firebase';

/**
 * Контейнерная компонента для чата
 *
 * @component
 */

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

    /**
     * Функция отправки и отображения сообщения
     * @param {string} text Текст сообщения
     * @param {string} name Имя пользователя
     */
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
