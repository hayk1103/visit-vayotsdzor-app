import React,{useState} from 'react'
import EmployeePage from './EmployeePage'
import EmployerPage from './EmployerPage';

const SignIn = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [jobs, showjobs] = useState(false)

    const getEmail = (e) => {
        setEmail(e.target.value)
    }

    const getPassword= (e) => {
        setPassword(e.target.value)
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
            .then(() => {
                showjobs(true)
                         
            })
        })
        .catch(e => {
            console.log(e)
        })
    }

    return (
        <div>
            {jobs && (
                    <EmployerPage/>
                )}
            {!jobs && (
                <div id = "job" className = "d-flex justify-content-center align-items-center" style = {{height: 550+'px'}} >
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
                                <input type="text" className="form-control" value = {email} placeholder="email" onChange = {getEmail}/>
                            </div>
                            <div className="input-group form-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"></span>
                                </div>
                                <input type="password" className="form-control"  value = {password} placeholder="password" onChange = {getPassword}/>
                            </div>
                            <div className="row align-items-center remember">
                                <label>
                                    <input type="checkbox"/>Remember Me
                                </label>
                            </div>
                            <div className="form-group">
                                <button type="button" className="btn float-right login_btn"  onClick = {check}>Login</button>
                                {/* <input type="submit" value="Login" className="btn float-right login_btn" onClick = {check}/> */}
                            </div>
                        </form>
                    </div>
                    <div className="card-footer">
                        <div className="d-flex justify-content-center">
                            <a href="#" style = {{color: 'white'}}>Forgot your password?</a>
                        </div>
                    </div>
                </div>
            </div>
            )}
        </div>
        

    )
}

export default SignIn