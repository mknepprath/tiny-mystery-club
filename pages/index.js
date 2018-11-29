import React, { Component } from 'react'
import Head from 'next/head'
import { bindActionCreators } from 'redux'
import { initStore, startClock, addCount, serverRenderClock } from '../store'
import withRedux from 'next-redux-wrapper'
import Map from '../components/Map'
import NPC from '../components/NPC'
import Prize from '../components/Prize'
import Rock from '../components/Rock'

import { NPCS, ROCKS, WATER } from '../components/constants'
import { flipTiles, generateMap } from '../components/utils'

export const MAP_SIZE = 39

class App extends Component {
  static getInitialProps ({ store, isServer }) {
    store.dispatch(serverRenderClock(isServer))
    store.dispatch(addCount())

    return { isServer }
  }

  constructor (props) {
    super(props)

    this.state = {
      map: generateMap(MAP_SIZE),
      score: 0
    }

    this.flipTiles = this.flipTiles.bind(this)
    this.updateScore = this.updateScore.bind(this)
  }

  componentDidMount () {
    const nextMap = Array.from(this.state.map)

    const blockedTiles = [...NPCS, ...WATER]

    blockedTiles.forEach(({ spawn }) => {
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

  flipTiles (blockTiles, clearTiles) {
    this.setState({
      map: flipTiles(blockTiles, clearTiles, this.state.map)
    })
  }

  updateScore () {
    this.setState({ score: this.state.score + 1 })
  }

  render () {
    const { map } = this.state
    // Ideas...
    // Each char should have a state that's impacted by what they're near, player can trigger things that affect how they're impacted
    // For now, maybe have them change color depending on feelings...
    // Speech bubbles appearing when chars recognize they're near each other
    // Obscure the map and have parts be more visible due to fireflies lighting things as they move around @ night

    // Should go in Redux so that objects can dictate which tiles are blocked

    // Add react-helmet (Next version?)

    return (
      <div style={{ position: 'relative' }}>
        <Head>
          <link rel='stylesheet' type='text/css' href='./static/reset.css' />
        </Head>

        {NPCS.map(({ key, spawn }) =>
          <NPC
            flipTiles={this.flipTiles}
            key={key}
            map={map}
            spawn={spawn}
          />
        )}

        {ROCKS.map(({ spawn }) =>
          <Rock
            flipTiles={this.flipTiles}
            key={`${spawn.top}_${spawn.left}`}
            spawn={spawn}
          />
        )}

        <a href='/room'>
          <Rock
            flipTiles={this.flipTiles}
            spawn={{ left: 6, top: 6 }}
          />
        </a>

        <Prize
          flipTiles={this.flipTiles}
          map={map}
          updateScore={this.updateScore}
        />

        <Map map={map} water={WATER} />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addCount: bindActionCreators(addCount, dispatch),
    startClock: bindActionCreators(startClock, dispatch)
  }
}

export default withRedux(initStore, null, mapDispatchToProps)(App)
