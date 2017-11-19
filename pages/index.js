import React from 'react'
import Head from 'next/head'
import { bindActionCreators } from 'redux'
import { initStore, startClock, addCount, serverRenderClock } from '../store'
import withRedux from 'next-redux-wrapper'
import Page from '../components/Page'
import Map from '../components/Map'
import Char from '../components/Char'

class Counter extends React.Component {
  static getInitialProps ({ store, isServer }) {
    store.dispatch(serverRenderClock(isServer))
    store.dispatch(addCount())

    return { isServer }
  }

  componentDidMount () {
    this.timer = this.props.startClock()
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }

  render () {
    // Ideas...
    // Create a matrix for hte map that is updated with positions "AI" can use to detect nearby objects etc
    // Each char should have a state that's impacted by what they're near, player can trigger things that affect how they're impacted
    // For now, maybe have them change color depending on feelings...
    // Speech bubbles appearing when chars recognize they're near each other
    // Perhaps position should always be set with the matrix position - then x100 to absolute position
    const mapSize = 39
    return <div style={{position: 'relative'}}>
      <Head>
        <link rel='stylesheet' type='text/css' href='./static/reset.css' />
      </Head>
      <Char mapSize={mapSize} />
      <Char mapSize={mapSize} spawn={{top: 29, left: 14}} />
      <Char mapSize={mapSize} spawn={{top: 16, left: 29}} />
      <Char mapSize={mapSize} spawn={{top: 1, left: 1}} />
      <Char mapSize={mapSize} spawn={{top: 1, left: 16}} />
      <Char mapSize={mapSize} spawn={{top: 18, left: 10}} color='#615990' />
      <Char mapSize={mapSize} spawn={{top: 10, left: 16}} color='#63B0E3' />
      {/* <Rock spawn={{top: 3, left: 8}} /> */}
      <Map size={mapSize} />
    </div>
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addCount: bindActionCreators(addCount, dispatch),
    startClock: bindActionCreators(startClock, dispatch)
  }
}

export default withRedux(initStore, null, mapDispatchToProps)(Counter)
