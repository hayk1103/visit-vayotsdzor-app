import React,{useState, useEffect} from 'react'
import {BrowserRouter, useLocation, useHistory } from 'react-router-dom'
import Password from '../Settings/Password'
import axios from 'axios'

const withRouter = Component => (props) => {
    return (
        <BrowserRouter>
            <Component {...props}/>
        </BrowserRouter>
    )
}

const SignIn = ({ getUser }) => {

    const [passwordPage, showPassword] = useState(false)
    const [signIn, showSignIn] = useState(true)

    const history = useHistory()
    const location = useLocation()

    const forgotPassword = () =>{
        showPassword(true)
        showSignIn(false)
    }

    const [user, setUser] = useState({
        email: '',  
        password: ''
    })

    const check = () => {

        axios
            .post('http://localhost:3020/v1/users/login', user)
            .then(item => {
                localStorage.setItem('token', item.data.token.access)
                localStorage.setItem('id', item.data.user.id)
                getUser()
                history.push('/')
            })
            .catch(console.log())
    }

    return (
        <div>
            
            {passwordPage && (
                <Password/>
            )}
            {signIn &&(
                <div id = "menu" 
                    className = "d-flex justify-content-center align-items-center" 
                    style = {{height: 550+'px'}} >
                <div className = "d-flex justify-content-center card container mb-5 signPart">
                    <div className = "card-header">
                        <h3> Sign In</h3>
                    </div>
                    <div className = "card-body">
                        <form>
                            <div className="input-group form-group">
                                <div className="input-group-prepend">
                        
                                    <span className="input-group-text">
                                        <i className="material-icons">&#xe0be;</i>
                                    </span>
                                </div>
                                <input 
                                    type="email" 
                                    className="form-control" 
                                    placeholder="email" 
                                    required
                                    onChange={(e) => setUser({...user, email: e.target.value})}
                                    />
                            </div>
                            <div className="input-group form-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">
                                        <i className="material-icons">&#xe8b6;</i>
                                    </span>
                                </div>
                                <input type="password" 
                                    className="form-control"  
                                    placeholder="password" 
                                    // pattern="/(?=.*\d)(?=.*[a-z])(?=.*[!@#\\^&\])(?=.*[A-Z]).{6,}/"
                                    // title="Six or more characters with Capital and lower case letters and number."
                                    required
                                    onChange={(e) => setUser({...user, password: e.target.value})}
                                    onKeyUp={(e) => {if (e.keyCode === 13) check()} }/>
                                    
                            </div>
                            <div className="row align-items-center remember">
                                <label>
                                    <input type="checkbox"/>Remember Me
                                </label>
                            </div>
                            <div className="form-group">
                                <input 
                                    type="submit"
                                    className="btn float-right login_btn" 
                                    value = "Sign In"
                                    onClick = {check}/>
                            </div>
                        </form>
                    </div>
                    <div className="card-footer">
                        <div className="d-flex justify-content-center">
                            <a href="#" 
                                style = {{color: 'white'}} 
                                onClick = {forgotPassword}>
                                    <u>Forgot your password?</u>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
 
            )}
        </div>
        

    )
}

export default withRouter(SignIn)