import React from 'react'

class Rock extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      backgroundImage: Math.floor(Math.random() * 2)
        ? `url('./static/assets/rock1.png')`
        : `url('./static/assets/rock2.png')`
    }
  }

  render () {
    const { left, top } = this.props
    const { backgroundImage } = this.state

    return (
      <div
        style={{
          position: 'absolute',
          left: left * 100,
          top: top * 100,
          height: 100,
          width: 100,
          backgroundImage
        }}
      />
    )
  }
}

export default Rock
