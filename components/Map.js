import React, { Component } from 'react'

class Map extends React.Component {
  componentDidMount () {
    const { size } = this.props
    const { innerWidth, innerHeight } = window
    window.scrollTo(
      size * 50 - innerWidth / 2,
      size * 50 - innerHeight / 2
    )
  }
  render () {
    const { size } = this.props
    return (
      <div style={{width: size * 100, height: size * 100, background: '#F3EBE9'}}>
        {[...Array(Math.pow(size, 2))].map((e ,i) => {
          return <div key={i} style={{width: 100, height: 100, float: 'left', background: i % 2 ? '#D4DBE4' : '#DCE2E9'}} />
        })}
      </div>
    )
  }
}

module.exports = Map
