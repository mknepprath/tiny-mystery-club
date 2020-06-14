import React, { Component } from "react";
import Head from "next/head";
import Map from "components/map";
import NPC from "components/npc";
import Prize from "components/prize";
import { flipTiles, generateMap } from "components/utils";

const MAP_SIZE = 3;

class Room extends Component {
  constructor(props) {
    super(props);

    let devMode = false;
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      devMode = urlParams.get("devMode");
    }

    this.state = {
      devMode: devMode != null,
      map: generateMap(MAP_SIZE),
      score: 0,
    };

    this.flipTiles = this.flipTiles.bind(this);
    this.updateScore = this.updateScore.bind(this);
  }

  flipTiles(blockTiles, clearTiles) {
    this.setState({
      map: flipTiles(blockTiles, clearTiles, this.state.map),
    });
  }

  updateScore() {
    this.setState({ score: this.state.score + 1 });
  }

  render() {
    const { devMode, map, score } = this.state;

    return (
      <div style={{ position: "relative" }}>
        <Head>
          <title>
            {`Tiny Mystery ${devMode ? "Sandbox" : "Club"} - Room` +
              (score ? ` (${score})` : "")}
          </title>
          <link rel="stylesheet" type="text/css" href="./static/reset.css" />
        </Head>

        <a href="/">
          <NPC
            flipTiles={this.flipTiles}
            map={map}
            spawn={{ left: 2, top: 2 }}
            spriteType="sprite"
          />
        </a>

        <Prize
          flipTiles={this.flipTiles}
          map={map}
          updateScore={this.updateScore}
        />

        <Map devMode={devMode} interior map={map} />
      </div>
    );
  }
}

export default Room;
