import React, { useState, useEffect } from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom'

import axios from 'axios'

import Home from './Home'
import Login from './Login'
import Register from './Register'
import Account from './Account'
import Activity from './Activity'
import Activities from './Activities'
import Settings from './Settings'
import CreateActivity from './CreateActivity'
import Chat from './Chat'

const withRouter = Component => (props) => {
    return (
        <BrowserRouter>
            <Component {...props}/>
        </BrowserRouter>
    )
}

const App = () => {
    const [user, setUser] = useState(null)
    const history = useHistory()
    const location = useLocation()

    const getUser = () => {
        axios
            .get('http://localhost:3001/api/user', {headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`}})
            .then(response => {
                localStorage.setItem('user', response.data.user)
                setUser(response.data.user)
            })
            .catch(console.log)
    }

    const updateUser = (user) => {
        axios
            .put('http://localhost:3001/api/user', user, {headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`}})
            .then(() => getUser())
            .catch(console.log)
    }

    const logout = (e) => {
        e.preventDefault()
        localStorage.removeItem('token')
        localStorage.removeItem('user')
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
            <nav className="nav bar navbar-expand-lg navbar-light bg-light p-2">
            <div className="mr-5 ml-3">
                <Link to="/" className="navbar-brand">
                    Visit Vayots dzor
                </Link>
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-toggle="collapse" 
                    data-target="#navbarSupportedContent" 
                    aria-controls="navbarSupportedContent" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>
            <div 
                className="collapse navbar-collapse" 
                id="navbarSupportedContent">
                    <ul className="navbar-nav ml-5">
                        <li className="nav-item active">
                            <Link to='/' className="nav-link">
                                Home 
                                <span className="sr-only">
                                    (current)
                                </span>
                            </Link>
                        </li>
                        
                        {user && ([
                            <li key="your-account" className="nav-item active">
                                <Link to='/user' className="nav-link">
                                    Your Account
                                </Link>
                            </li>,
                            <li key="your-activity" className="nav-item">
                                <Link to='/all-activity' className="nav-link">
                                    All Activity
                                </Link>
                            </li>,
                            <li key="user-setting" className="nav-item">
                                <Link to='/account-setting' className="nav-link">
                                    Account Setting
                                </Link>
                            </li>
                        ])}

                        {user ? ([
                            <li key="chat" className="nav-item">
                                <Link to='/chat' className="nav-link">
                                    Chat
                                </Link>
                            </li>,
                            <li key="logout" className="nav-item">
                                <a 
                                    className="nav-link" 
                                    href="#"
                                    onClick={logout}>
                                        Logout
                                </a>
                            </li>
                        ]) : ([
                            <li key="sign-in" className="nav-item">
                                <Link to='/signin' className="nav-link">
                                    Sign in
                                </Link>
                            </li>,
                            <li key="sign-up" className="nav-item">
                                <Link to='/signup' className="nav-link">
                                    Sign up
                                </Link>
                            </li>
                        ])}
                        <Link to="/create-activity">
                        </Link>
                    </ul>
                    <input 
                        className="form-control search" 
                        type="search" 
                        placeholder="Search" 
                        aria-label="Search"
                    />
                    <button 
                        className="btn btn-outline-success my-2 my-sm-0" 
                        type="submit"
                    > 
                    Search 
                    </button>
            </div>
        </nav>
        <div>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                {user && ([
                    <Route key="user" path="/user">
                        <Account 
                            user={user}
                            setUser={setUser}
                            updateUser={updateUser}/>
                    </Route>,
                    <Route key="account-settings" path='/account-setting'>
                        <Settings
                            user={user}
                            updateUser={updateUser}/>
                    </Route>
                ])}
                <Route path="/signin">
                    <Login getUser={getUser}/>
                </Route>
                <Route path="/signup">
                    <Register/>
                </Route>
                <Route path="/all-activity">
                    <Activities/>
                </Route>
                <Route path="/activities/:id">
                    <Activity user={user}/>
                </Route>
                <Route path="/create-activity">
                    <CreateActivity/>
                </Route>
                <Route path="/chat">
                    <Chat/>
                </Route>
            </Switch>
        </div>
    </div>
    )
}
export default withRouter(App)
