import React from 'react'

const Talents = () => {
    return (
        <div>
            <h2>Talents</h2>
            <div className = "container d-flex flex-wrap justify-content-between">
                <div className = "d-flex justify-content-start  job_div_size" >
                    <div>
                        <img className = "job_image_size" src = "https://jobinformation.info/wp-content/uploads/2019/08/recruitment-3942378_1920.jpg"/>                         
                    </div>
                    <div>
                        <div><a href = "#">Name of company</a> </div>
                        <div><a href = "#">Title</a> </div>
                    </div>
                        
                </div>
            </div>
        </div>
    )
}

export default Talents