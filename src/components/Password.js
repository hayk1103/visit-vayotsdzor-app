import React, {useState} from 'react'
import axios from 'axios'


const Password = () => {

    const [checkCode, showCheckCode] = useState(false)
    const [reset, showReset] = useState(false)
    // const [changePassword, showChangePassword] = useState(false)

    const [email, setEmail] = useState('');
    const [code, setCode] = useState('')
    const [password, setPassword] = useState('')

    const getEmail = (e) => {
        setEmail(e.target.value)
    }

    const getCode = (e) =>{
        setCode(e.target.value)
    }

    const getPassword = (e) => {
        setPassword(e.target.value)
    }

    const forgotPassword = () =>{
        axios
            .put('http://localhost:3020/v1/users/forgot-password',{
                email: email   
            }  
            )
            .then(() => {
                showCheckCode(true)
            })
            .catch(console.log)
    }

    const checkPassword = () =>{
        axios
            .post('http://localhost:3020/v1/users/password/check-code',{
                code: code,
                email: email
            }  
            )
            .then((response) => {
                localStorage.setItem('x-token', response.data.token)
                showReset(true)
                showCheckCode(false)
            })
            .catch(console.log)
    }

    const resetPassword = () =>{
        axios({
            method: 'post',
            headers: {
                'x-token': `${localStorage.getItem('x-token')}`
            },
            url: 'http://localhost:3020/v1/users/reset-password',
            data: {
              password: password
            }
          })
        .then(() => {
            console.log('you change password')
        })
        .catch(console.log)
    }


    return (
        <div>
        {!checkCode && !reset &&(
        <div className="container">
            <div className="row">
                <div className="col-md-4 col-md-offset-4">
                    <div className="panel panel-default">
                    <div className="panel-body">
                        <div className="text-center">
                        <h3><i className="fa fa-lock fa-4x"></i></h3>
                        <h2 className="text-center">Forgot Password?</h2>
                        <p>You can reset your password here.</p>
                        <div className="panel-body">
            
                            <div className="form-group">
                                <div className="input-group">
                                <span className="input-group-addon"><i className="glyphicon glyphicon-envelope color-blue"></i></span>
                                <input id="email" 
                                    name="email" 
                                    placeholder="email address" 
                                    value = {email} 
                                    className="form-control"  
                                    onChange = {getEmail}
                                    type="email"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <input 
                                    name="recover-submit" 
                                    className="btn btn-lg btn-primary btn-block" 
                                    onClick = {forgotPassword} 
                                    value="Reset Password" 
                                    type="submit"/>
                            </div>
                            
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>)}
        {checkCode && (
            <div className="container">
            <div className="row">
                <div className="col-sm-4">
                    
                    <label>Code</label>
                    <div className="form-group pass_show"> 
                        <input 
                            type="text" 
                            className="form-control" 
                            onChange = {getCode}
                            placeholder="Current Password"/> 
                    </div> 
                       <label>Email</label>
                    <div className="form-group pass_show"> 
                        <input 
                            type="text" 
                            className="form-control" 
                            onChange = {getEmail}
                            placeholder="New Password"/> 
                    </div> 
                    <div className="form-group">
                                <button type="button" 
                                className="btn float-right login_btn"  
                                onClick = {checkPassword}>
                                    Reset
                            </button>
                            </div>
                       
                    
                </div>  
            </div>
        </div>
        )}
        {reset && (
            <div className="container">
            <div className="row">
                <div className="col-sm-4">
                    
                    <label>Current Password</label>
                    <div className="form-group pass_show"> 
                        <input 
                            type="password" 
                            onChange = {getPassword}
                            className="form-control" 
                            placeholder="Current Password"/> 
                    </div> 
                       
                    <div className="form-group">
                                <button type="button" 
                                className="btn float-right login_btn"  
                                onClick = {resetPassword}>
                                    Reset
                            </button>
                            </div>
                    
                </div>  
            </div>
        </div>
        )}
        {/* {changePassword &&( 
            <div className="container">
            <div className="row">
                <div className="col-sm-4">
                    
                    <label>Current Password</label>
                    <div className="form-group pass_show"> 
                        <input 
                            type="password" 
                            value="faisalkhan@123" 
                            className="form-control" 
                            placeholder="Current Password"/> 
                    </div> 
                       <label>New Password</label>
                    <div className="form-group pass_show"> 
                        <input 
                            type="password" 
                            value="faisal.khan@123" 
                            className="form-control" 
                            placeholder="New Password"/> 
                    </div> 
                       
                    
                </div>  
            </div>
        </div>
        )} */}
    </div>
    )
}


export default Password