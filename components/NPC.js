import React, { Component } from 'react'

import { shuffle } from './utils'
import { FACING } from './constants'

import styles from './NPC.css'

class NPC extends Component {
  constructor (props) {
    super(props)

    // Set NPC location based on spawn point.
    // If no spawn point is provided, center it.
    // Sprites face a random direction.
    this.state = {
      clicked: false,
      direction: Object.keys(FACING)[0],
      left: props.spawn.left,
      top: props.spawn.top,
      walking: false
    }

    props.flipTiles({
      left: props.spawn.left,
      top: props.spawn.top
    })

    this.onClickNPCHandler = this.onClickNPCHandler.bind(this)
    this.tick = this.tick.bind(this)
  }

  onClickNPCHandler () {
    this.setState({ clicked: true })
  }

  tick () {
    const { map } = this.props
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
        if (top + 1 < map.length) nextTop = top + 1
      } else {
        // Moving up, so move closer to the top.
        // Only if the NPC is not walking off the top of the page.
        if (top > 0) nextTop = top - 1
      }
      // If there is nothing on the map in the location the NPC is moving to,
      // then go ahead and update with the new position.
      if (map[nextTop][left]) {
        this.props.flipTiles(
          { left, top: nextTop },
          { left, top }
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
        if (left + 1 < map.length) nextLeft = left + 1
      } else {
        // Moving left, so move closer to the left.
        if (left > 0) nextLeft = left - 1
      }
      // If there is nothing on the map in the location the NPC is moving to,
      // then go ahead and update with the new position.
      if (map[top][nextLeft]) {
        this.props.flipTiles(
          { left: nextLeft, top },
          { left, top }
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
    this.setState({ direction: shuffle(Object.keys(FACING))[0] })

    this.interval = setInterval(this.tick, 1000)
  }
  componentWillUnmount () {
    clearInterval(this.interval)
  }
  render () {
    const {
      spriteType
    } = this.props

    const {
      clicked,
      direction,
      left,
      top,
      walking
    } = this.state

    return (
      <div
        className={styles.npc}
        onClick={this.onClickNPCHandler}
        style={{
          left: left * 100,
          top: top * 100,
          backgroundImage: `url('/static/${spriteType}-${FACING[direction]}${walking ? '-walk' : ''}.gif')`,
          boxShadow: clicked ? '0 0 1px orange' : null,
          // [`border${direction}`]: '1px solid purple'
        }} />
    )
  }
}

export default NPC
