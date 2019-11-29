import React, {useState, useEffect} from 'react';
import axios from 'axios';
// import { create } from 'domain';

const CreateJob = () => {

    const [location, setLocation] = useState({
            country: '',
            city: '',
            state: '',
            zipCode: ''
    })

    const [benefits, setBenefit] = useState([])
    const [educations, setEducation] = useState([])
    const [responsibilities, setResponsibilities] = useState([])

    const [crateOnejob, setcreateJob] = useState({
        categoryId: "cf5ef2e7-b7da-41f9-af53-6ebc16a4e000",
        title: '',
        description: '',
        type: '', 
        vacancy: '',
        gender: '', 
        salary: '' ,
        deadline: '',
        info: ""    
    })

    useEffect(() => {
        setcreateJob({ ...crateOnejob, info: {location, benefits, educations, responsibilities}})
    }, [location, benefits, educations, responsibilities])

    
    const check = () => {
        
        axios
            .post('http://localhost:3020/v1/jobs', crateOnejob, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            })
            .then(response => {
                console.log('r', response)
            })
            .catch(console.log)
    }

    return (
        <div className = "setting_div">
                <div>
                    <h2>Work  info</h2>
                </div>
                <div className="img-wraps">
                    <img 
                        className="img-responsive"
                        src='https://www.trzcacak.rs/myfile/detail/385-3856300_no-avatar-png.png'/>
                </div>
            <form className="col-md-8">
                <div>
                    <label className="form-group d-flex mt-4">
                        <strong className="col-md-4">Title</strong>
                        <input 
                            type="text" 
                            className="form-control"
                            onChange={(e) => setcreateJob({...crateOnejob, title: e.target.value})}/>
                    </label>
                </div>
                <div>
                    <label className="form-group d-flex">
                        <strong className="col-md-4">Description</strong>
                        <input 
                            type="text" 
                            className="form-control"
                            onChange={(e) => setcreateJob({...crateOnejob, description: e.target.value})}/>
                    </label>
                </div>
                <div>
                    <label className="form-group d-flex mt-4">
                        <strong className="col-md-4">Vacancy</strong>
                        <input 
                            type="text" 
                            className="form-control"
                            onChange={(e) => setcreateJob({...crateOnejob, vacancy: e.target.value})}/>
                    </label>
                </div>
                <div>
                    <label className="form-group d-flex mt-4">
                        <strong className="col-md-4">Salary</strong>
                        <input 
                            type="text" 
                            className="form-control"
                            onChange={(e) => setcreateJob({...crateOnejob, salary: e.target.value})}/>
                    </label>
                </div>
                <div className="col-md-6 ">
                    <div className="form-group" id = 'gender'>
                        <label className="col-sm-2">
                            <strong>Work for </strong>
                        </label>
                        <label >
                            <input 
                                type="radio" 
                                name="gender" 
                                value='male'
                                onChange={(e) => setcreateJob({...crateOnejob, gender: e.target.value})}/>
                                Male
                        </label>
                        <label >
                            <input 
                                type="radio" 
                                name="gender" 
                                value="female" 
                                onChange={(e) => setcreateJob({...crateOnejob, gender: e.target.value})}/>
                                Female
                        </label>
                        <label >
                            <input 
                                type="radio" 
                                name="gender" 
                                value="any" 
                                onChange={(e) => setcreateJob({...crateOnejob, gender: e.target.value})}/>
                                Any
                        </label>
                    </div>
                </div>
                <div className="col-md-6 ">
                    <div className="form-group" id = 'type'>
                        <label className="col-sm-2">
                            <strong>Type of work</strong>
                        </label>
                        <label >
                            <input 
                                type="radio" 
                                name="type" 
                                value='partTime'
                                onChange={(e) => setcreateJob({...crateOnejob, type: e.target.value})}/>
                                Part Time
                        </label>
                        <label >
                            <input 
                                type="radio" 
                                name="type" 
                                value="fullTime" 
                                onChange={(e) => setcreateJob({...crateOnejob, type: e.target.value})}/>
                                Full Time
                        </label>
                    </div>
                </div>
                <div>
                    <label className="form-group d-flex">
                        <strong className="col-md-4">Deadline</strong>
                        <input 
                            className="form-control" 
                            type = "date" 
                            // value = {changejob.dob || ''}
                            onChange={(e) => setcreateJob({...crateOnejob, deadline: e.target.value})} />
                    </label>
                </div>
                <div >
                <label  className="form-group d-flex row">
                    <strong className="col-md-4">Location</strong>
                    <div className="col-md-8 p-1 d-flex ">
                        <input 
                            type="text" 
                            placeholder="Country" 
                            className="form-control"
                            onChange={(e) => setLocation({...location, country: e.target.value})    }/>
                        <input 
                            type="text" 
                            placeholder="State" 
                            className="form-control"
                            onChange={(e) => setLocation({...location, state: e.target.value})}/>
                        <input 
                            type="text" 
                            placeholder="City" 
                            className="form-control"
                            onChange={(e) => setLocation({...location, city: e.target.value})}/>
                        <input 
                            type="text" 
                            placeholder="Zip Code" 
                            className="form-control"
                            onChange={(e) => setLocation({...location, zipCode: e.target.value})}/>
                    </div>
                </label>
            </div> 
            <div>
                <label className="form-group d-flex mt-4">
                    <strong className="col-md-4">Benefits</strong>
                    <input 
                        type="text" 
                        // value={job.salary}
                        className="form-control"
                        onChange={(e) => setBenefit(...benefits, [e.target.value])}/>
                </label>
            </div>
            <div>
                <label className="form-group d-flex mt-4">
                    <strong className="col-md-4">Education</strong>
                    <input 
                        type="text" 
                        // value={job.salary}
                        className="form-control"
                        onChange={(e) => setEducation(...educations, [e.target.value])}/>
                </label>
            </div>
            <div>
                <label className="form-group d-flex mt-4">
                    <strong className="col-md-4">Responsibilities</strong>
                    <input 
                        type="text" 
                        // value={job.salary}
                        className="form-control"
                        onChange={(e) => setResponsibilities(...responsibilities, [e.target.value])}/>
                </label>
            </div>
            <div className="d-flex justify-content-end mt-4">
                <button 
                    type="button" 
                    className="btn btn-success"
                    onClick = {check}>
                        Save
                </button>
                <button 
                    type="button" 
                    className="btn btn-danger ml-2" >
                    {/* // onClick = {()=>{showEmployee(true)}}> */}
                        Cancel
                </button>
            </div>
                </form>
                </div>
    )
}

export default CreateJob