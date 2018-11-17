import React, { Component } from 'react'
import Head from 'next/head'
import { bindActionCreators } from 'redux'
import { initStore, startClock, addCount, serverRenderClock } from '../store'
import withRedux from 'next-redux-wrapper'
import Map from '../components/Map'
import Char from '../components/Char'
import Prize from '../components/Prize'
import Rock from '../components/Rock'

const npcs = [
  {},
  // { spawn: { top: 2, left: 3 }, color: '#E1AC6B' },
  // { spawn: { top: 4, left: 9 }, color: '#EFE070' },
  // { spawn: { top: 10, left: 30 }, color: '#63B0E3' },
  // { spawn: { top: 19, left: 18 }, color: '#51A652' },
  // { spawn: { top: 20, left: 23 }, color: '#FFFFFF' },
  // { spawn: { top: 22, left: 16 }, color: '#B7B8BB' },
  // { spawn: { top: 22, left: 36 }, color: '#DB7965' },
  // { spawn: { top: 29, left: 14 }, color: '#5D4022' },
  // { spawn: { top: 30, left: 10 }, color: '#615990' },
  // { spawn: { top: 34, left: 33 }, color: '#D17F9A' },
  { spawn: { top: 2, left: 3 } },
  { spawn: { top: 4, left: 9 } },
  { spawn: { top: 10, left: 30 } },
  { spawn: { top: 19, left: 18 } },
  { spawn: { top: 20, left: 23 } },
  { spawn: { top: 22, left: 16 } },
  { spawn: { top: 22, left: 36 } },
  { spawn: { top: 29, left: 14 } },
  { spawn: { top: 30, left: 10 } },
  { spawn: { top: 34, left: 33 } }
]

const rocks = [
  { top: 2, left: 5},
  { top: 19, left: 20 },
  { top: 20, left: 18 },
  { top: 20, left: 22 },
  { top: 21, left: 19 },
  { top: 21, left: 22 },
  { top: 23, left: 20 }
]

class App extends Component {
  static getInitialProps ({ store, isServer }) {
    store.dispatch(serverRenderClock(isServer))
    store.dispatch(addCount())

    return { isServer }
  }

  componentDidMount () {
    this.timer = this.props.startClock()
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }

  render () {
    // Ideas...
    // Create a matrix for the map that is updated with positions "AI" can use to detect nearby objects etc
    // Each char should have a state that's impacted by what they're near, player can trigger things that affect how they're impacted
    // For now, maybe have them change color depending on feelings...
    // Speech bubbles appearing when chars recognize they're near each other
    // Perhaps position should always be set with the matrix position - then x100 to absolute position
    // Would make things a lot easier to have a '0' row/col in the map grid
    // Obscure the map and have parts be more visible due to fireflies lighting things as they move around @ night
    const mapSize = 39

    let map = []
    const cols = [...Array(mapSize)]
    cols.forEach((h, i) => {
      map[i] = new Array(mapSize)
    })

    rocks.forEach(spawn => {
      map[spawn.top][spawn.left] = 1
    })

    return (
      <div style={{position: 'relative'}}>
        <Head>
          <link rel='stylesheet' type='text/css' href='./static/reset.css' />
        </Head>

        {npcs.map(({ spawn, color }) =>
          <Char
            color={color}
            key={color}
            map={map}
            mapSize={mapSize}
            spawn={spawn}
          />
        )}

        {rocks.map(spawn =>
          <Rock key={`${spawn.top}_${spawn.left}`} {...spawn} />
        )}

        <Prize mapSize={mapSize} />

        <Map size={mapSize} />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addCount: bindActionCreators(addCount, dispatch),
    startClock: bindActionCreators(startClock, dispatch)
  }
}

export default withRedux(initStore, null, mapDispatchToProps)(App)
