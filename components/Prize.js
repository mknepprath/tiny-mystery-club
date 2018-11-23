import React from 'react'

const randomSpawn = mapSize => Math.floor(Math.random() * mapSize) + 1

class Prize extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      left: randomSpawn(props.mapSize),
      sprite: `url('./static/assets/prize.gif')`,
      top: randomSpawn(props.mapSize)
    }

    this.onPrizeClickHandler = this.onPrizeClickHandler.bind(this)
    this.onPrizeMouseOut = this.onPrizeMouseOut.bind(this)
    this.onPrizeMouseOver = this.onPrizeMouseOver.bind(this)
  }

  componentDidMount () {
    this.props.blockTile(this.state.left, this.state.top)
  }

  onPrizeClickHandler () {
    this.props.updateScore()

    const nextLeft = randomSpawn(this.props.mapSize)
    const nextTop = randomSpawn(this.props.mapSize)

    this.setState({
      left: randomSpawn(nextLeft),
      top: randomSpawn(nextTop)
    })

    this.props.blockTile(nextLeft, nextTop)
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
