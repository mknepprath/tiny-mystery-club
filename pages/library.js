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
import { NPC_DIALOGUE, getNpcReaction } from "components/constants";

import styles from "./room.module.css";

const MAP_SIZE = 5;

export default React.memo(function Library() {
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

  function handleBookshelfClick() {
    if (!state.clues.note) {
      dispatch({ type: "DISCOVER_CLUE", payload: "note" });
    }
    setSpeech(
      "u found a torn note... it says: the trophy was OURS first!! we built it with our flippers before the town even existed"
    );
  }

  function handleFlickeringClick() {
    if (!state.mystery2.clues.flickering) {
      dispatch({ type: "DISCOVER_CLUE_2", payload: "flickering" });
    }
    setSpeech(
      "the lamp keeps flickerin... and theres tiny scorch marks on the shelf. somethin bright was here"
    );
  }

  return (
    <div className={styles.mapContainer}>
      <Head>
        <title>Tiny Mystery Club - Library</title>
        <meta property="og:title" content="Tiny Mystery Club - Library" />
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

      {/* Walls with bookshelves */}
      <img
        src={`/static/wall-picture.png`}
        style={{ height: 100, left: 100, position: "absolute", top: 0, width: 100 }}
      />
      <img
        src={`/static/wall-picture.png`}
        style={{ height: 100, left: 200, position: "absolute", top: 0, width: 100 }}
      />
      <img
        src={`/static/wall.png`}
        style={{ height: 100, left: 300, position: "absolute", top: 0, width: 100 }}
      />
      <img
        src={`/static/wall-picture.png`}
        style={{ height: 100, left: 400, position: "absolute", top: 0, width: 100 }}
      />

      {/* Clickable bookshelf spot with evidence note */}
      <div
        onClick={handleBookshelfClick}
        style={{
          position: "absolute",
          left: 400,
          top: 100,
          width: 100,
          height: 100,
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src="/static/evidence-note.svg"
          style={{
            width: 50,
            height: 50,
            imageRendering: "pixelated",
          }}
          alt="torn note"
        />
      </div>

      {/* Mystery 2: Flickering light spot */}
      {state.mystery2.active && (
        <div
          onClick={handleFlickeringClick}
          style={{
            position: "absolute",
            left: 200,
            top: 100,
            width: 100,
            height: 100,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src="/static/evidence-flickering.svg"
            style={{
              width: 60,
              height: 60,
              imageRendering: "pixelated",
              animation: "flicker 0.3s infinite alternate",
            }}
            alt="flickering lamp"
          />
          <style>{`@keyframes flicker { 0% { opacity: 0.4; transform: scale(0.95); } 100% { opacity: 1; transform: scale(1.05); } }`}</style>
        </div>
      )}

      {/* Dusty NPC */}
      <NPC
        devMode={devMode}
        mapSize={MAP_SIZE}
        name="Dusty"
        stationary
        onClick={() => {
          if (state.presentingClue) {
            const reaction = getNpcReaction("dusty", state.presentingClue);
            setSpeech(reaction);
            dispatch({ type: "CLEAR_PRESENTING" });
            return;
          }
          setSpeech(NPC_DIALOGUE.dusty(state));
        }}
        spawn={{ x: 3, y: 2 }}
        spriteType="lion"
      />

      <Prize />

      {devMode ? <MapDebug mapSize={MAP_SIZE} /> : null}
      <Map cypressAttr="library-page" devMode={devMode} interior mapSize={MAP_SIZE} />

      <SpeechBox speech={speech} onClose={() => setSpeech("")} />
    </div>
  );
});
