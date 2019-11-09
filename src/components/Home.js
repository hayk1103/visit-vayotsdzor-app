import React, {useState} from 'react'
import { Link} from 'react-router-dom'
import Talents from './Talents'
import Jobs from './Jobs'

const Home = () => {

    const [jobs, showJobs] = useState(false)
    const [talents, showTalents] = useState(false)

    return (
        <div>
            { !jobs && !talents && (<main>
                <div className=" bg-transparent text-center text" id = "menu">
                    <div className="card-body  main_part_text col-6" >
                        <div className = "main_page_text">
                            <p className="lead">FRESH TALENT</p>
                            <p className="lead">+</p>
                            <p className="lead">TOP EMPLOYERS</p>
                        </div>
                        <div>
                            <p style = {{fontSize: 30 + 'px'}}  
                                className="lead">
                                    Together we can achieve more...!!!
                            </p>
                        </div>
                        <div className = "p-2 button_margin">
                            <Link to='/jobs' style = {{color: 'white'}}>
                                <button 
                                    type="button" 
                                    className="btn btn-dark mx-auto">
                                    Find Job
                                </button>
                            </Link> 
                        <button 
                            type="button" 
                            className="btn btn-dark" 
                            onClick = {() => {showTalents(true)}}>
                                <Link to='/talents'
                                    style = {{color: 'white'}}>
                                        Find Talents
                                </Link>
                        </button>
                        </div>
                    </div>
                </div>
         </main>)}

        {/* {jobs &&(
            <Jobs/>
        )}
        {talents && (
            <Talents/>
        )} */}
        </div>
    )
}

export default Home




// -------
//  { <div id="slide">
//                 <div id="carouselExampleControls" className="carousel slide slideshow d-flex justify-content-center" data-ride="carousel">
//                     <div className="carousel-inner  d-flex justify-content-around">
//                         <div className="carousel-item active">

//                                 <img className="d-block " id = "images" src="https://img.freepik.com/free-photo/happy-young-businesswoman-holding-folder-standing-front-building_23-2148026710.jpg?size=626&ext=jpg" alt="First slide"/>
//                                 <div className="carousel-caption d-md-block">
//                                     <h5 style = {{color: 'black'}}>Member of our team</h5>
//                                     <p>She is a big talant</p>
//                                 </div>
//                         </div>
//                         <div className="carousel-item">
//                             <img className="d-block " id = "images" src="https://smhttp-ssl-39255.nexcesscdn.net/wp-content/uploads/2017/02/Fabio-attanasio.png" alt="Second slide"/>
//                             <div className="carousel-caption d-md-block">
//                                 <h5 style = {{color: 'black'}}>Member of our team</h5>
//                                 <p>He is a big talant</p>
//                             </div>
//                         </div>
//                         <div className="carousel-item">
//                             <img className="d-block " id = "images" src="https://i1.wp.com/www.styleatacertainage.com/wp-content/uploads/2019/01/IMG_0046-2.jpeg?resize=780%2C780&ssl=1" alt="Third slide"/>
//                             <div className="carousel-caption  d-md-block">
//                                 <h5>Member of our team</h5>
//                                 <p>She is a big talant</p>
//                             </div>
//                         </div>
//                     </div>
//                     <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
//                         <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//                         <span className="sr-only">Previous</span>
//                     </a>
//                     <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
//                         <span className="carousel-control-next-icon" aria-hidden="true"></span>
//                         <span className="sr-only">Next</span>
//                     </a>
//                 </div>
// </div> }