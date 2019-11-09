import React,{useState} from 'react'
import Password from './Password'
import EmployeeSettings from './EmployeeSetting'

const SignIn = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [settings, showSettings] = useState(false)
    const [passwordPage, showPassword] = useState(false)
    const [signIn, showSignIn] = useState(false)

    const getEmail = (e) => {
        setEmail(e.target.value)
    }

    const getPassword= (e) => {
        setPassword(e.target.value)
    }

    const forgotPassword = () =>{
        showPassword(true)
        showSignIn(true)
    }

    const check = () => {

        let formData = new FormData();
        formData.append('email', email);
        formData.append('password', password)

        fetch('http://localhost:3020/v1/users/login', 
        {
            method: 'POST',         
            body: formData
        })
        .then(data=>{
            data.json()
            .then((item) => {
                localStorage.setItem('token', item.token.access)
                localStorage.setItem('id', item.user.id)
                showSettings(true)
            })
        })
        .catch(e => {
            console.log(e)
        })
    }

    return (
        <div>
            {settings && (
                    <EmployeeSettings/>
                )}
            {passwordPage && (
                <Password/>
            )}
            {!settings && !signIn &&(
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
                                    <span className="input-group-text"></span>
                                </div>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    value = {email} placeholder="email" 
                                    onChange = {getEmail}/>
                            </div>
                            <div className="input-group form-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"></span>
                                </div>
                                <input type="password" 
                                    className="form-control"  
                                    value = {password} 
                                    placeholder="password" 
                                    onChange = {getPassword}/>
                            </div>
                            <div className="row align-items-center remember">
                                <label>
                                    <input type="checkbox"/>Remember Me
                                </label>
                            </div>
                            <div className="form-group">
                                <button type="button" 
                                    className="btn float-right login_btn"  
                                    onClick = {check}>
                                        Sign In
                            </button>
                            </div>
                        </form>
                    </div>
                    <div className="card-footer">
                        <div className="d-flex justify-content-center">
                            <a href="#" 
                                style = {{color: 'white'}} 
                                onClick = {forgotPassword}>
                                    Forgot your password?
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            )}
        </div>
        

    )
}

export default SignIn