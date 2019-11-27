import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import './index.scss'

const Account = ({
    user,
    updateUser,
}) => {
    const [activities, setActivities] = useState(null)
    const history = useHistory()

    const getActivity = () => {
        axios
            .get('http://localhost:3001/api/activities')
            .then(response => setActivities(response.data.activities))
            .catch(console.log)
    }

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

    useEffect(() => {
        getActivity()
    }, [])
        
    return (
        <div id="account-page">
            <div className="user-bg p-2">
                <div className="w-50 d-flex justify-content-between">
                    <label>
                        <input 
                            type="file"
                            className="d-none"
                            onChange={onImageUpload}/>
                        {user.avatar ? (
                            <img 
                                src={`http://localhost:3001/${user.avatar}`} 
                                className="card-img rounded" />
                        ) : (
                            <img 
                                src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
                                className="card-img rounded" />
                        )}
                    </label>
                    <div>
                        <h2> { user.username } </h2>
                        <p> { user.fullName }  </p>
                        {user.aboutMe && (
                            <p> { user.aboutMe } </p>
                        )}
                        {user.interests && (
                            <p> { user.interests } </p>
                        )}
                    </div>
                </div>
            </div>
            <div className="m-4">
                <div className="d-flex justify-content-around">
                    <h3> Your activty </h3>
                </div>
                {activities && 
                    activities.map((activity, index) => {
                        if(activity.creator === user._id) {
                            return (
                                <div key={`activity-${index}`} className="shadow mt-3 all-activity p-2">
                                    <img src={`http://localhost:3001/${activity.image}`}  alt="activity"/>
                                    <div className="activity-body">
                                        <div>
                                            <p> {activity.title} </p>
                                        </div>
                                        <div>
                                            <p> { activity.createdAt.split('T')[0] } </p>
                                            <FontAwesomeIcon 
                                                icon={faHeart} 
                                                className= 'icon-color' 
                                            />
                                            <span> { activity.likesCount } </span>
                                        </div>
                                        <div>
                                            <Link to={`/activities/${activity._id}`}>
                                                <button className="btn btn-light mt-4">
                                                    View more
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    })
                }
            </div>
    </div>
    )
}
export default Account