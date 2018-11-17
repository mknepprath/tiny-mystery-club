import React, { Component } from 'react'

const facing = {
  'Bottom': 'down',
  'Left': 'left',
  'Right': 'right',
  'Top': 'up'
}

class Char extends Component {
  constructor (props) {
    super(props)

    const { mapSize, spawn } = props

    // Set NPC location based on spawn point.
    // If no spawn point is provided, center it.
    this.state = {
      clicked: false,
      direction: null,
      top: spawn ? spawn.top * 100 - 100 : (mapSize * 100 - 100) / 2,
      left: spawn ? spawn.left * 100 - 100 : (mapSize * 100 - 100) / 2,
      walking: false
    }

    this.onClickNPCHandler = this.onClickNPCHandler.bind(this)
    this.tick = this.tick.bind(this)
  }

  onClickNPCHandler () {
    this.setState({ clicked: true })
  }

  tick () {
    const { mapSize, map } = this.props
    const { top, left } = this.state

    // moveTypes:
    // - 0 = up/down
    // - 1 = left/right
    // - 2 = don't move
    const moveType = Math.floor(Math.random() * 3)

    if (moveType === 0) {
      const down = Math.floor(Math.random() * 2) === 0
      let nextTop = top
      if (down) {
        // Moving down, so add to the distance from the top.
        if (top < (mapSize - 1) * 100) nextTop = top + 100
      } else {
        // Moving up, so move closer to the top.
        if (top > 0) nextTop = top - 100
      }
      // If there is nothing on the map in the location the NPC is moving to,
      // then go ahead and update with the new position.
      if (!map[nextTop / 100 + 1][left / 100 + 1]) {
        this.setState({
          direction: down ? 'Bottom' : 'Top',
          top: nextTop,
          walking: true
        })
      }
    } else if (moveType === 1) {
      const right = Math.floor(Math.random() * 2) === 0
      let nextLeft = left
      if (right) {
        // Moving right, so add to the distance from the left.
        if (left < (mapSize - 1) * 100) nextLeft = left + 100
      } else {
        // Moving left, so move closer to the left.
        if (left > 0) nextLeft = left - 100
      }
      // If there is nothing on the map in the location the NPC is moving to,
      // then go ahead and update with the new position.
      if (!map[top / 100 + 1][nextLeft / 100 + 1]) {
        this.setState({
          direction: right ? 'Right' : 'Left',
          left: nextLeft,
          walking: true
        })
      }
    } else {
      // Eventually switch this to change a separate state  property dictating
      // whether to use the walking sprite or not. Direction should stay set so
      // sprite knows which way to face.
      this.setState({
        walking: false
      })
    }
  }
  componentDidMount () {
    this.interval = setInterval(this.tick, 1000)
  }
  componentWillUnmount () {
    clearInterval(this.interval)
  }
  render () {
    const { color } = this.props
    const { direction, left, top, walking } = this.state

    const hasSpriteImage = !color
    return (
      <div
        onClick={this.onClickNPCHandler}
        style={{
          position: 'absolute',
          left,
          top,
          width: hasSpriteImage ? 100 : 80,
          height: hasSpriteImage ? 100 : 80,
          background: color || `url('./static/assets/sprite-${facing[direction]}${walking ? '-walk' : ''}.gif')`,
          transition: 'top 1s linear, left 1s linear',
          boxShadow: this.state.clicked ? '0 0 10px orange' : null,
          boxSizing: 'border-box',
          margin: hasSpriteImage ? 0 : 10,
          [`border${direction}`]: hasSpriteImage ? null : '20px solid black'
        }} />
    )
  }
}

export default Char
