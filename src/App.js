import * as React from 'react'

import MapGL, { Marker } from 'react-map-gl'

import { Room } from '@material-ui/icons'
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
    <div className='app'>
      <MapGL
        {...viewport}
        width='100vw'
        height='100vh'
        mapStyle='mapbox://styles/jeanvaljean21/cksdky38143ga17rzfckdipvh'
        onViewportChange={setViewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX}
      >
        <Marker latitude={48} longitude={2} offsetLeft={-20} offsetTop={-10}>
          <Room />
        </Marker>
      </MapGL>
    </div>
  )
}

export default App
