import React, {useState} from 'react';

import './Form.less';

const Form = ({onSend}) => {
    const [text, setText] = useState('');
    const [name, setName] = useState('');

    const onSubmit = () => {
        if (text && name) {
            onSend(text, name);
            setText('')
        }
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            onSubmit()
        }
    };

    const updateText = (event) => {
        setText(event.target.value);
    };

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

Form.defaultProps = {
    onSend: () => {}
}

export default Form;