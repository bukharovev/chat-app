import React, { useState } from 'react'

const NewRoomForm = (props) => {
  const [roomName, setRoomName] = useState('')

  const handleChange = (e) => setRoomName(e.target.value)

  const handleSubmit = (e) => {
        e.preventDefault()
        props.onSubmit(roomName)
        setRoomName('')
    }

  return (
    <div className="new-room-form">
        <form onSubmit={handleSubmit}>
              <input
                  type="text" 
                  placeholder="Create a room" 
                  value={roomName} 
                  onChange={handleChange}
                  required />
      </form>
    </div>
  )
}

export default NewRoomForm