import React, { Component } from 'react'
import Head from 'next/head'
import Map from '../components/Map'
import NPC from '../components/NPC'
import Prize from '../components/Prize'
import { flipTiles, generateMap } from '../components/utils'

const MAP_SIZE = 3

class Room extends Component {
  constructor (props) {
    super(props)

    this.state = {
      map: generateMap(MAP_SIZE),
      score: 0
    }

    this.flipTiles = this.flipTiles.bind(this)
    this.updateScore = this.updateScore.bind(this)
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

export default Room
