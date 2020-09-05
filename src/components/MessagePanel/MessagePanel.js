import React from 'react';
import PropTypes from 'prop-types';

import './MessagePanel.less';
import MessageList from "../MessageList/MessageList";
import Form from "../Form/Form";

/**
 * Панель для сообщений
 *
 * @component
 * @param {object} messages Объект с сообщениями
 * @param {func} onSendMessage Функция отправки и отображения сообщения
 */

const MessagePanel = ({messages, onSendMessage}) => {
    return (
        <div className="MessagePanel-Form-container">
            <MessageList messages={messages} onSend={onSendMessage}/>
            <Form onSend={onSendMessage}/>
        </div>
    );
};

MessagePanel.propTypes = {
    messages: PropTypes.object.isRequired
};

MessagePanel.defaultProps = {
    messages: {}
};

export default MessagePanel;