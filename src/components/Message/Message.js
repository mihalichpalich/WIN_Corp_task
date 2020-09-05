import React from 'react';

import './Message.less';

const Message = ({name, text}) => {
    return (
        <div className="Message">
            <p className="Message-name">{name}</p>
            <div className="Message-text">{text}</div>
        </div>
    )
};

export default Message;