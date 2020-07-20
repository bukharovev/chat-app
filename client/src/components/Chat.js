import React, { useState, useEffect } from 'react'
import queryString from 'query-string'
import io from 'socket.io-client'

import MessageList from './MessageList'
import SendMessageForm from './SendMessageForm'
import RoomList from './RoomList'
import NewRoomForm from './NewRoomForm'
import '../Chat.css'

let socket

const Chat = ({ location }) => {
	const [username, setUsername] = useState('')
	const [users, setUsers] = useState([])
	const [rooms, setRooms] = useState([ { name: 'general' }])
	const [currentRoomName, setCurrentRoomName] = useState('general')
	const [messages, setMessages] = useState([])

	useEffect(() => {
		socket = io('http://localhost:3001')

		const { name } = queryString.parse(location.search)
		setUsername(name.toLowerCase())

		if (socket && name) {
			socket.emit('joinNewUser', { username: name }, (error) => {
				if (error) {
					alert(error)
				}
			})
		}

		return () => socket.disconnect()
	}, [location.search])

	useEffect(() => {
		socket.on('newMessage', newMessage => {
			setMessages(messages => [ ...messages, newMessage ])
		})

		socket.on("roomData", ({ room, users }) => {
			setUsers(users)
			setCurrentRoomName(room.name)
		})

	}, [])


	useEffect(() => {
		if (currentRoomName) {
			const url = queryString.stringifyUrl({url: 'http://localhost:3001/messages', query: { roomName: currentRoomName }})
			fetch(url)
				.then((response) => response.json())
				.then(({ messages }) => {
					setMessages(messages)
				})
		}
	}, [currentRoomName])

	useEffect(() => {
		if (username) {
			const url = queryString.stringifyUrl({url: 'http://localhost:3001/rooms', query: { username }})
			fetch(url)
				.then((response) => response.json())
				.then(({ rooms }) => {
					setRooms(rooms)
				})
		}
	}, [username, users])
	
	const createRoom = (roomName) => {
		const newRoom = { name: roomName, usersInRoom: new Set() }
		setRooms(rooms => [...rooms, newRoom])
		if (socket) {
			socket.emit('createRoom', { roomName }, (error) => {
				if (error) {
					alert(error)
				}

				subscribeToRoom(roomName)
			})
		}

	}

	const subscribeToRoom = (roomName) => {
		setCurrentRoomName(roomName)
		if (socket) {
			socket.emit('joinToRoom', { roomName })
		}
	}

	const sendMessage = (messageText) => {
		const newMessage = { username, text: messageText, time: Date.now(), roomName: currentRoomName }
		if (socket) {
			socket.emit('newMessage', { message: newMessage, roomName: currentRoomName })
		}
	}
	return (
    <div className="chat">
			<RoomList
					rooms={rooms}
					subscribeToRoom={subscribeToRoom}
					currentRoomName={currentRoomName} />
			<MessageList
					currentRoomName={currentRoomName}
					messages={messages} />
			<NewRoomForm onSubmit={createRoom} />
			<SendMessageForm sendMessage={sendMessage} />
    </div>
  )
}

export default Chat