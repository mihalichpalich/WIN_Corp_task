import React from 'react';

import './Message.less';

/**
 * Сообщение
 *
 * @component
 * @param {string} name Имя пользователя
 * @param {string} text Текст сообщения
 */

const Message = ({name, text}) => {
    return (
        <div className="Message">
            <p className="Message-name">{name}</p>
            <div className="Message-text">{text}</div>
        </div>
    )
};

export default Message;