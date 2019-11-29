import React, {useState } from 'react';
import axios from 'axios';

const ChangePassword = () => {

    const [changedPassword, setPassword] = useState({
        password: '',
        newPassword: ''
    })

    const check = () => {

        axios
            .put('http://localhost:3020/v1/users/password', changedPassword, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            })
            .then(response => {
                console.log('r', response)
            })
    }

    return (
        <div className = "modal">
            <div className = "main">
            <div className="d-flex justify-content-center">
                <h1>Change password</h1>
            </div>
            <form className="col">
                <div className="form-group col mt-5">
                    <label className="d-flex">
                        <strong className = "col">Current password *</strong>
                        <input 
                            type="password"  
                            placeholder="Current password" 
                            required 
                            className="form-control col"
                            onChange={(e) => setPassword({...changedPassword, password: e.target.value})}/>
                    </label>
                </div>
                <div className="form-group col">
                    <label className="d-flex m-0">
                        <strong className = "col">New password *</strong>
                        <input 
                            type="password" 
                            placeholder="New password" 
                            required 
                            className="form-control col"
                            onChange={(e) => setPassword({...changedPassword, newPassword: e.target.value})} />
                    </label>
                </div>
                <div className="form-group col d-flex justify-content-end mb-0">
                    <p>*Password (UpperCase, LowerCase, Number/SpecialChar and min 8 Chars).</p>
                </div>
                {/* <div className="form-group col ">
                    <label className="d-flex mt-2">
                        <strong className = "col">Confirm new password *</strong>
                        <input 
                            type="password" 
                            placeholder="Confirm new password" 
                            required 
                            className="form-control col"/>
                    </label>
                </div> */}
                <div className="d-flex justify-content-center mt-5">
                    <button type="button" className="btn btn-success" onClick = {check}>Save changes</button>
                    <button type="button" className="btn btn-danger ml-2">Cancel</button>
                </div>
            </form>
        </div>
        </div>
    )
}

export default ChangePassword