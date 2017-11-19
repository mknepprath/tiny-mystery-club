import React, { Component } from 'react'

class Char extends React.Component {
  constructor (props) {
    super(props)
    const { mapSize, spawn } = this.props
    this.state = {
      top: spawn ? spawn.top * 100 - 100 : mapSize * 50 - 50,
      left: spawn ? spawn.left * 100 - 100 : mapSize * 50 - 50
    }
    this.tick = this.tick.bind(this)
  }
  tick () {
    const { mapSize } = this.props
    const { top, left } = this.state
    const moveType = Math.floor(Math.random() * 3)
    if (moveType === 0) {
      const bottom = Math.floor(Math.random() * 2) === 0
      let _top = top
      if (bottom) {
        if (top < (mapSize - 1) * 100) _top = top + 100
      } else {
        if (top > 0) _top = top - 100
      }
      this.setState({
        top: _top,
        direction: bottom ? 'bottom' : 'top'
      })
    } else if (moveType === 1) {
      const right = Math.floor(Math.random() * 2) === 0
      let _left = left
      if (right) {
        if (left < (mapSize - 1) * 100) _left = left + 100
      } else {
        if (left > 0) _left = left - 100
      }
      this.setState({
        left: _left,
        direction: right ? 'right' : 'left'
      })
    } else {
      this.setState({ direction: undefined })
    }
  }
  componentDidMount () {
    this.interval = setInterval(this.tick, 1000)
  }
  componentWillUnmount () {
    clearInterval(this.interval)
  }
  render () {
    const { mapSize, color } = this.props
    const { top, left, direction } = this.state
    return (
      <div
        style={{
          width: 100,
          height: 100,
          background: color || '#317692',
          top,
          left,
          position: 'absolute',
          transition: 'top 1.5s, left 1.5s',
          boxSizing: 'border-box',
          ['border-' + direction]: '25px solid #AB7692'
        }} />
    )
  }
}

module.exports = Char
