import React, { useState } from 'react'
import {  useHistory } from 'react-router-dom'
import ReactMapboxGl, { Layer, Feature, Popup, Marker } from 'react-mapbox-gl'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faPlusCircle } from '@fortawesome/free-solid-svg-icons'


const MapBox = ReactMapboxGl({
    accessToken: 'pk.eyJ1IjoiYWlkYXphcWFyeWFuIiwiYSI6ImNrMzNkOXAxYjA3aWMzb3BqeXptZGJlMzgifQ.M6sW4UQKmr-W_0HZbexIhg'
})

const Map = ({ setCurrentLoc, setCreateActivity }) => {
    const history = useHistory()
    const [marker, setMarker] = useState(null)
    const [center, setCenter] = useState(null)
    const [select, setSelect] = useState(false)
    const [showAdd, setShowAdd] = useState(false)
    // const [createActivity, setCreateActivity] = useState(false)

    const onMapClick = (e, data) => {
        setMarker(data.lngLat)
        // console.log(data)
    }
    navigator.geolocation.getCurrentPosition((position) => {
        setCenter(position.coords)
    })
    return (
        <MapBox
            style="mapbox://styles/mapbox/streets-v9"
            center={[45.3164576, 39.7629985]}
            zoom={[11]}
            onClick={onMapClick}
            containerStyle={{
                height: '500px',
                width: '100%'
            }}>
                {center && (
                    <Marker 
                        coordinates={[center.longitude, center.latitude] }
                        onClick={() => {
                            // 
                        }}>
                        {/* <div className="dot">

                        </div> */}
                    </Marker>
                )}
                {marker && (
                    <Marker 
                        coordinates={[marker.lng, marker.lat]}
                        onClick={() => {
                            // 
                        }}>
                            <img src="/images/marker.svg" height="50px"/>
                    </Marker>
                )}
                <button 
                    className="btn btn-outline-primary create"
                    onClick={() => {
                        setSelect(true)
                    }}> 
                    Create Activity 
                </button>

                {/* <Popup
                    coordinates={[45.3164576, 39.7629985]}
                    offset={{
                        'bottom-left': [12, -38],  'bottom': [0, -38], 'bottom-right': [-12, -38]
                    }}>
                        <h1>Popup</h1>
                    </Popup> */}
                {/* <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
                    <Feature coordinates={[-0.481747846041145, 51.3233379650232]} />
                </Layer> */}
                {select && (
                    <div className="select-loc">
                        <div className="container d-flex justify-content-center">
                            <div>
                                <h1> Select your Location </h1>
                                <div className="d-flex justify-content-around">
                                    <button
                                        className="btn btn-outline-warning mt-4"
                                        onClick={() => setSelect(false)}>
                                        Cancel
                                    </button>
                                    <button
                                        className="btn btn-outline-warning mt-4"
                                        onClick={() => {
                                            setShowAdd(true)
                                            setSelect(false)
                                        }}>
                                        Select
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {showAdd && (
                    <div className="current d-flex">
                        <div className="loc-text">
                            Select Location
                        </div>
                          <FontAwesomeIcon 
                            icon={faPlusCircle} 
                            className="icon-size"
                            onClick={() => {
                                if(marker) setCreateActivity(true), setCurrentLoc([marker.lng, marker.lat])
                            }}/> 
                    </div>
                )} 
                {/* { console.log(marker), createActivity && (
                    <div>
                        <CreateActivity marker={marker}/>
                    </div>
                )} */}
        </MapBox>
    )
}

export default Map