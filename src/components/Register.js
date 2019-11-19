import React, { useState } from 'react'
import {  useHistory } from 'react-router-dom'
import axios from 'axios'

const Register = () => {
    const [user, setUser] = useState({
        username: '',
        fullName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const history = useHistory()
    const createAccount = () => {

        if (user.password !== user.confirmPassword) {
            return console.log('check your password')
        }
        axios
            .post('http://localhost:3001/api/signup', user)
            .then(data => {
                console.log(data)
                history.push('/signin')
            })
            .catch(console.log)
    }
    return (
        <div className = "d-flex justify-content-center"> 
            <div id = "colorFon" className = "d-flex justify-content-center">
            <div className = "container mt-5">
                    <div className="d-flex justify-content-center mt-5">  
                        <h3> Create Account </h3>
                    </div>
                    <div className="card-body">
                        <div className="input-group mb-3">
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Email" 
                                type="email"
                                name="email"
                                onChange={(e) => setUser({...user, email: e.target.value})}/>
                        </div>
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
                                type="text" 
                                className="form-control" 
                                placeholder="Full Name" 
                                name="fullName"
                                onChange={(e) => setUser({...user, fullName: e.target.value})}/>
                        </div>
                        <div className="input-group mb-3">
                            <input 
                                type="password" 
                                className="form-control" 
                                placeholder="Password" 
                                onChange={(e) => setUser({...user, password: e.target.value})}/>
                        </div>
                        <div className="input-group mb-3">
                            <input 
                                type="password" 
                                className="form-control" 
                                placeholder="Confirm Password" 
                                onChange={(e) => setUser({...user, confirmPassword: e.target.value})}/>
                        </div>
                        <div className="d-flex justify-content-center mt-2">
                            <button 
                                className="btn btn-sign" 
                                onKeyUp={(e) => {if (e.keyCode === 13) signIn()}}
                                onClick={() =>  createAccount()}> 
                                    Sign up 
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>       
    )
}
export default Register