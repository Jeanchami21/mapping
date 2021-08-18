import * as React from 'react'

import MapGL from 'react-map-gl'
import { useState } from 'react'

require('dotenv').config()
function App() {
  const [viewport, setViewport] = useState({
    latitude: 37.8,
    longitude: -122.4,
    zoom: 14,
    bearing: 0,
    pitch: 0,
  })

  return (
    <MapGL
      {...viewport}
      width='100vw'
      height='100vh'
      mapStyle='mapbox://styles/mapbox/dark-v9'
      onViewportChange={setViewport}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX}
    />
  )
}

export default App
