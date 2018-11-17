import React from 'react'

const randomSpawn = mapSize => Math.floor(Math.random() * mapSize) + 1

class Prize extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      left: randomSpawn(props.mapSize) * 100 - 100,
      sprite: `url('./static/assets/prize.gif')`,
      top: randomSpawn(props.mapSize) * 100 - 100
    }

    this.onPrizeClickHandler = this.onPrizeClickHandler.bind(this)
    this.onPrizeMouseOut = this.onPrizeMouseOut.bind(this)
    this.onPrizeMouseOver = this.onPrizeMouseOver.bind(this)
  }

  onPrizeClickHandler () {
    this.setState({
      left: randomSpawn(this.props.mapSize) * 100 - 100,
      top: randomSpawn(this.props.mapSize) * 100 - 100
    })
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
    const { mapSize } = this.props
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
          left,
          top,
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
