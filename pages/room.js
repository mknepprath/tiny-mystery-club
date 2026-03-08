import React from "react";
import Head from "next/head";
import Link from "next/link";
import Map from "components/map";
import MapDebug from "components/map-debug";
import NPC from "components/npc";
import Prize from "components/prize";
import GameContext from "components/game-context";
import SpeechBox from "components/speech-box";
import ClueJournal from "components/clue-journal";

import styles from "./room.module.css";

const MAP_SIZE = 4;

export default React.memo(function Room() {
  const [state, dispatch] = React.useContext(GameContext);
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

      <ClueJournal />

      <Link href="/">
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
      </Link>

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
        name="Peng"
        stationary
        onClick={() => {
          if (state.presentingClue) {
            setSpeech("hmm... i dont really know anythin about that");
            dispatch({ type: "CLEAR_PRESENTING" });
            return;
          }
          setSpeech("have u heard?? the trophy got STOLEN from town hall!!");
        }}
        spawn={{ x: 2, y: 2 }}
        spriteType="peng"
      />

      <NPC
        devMode={devMode}
        mapSize={MAP_SIZE}
        name="Sprite"
        stationary
        onClick={() => {
          if (state.presentingClue) {
            setSpeech("hmm... i dont really know anythin about that");
            dispatch({ type: "CLEAR_PRESENTING" });
            return;
          }
          if (state.points === 0) {
            setSpeech("every1 is talkin about the missing trophy... u should check town hall");
          } else if (state.points < 3) {
            setSpeech("thx for finding the trophy but i lost it again");
          } else if (state.points < 100) {
            setSpeech(
              `wow u found my trophy ${state.points} times,,,,, u really solved htis tiny mystery`
            );
          } else {
            setSpeech("u can stop solving the msytery now thx");
          }
        }}
        spawn={{ x: 0, y: 1 }}
        spriteType="sprite"
      />

      <Prize />

      {devMode ? <MapDebug mapSize={MAP_SIZE} /> : null}
      <Map cypressAttr="room-page" devMode={devMode} interior mapSize={MAP_SIZE} />

      <SpeechBox speech={speech} onClose={() => setSpeech("")} />
    </div>
  );
});
