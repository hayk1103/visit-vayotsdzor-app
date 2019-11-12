import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import axios from 'axios'

const User = ({ otherUser }) => {
    const [activities, setActivities] = useState(null)

    const getActivity = () => {
        axios
            .get('http://localhost:3001/api/activities')
            .then(response => setActivities(response.data.activities))
            .catch(console.log)
    }

    useEffect(() => {
        getActivity()
    }, [])
        
    return (
        <div id="account-page">
            {otherUser && 
                <div>
                    <div className="user-bg p-2">
                        <div className="w-50 d-flex justify-content-between">
                            <img 
                                src={`http://localhost:3001/${otherUser.avatar}`} 
                                className="card-img rounded" />
                            <div>
                                <h2> { otherUser.username } </h2>
                                <p> { otherUser.fullName }  </p>
                                {otherUser.aboutMe && (
                                    <p> { otherUser.aboutMe } </p>
                                )}
                                {otherUser.interests && (
                                    <p> { otherUser.interests } </p>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="m-4">
                        <div className="d-flex justify-content-around">
                            <h3> {otherUser.username} activties </h3>
                        </div>
                        {activities && 
                            activities.map((activity, index) => {
                                if(activity.creator === otherUser._id) {
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
