import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Jobs = () => {

    const [perJob, showPerJob] = useState(false)
    const [notes, setNotes] = useState([])
    const [job, showJob] = useState(null)
    const [page, setPage] = useState(1)

    const getNotes = () => {
        const limit = 4;
        const offset = (page-1) * limit

        axios
            .get(`http://localhost:3020/v1/jobs?limit=${limit}&offset=${offset}`)
            .then(response => {
                setNotes(response.data.jobs)
                
            })
            .catch(console.log)

    }

    const getJobs = (id) =>{

        axios
            .get(`http://localhost:3020/v1/jobs/${id}`)
            .then(response => {
                showJob(response.data.job)
                showPerJob(true)
            })
            .catch(console.log)

    }

    useEffect(() => {
        getNotes()
    }, [page])


    return (
        <div className = "perjob_body">
            {!perJob &&(
                <div>
                    <h2>All Jobs</h2>
                    <div className = "container d-flex flex-wrap justify-content-between">
                        {notes.map((note, i) => {
                            return (
                                <div 
                                    key={`note-${i}`} 
                                    className = "d-flex justify-content-start job_div_size position-relative" >
                                    <div>
                                        <img 
                                            className = "job_image_size" 
                                            src = "https://jobinformation.info/wp-content/uploads/2019/08/recruitment-3942378_1920.jpg"/>                         
                                    </div>
                                    <div>
                                        <div> {note.title} </div>
                                        <div> {note.description} </div>
                                    </div>  
                                    <div>
                                        <button 
                                            type="button" 
                                            className="btn btn-outline-dark position-absolute" 
                                            style = {{bottom: 13+'px'}} 
                                            onClick = {()=> {
                                                getJobs(note.id)
                                            }}>
                                                View more
                                        </button>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className = "d-flex justify-content-center">
                        {page > 1 && (
                            <button onClick={() => setPage(page - 1)}>
                                Previous
                            </button>
                        )}
                        <span style={{marginLeft: 10, marginRight: 10}}>
                            {page}
                        </span>
                            <button onClick={() => setPage(page + 1)}>
                                Next
                            </button>
                    </div>
                </div>
                )}
                {perJob &&(
                    <div className = "d-flex justify-content-around row perjob_size ">
                        <div className = "col-3 shadow-lg">
                            <p style = {{color: 'black'}}> for category filter</p>
                        </div>
                    <div className = "shadow-lg col-8">
                    

                        <div className = "d-flex justify-content-around mb-5 p-3" >
                            <div>
                                <img 
                                    className = "job_image_size" 
                                    src = "https://jobinformation.info/wp-content/uploads/2019/08/recruitment-3942378_1920.jpg"/>                         
                            </div>
                            <div>
                                <h3> {job.title}</h3>
                                <h5> Name of company</h5>
                            </div>                 
                            <div>
                                
                                <p className = "text-danger"> Deadline: {job.deadline}</p>
                            </div>
                        </div>
                        <div className = "mb-5">
                            <h4> Job Description</h4>
                            <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                                It has survived not only five centuries, but also the leap into electronic typesetting, 
                                remaining essentially unchanged. It was popularised in the 1960s with the release of 
                                Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing 
                                software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>
                
                    </div>
                </div>
                )}
            </div>
    )
}

export default Jobs