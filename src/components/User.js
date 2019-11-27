import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

import axios from 'axios'

const User = ({ user }) => {
    const { username } = useParams()
    const [activities, setActivities] = useState(null)
    const [otheruser, setOtherUser] = useState(null)

    const getActivity = () => {
        axios
            .get('http://localhost:3001/api/activities')
            .then(response => setActivities(response.data.activities))
            .catch(console.log)
    }
    const getUser = () => {
        axios
            .get(`http://localhost:3001/api/other/user?username=${username}`)
            .then((response) => setOtherUser(response.data.user))
            .catch(console.log)
    }
    useEffect(() => {
        getActivity()
        getUser()
    }, [])
        
    return (
        <div id="account-page">
            {otheruser && user &&
                <div>
                    <div className="user-bg p-2">
                        <div className="w-50 d-flex justify-content-between">
                            <img 
                                src={`http://localhost:3001/${otheruser.avatar}`} 
                                className="card-img rounded" />
                            <div>
                                <h2> { otheruser.username } </h2>
                                <p> { otheruser.fullName }  </p>
                                {otheruser.aboutMe && (
                                    <p> { otheruser.aboutMe } </p>
                                )}
                                {otheruser.interests && (
                                    <p> { otheruser.interests } </p>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="m-4">
                        <div className="d-flex justify-content-around">
                            <h3> { console.log(user.username), console.log(username), user.username === username ? 'Your ': `${otheruser.username}'s` } activties </h3>
                        </div>
                        {activities && 
                            activities.map((activity, index) => {
                                if(activity.creator === otheruser._id) {
                                    return (
                                        <div key={`activity-${index}`} className="shadow mt-3 all-activity p-2">
                                            <img src={`http://localhost:3001/${activity.image}`}  alt="activity"/>
                                            <div className="activity-body">
                                                <div>
                                                    <p> {activity.title} </p>
                                                    <span> { activity.location } </span>
                                                </div>
                                                <div>
                                                    <p> { activity.createdAt.split('T')[0] } </p>
                                                    <i className="material-icons bg-color"> 
                                                        favorite_border 
                                                    </i> 
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
            }
    </div>
    )
}
export default User
