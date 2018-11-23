import React, { PureComponent } from 'react'

class Map extends PureComponent {
  constructor (props) {
    super(props)

    const backgroundIds = [...Array(Math.pow(props.size, 2))].map(() => {
      // Randomize grass tiles
      const bgLottery = Math.floor(Math.random() * 299)

      let backgroundId = 1

      if (bgLottery < 1) {
        backgroundId = 2
      } else if (bgLottery < 2) {
        backgroundId = 5
      } else if (bgLottery < 79) {
        backgroundId = 3
      } else if (bgLottery < 159) {
        backgroundId = 4
      } else if (bgLottery < 229) {
        backgroundId = 6
      }

      return backgroundId
    })

    this.state = {
      backgroundIds
    }
  }

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
    const { map, size } = this.props

    return (
      <div
        style={{
          gridTemplateColumns: 'repeat(auto-fit, 100px)',
          display: 'grid',
          height: size * 100,
          width: size * 100
        }}
      >
        {this.state.backgroundIds.map((backgroundId, dex) => {
          const top = Math.floor(dex / size)
          const left = (dex % size)

          return (
            <div
              key={`${dex}_${backgroundId}`}
              style={{
                background: `url('./static/assets/grass${backgroundId}.png')`,
                border: map[top][left] ? '1px solid red' : ''
              }}
            />
          )
        })}
      </div>
    )
  }
}

export default Map
