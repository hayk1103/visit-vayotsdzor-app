import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'

const Activities = ({
    activities
}) => {

    const [activity, setActivity] = useState(null)
    const { search } = useParams()

    if(!activities) activities = activity
    
    const getSearchedActivities = () => {
        axios   
            .get(`http://localhost:3001/api/activity/search?search=${search}`)
            .then(response => {
                setActivity(response.data.data)
            })
            .catch(console.log)
        }
        useEffect(() => {
            if(search) getSearchedActivities()
        }, [])
    return (
        <div className="p-3">
            <div>
                {activities && activities.map((activity, index) => (
                    <div  key={`activity-${index}`} className="shadow mt-3 all-activity p-2">
                        <img src={`http://localhost:3001/${activity.image}`}  alt="activity"/>
                        <div className="activity-body">
                            <div>
                                <p> {activity.title}  </p>
                            </div>
                            <div>
                                <p> { activity.createdAt.split('T')[0] } </p>
                                <FontAwesomeIcon 
                                        icon={faHeart} 
                                        className='icon-color'/>  
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