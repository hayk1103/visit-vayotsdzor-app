import React, {useState, useEffect} from 'react'
import axios from 'axios'

const EmployeeSetting = ({ user, getUser }) => {

    const [changePassword, setChangePassword] = useState(false)

    const [changeUser, setChangeUser] = useState({
        firstName: user.firstName,
        lastName:  user.lastName,
        gender: user.gender,
        birthday: user.dob,
        // phone: user.phone,
        info: {
            // location: {
            //     country: user.location.country,
            //     city: '',
            //     state: '',
            //     cipCode: ''
            // }
        //     education: {
        //         name: '',
        //         date: '',
        //         degree: ''
        //     },
            bio: '',
        //     skills: ''
        }     
    })

    const check = () => {
        axios
            .put('http://localhost:3020/v1/users', changeUser,{
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            })
            .then(() => {
                let gender = document.getElementsByName("gender");
                gender.forEach(data => {
                    if(user.gender == data.value.toLowerCase()){               
                        
                        return getUser(), data.setAttribute('checked', 'checked')
                    }
                    
                    return getUser(), data.removeAttribute('checked', 'checked')
                })
            })
            .catch(console.log)
            
    }

    const onImageUpload = (e) => {
        const data = new FormData()
        data.append('avatar', e.target.files[0]) 
        axios
            .put('http://localhost:3020/v1/users/avatar', data, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            })
            .then(() => getUser())
            .catch(console.log)
    }

    const onImageDelete = () => {
        axios
            .delete('http://localhost:3020/v1/users/avatar', {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            })
            .then(() => getUser())
            .catch(console.log)
    }

    // let gender = document.getElementsByName("gender");
    //     gender.forEach(data => {
    //         console.log('us', user.gender, data.value, data)
    //         if(user.gender === data.value){
    //             data.setAttribute('checked', true)
    //             data.check = true
    //         }
    //     })

    

    return (
        <div className = "setting_div">
            {!changePassword && ( 
                <div>
            <div>
                <h2>Profile info</h2>
            </div>
            <div className="img-wraps">
                {user.avatar ? (
                    <>
                    <img
                        src={`${user.avatar}`} 
                        className="img-responsive"/>
                    <span  
                        className="closes" 
                        onClick = {onImageDelete}>
                            &times;
                    </span>
                    </>
                ) : (
                    <>
                    <img 
                        className="img-responsive"
                        src={'https://www.trzcacak.rs/myfile/detail/385-3856300_no-avatar-png.png'}/>
                    <input 
                        type = "file" 
                        className="position-absolute "
                        onChange = {onImageUpload}/>
                        </>
                )}
            </div>
        <form className="col-md-8">
            <div>
                <label className="form-group d-flex mt-4">
                    <strong className="col-md-4">First name</strong>
                    <input 
                        type="text" 
                        value={changeUser.firstName}
                        className="form-control"
                        onChange={(e) => setChangeUser({...changeUser, firstName: e.target.value})}/>
                </label>
            </div>
            <div>
                <label className="form-group d-flex">
                    <strong className="col-md-4">Last name</strong>
                    <input 
                        type="text" 
                        value = {changeUser.lastName}
                        className="form-control"
                        onChange={(e) => setChangeUser({...changeUser, lastName: e.target.value})}/>
                </label>
            </div>
            <div className="col-md-6 ">
                <div className="form-group" id = 'gender'>
                    <label className="col-sm-2">
                        <strong>Gender</strong>
                    </label>
                    <label >
                        <input 
                            type="radio" 
                            name="gender" 
                            value='Male'
                            onChange={(e) => setChangeUser({...changeUser, gender: e.target.value})}/>
                            Male
                    </label>
                    <label >
                        <input 
                            type="radio" 
                            name="gender" 
                            value="Female" 
                            onChange={(e) => setChangeUser({...changeUser, gender: e.target.value})}/>
                            Female
                    </label>
                    <label >
                        <input 
                            type="radio" 
                            name="gender" 
                            value="Other" 
                            onChange={(e) => setChangeUser({...changeUser, gender: e.target.value})}/>
                            Other
                    </label>
                </div>
            </div>
            <div>
                <label className="form-group d-flex">
                    <strong className="col-md-4">Date of birth</strong>
                    <input 
                        className="form-control" 
                        type = "date" 
                        value = {changeUser.dob || ''}
                        onChange={(e) => setChangeUser({...changeUser, dob: e.target.value})} />
                </label>
            </div>
            {/* <div >
                <label  className="form-group d-flex row">
                    <strong className="col-md-4">Location</strong>
                    <div className="col-md-8 p-1 d-flex ">
                        <input 
                            type="text" 
                            placeholder="Country" 
                            value =  {changeUser.info.location.country }
                            className="form-control"
                            onChange={(e) => setChangeUser({...changeUser, country: e.target.value})}/>
                        <input 
                            type="text" 
                            placeholder="State" 
                            className="form-control"
                            onChange={(e) => setChangeUser({...changeUser, state: e.target.value})}/>
                        <input 
                            type="text" 
                            placeholder="City" 
                            className="form-control"
                            onChange={(e) => setChangeUser({...changeUser, city: e.target.value})}/>
                        <input 
                            type="text" 
                            placeholder="Zip Code" 
                            className="form-control"
                            onChange={(e) => setChangeUser({...changeUser, zipCode: e.target.value})}/>
                    </div>
                </label>
            </div>  */}
            {/* <div>
                <label className="form-group d-flex">
                    <strong className="col-md-4">Phone number</strong>
                    <input 
                        type="tel" 
                        placeholder = 'Format: 094-521-521'
                        value = {changeUser.phone || ''}
                        // pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" 
                        style={{fontStyle: 'italic', fontSize: 'small'}} 
                        className="form-control" 
                        onChange={(e) => setChangeUser({...changeUser, phone: e.target.value})}/>
                </label>
            </div> */}
            {/* <div >
                <label  className="form-group d-flex row">
                    <strong className="col-md-4">Education</strong>
                    <div className="col-md-8 p-1 d-flex ">
                        <input 
                            type="text" 
                            placeholder="Name" 
                            className="form-control"
                            onChange={(e) => setChangeUser({...changeUser, name: e.target.value})}/>
                        <input 
                            type="text" 
                            placeholder="Degree" 
                            className="form-control"
                            onChange={(e) => setChangeUser({...changeUser, degree: e.target.value})}/>
                        <input 
                            type="text" 
                            placeholder="Date" 
                            className="form-control"
                            onChange={(e) => setChangeUser({...changeUser, date: e.target.value})}/>
                    </div>
                </label>
            </div> */}
            <div>
                <label className="form-group d-flex">
                    <strong className="col-md-4">Biography</strong>
                    <input 
                        type="text" 
                        className="form-control"
                        value = {changeUser.info.bio}
                        // placeholder = {talent.info.bio }
                        onChange={(e) => setChangeUser({...changeUser, bio: e.target.value})}/>
                </label>
            </div>
            {/* <div>
                <label className="form-group d-flex">
                    <strong className="col-md-4">Skills</strong>
                    <input 
                        type="text" 
                        // placeholder = {talent.info.skill || ''}
                        className="form-control"
                        onChange={(e) => setChangeUser({...changeUser, skill: e.target.value})}/>
                </label>
            </div> */}
            {/* <div >
                <label  className="form-group d-flex row">
                    <strong className="col-md-4">Languages</strong>
                    <div className="col-md-8 p-1 d-flex ">
                        <select className="form-control">
                            <option>Language type must be from axios</option>
                        </select>
                        <select className="form-control col-md-6 mx-2">
                            <option>Language level must be from axios</option>
                        </select>
                    </div>
                </label>
            </div> */}
            <div>
                <label className="form-group d-flex mt-4">
                    <strong className="col-md-4" onClick = {() => setChangePassword(true)}>Change Password</strong>
                </label>
            </div>
            <div className="d-flex justify-content-end mt-4">
                <button 
                    type="button" 
                    className="btn btn-success"
                    onClick = {check}>
                        Save
                </button>
                <button 
                    type="button" 
                    className="btn btn-danger ml-2" 
                    onClick = {()=>{showEmployee(true)}}>
                        Cancel
                </button>
            </div>
        </form>
        </div>
            )}
    {changePassword && (
        <ChangePassword
            changePassword = {changePassword}
        />
    )}
    </div>
    )
}

export default EmployeeSetting

// axios({
//     method: 'put',
//     headers: {
//         'Authorization': `Bearer ${localStorage.getItem('token')}`
//     },
//     url: 'http://localhost:3020/v1/users/avatar',
//     data: {
//         data
//     }