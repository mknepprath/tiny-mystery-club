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
  { key: 'a' },
  { key: 'b', spawn: { top: 2, left: 3 } },
  { key: 'c', spawn: { top: 4, left: 9 } },
  { key: 'd', spawn: { top: 10, left: 30 } },
  { key: 'e', spawn: { top: 19, left: 18 } },
  { key: 'f', spawn: { top: 20, left: 23 } },
  { key: 'g', spawn: { top: 22, left: 16 } },
  { key: 'h', spawn: { top: 22, left: 36 } },
  { key: 'i', spawn: { top: 29, left: 14 } },
  { key: 'j', spawn: { top: 30, left: 10 } },
  { key: 'k', spawn: { top: 34, left: 33 } }
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
      row[i] = 0
    }

    for (let i = 0; i < MAP_SIZE; i++ ) {
      map[i] = [...row]
    }

    this.state = {
      map,
      score: 0
    }

    this.blockTile = this.blockTile.bind(this)
    this.updateScore = this.updateScore.bind(this)
  }

  componentDidMount () {
    document.title = '0 trophies'

    const nextMap = Array.from(this.state.map)

    rocks.forEach(spawn => {
      nextMap[spawn.top][spawn.left] = 1
    })

    this.setState({
      map: nextMap
    })

    this.timer = this.props.startClock()
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }

  blockTile (left, top) {
    const nextMap = Array.from(this.state.map)
    nextMap[top][left] = 1

    this.setState({
      map: nextMap
    })
  }

  updateScore () {
    const nextScore = this.state.score + 1

    this.setState({ score: nextScore })
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
          blockTile={this.blockTile}
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
