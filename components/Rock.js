import React from 'react'

class Rock extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      backgroundImage: Math.floor(Math.random() * 2)
        ? `url('./static/assets/rock1.png')`
        : `url('./static/assets/rock2.png')`
    }

    props.flipTiles({
      left: props.spawn.left,
      top: props.spawn.top
    })
  }

  render () {
    const { spawn } = this.props
    const { backgroundImage } = this.state

    return (
      <div
        style={{
          position: 'absolute',
          left: spawn.left * 100,
          top: spawn.top * 100,
          height: 100,
          width: 100,
          backgroundImage
        }}
      />
    )
  }
}

export default Rock
