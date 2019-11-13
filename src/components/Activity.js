import React, { useState, useEffect } from 'react' 
import { useParams, useHistory, Link } from 'react-router-dom'

import Edit from './Edit'

import axios from 'axios'

const Activity = ({ 
    user,
    setOtherUser
 })  => {
    const { id } = useParams()
    const history = useHistory()
    const [creatorId, setCreatorId] = useState(null)
    const [activity, setActivity] = useState(null)
    const [creator, setCreator] = useState(null)
    const [showEditButton, setShowEditButton] = useState(false)


    const getOneActivity = () => {
        axios
            .get(`http://localhost:3001/api/activity?activityId=${id}`, { headers: {'Authorization': localStorage.token }})
            .then((response) => {
                setActivity(response.data.activity)
                setCreatorId(response.data.activity.creator)
            })
            .catch(console.log)
    }

    const deleteActivity = (id) => {
        axios
            .delete(`http://localhost:3001/api/activity?activityId=${id}`, {headers: {'Authorization': localStorage.token}})
            .then(() => history.push('/user'))
            .catch(console.log)
    }
    const getCreater = (id) => {
        axios
            .get(`http://localhost:3001/api/other/user?id=${id}`, {headers: {'Authorization': localStorage.token}})
            .then(response => {
                setCreator(response.data.user)
                setOtherUser(response.data.user)
            })
            .catch(console.log)
    }
  
    useEffect(() => {
        getOneActivity()
    }, [])

    useEffect(() => {
        getCreater(creatorId)
    }, [creatorId])

    return ( 
        <div>
            {activity && 
                <div className="row">
                    <div className="col-md-4 mt-4">
                        <img 
                            src={`http://localhost:3001/${activity.image}`}
                            className="card-img" 
                            style={{ height: 300, borderRadius: 20}}
                            alt="Activity image"/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <div className="d-flex justify-content-between mt-3">
                                <div>
                                    <h5 className="card-title mb-4"> 
                                        {activity.title} 
                                    </h5>
                                    <p className="card-text mb-4">
                                        {activity.description}
                                    </p>
                                    <small className="text-muted mr-5"> 
                                        { activity.tags }
                                    </small>
                                    <small className="text-muted"> 
                                        { activity.category }
                                    </small>
                                   
                                </div>
                                <div>
                                    <p className="mb-4"> 
                                        {activity.location} 
                                    </p>
                                    <p>
                                        likes: {activity.likesCount} 
                                    </p> 
                                </div>
                            </div>
                            {creator && activity.creator !== user._id && (
                                <div className="d-flex mt-5">
                                    <p className="mr-5 mt-2"> Created by: </p>
                                    <img 
                                        src={`http://localhost:3001/${creator.avatar}`}
                                        style={{width:40, height:40, borderRadius: 100}}/>
                                    <Link to={`/other/user/${creator.username}`} className="ml-5"> 
                                        {creator.username} 
                                    </Link>
                                </div>
                            )}
                            {user && activity.creator === user._id  && (
                                <div className="mt-5">
                                    <button 
                                        className="btn btn-primary mr-4" 
                                        onClick={() => deleteActivity(id)}>  
                                        delete
                                    </button>
                                    <button 
                                    className="btn btn-primary"
                                    onClick={() => setShowEditButton(true)}>  
                                        edit
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                }
                {showEditButton && (
                        <Edit 
                        activity={activity}
                        setShowEditButton={setShowEditButton}
                        getOneActivity={getOneActivity}/>
                    )
                }
            </div>
        )
}
export default Activity