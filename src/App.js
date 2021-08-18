import * as React from 'react'

import MapGL from 'react-map-gl'
import { useState } from 'react'

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
      mapboxApiAccessToken='pk.eyJ1IjoiamVhbnZhbGplYW4yMSIsImEiOiJja3NoOXgyZzgxYXh0MnBudXV0M2hpYzN0In0.t65X4xMtLYes1ZgnRLM5PQ'
    />
  )
}

export default App
