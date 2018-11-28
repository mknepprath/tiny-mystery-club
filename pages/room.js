import React, { Component } from 'react'
import Head from 'next/head'
import { bindActionCreators } from 'redux'
import { initStore, startClock, addCount, serverRenderClock } from '../store'
import withRedux from 'next-redux-wrapper'
import Map from '../components/Map'
import NPC from '../components/NPC'
import Prize from '../components/Prize'
import { generateMap } from '../components/utils'

const MAP_SIZE = 3

class Room extends Component {
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
    this.timer = this.props.startClock()
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }

  flipTiles (blockTiles, clearTiles) {
    // Perhaps these args should be arrays...
    const nextMap = [...this.state.map]
    if (blockTiles) nextMap[blockTiles.top][blockTiles.left] = 0
    if (clearTiles) nextMap[clearTiles.top][clearTiles.left] = 1

    this.setState({
      map: nextMap
    })
  }

  updateScore () {
    this.setState({ score: this.state.score + 1 })
  }

  render () {
    const { map } = this.state

    return (
      <div style={{ position: 'relative' }}>
        <Head>
          <link rel='stylesheet' type='text/css' href='./static/reset.css' />
        </Head>

        <a href='/'>
          <NPC
            flipTiles={this.flipTiles}
            map={map}
            spawn={{
              left: 2,
              top: 2
            }}
          />
        </a>

        <Prize
          flipTiles={this.flipTiles}
          map={map}
          updateScore={this.updateScore}
        />

        <Map map={map} />
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

export default withRedux(initStore, null, mapDispatchToProps)(Room)
