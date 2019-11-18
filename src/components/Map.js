import React, { useState } from 'react'
import ReactMapboxGl, { Layer, Feature, Popup, Marker } from 'react-mapbox-gl'

const MapBox = ReactMapboxGl({
    accessToken: 'pk.eyJ1IjoiYWlkYXphcWFyeWFuIiwiYSI6ImNrMzNkOXAxYjA3aWMzb3BqeXptZGJlMzgifQ.M6sW4UQKmr-W_0HZbexIhg'
})

const Map = () => {
    const [marker, setMarker] = useState(null)

    const onMapClick = (e, data) => {
        setMarker(data.lngLat)
    }

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
                {marker && (
                    <Marker 
                        coordinates={[marker.lng, marker.lat]}
                        onClick={() => {
                            // 
                        }}>
                            <img src="/images/marker.svg" height="50px"/>
                    </Marker>
                )}
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
        </MapBox>
    )
}

export default Map