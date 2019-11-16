import React from 'react'
import ReactMapboxGl from 'react-mapbox-gl'

const MapBox = ReactMapboxGl({
    accessToken: 'pk.eyJ1IjoiZ29namhhbiIsImEiOiJjazMxa3pvZngwN3BrM21wYm82bm1pemxuIn0.ko7L3kEaYcYYMSzUTkAVcA'
})

const Map = () => {
    return (
        <MapBox
            style="mapbox://styles/mapbox/light-v9"
            containerStyle={{
                height: '500px',
                width: '100%'
            }}/>
    )
}

export default Map