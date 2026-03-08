import React from "react";
import Head from "next/head";
import Link from "next/link";

import Map from "components/map";
import NPC from "components/npc";
import Prize from "components/prize";
import Rock from "components/rock";
import SpeechBox from "components/speech-box";
import ClueJournal from "components/clue-journal";
import GameContext from "components/game-context";

import { NPCS, NPC_DIALOGUE, ROCKS, WATER, ENTRANCES, getNpcReaction } from "components/constants";
import useMapScroll from "../hooks/useMapScroll";
import MapDebug from "../components/map-debug";

import styles from "./index.module.css";

export const MAP_SIZE = 59;

export default React.memo(function App() {
  const [state, dispatch] = React.useContext(GameContext);
  const [devMode, setDevMode] = React.useState(false);

  const isClient = typeof window !== "undefined";
  React.useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    setDevMode(urlParams.get("devMode") != null);

    if (!(window.scrollX && window.scrollY)) {
      window.scrollTo(
        (MAP_SIZE * 100 - window.innerWidth) / 2,
        (MAP_SIZE * 100 - window.innerHeight) / 2
      );
    }
  }, [isClient]);

  useMapScroll();
  const [speech, setSpeech] = React.useState();

  function handleNpcClick(id) {
    // Evidence presentation mode
    if (state.presentingClue) {
      // Special case: presenting crystal to Rex triggers confession
      if (id === "rex" && state.presentingClue === "crystal" && state.mystery2.active && !state.mystery2.clues.confession) {
        const m2ClueCount = Object.values(state.mystery2.clues).filter(Boolean).length;
        if (m2ClueCount >= 2 || state.mystery2.clues.crystal) {
          setSpeech("w-where did u find that?! ...i mean... whats that... never seen it before...");
          dispatch({ type: "DISCOVER_CLUE_2", payload: "confession" });
          dispatch({ type: "CLEAR_PRESENTING" });
          return;
        }
      }
      const reaction = getNpcReaction(id, state.presentingClue);
      setSpeech(reaction);
      dispatch({ type: "CLEAR_PRESENTING" });
      return;
    }
    const dialogue = NPC_DIALOGUE[id](state);
    setSpeech(dialogue);
    // Discover mystery 1 clues on first interaction
    if (id === "marlo" && !state.clues.witness) {
      dispatch({ type: "DISCOVER_CLUE", payload: "witness" });
    }
    if (id === "puddle" && !state.clues.gossip) {
      dispatch({ type: "DISCOVER_CLUE", payload: "gossip" });
    }
    // Discover mystery 2 clues
    if (id === "pip" && state.mystery2.active && !state.mystery2.clues.shadows) {
      dispatch({ type: "DISCOVER_CLUE_2", payload: "shadows" });
    }
    // Discover mystery 3 clues
    if (id === "fern" && state.mystery3?.active && !state.mystery3.clues.melody) {
      dispatch({ type: "DISCOVER_CLUE_3", payload: "melody" });
    }
    if (id === "pip" && state.mystery3?.active && !state.mystery3.clues.wetTrail) {
      dispatch({ type: "DISCOVER_CLUE_3", payload: "wetTrail" });
    }
  }

  function handleCrystalClick() {
    if (!state.mystery2.clues.crystal) {
      dispatch({ type: "DISCOVER_CLUE_2", payload: "crystal" });
    }
    setSpeech("u found a shard of some kind of crystal... its warm to the touch and catches the light in a weird way");
  }

  function handleFluteClick() {
    if (!state.mystery3.clues.instrument) {
      dispatch({ type: "DISCOVER_CLUE_3", payload: "instrument" });
    }
    setSpeech("a broken flute... someone dropped it here in a hurry. there are scratch marks on the rocks nearby too");
  }

  function handleUnderwaterClick() {
    if (!state.mystery3.clues.underwater) {
      dispatch({ type: "DISCOVER_CLUE_3", payload: "underwater" });
    }
    setSpeech("u can hear faint music comin from under the water... its muffled but definitely instruments playin together. someone built somethin down there");
  }

  const isNight = (state.mystery2.active && !state.mystery2.solved) || (state.mystery3?.active && !state.mystery3?.solved);

  return (
    <div style={{ position: "relative" }}>
      <Head>
        <title>{`Tiny Mystery ${devMode ? "Sandbox" : "Club"}`}</title>
        <meta property="og:title" content="Tiny Mystery Club" />
        <meta name="description" content="A React RPG." />
        <link rel="stylesheet" type="text/css" href="./static/reset.css" />
      </Head>

      <ClueJournal />

      {NPCS.map(({ id, name, spawn, spriteType }) => (
        <NPC
          devMode={devMode}
          key={`npc_${id}`}
          name={name}
          mapSize={MAP_SIZE}
          onClick={() => handleNpcClick(id)}
          spawn={spawn}
          spriteType={spriteType}
        />
      ))}

      {ROCKS.map(({ spawn, variant }) => (
        <Rock
          key={`rock_x${spawn.x}_y${spawn.y}`}
          spawn={spawn}
          variant={variant}
        />
      ))}

      {ENTRANCES.map(({ spawn, href, label, image }) => (
        <Link key={`entrance_${href}`} href={href}>
          <div
            className={styles.entrance}
            style={{
              left: spawn.x * 100,
              top: spawn.y * 100,
            }}
          >
            <img src={image} alt={label} className={styles.entranceImage} />
            <span className={styles.entranceLabel}>{label}</span>
          </div>
        </Link>
      ))}

      {/* Mystery 2: Crystal evidence in the forest area */}
      {state.mystery2.active && !state.mystery2.solved && (
        <div
          onClick={handleCrystalClick}
          style={{
            position: "absolute",
            left: 6 * 100,
            top: 8 * 100,
            width: 100,
            height: 100,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 4,
          }}
        >
          <img
            src="/static/evidence-crystal.svg"
            style={{
              width: 60,
              height: 60,
              imageRendering: "pixelated",
            }}
            alt="crystal shard"
          />
        </div>
      )}

      {/* Mystery 3: Broken flute near rocky hills */}
      {state.mystery3?.active && !state.mystery3?.solved && (
        <div
          onClick={handleFluteClick}
          style={{
            position: "absolute",
            left: 38 * 100,
            top: 7 * 100,
            width: 100,
            height: 100,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 4,
          }}
        >
          <img
            src="/static/evidence-flute.svg"
            style={{
              width: 60,
              height: 60,
              imageRendering: "pixelated",
            }}
            alt="broken flute"
          />
        </div>
      )}

      {/* Mystery 3: Underwater sounds near lake */}
      {state.mystery3?.active && !state.mystery3?.solved && (
        <div
          onClick={handleUnderwaterClick}
          style={{
            position: "absolute",
            left: 22 * 100,
            top: 40 * 100,
            width: 100,
            height: 100,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 4,
          }}
        >
          <img
            src="/static/evidence-underwater.svg"
            style={{
              width: 60,
              height: 60,
              imageRendering: "pixelated",
            }}
            alt="underwater sounds"
          />
        </div>
      )}

      <Prize />

      {devMode ? <MapDebug mapSize={MAP_SIZE} /> : null}
      <Map cypressAttr="index-page" devMode={devMode} mapSize={MAP_SIZE} water={WATER} />

      {isNight && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: MAP_SIZE * 100,
            height: MAP_SIZE * 100,
            background: "rgba(15, 10, 40, 0.35)",
            pointerEvents: "none",
            zIndex: 1,
          }}
        />
      )}

      <SpeechBox speech={speech} onClose={() => setSpeech("")} />
    </div>
  );
});
