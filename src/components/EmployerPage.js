import React from 'react'

const EmployerPage = () => {
    return (
        <div className = "container perjob_body">
            <div className = "d-flex justify-content-around row perjob_size ">
                <div className = "col-3 shadow-lg p-3  bg-white rounded ">
                    <p style = {{color: 'black'}}> for category filter</p>
                </div>
                <div className = "job_desc shadow-lg p-3  bg-white rounded col-8">
                    

                    <div className = "d-flex justify-content-around mb-5 p-3" >
                        <div>
                            <img className = "job_image_size" src = "https://jobinformation.info/wp-content/uploads/2019/08/recruitment-3942378_1920.jpg"/>                         
                        </div>
                        <div>
                            <h3> FirstName, lastName </h3>
                            {/* <h5> Name of company</h5> */}
                        </div>                 
                        {/* <div>
                            
                            <p className = "text-danger"> Deadline: End Date </p>
                        </div> */}
                    </div>
                    <div className = "mb-5">
                        <h4> From User info Table about Employer</h4>
                        <p> Phone </p>
                        <p> dob </p>
                        <p> Gender </p>
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
    )
}

export default EmployerPage