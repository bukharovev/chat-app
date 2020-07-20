import React from 'react'
// import { CopyToClipboard } from 'react-copy-to-clipboard'

const RoomList = ({ rooms, currentRoomName, subscribeToRoom }) => {
	return (
			<div className="rooms-list">
					<h3>Your rooms:</h3>
					<ul>
							{rooms.map((room, i) => {
									const active = currentRoomName === room.name ? 'active' : '';
									const href = `#${room.name}`
									return (
											<li key={i} className={'room ' + active}>
													<a href={href} onClick={() => {
														subscribeToRoom(room.name)
													}}>
														# {room.name}
													</a>
											</li>
									)     
							})}
					</ul>
					{/* <>
						<CopyToClipboard text={ref}
							onCopy={() => setCopied(true)} >
							<button>Click here to copy link on current room</button>
						</CopyToClipboard>
					</> */}
			</div>
	)
}

export default RoomList