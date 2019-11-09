import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useHistory } from 'react-router-dom'
import '../scss/user.scss'
const AllActivtie = () => {
    const [activities, setActivities] = useState(null)
    const history = useHistory()

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
        <div className="p-3">
            <div>
                { activities && 
                    activities.map((activity, index) => {
                        return (
                        <div  key={`activity-${index}`} className="shadow mt-3 all-activity p-2">
                            <img src={`http://localhost:3001/${activity.image}`}  alt="activity"/>
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
                                <div>
                                    <Link to={`/activities/${activity._id}`}>
                                        <button className="btn btn-light mt-4">
                                            View more
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )})
                }
            </div>
        </div>
    )

} 
export default AllActivtie