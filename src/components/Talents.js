import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Talents = () => {

    const [notes, setNotes] = useState([])
    const [talent, showTalent] = useState(false)
    const [user, showUser] = useState(null)
    const [page, setPage] = useState(1)


    const getTalents = () => {
        const limit = 4;
        const offset = (page-1) * limit

        axios
            .get('http://localhost:3020/v1/users', { params: { limit, offset, type: 'employee' } })
            .then(response => {
                setNotes(response.data.users)              
            })
            .catch(console.log)

    }

    const getOneTalent = (id) =>{

        axios
            .get(`http://localhost:3020/v1/users/${id}`)
            .then(response => {
                showUser(response.data.user)
                showTalent(true)
            })
            .catch(console.log)

    }

    // const getTalentInfo = (id) =>{

    //     axios
    //         .get(`http://localhost:3020/v1/users/${id}`)
    //         .then(response => {
    //             showUser(response.data.user)
    //             showTalent(true)
    //         })
    //         .catch(console.log)

    // }

    useEffect(() => {
        getTalents()
    }, [page, user])

    return (
        <div className = "perjob_body">
            {/* talenti listi masy */}
    {!talent &&( 
    <div >
        <div className = "container d-flex justify-content-between m-4">
            <div className = "col-3 shadow   bg-white rounded ">
                <p style = {{color: 'black'}}> 
                    for category filter
                </p>
            </div>
            <div className = "col-8 shadow   bg-white rounded">
                <div>
                    <h3>All Talents</h3>
                </div>
                {notes.map((note, i) => {
                    return (<div key={`note-${i}`} className = "d-flex justify-content-start position-relative border-bottom m-4">
                        <div className = "d-flex justify-content-start user_margin" >
                            <div>
                                <img 
                                    className = "job_image_size" 
                                    src = "https://jobinformation.info/wp-content/uploads/2019/08/recruitment-3942378_1920.jpg"/>                         
                            </div>
                            <div> {note.firstName} </div>
                            <div> {note.lastName}</div>
                            <div> Proffesion </div>
                            <div>
                                <button 
                                    type="button" 
                                    className="btn btn-outline-dark position-absolute" 
                                    style = {{bottom: 13+'px'}} 
                                    onClick = {()=>{
                                        getOneTalent(note.id)
                                    }}>
                                        View more
                                </button>
                            </div>
                        </div>
                </div>)})}
            </div>
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
            {/* talenti listi masy prcav */}
            {/* talenti mi hatiki masy */}
        {talent &&(
                <div className = "d-flex justify-content-around row perjob_size ">
                    
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
                        <div className = "my-4 flex row justify-content-around">
                            <div className = "col-4">
                                <p > Email adress </p>
                                <p > Gender</p>
                                <p > Date of birth</p>
                            </div>
                            <div className = "col-6">
                                <p > {user.email} </p>
                                <p > {user.gender} </p>
                                <p > {user.dob} </p>
                            </div>
                        </div>
                        <div className = "m-4  ">
                            <div>
                                <h4>Biography</h4>
                                <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                                    It has survived not only five centuries, but also the leap into electronic typesetting, 
                                    remaining essentially unchanged. It was popularised in the 1960s with the release of 
                                    Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing 
                                    software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            </div>
                            <div>
                                <h4> Skills</h4>
                                <p> Skills name must be from axios</p>
                            </div>
                            <div>
                                <h4> Education</h4>
                                <div className = "d-flex justify-content-between">
                                    <p> Education name must be from axios</p>
                                    <p> Education date must be from axios</p>
                                    <p> Education degree must be from axios</p>
                                </div>
                            </div>
                            <div>
                                <h4> Languages</h4>
                                <div className="d-flex row">
                                    <div className = "col">
                                        <p>Language type must be from axios</p>
                                    </div>
                                    <div className = "col">  
                                        <p>Language level must be from axios</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        )}
            
        </div>
    )
}

export default Talents



