import React from 'react'
import { useState } from 'react'
import { BrowserRouter, Link, Switch, Route, useHistory } from 'react-router-dom'
import UserAccount from './UserAccount'
import axios from 'axios'

const SignIn = ({ getUser }) => {
    const [account, setAccount]  = useState(false)
    const [user, setUser] = useState({
        username: '',
        password: ''
    })
    const history = useHistory()

    const signIn = () => {
        axios.post('http://localhost:3001/api/login', user)
        .then(response => {
            localStorage.setItem('token', response.data.token)
            getUser()
            history.push('/')
        })
        .catch(console.log)
    }
        return (
            <div>
                {!account && (
                    <div  className = "d-flex justify-content-center"> 
                        <div id = "colorFon" className = "d-flex justify-content-center">
                            <div className = "container mt-5">
                                <div className="d-flex justify-content-center mt-5"> 
                                    <h3> Welcome </h3>
                                </div>
                                <div className="card-body">
                                    <div className="input-group mb-3">
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            placeholder="Username" 
                                            name="username"
                                            onChange={(e) => setUser({...user, username: e.target.value})}/>
                                    </div>
                                    <div className="input-group mb-3">
                                        <input 
                                            type="password" 
                                            className="form-control" 
                                            placeholder="Password" 
                                            name="password"
                                            onChange={(e) => setUser({...user, password: e.target.value})}
                                            onKeyUp={(e) => {if (e.keyCode === 13) signIn()} }/>
                                    </div>
                                    <div className="d-flex justify-content-center">
                                        <a href="#" className="link mb-3"> Forgot password? </a>
                                    </div>
                                    <div className="d-flex justify-content-center">
                                        <button className="btn btn-sign" onClick={() => signIn()}> Sign in </button>
                                    </div>
                                    <div className="d-flex justify-content-center mt-3">
                                        <p>
                                            Don't have an account?  
                                            <a 
                                                href="#" 
                                                className="link ml-2"
                                                onClick={() => history.push('/signup')}>  
                                                 Sign up
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>  
                )} 
            </div>
        )
}
export default SignIn