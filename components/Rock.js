import React from 'react'

export default ({ left, top }) => (
  <div
    style={{
      position: 'absolute',
      left: left * 100 - 100,
      top: top * 100 - 100,
      height: 100,
      width: 100,
      background: Math.floor(Math.random() * 2)
        ? `url('./static/assets/rock1.png')`
        : `url('./static/assets/rock2.png')`
    }} />
)
