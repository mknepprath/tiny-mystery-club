import React from "react";
import Head from "next/head";

import Map from "components/map";
import NPC from "components/npc";
import Prize from "components/prize";
import Rock from "components/rock";

import { NPCS, ROCKS, WATER } from "components/constants";
import MapDebug from "../components/map-debug";

import styles from "./index.module.css";

export const MAP_SIZE = 59;

export default React.memo(function App() {
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

  const [speech, setSpeech] = React.useState();

  return (
    <div style={{ position: "relative" }}>
      <Head>
        <title>{`Tiny Mystery ${devMode ? "Sandbox" : "Club"}`}</title>
        <meta property="og:title" content="Tiny Mystery Club" />
        <meta name="description" content="A React RPG." />
        <link rel="stylesheet" type="text/css" href="./static/reset.css" />
      </Head>

      {NPCS.map(({ spawn, spriteType }) => (
        <NPC
          devMode={devMode}
          key={`npc_x${spawn.x}_y${spawn.y}`}
          mapSize={MAP_SIZE}
          onClick={() => {
            if (spriteType === "sprite") {
              setSpeech("I am talking to u now,,, can u find my trophy?");
            } else if (spriteType === "peng") {
              setSpeech("do u no where the magic rock is bc I wnat to go home");
            } else if (spriteType === "lion") {
              setSpeech("roar hey");
            }
          }}
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

      <a href="/room">
        <Rock spawn={{ x: 6, y: 7 }} variant={1} />
      </a>

      <Prize />

      {devMode ? <MapDebug mapSize={MAP_SIZE} /> : null}
      <Map devMode={devMode} mapSize={MAP_SIZE} water={WATER} />

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
