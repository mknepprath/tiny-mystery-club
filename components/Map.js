import React, { Component } from 'react'
import { Z_BLOCK } from 'zlib';

class Map extends Component {
  componentDidMount () {
    // Once mounted, scroll to center of map.
    const { size } = this.props

    const { innerWidth, innerHeight } = window

    window.scrollTo(
      (size * 100 - innerWidth) / 2,
      (size * 100 - innerHeight) / 2
    )
  }
  render () {
    const { size } = this.props

    return (
      <div
        style={{
          gridTemplateColumns: 'repeat(auto-fit, 100px)',
          display: 'grid',
          height: size * 100,
          width: size * 100
        }}
      >
        {[...Array(Math.pow(size, 2))].map((s, dex) => {
          const bgLottery = Math.floor(Math.random() * 299)
          let bgIndex = 1
          if (bgLottery < 1) {
            bgIndex = 2
          } else if (bgLottery < 2) {
            bgIndex = 5
          } else if (bgLottery < 79) {
            bgIndex = 3
          } else if (bgLottery < 159) {
            bgIndex = 4
          } else if (bgLottery < 229) {
            bgIndex = 6
          }

          return (
            <div
              key={`${dex}_${bgIndex}`}
              style={{ background: `url('./static/assets/grass${bgIndex}.png')` }}
            />
          )
        })}
      </div>
    )
  }
}

export default Map
