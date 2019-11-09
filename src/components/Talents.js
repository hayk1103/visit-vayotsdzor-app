import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Talents = () => {

    const [notes, setNotes] = useState([])
    const [talent, showTalent] = useState(false)
    const [user, showUser] = useState(null)
    const [page, setPage] = useState(1)


    const getNotes = () => {
        const limit = 4;
        const offset = (page-1) * limit

        axios
            .get(`http://localhost:3020/v1/users?limit=${limit}&offset=${offset}`)
            .then(response => {
                // response.data.users.forEach(user => {
                //     if(user.accountType === 'employee'){
                //         setNotes(user)
                //     }
                // })
                setNotes(response.data.users)              
            })
            .catch(console.log)

    }

    const getTalents = (id) =>{

        axios
            .get(`http://localhost:3020/v1/users/${id}`)
            .then(response => {
                showUser(response.data.user)
                showTalent(true)
            })
            .catch(console.log)

    }

    useEffect(() => {
        getNotes()
    }, [page, user])

    return (
        <div>
            {!talent &&( <div>
            <div className = "container d-flex flex-wrap justify-content-between">
            {notes.map((note, i) => {
                <h2>Talents</h2>
                return (
                    <div key={`note-${i}`} 
                        className = "d-flex justify-content-start  job_div_size position-relative">
                        <div className = "d-flex justify-content-start  job_div_size" >
                            <div>
                                <img 
                                    className = "job_image_size" 
                                    src = "https://jobinformation.info/wp-content/uploads/2019/08/recruitment-3942378_1920.jpg"/>                         
                            </div>
                            <div>
                                {note.firstName}
                            </div>
                            <div>
                                {note.lastName}
                            </div>
                            <div>
                                <button 
                                    type="button" 
                                    className="btn btn-outline-dark position-absolute" 
                                    style = {{bottom: 13+'px'}} 
                                    onClick = {()=>{
                                        getTalents(note.id)
                                    }}>
                                    
                                        View more
                                </button>
                            </div>

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
            </div>)}
        {talent &&(
            <div className = "container perjob_body">
                <div className = "d-flex justify-content-around row perjob_size ">
                    <div className = "col-3 shadow-lg p-3  bg-white rounded ">
                        <p style = {{color: 'black'}}> 
                            for category filter
                        </p>
                    </div>
                    <div  className = "job_desc shadow-lg p-3  bg-white rounded col-8">
                        <div className = "d-flex justify-content-around mb-5 p-3" >
                            <div>
                                <img className = "job_image_size" 
                                    src = "https://jobinformation.info/wp-content/uploads/2019/08/recruitment-3942378_1920.jpg"/>                         
                            </div>
                            <div>
                                <h3> {user.firstName} </h3>
                                <h5> {user.lastName} </h5>
                            </div>                 
                        </div>
                        <div className = "mb-5">
                            <h4> About User</h4>
                            <div>                                  
                                <p > {user.email} user email</p>
                                <p > {user.phone} user phone</p>
                                <p > {user.gender} user gender</p>
                                <p > {user.dob} user dob</p>
                            </div>
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
            </div>
        )}
            
        </div>
    )
}

export default Talents



