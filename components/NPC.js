import React, { Component } from 'react'

//TODO: Move to a utils file
const shuffle = array => {
  var currentIndex = array.length, temporaryValue, randomIndex

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1

    // And swap it with the current element.
    temporaryValue = array[currentIndex]
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = temporaryValue
  }

  return array
}

// TODO: Move to a constants file
const facing = {
  'Bottom': 'down',
  'Left': 'left',
  'Right': 'right',
  'Top': 'up'
}

const sprites = [
  'sprite',
  'peng',
  'lion'
]

class NPC extends Component {
  constructor (props) {
    super(props)

    const { mapSize, spawn } = props

    // Set NPC location based on spawn point.
    // If no spawn point is provided, center it.
    // Sprites face a random direction.
    this.state = {
      clicked: false,
      direction: shuffle(Object.keys(facing))[0],
      left: spawn ? spawn.left : Math.floor(mapSize / 2),
      spriteType: shuffle(sprites)[0],
      top: spawn ? spawn.top : Math.floor(mapSize / 2),
      walking: false
    }

    this.onClickNPCHandler = this.onClickNPCHandler.bind(this)
    this.tick = this.tick.bind(this)
  }

  onClickNPCHandler () {
    this.setState({ clicked: true })
  }

  tick () {
    const { map, mapSize } = this.props
    const { left, top } = this.state

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
        // Only if the NPC is not walking off the bottom of the page.
        if (top + 1 < mapSize) nextTop = top + 1
      } else {
        // Moving up, so move closer to the top.
        // Only if the NPC is not walking off the top of the page.
        if (top > 0) nextTop = top - 1
      }
      // If there is nothing on the map in the location the NPC is moving to,
      // then go ahead and update with the new position.
      if (map[nextTop][left]) {
        this.props.flipTiles(
          { left, top },
          { left, top: nextTop }
        )

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
        if (left + 1 < mapSize) nextLeft = left + 1
      } else {
        // Moving left, so move closer to the left.
        if (left > 0) nextLeft = left - 1
      }
      // If there is nothing on the map in the location the NPC is moving to,
      // then go ahead and update with the new position.
      if (map[top][nextLeft]) {
        this.props.flipTiles(
          { left, top },
          { left: nextLeft, top }
        )

        this.setState({
          direction: right ? 'Right' : 'Left',
          left: nextLeft,
          walking: true
        })
      }
    } else {
      // Direction of NPC doesn't change when they stop walking.
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
    const {
      clicked,
      direction,
      left,
      spriteType,
      top,
      walking
    } = this.state

    return (
      <div
        onClick={this.onClickNPCHandler}
        style={{
          position: 'absolute',
          left: left * 100,
          top: top * 100,
          width: 100,
          height: 100,
          backgroundImage: `url('./static/assets/${spriteType}-${facing[direction]}${walking ? '-walk' : ''}.gif')`,
          transition: 'top 1s linear, left 1s linear',
          boxShadow: clicked ? '0 0 1px orange' : null,
          boxSizing: 'border-box',
          // [`border${direction}`]: '1px solid red'
        }} />
    )
  }
}

export default NPC
