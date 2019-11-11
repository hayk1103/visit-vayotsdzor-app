import React, { useState } from 'react' 
import axios from 'axios'

const Edit = ({ 
        activity, 
        setShowEditButton,
        getOneActivity
    }) => {
    const [changedActivity, setChangedActivity] = useState({
        title: activity.title,
        location: activity.location,
        image: activity.image,
        description: activity.description,
        tags: activity.tags,
        category: activity.category
    })

    const onImageUpload = (e) => {
        const data = new FormData()
        data.append('image', e.target.files[0])
        axios
            .post('http://localhost:3001/api/image', data, {headers: {'Authorization': localStorage.token}})
            .then(response => setChangedActivity({...changedActivity, image: response.data.file.path }))
            .catch(console.log)
    }
    const updateActivty = (id) => {
        console.log(localStorage.token)
        axios
            .put(`http://localhost:3001/api/activity?activityId=${id}`, changedActivity, {headers: {'Authorization': localStorage.token}})
            .then(response =>  {
                getOneActivity()
                setShowEditButton(false)
            })
            .catch(console.log)
    }

    return (
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
                <div className="w-75">
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <label 
                                className="input-group-text label-text"
                                htmlFor="title">
                                Activity title
                            </label>
                        </div>
                        <input 
                            type="text" 
                            value={changedActivity.title}
                            className="form-control"
                            id='title'
                            onChange={(e) =>  {
                                setChangedActivity({...changedActivity, title: e.target.value})
                            }}/>
                    </div>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <label 
                                className="input-group-text label-text" 
                                htmlFor="location">
                                Activity location
                            </label>
                        </div>
                        <input 
                            type="text" 
                            value={changedActivity.location}
                            className="form-control"
                            id="location"
                            onChange={(e) =>  setChangedActivity({...changedActivity, location: e.target.value})}/>
                    </div>
                    <div className="input-group mb-3">
                        <div className="custom-file">
                            <input 
                                type="file" 
                                className="custom-file-input" 
                                name="image" 
                                id="inputGroupFile01" 
                                aria-describedby="inputGroupFileAddon01"
                                onChange={(e) => onImageUpload(e)}/>
                            <label 
                                className="custom-file-label" 
                                htmlFor="inputGroupFile01">
                                Choose image
                            </label>
                        </div>
                    </div>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <label 
                                className="input-group-text label-text" 
                                htmlFor="description">
                                Activity description
                            </label>
                        </div>
                        <textarea 
                            type="text" 
                            value={changedActivity.description}
                            className="form-control"
                            id="description"
                            onChange={(e) =>  setChangedActivity({...changedActivity, description: e.target.value})}>
                        </textarea>
                    </div>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <label 
                                className="input-group-text label-text" 
                                htmlFor="hashtags">
                                Activity hashtags
                            </label>
                        </div>
                        <input 
                            type="text" 
                            value={changedActivity.tags}
                            className="form-control" 
                            id="hashtags"
                            onChange={(e) =>  setChangedActivity({...changedActivity, tags: e.target.value})}/>
                    </div>
                    <div className="input-group mb-3">
                    <div className="input-group-prepend">
                            <label 
                                className="input-group-text label-text" 
                                htmlFor="category">
                                Activity hashtags
                            </label>
                        </div>
                        <select 
                            className="form-control" 
                            id="category"
                            onChange={(e) => setChangedActivity({...changedActivity, category: e.target.value})}>
                            <option> Travel </option>
                            <option> Nature </option>
                            <option> Adventure </option>
                            <option> City </option>
                            <option> Culture </option>
                        </select>
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
    )
}
export default Edit