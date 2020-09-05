import React from 'react';
import PropTypes from 'prop-types';

import './MessagePanel.less';
import MessageList from "../MessageList/MessageList";
import Form from "../Form/Form";

const MessagePanel = ({messages, onSendMessage}) => {
    return (
        <div className="MessagePanel-Form-container">
            <MessageList messages={messages} onSend={onSendMessage}/>
            <Form onSend={onSendMessage}/>
        </div>
    );
};

MessagePanel.defaultProps = {
    messages: {}
};

MessagePanel.propTypes = {
    messages: PropTypes.object.isRequired
};

export default MessagePanel;