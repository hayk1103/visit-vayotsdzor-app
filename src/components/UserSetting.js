import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

const UserAccount = ({
    user, 
    updateUser 
}) => {
    // console.log(localStorage.getItem('user'))
    // console.log(user.fullName)
    const [userInfo, setUserInfo] = useState({
        username: user.username,
        fullName: user.fullName,
        aboutMe: user.aboutMe,
        interests: user.interests
    })
    const [input, setInput] = useState({
        username: false,
        fullName: false,
        aboutMe: false,
        interests: false
    })

    const onImageUpload = (e) => {
        const data = new FormData()
        data.append('image', e.target.files[0])
        axios
            .post('http://localhost:3001/api/image', data, {headers: {'Authorization': localStorage.token}})
            .then(response => {
                updateUser({ avatar: response.data.file.path })
            })
            .catch(console.log)
    }
    
    // console.log(user)
    return( 
        <div>
            <div className="user-image-center">
                <label>
                    <input 
                        type="file"
                        className="d-none"
                        onChange={onImageUpload}
                        />
                    {user.avatar ? (
                        <img 
                            src={`http://localhost:3001/${user.avatar}`} 
                            className="user-image"/>
                    ) : (
                        <img 
                            src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
                            className="user-image"/>
                    )}
                </label>
            </div>
            <div className="user">
                <ul className="list-group w-50">
                    <li className="list-group-item">
                        <h3 > Username </h3>
                        <div className="d-flex justify-content-between">
                            {input.username ? (
                                    <input 
                                        type="text" 
                                        value={userInfo.username} 
                                        className="form-control mr-3"
                                        onChange={(e) => setUserInfo({...userInfo, username: e.target.value})} 
                                        />
                                ) : <p> { user.username }  </p>
                            }
                            <button 
                                className="btn btn-primary" 
                                onClick={() => {
                                    setInput({...input, username: true})
                                    if(input.username) setInput({...input, username: false}), updateUser(userInfo)
                                }}> 
                                { input.username ? 'save' : 'edit' } 
                            </button>
                        </div>
                    </li>
                    <li className="list-group-item">
                        <h3> Full Name </h3>
                        <div className="d-flex justify-content-between">
                            {input.fullName ? (
                                <input 
                                type="text" 
                                value={userInfo.fullName} 
                                className="form-control mr-3"
                                onChange={(e) => setUserInfo({...userInfo, fullName: e.target.value})} />
                                ) : <p> {user.fullName} </p>
                            }
                            <button 
                                className="btn btn-primary" 
                                onClick={() => {
                                    setInput({...input, fullName: true})
                                    if(input.fullName) setInput({...input, fullName: false}), updateUser(userInfo)
                                }}> 
                                { input.fullName ? 'save' : 'edit' }
                            </button>
                        </div>
                    </li>
                    <li className="list-group-item">
                        <h3> Email </h3>
                        <p> {user.email} </p>
                    </li>
                    <li className="list-group-item">
                        <h3> About me </h3>
                        <div>
                            {user.aboutMe ? (
                                <div className="d-flex justify-content-between">
                                    {input.aboutMe ? (
                                        <textarea 
                                        type="text" 
                                        value={userInfo.aboutMe} 
                                        className="form-control mr-3"
                                        onChange={(e) => setUserInfo({...userInfo, aboutMe: e.target.value})} 
                                        >
                                        </textarea>
                                        ) : <p> { user.aboutMe } </p>
                                    }
                                    <button 
                                        className="btn btn-primary"
                                        style={{height: 40}} 
                                        onClick={() => {
                                            setInput({...input, aboutMe: true})
                                            if(input.aboutMe) setInput({...input, aboutMe: false}), updateUser(userInfo)
                                        }}> 
                                        { input.aboutMe ? 'save' : 'edit' }
                                    </button>
                                </div>
                                ) : <button 
                                        className="btn btn-primary"
                                        onClick={() => {
                                            user.aboutMe = ' '
                                            setInput({...input, aboutMe: true})
                                            if(input.interests) setInput({...input, aboutMe: false}), updateUser(userInfo)
                                        }}> 
                                        Add 
                                    </button> 
                            }
                        </div>
                    </li>
                    <li className="list-group-item">
                        <h3> Interests </h3>
                        <div >
                            {user.interests  ? (
                                <div className="d-flex justify-content-between">
                                    {input.interests ? (
                                        <input 
                                            type="text" 
                                            value={userInfo.interests} 
                                            className="form-control mr-3"
                                            onChange={(e) => setUserInfo({...userInfo, interests: e.target.value})} 
                                            />
                                            ) : <p> { user.interests } </p>
                                        }
                                    <button 
                                        className="btn btn-primary" 
                                        onClick={() => {
                                            setInput({...input, interests: true})
                                            if(input.interests) setInput({...input, interests: false}), updateUser(userInfo)
                                        }}> 
                                        { input.interests ? 'save' : 'edit' } 
                                    </button>
                                </div> 
                            ) : <button 
                                className="btn btn-primary"
                                onClick={() => {
                                    user.interests = ' '
                                    setInput({...input, interests: true})
                                    if(input.interests) setInput({...input, interests: false}), updateUser(userInfo)
                                }}> 
                                Add 
                            </button> 
                        }
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default UserAccount

 