import React, {useState} from 'react'
import SignIn from './SignIn'
import axios from 'axios'

const SignUp = ({getUser}) => {

    const [signUp, showSignUp] = useState(false)
    const [signIn, showSignIn] = useState(false)

    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: '',  
        password: '',
        accountType: ''     
    })


    const check = () => {      

        axios
            .post('http://localhost:3020/v1/users', user)
            .then(() => {
                showSignIn(true) 
                showSignUp(false)
            })
            .catch(console.log)

    }

    return (
        <div className = "perjob_body">
            { !signUp && !signIn && ( 
            <div className = "container perjob_body">
                <div className = "container d-flex justify-content-around row perjob_size text-center">
                   <div className="card job_desc shadow-lg p-3  bg-white rounded col-4">
                        <img 
                            className="card-img-top" 
                            src="https://secureservercdn.net/184.168.47.225/53a.daa.myftpupload.com/wp-content/uploads/2019/01/Employee-Motivation-2_Smaller-2-810x500.jpeg"  
                            alt="Card image cap"/>
                        <div className="card-body">
                            <h4 className="card-title">
                                <a>Looking for a work?</a>
                            </h4>
                            <p className="card-text">
                                Some quick example text to build on the card title and make up the bulk
                                of the card's content.
                            </p>
                            <div className = "d-flex justify-content-around">
                                <button 
                                    type="button" 
                                    className="btn btn-primary" 
                                    style = {{bottom: 13+'px'}} 
                                    onClick = {()=>{
                                        showSignUp(true) 
                                        return setUser({accountType:'employers' })
                                    }} >
                                        Employer Account 
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="card job_desc shadow-lg p-3  bg-white rounded col-4">
                        <img className="card-img-top" 
                            src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg"  
                            alt="Card image cap"/>
                        <div className="card-body">
                            <h4 className="card-title">
                                <a>Looking for a employee?</a>
                            </h4>
                            <p className="card-text">
                                Some quick example text to build on the card title and make up the bulk of 
                                the card's content.
                            </p>
                            <div className = "d-flex justify-content-around">
                                <button type="button" 
                                    className="btn btn-primary" 
                                    style = {{bottom: 13+'px'}} 
                                    onClick = {()=>{
                                        showSignUp(true) 
                                        return setUser({accountType:'employee' })
                                    }}>
                                        Employee Account 
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>)}
            {signUp && (
                <div id = "menu" 
                    className = "d-flex justify-content-center align-items-center" 
                    style = {{height: 550+'px'}} >
                <div className = "card  container signPart" >
                        <div className = "card-header">
                            <h3> Sign Up</h3>
                        </div>
                        <div className = "card-body">
                            <form>
                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                            <i style = {{fontSize:24+'px', width: 100+'%'}} className=" fa">&#xf007;</i>
                                        </span>
                                    </div>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        placeholder="firstName" 
                                        onChange={(e) => setUser({...user, firstName: e.target.value})}/>
                                </div>
                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                            <i style = {{fontSize:24+'px', width: 100+'%'}} className=" fa">&#xf007;</i>
                                        </span>
                                    </div>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        placeholder="lastName" 
                                        onChange={(e) => setUser({...user, lastName: e.target.value})}/>
                                </div>
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
                                        onChange={(e) => setUser({...user, email: e.target.value})}/>
                                </div>
                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                            <i className="material-icons">&#xe8b6;</i>
                                        </span>
                                    </div>
                                    <input 
                                        type="password" 
                                        className="form-control" 
                                        placeholder="password" 
                                        onChange={(e) => setUser({...user, password: e.target.value})}
                                        onKeyUp={(e) => {if (e.keyCode === 13) check()} }/>
                                </div>
                                <div className="form-group">
                                    <button 
                                        type="button" 
                                        className="btn float-right login_btn" 
                                        onClick = {check} >
                                            Sign Up 
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
        
                    </div>
            )}
            { signIn &&  (
                <SignIn
                    getUser = {getUser}
                />
            )}
        </div>       
    )
}

export default SignUp