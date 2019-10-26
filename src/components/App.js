import React from 'react'
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom'
import Home from './Home'
import AboutUs from './AboutUs'
import Contacts from './Contacts'

const App = () => {
    return (
        <BrowserRouter>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about-us'>About Us</Link></li>
                <li><Link to='/contacts'>Contacts</Link></li>
            </ul>

            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route path="/about-us">
                    <AboutUs/>
                </Route>
                <Route path="/contacts">
                    <Contacts/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default App