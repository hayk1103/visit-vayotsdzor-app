import React, { useState, useEffect } from 'react'
import Activities from './Activities'

import axios from 'axios'

const Home = () => {

    const [activities, setActivities] = useState(null)

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
                <h1>
                    Here must be Map.
                </h1>
            </div>
            <Activities 
            activities={activities}/>
        </div>
    )
}
export default Home