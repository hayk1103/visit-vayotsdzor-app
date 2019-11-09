import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

const CreateActivity = () => {
    const history = useHistory()

    const [activity, setActivity] = useState({
        title: '',
        location: '',
        image: '',
        description: '',
        hastag: '',
        gallery: '',
        category: ''
    })

    const createActivity = () => {
        axios
            .post('http://localhost:3001/api/activity',  activity, {headers: {'Authorization': localStorage.token}})
            .then(data => history.push('/user'))
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
        <div className="d-flex justify-content-center ">
            <div className="container">
                <div className="d-flex justify-content-center mt-5"> 
                    <h3> Create Your Activity </h3>
                </div>
                <div className="card-body">
                    <div className="input-group mb-3">
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Tilte" 
                            onChange={(e) => setActivity({...activity, title: e.target.value})} 
                            required/>
                    </div>
                    <div className="input-group mb-3">
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Location" 
                            onChange={(e) =>  setActivity({...activity, location: e.target.value})}
                            required/>
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
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Description" 
                            onChange={(e) =>  setActivity({...activity, description: e.target.value})}
                            required/>
                    </div>
                    <div className="input-group mb-3">
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Hashtag" 
                            onChange={(e) =>  setActivity({...activity, hastag: e.target.value})}/>
                    </div>
                    <div className="input-group mb-3">
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Category" 
                            onChange={(e) =>  setActivity({...activity, category: e.target.value})}/>
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
