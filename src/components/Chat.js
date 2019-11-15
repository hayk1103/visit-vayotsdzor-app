import React, { useState, useEffect } from 'react'
import io from 'socket.io-client'
import axios from 'axios'

const Chat = ({ user }) => {
    const [messages, setMessages] = useState([])
    const [message, setMessage] = useState('')
    const [username, setUsername] = useState('')
    const [socket, setSocket] = useState(null)

    const initSockets = () => {
        const socket = io.connect('http://localhost:3001')
        socket.on('new message', (data) => setMessages(messages => [data, ...messages]))
        setSocket(socket)
    }

    const getMessages = () => {
        axios.get(`http://localhost:3001/api/messages`, {headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`}})
            .then(response => {
                setMessages(response.data.message)
                console.log(response.data.message)
            })
            .catch(console.log)
    }
    // const addMessages = () => {
    //     axios
    //         .post('http://localhost:3001/api/messages', {message, user}, {headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`}})
    //         .then(response => {
    //             console.log(response.data)
    //         })
    //         .catch(console.log)
    // }
    const submit = () => {
        socket.emit('message', { message, user, username })
        setMessage('')
    }
    console.log(user)
    const onKeyUp = (e) => {
        if (e.keyCode === 13) {
            submit()
            // addMessages()
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