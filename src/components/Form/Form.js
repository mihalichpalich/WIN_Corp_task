import React, {useState} from 'react';
import PropTypes from 'prop-types';

import firebaseDB from '../../api/firebase';
import './Form.less';

/**
 * Форма для отправки сообщения
 *
 * @component
 * @param {func} onSend Функция отправки сообщения
 */

const Form = ({onSend}) => {
    const [text, setText] = useState('');
    const [name, setName] = useState('');

    /**
     * Отправка сообщения
     * @function
     */
    const onSubmit = () => {
        if (text && name) {
            onSend(text, name);
            firebaseDB.push().set({
                "name": name,
                "text": text
            });
            setText('')
        }
    };

    /**
     * Отправка сообщения по нажатию Enter
     * @param {object} event объект события
     */
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            onSubmit()
        }
    };

    /**
     * Изменение текста сообщения в форме
     * @param {object} event объект события
     */
    const updateText = (event) => {
        setText(event.target.value);
    };

    /**
     * Изменение имени пользователя в форме
     * @param {object} event объект события
     */
    const updateName = (event) => {
        if (event.target.value !== name) {
            setName(event.target.value)
        }
    };

    return (
        <div className="MessagePanel-Form">
            <div className="MessagePanel-Form-container">
                <p className="MessagePanel-Form-Input">
                    <input type="text" className="name" placeholder="Your Name" value={name} onChange={updateName}/>
                    <textarea
                        className="message"
                        placeholder="Your Message"
                        value={text}
                        onChange={updateText}
                        onKeyPress={handleKeyPress}
                    />
                </p>

                <p>
                    <button className="send" onClick={onSubmit}>Send</button>
                </p>
            </div>
        </div>
    );
};

Form.propTypes = {
    onSend: PropTypes.func.isRequired
};

Form.defaultProps = {
    onSend: () => {}
};

export default Form;