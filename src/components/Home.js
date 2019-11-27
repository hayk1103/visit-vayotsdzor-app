import React, { useState, useEffect } from 'react'
import Activities from './Activities'
import CreateActivity from './CreateActivity'
import Map from './Map'

import axios from 'axios'

const Home = () => {

    const [activities, setActivities] = useState(null)
    const [currentLoc, setCurrentLoc] = useState([])
    const [createActivity, setCreateActivity] = useState(false)

    const getActivity = () => {
        axios
            .get('http://localhost:3001/api/activities')
            .then(response => setActivities(response.data.activities))
            .catch(console.log)
    }
    useEffect(() => {
        getActivity()
    }, [])
    return (
        <div>
            <div className="d-flex justify-content-center mt-4">
                <Map 
                    setCurrentLoc={setCurrentLoc}
                    setCreateActivity={setCreateActivity}
                    activities={activities}/>
            </div>
            <Activities activities={activities}/>
            {createActivity && (
                <div>
                    <CreateActivity currentLoc={currentLoc}/>
                </div>
            )}
        </div>
    )
}
export default Home