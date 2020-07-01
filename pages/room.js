import React from "react";
import Head from "next/head";
import Map from "components/map";
import MapDebug from "components/map-debug";
import NPC from "components/npc";
import Prize from "components/prize";
import GameContext from "components/game-context";

import styles from "./room.module.css";

const MAP_SIZE = 4;

export default React.memo(function Room() {
  const [state] = React.useContext(GameContext);
  const [devMode, setDevMode] = React.useState(false);
  const isClient = typeof window !== "undefined";
  React.useEffect(() => {
    if (isClient) {
      const urlParams = new URLSearchParams(window.location.search);
      setDevMode(urlParams.get("devMode") != null);
    }
  }, [isClient]);

  const [speech, setSpeech] = React.useState();
  const [doorSrc, setDoorSrc] = React.useState(`/static/door.png`);

  return (
    <div className={styles.mapContainer}>
      <Head>
        <title>{`Tiny Mystery ${devMode ? "Sandbox" : "Club"}`}</title>
        <meta property="og:title" content="Tiny Mystery Club - Room" />
        <meta name="description" content="A React RPG." />
        <style>{`body {background-color: rgba(37, 35, 39, 1)}`}</style>
      </Head>

      <a href="/">
        <img
          onMouseEnter={() => setDoorSrc(`/static/wall-door-open.png`)}
          onMouseLeave={() => setDoorSrc(`/static/door.png`)}
          src={doorSrc}
          style={{
            height: 100,
            left: 0,
            position: "absolute",
            top: 0,
            width: 100,
          }}
        />
      </a>

      <img
        src={`/static/wall-picture.png`}
        style={{
          height: 100,
          left: 100,
          position: "absolute",
          top: 0,
          width: 100,
        }}
      />

      <img
        src={`/static/wall.png`}
        style={{
          height: 100,
          left: 200,
          position: "absolute",
          top: 0,
          width: 100,
        }}
      />

      <img
        src={`/static/wall.png`}
        style={{
          height: 100,
          left: 300,
          position: "absolute",
          top: 0,
          width: 100,
        }}
      />

      <NPC
        devMode={devMode}
        mapSize={MAP_SIZE}
        onClick={() => setSpeech("aaaah why is there ppl in my house")}
        spawn={{ x: 2, y: 2 }}
        spriteType="peng"
      />

      <NPC
        devMode={devMode}
        mapSize={MAP_SIZE}
        onClick={() => {
          if (state.points === 0) {
            setSpeech("y is htere a peng in my house");
          } else if (state.points < 3) {
            setSpeech("thx for finding the trophy but i lost it again");
          } else {
            setSpeech(`wow u found my trophy ${state.points} times,,,,,`);
          }
        }}
        spawn={{ x: 0, y: 1 }}
        spriteType="sprite"
      />

      <Prize />

      {devMode ? <MapDebug mapSize={MAP_SIZE} /> : null}
      <Map devMode={devMode} interior mapSize={MAP_SIZE} />

      {speech ? (
        <>
          <div className={styles.overlay} onClick={() => setSpeech("")} />
          <div className={styles.speech}>
            <div className={styles.contents}>{speech}</div>
          </div>
        </>
      ) : null}
    </div>
  );
});
