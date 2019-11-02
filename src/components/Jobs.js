import React, {useState} from 'react'
import PerJob from './PerJob.js'
// import { Pagination } from 'antd';
// import {ReactDOM} from React;

const Jobs = () => {

    const [perJob, showPerJob] = useState(false)

    const getJob = () => {
        showPerJob(true)
    }


    return (
        <div className = "perjob_body">
            { !perJob &&(<div>
                <h2>All Jobs</h2>
                <div className = "container d-flex flex-wrap justify-content-between">
                    <div className = "d-flex justify-content-start  job_div_size position-relative" >
                        <div>
                            <img className = "job_image_size" src = "https://jobinformation.info/wp-content/uploads/2019/08/recruitment-3942378_1920.jpg"/>                         
                        </div>
                        <div>
                            <div>Name of company</div>
                            <div>Title </div>
                        </div>  
                        <div>
                            <button type="button" className="btn btn-outline-dark position-absolute" style = {{bottom: 13+'px'}} onClick = {getJob}>View more</button>
                        </div>
                    </div>
                    <div className = "d-flex justify-content-start  job_div_size position-relative" >
                        <div>
                            <img className = "job_image_size" src = "https://jobinformation.info/wp-content/uploads/2019/08/recruitment-3942378_1920.jpg"/>                         
                        </div>
                        <div>
                            <div>Name of company</div>
                            <div>Title </div>
                        </div>  
                        <div>
                            <button type="button" className="btn btn-outline-dark position-absolute" style = {{bottom: 13+'px'}} onClick = {getJob}>View more</button>
                        </div>
                    </div>
                    <div className = "d-flex justify-content-start  job_div_size position-relative" >
                        <div>
                            <img className = "job_image_size" src = "https://jobinformation.info/wp-content/uploads/2019/08/recruitment-3942378_1920.jpg"/>                         
                        </div>
                        <div>
                            <div>Name of company</div>
                            <div>Title </div>
                        </div>  
                        <div>
                            <button type="button" className="btn btn-outline-dark position-absolute" style = {{bottom: 13+'px'}} onClick = {getJob}>View more</button>
                        </div>
                    </div>
                    <div className = "d-flex justify-content-start  job_div_size position-relative" >
                        <div>
                            <img className = "job_image_size" src = "https://jobinformation.info/wp-content/uploads/2019/08/recruitment-3942378_1920.jpg"/>                         
                        </div>
                        <div>
                            <div>Name of company</div>
                            <div>Title </div>
                        </div>  
                        <div>
                            <button type="button" className="btn btn-outline-dark position-absolute" style = {{bottom: 13+'px'}} onClick = {getJob}>View more</button>
                        </div>
                    </div>
                    <div className = "d-flex justify-content-start  job_div_size position-relative" >
                        <div>
                            <img className = "job_image_size" src = "https://jobinformation.info/wp-content/uploads/2019/08/recruitment-3942378_1920.jpg"/>                         
                        </div>
                        <div>
                            <div>Name of company</div>
                            <div>Title </div>
                        </div>  
                        <div>
                            <button type="button" className="btn btn-outline-dark position-absolute" style = {{bottom: 13+'px'}} onClick = {getJob}>View more</button>
                        </div>
                    </div>
                    <div className = "d-flex justify-content-start  job_div_size position-relative" >
                        <div>
                            <img className = "job_image_size" src = "https://jobinformation.info/wp-content/uploads/2019/08/recruitment-3942378_1920.jpg"/>                         
                        </div>
                        <div>
                            <div>Name of company</div>
                            <div>Title </div>
                        </div>  
                        <div>
                            <button type="button" className="btn btn-outline-dark position-absolute" style = {{bottom: 13+'px'}} onClick = {getJob}>View more</button>
                        </div>
                    </div>
                    
                {/* <div>
                    ReactDOM.render(<Pagination defaultCurrent={1} total={10} />, mountNode);
                </div> */}
                </div>
               

            </div>)}
            {perJob &&(
                <PerJob/>
            )}
        </div>
    )
}

export default Jobs