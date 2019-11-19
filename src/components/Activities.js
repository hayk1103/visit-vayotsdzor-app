import React from 'react'
import { Link } from 'react-router-dom'

const Activities = ({
    activities
}) => {
    return (
        <div className="p-3">
            <div>
                {activities && activities.map((activity, index) => (
                    <div  key={`activity-${index}`} className="shadow mt-3 all-activity p-2">
                        <img src={activity.image} alt="activity"/>
                        <div className="activity-body">
                            <div>
                                <p> {activity.title}  </p>
                                <i className="material-icons bg-color active-icon "> 
                                    room 
                                </i> 
                                <span> { activity.location } </span>
                            </div>
                            <div>
                                <p> { activity.createdAt.split('T')[0] } </p>
                                <i className="material-icons bg-color"> 
                                    favorite_border 
                                </i> 
                                <span> { activity.likesCount } </span>
                            </div>
                            <div >
                                <Link to={`/activities/${activity._id}`}>
                                    <button className="btn btn-light mt-4">
                                        View more
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
} 
export default Activities