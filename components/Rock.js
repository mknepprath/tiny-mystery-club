import React from 'react'

import styles from './Rock.css'

class Rock extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      backgroundImage: `url('/static/rock1.png')`
    }

    props.flipTiles({
      left: props.spawn.left,
      top: props.spawn.top
    })
  }

  componentDidMount () {
    this.setState({
      backgroundImage: Math.floor(Math.random() * 2)
        ? `url('/static/rock1.png')`
        : `url('/static/rock2.png')`
    })
  }

  render () {
    const { spawn } = this.props
    const { backgroundImage } = this.state

    return (
      <div
        className={styles.rock}
        style={{
          left: spawn.left * 100,
          top: spawn.top * 100,
          backgroundImage
        }}
      />
    )
  }
}

export default Rock
