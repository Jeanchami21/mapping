import * as React from 'react'

import MapGL, { Marker } from 'react-map-gl'

import { useState } from 'react'

require('dotenv').config()
function App() {
  const [viewport, setViewport] = useState({
    latitude: 46,
    longitude: 17,
    zoom: 2,
    bearing: 0,
    pitch: 0,
  })

  return (
    <MapGL
      {...viewport}
      width='100vw'
      height='100vh'
      mapStyle='mapbox://styles/jeanvaljean21/cksdky38143ga17rzfckdipvh'
      onViewportChange={setViewport}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX}
    >
      <Marker
        latitude={37.78}
        longitude={-122.41}
        offsetLeft={-20}
        offsetTop={-10}
      >
        <div>You are here</div>
      </Marker>
    </MapGL>
  )
}

export default App
