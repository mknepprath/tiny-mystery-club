import React from 'react'

import { findUnblockedTile } from './utils'

class Prize extends React.Component {
  constructor (props) {
    super(props)

    const initialPosition = findUnblockedTile(this.props.map)

    // TODO: This causes an issue where the prize will appear
    // briefly at the top left on reload.
    this.state = {
      left: initialPosition.left,
      sprite: `url('./static/assets/prize.gif')`,
      top: initialPosition.top
    }

    props.flipTiles({
      left: initialPosition.left,
      top: initialPosition.top
    })

    this.onPrizeClickHandler = this.onPrizeClickHandler.bind(this)
    this.onPrizeMouseOut = this.onPrizeMouseOut.bind(this)
    this.onPrizeMouseOver = this.onPrizeMouseOver.bind(this)
  }


  onPrizeClickHandler () {
    this.props.updateScore()

    const nextPosition = findUnblockedTile(this.props.map)

    this.props.flipTiles(
      nextPosition,
      { left: this.state.left, top: this.state.top }
    )

    this.setState(nextPosition)
  }

  onPrizeMouseOut () {
    // Replace with CSS :hover
    this.setState({ sprite: `url('./static/assets/prize.gif')` })
  }

  onPrizeMouseOver () {
    // Replace with CSS :hover
    this.setState({ sprite: `url('./static/assets/prize-sparkle.gif')` })
  }

  render () {
    const {
      left,
      sprite,
      top
    } = this.state
    return (
      <div
        onClick={this.onPrizeClickHandler}
        onMouseOut={this.onPrizeMouseOut}
        onMouseOver={this.onPrizeMouseOver}
        style={{
          position: 'absolute',
          left: left * 100,
          top: top * 100,
          height: 100,
          width: 100,
          background: sprite,
          cursor: 'pointer'
        }}
      />
    )
    }
  }

export default Prize
