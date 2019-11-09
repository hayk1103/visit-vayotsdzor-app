import React,{useState} from 'react'
import EmployerPage from './EmployerPage'
import EmployeeSetting from './EmployeeSetting'

const SignUp = () => {

    const [signUp, showSignUp] = useState(false)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [accountType, setAccountType] = useState('')
    const [employeePage, showEmployeePage] = useState(false)
    const [employerPage, showEmployerPage] =useState(false)

    const getEmail = (e) => {
        setEmail(e.target.value)
    }

    const getPassword= (e) => {  
        setPassword(e.target.value)
    }

    const getFirstName= (e) => {
        setFirstName(e.target.value)
    }

    const getLastName= (e) => {
        setLastName(e.target.value)
    }

    const getSignUp = (e) => {
        setAccountType(e.target.value)
        showSignUp(true)
    }

    const check = () => {

        let formData = new FormData();
        formData.append('email', email);
        formData.append('password', password)
        formData.append('firstName', firstName)
        formData.append('lastName', lastName)
        formData.append('accountType', accountType)
        

        fetch('http://localhost:3020/v1/users', 
        {
            method: 'POST',         
            body: formData
        })
        .then(data=>{
            data.json()
            .then(() => {
                if(accountType === 'employee'){
                    showEmployeePage(true)
                    return
                }
                return showEmployerPage(true)
            })
        })
        .catch(console.log)
    }

    return (
        <div className = "perjob_body">
            { !signUp &&( 
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
                                    onClick = {getSignUp} 
                                    value = 'employers' > 
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
                                    onClick = {getSignUp} 
                                    value = 'employee'> 
                                        Employee Account 
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>)}
            {signUp && !employeePage && !employerPage &&( 
                <div id = "job" 
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
                                        <span className="input-group-text"></span>
                                    </div>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        value = {firstName} 
                                        placeholder="firstName" 
                                        onChange = {getFirstName}/>
                                </div>
                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"></span>
                                    </div>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        value = {lastName} 
                                        placeholder="lastName" 
                                        onChange = {getLastName}/>
                                </div>
                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"></span>
                                    </div>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        value = {email}  
                                        placeholder="email" 
                                        onChange = {getEmail}/>
                                </div>
                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"></span>
                                    </div>
                                    <input 
                                        type="password" 
                                        className="form-control" 
                                        value = {password}  
                                        placeholder="password" 
                                        onChange = {getPassword}/>
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
            {employeePage && (
                <EmployeeSetting
                    accountType = {accountType}
                />
            )}
            {employerPage && (
                <EmployerPage/>
            )}
        </div>       
    )
}

export default SignUp