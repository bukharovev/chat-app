import React from 'react'

const Message = ({ username, text, time }) => {  
  return (
      <div className="message">
          <div className="message-username">{username}</div>
          <div className="message-text">{text}</div>
          <div className="message-time">{time}</div>
      </div>
  )
}

export default Message