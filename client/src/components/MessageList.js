import React from 'react'
import ScrollToBottom from 'react-scroll-to-bottom';
import Message from './Message'

const MessageList = ({ messages, currentRoomName }) => {
  return (
    <ScrollToBottom className="message-list">
      {messages.map(({ username, text, time, roomName }, index) => {
        if (currentRoomName === roomName) {
          return <Message key={index} username={username} text={text} time={time} /> 
        }
      })}
    </ScrollToBottom>
  )
}

export default MessageList