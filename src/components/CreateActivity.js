import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faPlusCircle, faCheck } from '@fortawesome/free-solid-svg-icons'

import axios from 'axios'

const CreateActivity = ({ currentLoc }) => {
    console.log(currentLoc)
    const history = useHistory()

    const [activity, setActivity] = useState({
        title: '',
        location: currentLoc,
        image: '',
        description: '',
        hastag: '',
        gallery: '',
        category: ''
    })

    const createActivity = () => {
        axios
            .post('http://localhost:3001/api/activity',  activity, {headers: {'Authorization': localStorage.token}})
            .then(() => history.push('/user'))
            .catch(console.log)
    }

    const onImageUpload = (e) => {
        const data = new FormData()
        data.append('image', e.target.files[0])
        axios
            .post('http://localhost:3001/api/image', data, {headers: {'Authorization': localStorage.token}})
            .then(response => setActivity({...activity, image: response.data.file.path }))
            .catch(console.log)
    }

    return ( 
        <div className="d-flex justify-content-center actvity-bg">
            <div className="container ">
                <div className="d-flex justify-content-center mt-5"> 
                    <h3> Create Your Activity </h3>
                </div>
                <div className="card-body">
                    <div className="input-group mb-3">
                    <div className="input-group-prepend">
                            <label 
                                className="input-group-text label-text"
                                htmlFor="title">
                                Title
                            </label>
                        </div>
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Tilte" 
                            id="title"
                            onChange={(e) => setActivity({...activity, title: e.target.value})} 
                            required/>
                    </div>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <label 
                                className="input-group-text label-text"
                                htmlFor="location">
                                Location
                            </label>
                        </div>
                        <span className="list-group-item loc">
                            Location added
                            <FontAwesomeIcon 
                                icon={faCheck}
                                style={{fontSize: 20, marginLeft: 12}}
                            /> 
                          </span>
                    </div>
                    <div className="input-group mb-3">
                        <div className="custom-file" >
                            <input 
                                type="file" 
                                className="custom-file-input" 
                                name="image" 
                                id="inputGroupFile01" 
                                aria-describedby="inputGroupFileAddon01" 
                                onChange={(e) => onImageUpload(e)} 
                                required/>
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
                                htmlFor="desription">
                                Description
                            </label>
                        </div>                       
                         <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Description" 
                            id="description"
                            onChange={(e) =>  setActivity({...activity, description: e.target.value})}
                            required/>
                    </div>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <label 
                                className="input-group-text label-text"
                                htmlFor="hashtags">
                                Hashtags
                            </label>
                        </div>
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Hashtag" 
                            id="hashtags"
                            onChange={(e) =>  setActivity({...activity, hastag: e.target.value})}/>
                    </div>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <label 
                                className="input-group-text label-text"
                                htmlFor="category">
                                Category
                            </label>
                        </div>
                        <select 
                            className="form-control" 
                            id="category"
                            onChange={(e) => setActivity({...activity, category: e.target.value})}>
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
                            onClick={createActivity}> 
                            Create 
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CreateActivity
