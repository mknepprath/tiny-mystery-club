import React, { Component } from 'react'
import Head from 'next/head'
import { bindActionCreators } from 'redux'
import { initStore, startClock, addCount, serverRenderClock } from '../store'
import withRedux from 'next-redux-wrapper'
import Map from '../components/Map'
import NPC from '../components/NPC'
import Prize from '../components/Prize'
import Rock from '../components/Rock'

const MAP_SIZE = 39

const npcs = [

  { key: 'g', spawn: { top: 22, left: 16 } },
  { key: 'h', spawn: { top: 22, left: 36 } },
  { key: 'i', spawn: { top: 29, left: 14 } },
  { key: 'j', spawn: { top: 30, left: 10 } },
  { key: 'r', spawn: { top: 32, left: 33 } },
  { key: 's', spawn: { top: 33, left: 34 } },
  { key: 't', spawn: { top: 35, left: 34 } }
]

const rocks = [
  { top: 0, left: 0},
  { top: 2, left: 5},
  { top: 19, left: 20 },
  { top: 20, left: 18 },
  { top: 20, left: 22 },
  { top: 21, left: 19 },
  { top: 21, left: 22 },
  { top: 23, left: 20 },
  { top: 38, left: 38}
]

class App extends Component {
  static getInitialProps ({ store, isServer }) {
    store.dispatch(serverRenderClock(isServer))
    store.dispatch(addCount())

    return { isServer }
  }

  constructor (props) {
    super(props)

    let row = []
    let map = []

    for (let i = 0; i < MAP_SIZE; i++ ) {
      row[i] = 1
    }

    for (let i = 0; i < MAP_SIZE; i++ ) {
      map[i] = [...row]
    }

    this.state = {
      map,
      score: 0
    }

    this.flipTiles = this.flipTiles.bind(this)
    this.updateScore = this.updateScore.bind(this)
  }

  componentDidMount () {
    document.title = '0 trophies'

    const nextMap = Array.from(this.state.map)

    rocks.forEach(spawn => {
      nextMap[spawn.top][spawn.left] = 0
    })

    npcs.forEach(({ spawn }) => {
      nextMap[spawn.top][spawn.left] = 0
    })

    this.setState({
      map: nextMap
    })

    this.timer = this.props.startClock()
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }

  flipTiles (prevPosition, nextPosition) {
    const nextMap = [...this.state.map]
    if (prevPosition) nextMap[prevPosition.top][prevPosition.left] = 1
    if (nextPosition) nextMap[nextPosition.top][nextPosition.left] = 0

    this.setState({
      map: nextMap
    })
  }

  updateScore () {
    this.setState({ score: this.state.score + 1 })
  }

  render () {
    const { map } = this.state
    // Ideas...
    // Create a matrix for the map that is updated with positions "AI" can use to detect nearby objects etc
    // Each char should have a state that's impacted by what they're near, player can trigger things that affect how they're impacted
    // For now, maybe have them change color depending on feelings...
    // Speech bubbles appearing when chars recognize they're near each other
    // Perhaps position should always be set with the matrix position - then x100 to absolute position
    // Would make things a lot easier to have a '0' row/col in the map grid
    // Obscure the map and have parts be more visible due to fireflies lighting things as they move around @ night

    // Should go in Redux so that objects can dictate which tiles are blocked

    // Add react-helmet (Next version?)

    return (
      <div style={{ position: 'relative' }}>
        <Head>
          <link rel='stylesheet' type='text/css' href='./static/reset.css' />
        </Head>

        {npcs.map(({ key, spawn }) =>
          <NPC
            flipTiles={this.flipTiles}
            key={key}
            map={map}
            mapSize={MAP_SIZE}
            spawn={spawn}
          />
        )}

        {rocks.map(spawn =>
          <Rock key={`${spawn.top}_${spawn.left}`} {...spawn} />
        )}

        <Prize
          flipTiles={this.flipTiles}
          map={map}
          mapSize={MAP_SIZE}
          updateScore={this.updateScore}
        />

        <Map map={map} size={MAP_SIZE} />
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
