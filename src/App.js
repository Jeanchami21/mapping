import './app.css'

import * as React from 'react'

import MapGL, { Marker, Popup } from 'react-map-gl'
import { Room, Star } from '@material-ui/icons'
import { useEffect, useState } from 'react'

import FavoriteIcon from '@material-ui/icons/Favorite'
import axios from 'axios'

require('dotenv').config()

function App() {
  const [pins, setPins] = useState([])

  const [viewport, setViewport] = useState({
    latitude: 46,
    longitude: 17,
    zoom: 2,
    bearing: 0,
    pitch: 0,
  })
  useEffect(() => {
    const getPins = async () => {
      try {
        const allPins = await axios.get('/pins')
        setPins(allPins.data)
      } catch (err) {
        console.log(err)
      }
    }
    getPins()
  }, [])

  return (
    <div className='app'>
      <MapGL
        {...viewport}
        width='100vw'
        height='100vh'
        mapStyle='mapbox://styles/jeanvaljean21/ckshoip1o202s17k0j48giaza'
        onViewportChange={setViewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX}
      >
        {pins.map((p) => (
          <>
            <Marker
              latitude={p.lat}
              longitude={p.long}
              offsetLeft={-20}
              offsetTop={-10}
            >
              <Room
                style={{ fontSize: viewport.zoom * 7, color: 'slateblue' }}
              />
            </Marker>
            <Popup
              latitude={48}
              longitude={2}
              closeButton={true}
              closeOnClick={false}
              anchor='right'
            >
              <div className='card'>
                <label>Place</label>
                <h4 className='place'>Eiffel Tower</h4>
                <label>Review</label>
                <p>Beautiful place</p>
                <label>Rating</label>
                <div className='star'>
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                </div>
                <label>Information</label>
                <span className='username'>
                  Created by Jean with <FavoriteIcon className='heart' />
                </span>
                <span className='date'>1 hour ago</span>
              </div>
            </Popup>
          </>
        ))}
      </MapGL>
    </div>
  )
}

export default App
