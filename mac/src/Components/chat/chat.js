import TextField from "@material-ui/core/TextField"
import React, { useEffect, useRef, useState } from "react"
import io from "socket.io-client"
import "../chat/fff.css"

function Chat() {
	const [state, setState] = useState({ message: "", name: "" })
	const [chat, setChat] = useState([])

	const socketRef = useRef()

	useEffect(
		() => {
			const options = { transports: ['websocket'], upgrade: false };
			socketRef.current = io.connect("http://localhost:5000", options)
			socketRef.current.on("message", ({ name, message }) => {
				setChat([...chat, { name, message }])
			})
			return () => socketRef.current.disconnect()
		},
		[chat]
	)

	const onTextChange = (e) => {
		setState({ ...state, [e.target.name]: e.target.value })
	}

	const onMessageSubmit = (e) => {
		const { name, message } = state
		socketRef.current.emit("message", { name, message })
		e.preventDefault()
		setState({ message: "", name })
	}

	const renderChat = () => {
		return chat.map(({ name, message }, index) => (
			<div key={index}>
				<h3 id='h3style'>
					{name}: <span>{message}</span>
				</h3>
			</div>
		))
	}

	return (
		<div className="divcard">
			<form onSubmit={onMessageSubmit} id='formStyle'>
				<h1>Messenger</h1>
				<div className="name-field">
					<TextField name="name" onChange={(e) => onTextChange(e)} value={state.name} label="Name" />
				</div>
				<div>
					<TextField
						name="message"
						className="textField"
						onChange={(e) => onTextChange(e)}
						value={state.message}
						id="outlined-multiline-static"
						variant="outlined"
						label="Message"
						InputProps={{
							style: {
								color: "Danube"
							}
						}}



					/>
				</div>
				<button>Send Message</button>
			</form>
			<div className="render-chat">
				<h1>Chat Log</h1>
				{renderChat()}
			</div>
		</div>
	)
}

export default Chat

