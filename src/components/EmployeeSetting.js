import React, {useState, useEffect} from 'react'
import axios from 'axios'

const EmployeeSetting = () => {

    const [employee, showEmployee] = useState(false)
    const [notes, setNotes] = useState([])

    const getNotes = () => {
        const id = localStorage.getItem('id')

        axios
            .get(`http://localhost:3020/v1/users/${id}`)
            .then(response => {
                setNotes(response.data.user)              
            })
            .catch(console.log)
    }

    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        gender: '',
        birthday: '',
        phone: ''        
    })

    const check = () => {

        axios
            .put('http://localhost:3020/v1/users', user,{
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            })
            .then(() => showEmployee(true))
            .catch(console.log)

    }

    useEffect(() => {
        getNotes()
    }, [])

    return (
        <div className = "d-flex justify-content-center">
        <div>
            <h2>About Me</h2>
            <div>
                image upload
                <p> Avatar </p>
            </div>
            <div>
                <input 
                    type="text" 
                    name="firstName"
                    placeholder = {notes.firstName}
                    onChange={(e) => setUser({...user, firstName: e.target.value})}/> 
            </div>
            <div>
                <input 
                    type="text" 
                    name="lastName"
                    placeholder = {notes.lastName}
                    onChange={(e) => setUser({...user, lastName: e.target.value})}/> 
            </div>
            <div>
                <input 
                    type="text" 
                    name="email"
                    placeholder = {notes.email}
                    onChange={(e) => setUser({...user, email: e.target.value})}/> 
            </div>
            <div>
                <input 
                    type="password" 
                    name="password"/>
            </div>
            <div>
                <input 
                    type="radio" 
                    name="gender" 
                    value="male" 
                    onChange={(e) => setUser({...user, gender: e.target.value})}/> Male
                <input 
                    type="radio" 
                    name="gender" 
                    value="female"
                    onChange={(e) => setUser({...user, gender: e.target.value})}/> Female
                <input 
                    type="radio" 
                    name="gender" 
                    value="other"
                    onChange={(e) => setUser({...user, gender: e.target.value})}/> Other  
            </div>
            <div>
                Birthday: <input 
                type="date" 
                name="bday"
                value = {notes.birthday}
                onChange={(e) => setUser({...user, birthday: e.target.value})}/>
            </div>
            <div>
               Enter your phone number:

                <input 
                    type="tel" 
                    id="phone" 
                    name="phone"
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    required
                    onChange={(e) => setUser({...user, phone: e.target.value})}/>

                <small>Format: 094-521-521</small>
            </div>
            <div>
                <button 
                    type="button" 
                    className="btn btn-outline-dark" 
                    onClick={check}>
                        Ok
                </button>
                <button 
                    type="button" 
                    className="btn btn-outline-dark" 
                    onClick = {()=>{showEmployee(true)}}>
                        Don't save
                </button>
            </div>
        </div>
        </div>
    )
}

export default EmployeeSetting