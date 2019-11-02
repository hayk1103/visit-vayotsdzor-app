import React from 'react'
import { BrowserRouter, NavLink, Switch, Route } from 'react-router-dom'
import Home from './Home'
import AboutUs from './AboutUs'
import SignIn from './SignIn'
import SignUp from './SignUp'
import Jobs from './Jobs.js'
import Companies from './Companies'
import Talents from './Talents'
import OtherEvents from './OtherEvents'

const App = () => {
    return (
        <BrowserRouter>
            <header>
                <nav className = "navbar navbar-light  bg-light d-flex justify-content-around  navbar-expand-lg " id = "job">
                    <div className = "navbar-brand">
                        <NavLink to='/'> <img src = "#" width="80px" height="80px" className="d-inline-block mr-2"/></NavLink>
                    </div>
                    {/* <button className = "navbar-toggler"><span className = "navbar-toggler-icon"></span></button> */}
                    <div className="nav container collapse navbar-collapse d-flex justify-content-around ">
                        <NavLink to='/about-us' >About Us</NavLink>                                    
                        <NavLink to='/jobs' >Jobs</NavLink> 
                        <NavLink to='/companies' >Companies</NavLink> 
                        <NavLink to='/talents' >Talents</NavLink> 
                        <NavLink to='/other-events' >Other Events</NavLink> 
                        
                    </div>
                    <div className = "d-flex justify-content-between">
                        <NavLink to='/sign-in' >Sign In</NavLink> 
                        <NavLink to='/sign-up' >Sign Up</NavLink> 
                        <div className="dropdown">
                            <button className="btn btn-secondary dropdown-toggle bg-transparent border-0" type="button">en</button>
                            <div className="dropdown-menu" >
                                <a className="dropdown-item" href="#">arm</a>
                                <a className="dropdown-item" href="#">rus</a>                               
                            </div> 
                        </div>
                    </div>
                </nav>
                   
            </header>           
            <Switch>
                <Route exact path="/"> <Home/> </Route>
                <Route path = "/about-us"> <AboutUs/> </Route>
                <Route path = "/jobs"> <Jobs/> </Route>
                <Route path = "/companies"> <Companies/> </Route>
                <Route path = "/talents"> <Talents/> </Route>
                <Route path = "/other-events"> <OtherEvents/>  </Route>
                <Route path = "/sign-in"> <SignIn/> </Route>
                <Route path = "/sign-up"> <SignUp/> </Route>
            </Switch>
            <footer className="pt-4 site-footer">
                <div className="container text-center text-md-left" id = "footer">
                        <div className="row d-flex" id = "footer-info">
                            <div className="col-md-6 mt-md-0 mt-2">
                                <p> Armenia</p>
                                <p> Vayots dzor, Yeghegnadzor </p>
                                <p>Phone</p>
                                <p>E-mail
                                    <a href="#"> mailinator.gmail.com</a> 
                                </p>
                            </div>
                            <div className="col-md-6 mt-md-0 mt-2">
                                <p> map</p>
                            </div>
                        </div>
                    <div className="footer-copyright text-center py-3">Copyright © 2019 rights reserved | This template is made with by
                        <a href="https://vayotsdzor.am"> vayotsdzor.am</a>
                    </div>
                </div>
            </footer>
            </BrowserRouter> 
    )
}
export default App