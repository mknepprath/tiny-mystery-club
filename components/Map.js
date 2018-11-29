import React from 'react'

import { coordsToIndex, indexToCoords } from './utils'

// When not debugging, this can be React.PureComponent...
class Map extends React.Component {
  constructor (props) {
    super(props)

    const backgroundIds = [...Array(Math.pow(props.map.length, 2))].map(() => {
      let backgroundId = 'grass1.png'

      // Randomize grass tiles
      const bgLottery = Math.floor(Math.random() * 299)

      if (bgLottery < 1) {
        backgroundId = 'grass2.png'
      } else if (bgLottery < 2) {
        backgroundId = 'grass5.png'
      } else if (bgLottery < 79) {
        backgroundId = 'grass3.png'
      } else if (bgLottery < 159) {
        backgroundId = 'grass4.png'
      } else if (bgLottery < 229) {
        backgroundId = 'grass6.png'
      }

      return backgroundId
    })

    if (props.water) {
      props.water.forEach(({ spawn }) => {
        const index = coordsToIndex(spawn, props.map.length)
        backgroundIds[index] = 'water.gif'
      })
    }

    this.state = {
      backgroundIds
    }
  }

  componentDidMount () {
    // Once mounted, scroll to center of map.
    const { map } = this.props

    const { innerWidth, innerHeight } = window

    window.scrollTo(
      (map.length * 100 - innerWidth) / 2,
      (map.length * 100 - innerHeight) / 2
    )
  }

  render () {
    const { map } = this.props

    return (
      <div
        style={{
          gridTemplateColumns: 'repeat(auto-fit, 100px)',
          display: 'grid',
          height: map.length * 100,
          width: map.length * 100
        }}
      >
        {this.state.backgroundIds.map((backgroundId, dex) => {
          const { left, top } = indexToCoords(dex, map.length)

          return (
            <div
              key={`${dex}_${backgroundId}`}
              style={{
                background: `url('./static/assets/${backgroundId}')`,
                // Below styles necessary for tile printout.
                color: map[top][left] === 0 ? 'red' : '#318967',
                fontFamily: 'sans-serif',
                fontSize: 11,
                fontWeight: 'bold'
              }}
            >
            {`${top}x${left}, ${dex}`}
            </div>
          )
        })}
      </div>
    )
  }
}

export default Map
