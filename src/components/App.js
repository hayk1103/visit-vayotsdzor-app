import React, {useState, useEffect} from 'react'
import { BrowserRouter, NavLink, Switch, Route, useLocation, useHistory } from 'react-router-dom'
import Home from './Home'
import AboutUs from './AboutUs'
import SignIn from './SignIn'
import SignUp from './SignUp'
import Jobs from './Jobs.js'
import Companies from './Companies'
import Talents from './Talents'
import OtherEvents from './OtherEvents'
import axios from 'axios'
import EmployeeSetting from './EmployeeSetting'

const withRouter = Component => (props) => {
    return (
        <BrowserRouter>
            <Component {...props}/>
        </BrowserRouter>
    )
}

const App = () => {

    const [user, setUser]  = useState(null)

    const history = useHistory()
    const location = useLocation()

    const getUser = () => {
        const id = localStorage.getItem('id')
        // console.log()
        // if(localStorage.getItem('token')){
        //     console.log('its user')
        //     return setUser()
        //     // return setUser(response.data.users)
        // }

        axios
            .get(`http://localhost:3020/v1/users/${id}`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            })
            .then(response => setUser(response.data.user))
            .catch(console.log)
    }

    const logout = (e) => {
        e.preventDefault()
        localStorage.removeItem('token')
        localStorage.removeItem('id')
        setUser(null)

        if (location.pathname !== '/') {
            history.push('/')
        }
    }

    useEffect(() => {
        if (localStorage.getItem('token')) {
            getUser()
        }
    }, [])


    return (
        <div>
            <header>
                <nav className = "navbar d-flex justify-content-around navbar-expand-lg " id = "menu">
                    <div className = "navbar-brand">
                        <NavLink to='/'> 
                            <img src = "#" 
                                width="80px" 
                                height="80px" />
                        </NavLink>
                    </div>
                    {/* <button className = "navbar-toggler"><span className = "navbar-toggler-icon"></span></button> */}
                    <div className="nav container collapse navbar-collapse d-flex justify-content-around ">
                        <NavLink to='/about-us' >About Us</NavLink>                                    
                        <NavLink to='/jobs' >Jobs</NavLink> 
                        <NavLink to='/companies' >Companies</NavLink> 
                        <NavLink to='/talents'>Talents</NavLink> 
                        <NavLink to='/other-events' >Other Events</NavLink> 
                    </div>
                    <div className = "d-flex justify-content-between">
                        {user ? ([
                            <NavLink to='/settings' key = 'setting'>Settings</NavLink>,                           
                            <button 
                                key = "button"
                                className="btn btn-secondary dropdown-toggle bg-transparent border-0" 
                                type="button"
                                onClick={logout}>
                                Logout
                            </button>
                            
                        ]) :([
                            <NavLink to='/sign-in' key = 'signIn'>Sign In</NavLink>,
                            <NavLink to='/sign-up' key = "signUp">Sign Up</NavLink> 

                        ])
                    }
                    <div className="dropdown">
                        <button 
                            className="btn btn-secondary dropdown-toggle bg-transparent border-0" 
                            type="button">
                                en
                        </button>
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
                <Route path = "/sign-in"> <SignIn getUser={getUser}/> </Route>
                <Route path = "/sign-up"> <SignUp/> </Route>
                {/* {user && ( */}
                    <Route path = "/settings"> <EmployeeSetting/> </Route>
                {/* )} */}
            </Switch>
            <footer className="pt-4 site-footer">
                <div className="container" id = "footer">
                    <div className="row d-flex">
                        <div >
                            <p> Armenia</p>
                            <p> Vayots dzor, Yeghegnadzor </p>
                            <p>Phone</p>
                            <p>E-mail
                                <a href="#"> mailinator.gmail.com</a> 
                            </p>
                        </div>
                    </div>
                    <div className="footer-copyright text-center py-3">
                        Copyright © 2019 rights reserved | This template is made by
                        <a href="https://vayotsdzor.am"> vayotsdzor.am</a>
                    </div>
                </div>
            </footer>
        </div>
    )
}
export default withRouter(App)