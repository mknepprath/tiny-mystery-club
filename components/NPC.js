import React, { Component } from 'react'

const facing = {
  'Bottom': 'down',
  'Left': 'left',
  'Right': 'right',
  'Top': 'up'
}

class NPC extends Component {
  constructor (props) {
    super(props)

    const { mapSize, spawn } = props

    // Set NPC location based on spawn point.
    // If no spawn point is provided, center it.
    this.state = {
      clicked: false,
      direction: null,
      left: spawn ? spawn.left : Math.floor(mapSize / 2),
      spriteType: Math.floor(Math.random() * 2) ? 'sprite' : 'peng',
      top: spawn ? spawn.top : Math.floor(mapSize / 2),
      walking: false
    }

    this.onClickNPCHandler = this.onClickNPCHandler.bind(this)
    this.tick = this.tick.bind(this)
  }

  onClickNPCHandler () {
    // this.setState({ clicked: true })
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
        if (top < mapSize - 1) nextTop = top + 1
      } else {
        // Moving up, so move closer to the top.
        if (top > 0) nextTop = top - 1
      }
      // If there is nothing on the map in the location the NPC is moving to,
      // then go ahead and update with the new position.
      if (!map[nextTop][left]) {
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
        if (left < mapSize - 1) nextLeft = left + 1
      } else {
        // Moving left, so move closer to the left.
        if (left > 0) nextLeft = left - 1
      }
      // If there is nothing on the map in the location the NPC is moving to,
      // then go ahead and update with the new position.
      if (!map[top][nextLeft]) {
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
    // If a color is included, this becomes a null NPC.
    const { color } = this.props
    const { direction, left, spriteType, top, walking } = this.state

    return (
      <div
        onClick={this.onClickNPCHandler}
        style={{
          position: 'absolute',
          left: left * 100,
          top: top * 100,
          width: 100,
          height: 100,
          background: color || (direction ? `url('./static/assets/${spriteType}-${facing[direction]}${walking ? '-walk' : ''}.gif')` : ''),
          transition: 'top 1s linear, left 1s linear',
          boxShadow: this.state.clicked ? '0 0 10px orange' : null,
          boxSizing: 'border-box',
          [`border${direction}`]: '1px solid red'
        }} />
    )
  }
}

export default NPC
