import React, {useState, useEffect} from 'react';
import axios from 'axios';

const EditJob = ({job}) => {

    const [benefits, setBenefit] = useState([])
    const [educations, setEducation] = useState([])
    const [responsibilities, setResponsibilities] = useState([])

    const [location, setLocation] = useState({
        country: '',
        city: '',
        state: '',
        zipCode: ''
    })

    const [changejob, setchangeJob] = useState({
        title: '',
        description: '',
        type: '', 
        vacancy: '',
        gender: '', 
        salary: '' ,
        deadline: '', 
        info: ''
    })


    const check = () => {
        axios
            .put(`http://localhost:3020/v1/jobs/${job.id}`, changejob, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            })
            .then(response => {
                console.log(response)
            })
            .catch(console.log)
    }

    const onLogoUpload = (e) => {
        const data = new FormData()
        data.append('avatar', e.target.files[0]) 
        axios
            .put(`http://localhost:3020/v1/jobs/${job.id}/logo`, data, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            }) 
            .then(() => getUser())
            .catch(console.log)
    }

    const onLogoDelete = () => {
        axios
            .delete(`http://localhost:3020/v1/jobs/${job.id}/logo`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            })
            .then(() => getUser())
            .catch(console.log)
    }

    useEffect(() => {
        setchangeJob({ ...changejob, info: {location, benefits, educations, responsibilities}})
    }, [location, benefits, educations, responsibilities])

    return (
        <div className = "setting_div">
        <div>
                    <h2>Work  info</h2>
                </div>
                <div className="img-wraps">
                    {job.logo ? (
                            <>
                            <img
                                src={`${job.logo}`} 
                                className="img-responsive"/>
                            <span  
                                className="closes" 
                                onClick = {onLogoDelete}>
                                    &times;
                            </span>
                            </>
                        ) : (
                            <>
                            <img 
                                className="img-responsive"
                                src={'https://www.trzcacak.rs/myfile/detail/385-3856300_no-avatar-png.png'}/>
                            <input 
                                type = "file" 
                                className="position-absolute "
                                onChange = {onLogoUpload}/>
                                </>
                        
                        )}
                </div>
            <form className="col-md-8">
                <div>
                    <label className="form-group d-flex mt-4">
                        <strong className="col-md-4">Title</strong>
                        <input 
                            type="text" 
                            value={job.title}
                            className="form-control"
                            onChange={(e) => setchangeJob({...changejob, title: e.target.value})}/>
                    </label>
                </div>
                <div>
                    <label className="form-group d-flex">
                        <strong className="col-md-4">Description</strong>
                        <input 
                            type="text" 
                            value = {job.description || ''}
                            className="form-control"
                            onChange={(e) => setchangeJob({...changejob, description: e.target.value})}/>
                    </label>
                </div>
                <div>
                    <label className="form-group d-flex mt-4">
                        <strong className="col-md-4">Vacancy</strong>
                        <input 
                            type="text" 
                            value={job.vacancy || ''}
                            className="form-control"
                            onChange={(e) => setchangeJob({...changejob, vacancy: e.target.value})}/>
                    </label>
                </div>
                <div>
                    <label className="form-group d-flex mt-4">
                        <strong className="col-md-4">Salary</strong>
                        <input 
                            type="text" 
                            value={job.salary || ''}
                            className="form-control"
                            onChange={(e) => setchangeJob({...changejob, salary: e.target.value})}/>
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
                                onChange={(e) => setchangeJob({...changejob, gender: e.target.value})}/>
                                Male
                        </label>
                        <label >
                            <input 
                                type="radio" 
                                name="gender" 
                                value="female" 
                                onChange={(e) => setchangeJob({...changejob, gender: e.target.value})}/>
                                Female
                        </label>
                        <label >
                            <input 
                                type="radio" 
                                name="gender" 
                                value="any" 
                                onChange={(e) => setchangeJob({...changejob, gender: e.target.value})}/>
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
                                name="gender" 
                                value='partTime'
                                onChange={(e) => setchangeJob({...changejob, type: e.target.value})}/>
                                Part Time
                        </label>
                        <label >
                            <input 
                                type="radio" 
                                name="gender" 
                                value="fullTime" 
                                onChange={(e) => setchangeJob({...changejob, type: e.target.value})}/>
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
                            value = {changejob.dob || ''}
                            onChange={(e) => setchangeJob({...changejob, deadline: e.target.value})} />
                    </label>
                </div>
                <div >
                    <label  className="form-group d-flex row">
                        <strong className="col-md-4">Location</strong>
                        <div className="col-md-8 p-1 d-flex ">
                            <input 
                                type="text" 
                                value = {job.location.country || ''}
                                className="form-control"
                                onChange={(e) => setLocation({...location, country: e.target.value})    }/>
                            <input 
                                type="text" 
                                placeholder="State" 
                                value = {job.location.state || ''}
                                className="form-control"
                                onChange={(e) => setLocation({...location, state: e.target.value})}/>
                            <input 
                                type="text" 
                                placeholder="City" 
                                value = {job.location.city || ''}
                                className="form-control"
                                onChange={(e) => setLocation({...location, city: e.target.value})}/>
                            <input 
                                type="text" 
                                placeholder="Zip Code" 
                                value = {job.location.zipCode || ''}
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
                            className="form-control"
                            // value = {changejob.benefits}
                            onChange={(e) => setBenefit(...benefits, [e.target.value])}/>
                    </label>
                </div>
                <div>
                    <label className="form-group d-flex mt-4">
                        <strong className="col-md-4">Education</strong>
                        <input 
                            type="text" 
                            className="form-control"
                            onChange={(e) => setEducation(...educations, [e.target.value])}/>
                    </label>
                </div>
                <div>
                    <label className="form-group d-flex mt-4">
                        <strong className="col-md-4">Responsibilities</strong>
                        <input 
                            type="text" 
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
                    className="btn btn-danger ml-2" 
                    onClick = {()=>{showEmployee(true)}}
                    >
                        Cancel
                </button>
            </div>
                </form>
        </div>
    )
}
export default EditJob;

