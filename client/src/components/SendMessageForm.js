import React, { useState } from 'react'

const SendMessageForm = (props) => {
    const [messageText, setMessageText] = useState('')
    
    const handleChange = (e) => setMessageText(e.target.value)

    const handleSubmit = (e) => {
        e.preventDefault();
        props.sendMessage(messageText);
        setMessageText('')
    }
    
    return (
        <form className="send-message-form" onSubmit={handleSubmit}>
            <input
                placeholder="Message..."
                type="text"
                onChange={handleChange}
                value={messageText} />
        </form>
    )
}

export default SendMessageForm