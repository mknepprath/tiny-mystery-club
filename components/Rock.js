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
      src: Math.floor(Math.random() * 2)
        ? '/static/rock1.png'
        : '/static/rock2.png'
    })
  }

  render () {
    const { spawn } = this.props
    const { src } = this.state

    return (
      <img
        className={styles.rock}
        src={src}
        style={{
          left: spawn.left * 100,
          top: spawn.top * 100
        }}
      />
    )
  }
}

export default Rock
