import React, { useState, useEffect } from 'react'
import io from 'socket.io-client'

const Chat = () => {
    const [messages, setMessages] = useState([])
    const [message, setMessage] = useState('')
    const [username, setUsername] = useState('')
    const [socket, setSocket] = useState(null)

    const initSockets = () => {
        const socket = io.connect('172.20.10.2:3001')
        socket.on('new message', (data) => setMessages(messages => [data, ...messages]))
        setSocket(socket)
    }

    const getMessages = () => {
        // axios.get('http://localhost:3001/api/messages')
    }

    const submit = () => {
        socket.emit('message', { message, username })
        setMessage('')
    }

    const onKeyUp = (e) => {
        if (e.keyCode === 13) {
            submit()
        }
    }

    useEffect(() => {
        getMessages()
        initSockets()
    }, [])

    return (
        <div id="chat">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1>Welcome to our chat</h1>
                        <input 
                            placeholder="Username"
                            className="form-control"
                            value={username}
                            onChange={e => setUsername(e.target.value)}/>
                        <input 
                            placeholder="New Message"
                            value={message}
                            onChange={e => setMessage(e.target.value)}
                            className="form-control mt-2 mb-2"
                            onKeyUp={onKeyUp}/>
                        <ul className="list-group">
                            {messages.map((message, i) => (
                                <li key={`message-${i}`} className="list-group-item">
                                    <small>{message.username}</small><br/>
                                    {message.message}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chat