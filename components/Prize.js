import React from 'react'

const randomSpawn = mapSize => Math.floor(Math.random() * mapSize)

class Prize extends React.Component {
  constructor (props) {
    super(props)

    // TODO: This causes an issue where the prize will appear
    // briefly at the top left on reload.
    this.state = {
      left: 0,
      sprite: `url('./static/assets/prize.gif')`,
      top: 0
    }

    this.onPrizeClickHandler = this.onPrizeClickHandler.bind(this)
    this.onPrizeMouseOut = this.onPrizeMouseOut.bind(this)
    this.onPrizeMouseOver = this.onPrizeMouseOver.bind(this)
  }

  componentDidMount () {
    this.onPrizeClickHandler()
  }

  movePrize () {
    let nextLeft
    let nextTop

    do {
      nextLeft = randomSpawn(this.props.mapSize)
      nextTop = randomSpawn(this.props.mapSize)
    } while (this.props.map[nextTop][nextLeft] === 0)

    this.props.flipTiles(
      { left: this.state.left, top: this.state.top },
      { left: nextLeft, top: nextTop }
    )

    this.setState({
      left: nextLeft,
      top: nextTop
    })
  }

  onPrizeClickHandler () {
    this.props.updateScore()
    this.movePrize()
  }

  onPrizeMouseOut () {
    // Replace with CSS :hover
    this.setState({ sprite: `url('./static/assets/prize.gif')` })
  }

  onPrizeMouseOver () {
    // Replace with CSS :hover
    this.setState({ sprite: `url('./static/assets/prize-sparkle.gif')` })
  }

  render () {
    const {
      left,
      sprite,
      top
    } = this.state
    return (
      <div
        onClick={this.onPrizeClickHandler}
        onMouseOut={this.onPrizeMouseOut}
        onMouseOver={this.onPrizeMouseOver}
        style={{
          position: 'absolute',
          left: left * 100,
          top: top * 100,
          height: 100,
          width: 100,
          background: sprite,
          cursor: 'pointer'
        }}
      />
    )
    }
  }

export default Prize
