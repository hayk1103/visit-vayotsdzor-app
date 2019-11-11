import React, { useState, useEffect } from 'react' 
import { useParams, useHistory } from 'react-router-dom'
import Edit from './Edit'
import axios from 'axios'

const Activity = ({ user })  => {
    const { id } = useParams()
    const history = useHistory()
    const [activity, setActivity] = useState(null)
    const [showEditButton, setShowEditButton] = useState(false)


    const getOneActivity = () => {
        axios
            .get(`http://localhost:3001/api/activity?activityId=${id}`, { headers: {'Authorization': localStorage.token }})
            .then((response) => setActivity(response.data.activity))
            .catch(console.log)
    }

    const deleteActivity = (id) => {
        axios
            .delete(`http://localhost:3001/api/activity?activityId=${id}`, {headers: {'Authorization': localStorage.token}})
            .then(data => history.push('/user'))
            .catch(console.log)
    }

  
    useEffect(() => {
        getOneActivity()
    }, [])
    console.log(activity)
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
                                <div>
                                    <p className="mb-4"> 
                                        {activity.location} 
                                    </p>
                                    <p>
                                        likes: {activity.likesCount} 
                                    </p> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                }
                {
                    showEditButton && (
                        <Edit 
                        activity={activity}
                        setShowEditButton={setShowEditButton}
                        getOneActivity={getOneActivity}/>
                    )
                }
                {/* {showEditButton && (
                    <div className="show-activity container"> 
                        <div className="d-flex justify-content-center">
                            <h1>
                                Change your activity
                            </h1>
                        </div>
                        <button 
                        className="close btn"
                        onClick={() => setShowEditButton(false)}>
                            X 
                        </button>
                        <div className="d-flex justify-content-center mt-4">
                            <div className="w-50">
                                <div className="input-group mb-3">
                                    <input 
                                        type="text" 
                                        // value={activity.title}
                                        className="form-control"
                                        onChange={(e) =>  {
                                            console.log(e.target.value)
                                            setChangedActivity({...changedActivity, title: e.target.value})
                                        }}/>
                                </div>
                                <div className="input-group mb-3">
                                    <input 
                                        type="text" 
                                        value={activity.location}
                                        className="form-control"
                                        onChange={(e) =>  setChangedActivity({...changedActivity, location: e.target.value})}/>
                                </div>
                                <div className="input-group mb-3">
                                    <div className="custom-file">
                                        <input 
                                            type="file" 
                                            className="custom-file-input" 
                                            name="image" 
                                            id="inputGroupFile01" 
                                            aria-describedby="inputGroupFileAddon01"/>
                                        <label 
                                            className="custom-file-label" 
                                            htmlFor="inputGroupFile01">
                                            Choose image
                                        </label>
                                    </div>
                                </div>
                                <div className="input-group mb-3">
                                    <input 
                                        type="text" 
                                        value={activity.description}
                                        className="form-control"
                                        onChange={(e) =>  setChangedActivity({...changedActivity, description: e.target.value})}/>
                                </div>
                                <div className="input-group mb-3">
                                    <input 
                                        type="text" 
                                        value={activity.hastag}
                                        className="form-control" 
                                        onChange={(e) =>  setChangedActivity({...changedActivity, hastag: e.target.value})}/>
                                </div>
                                <div className="input-group mb-3">
                                    <input 
                                        type="text" 
                                        value={activity.category}
                                        className="form-control" 
                                        onChange={(e) =>  setChangedActivity({...changedActivity, category: e.target.value})}/>
                                </div>
                                <div className="d-flex justify-content-center mt-2">
                                    <button 
                                        type="submit" 
                                        className="btn btn-sign"
                                        onClick={() => updateActivty(activity._id)}> 
                                        Change 
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )} */}
            </div>
        )
}
export default Activity