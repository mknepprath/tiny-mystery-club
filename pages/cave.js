import React from "react";
import Head from "next/head";
import Link from "next/link";
import Map from "components/map";
import MapDebug from "components/map-debug";
import Rock from "components/rock";
import GameContext from "components/game-context";
import SpeechBox from "components/speech-box";
import ClueJournal from "components/clue-journal";

import styles from "./room.module.css";

const MAP_SIZE = 5;

const CAVE_WATER = [
  // Right side waterfall stream
  { spawn: { x: 4, y: 1 } },
  { spawn: { x: 4, y: 2 } },
  // Bottom pool
  { spawn: { x: 0, y: 4 } },
  { spawn: { x: 1, y: 4 } },
  { spawn: { x: 2, y: 4 } },
  { spawn: { x: 3, y: 4 } },
  { spawn: { x: 4, y: 4 } },
];

export default React.memo(function Cave() {
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
  const [doorSrc, setDoorSrc] = React.useState(`/static/cave-door.png`);

  // Block internal rocks and water
  React.useEffect(() => {
    [{ x: 1, y: 1 }, { x: 3, y: 3 }, ...CAVE_WATER.map((w) => w.spawn)].forEach((coords) => {
      dispatch({
        type: "TOGGLE_TILES",
        coordinates: coords,
        mapName: "/cave",
        unblocked: false,
      });
    });
  }, []);

  function handleSparkleClick() {
    if (!state.clues.caveEvidence) {
      dispatch({ type: "DISCOVER_CLUE", payload: "caveEvidence" });
    }
    setSpeech(
      "u found golden sparkles on the ground!! somthing shiny was here recently"
    );
  }

  return (
    <div className={styles.mapContainer}>
      <Head>
        <title>Tiny Mystery Club - Cave</title>
        <meta property="og:title" content="Tiny Mystery Club - Cave" />
        <meta name="description" content="A React RPG." />
        <style>{`body {background-color: rgba(37, 35, 39, 1)}`}</style>
      </Head>

      <ClueJournal />

      <Link href="/">
        <img
          onMouseEnter={() => setDoorSrc(`/static/cave-door.png`)}
          onMouseLeave={() => setDoorSrc(`/static/cave-door.png`)}
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

      {/* Cave walls */}
      <img
        src={`/static/cave-wall.png`}
        style={{ height: 100, left: 100, position: "absolute", top: 0, width: 100 }}
      />
      <img
        src={`/static/cave-wall.png`}
        style={{ height: 100, left: 200, position: "absolute", top: 0, width: 100 }}
      />
      <img
        src={`/static/cave-wall.png`}
        style={{ height: 100, left: 300, position: "absolute", top: 0, width: 100 }}
      />
      <img
        src={`/static/cave-wall.png`}
        style={{ height: 100, left: 400, position: "absolute", top: 0, width: 100 }}
      />

      {/* Some rocks inside the cave */}
      <Rock spawn={{ x: 1, y: 1 }} variant={2} />
      <Rock spawn={{ x: 3, y: 3 }} variant={1} />

      {/* Clickable sparkle spot in back corner with evidence sprite */}
      <div
        onClick={handleSparkleClick}
        style={{
          position: "absolute",
          left: 400,
          top: 300,
          width: 100,
          height: 100,
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src="/static/evidence-sparkles.svg"
          style={{
            width: 60,
            height: 60,
            imageRendering: "pixelated",
          }}
          alt="golden sparkles"
        />
      </div>

      {devMode ? <MapDebug mapSize={MAP_SIZE} /> : null}
      <Map cypressAttr="cave-page" devMode={devMode} interior="cave" mapSize={MAP_SIZE} water={CAVE_WATER} />

      <SpeechBox speech={speech} onClose={() => setSpeech("")} />
    </div>
  );
});
