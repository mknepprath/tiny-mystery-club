import React from "react";
import Head from "next/head";
import Link from "next/link";
import Map from "components/map";
import MapDebug from "components/map-debug";
import Prize from "components/prize";
import Rock from "components/rock";
import GameContext from "components/game-context";
import SpeechBox from "components/speech-box";
import ClueJournal from "components/clue-journal";

import styles from "./house.module.css";

const MAP_SIZE = 5;

// The house takes up the top middle of the map, with the front door at (2, 2).
const HOUSE_TILES = [
  { x: 1, y: 0 },
  { x: 2, y: 0 },
  { x: 3, y: 0 },
  { x: 1, y: 1 },
  { x: 2, y: 1 },
  { x: 3, y: 1 },
  { x: 1, y: 2 },
  { x: 2, y: 2 },
  { x: 3, y: 2 },
];

const HOUSE_ROCKS = [
  { spawn: { x: 0, y: 3 }, variant: 1 },
  { spawn: { x: 4, y: 3 }, variant: 2 },
];

const EXIT_SPAWN = { x: 2, y: 4 };

export default React.memo(function House() {
  const [, dispatch] = React.useContext(GameContext);
  const [devMode, setDevMode] = React.useState(false);
  const isClient = typeof window !== "undefined";
  React.useEffect(() => {
    if (isClient) {
      const urlParams = new URLSearchParams(window.location.search);
      setDevMode(urlParams.get("devMode") != null);
    }
  }, [isClient]);

  const [speech, setSpeech] = React.useState();
  const [doorSrc, setDoorSrc] = React.useState(`/static/house-front-door.svg`);

  // Block the house, the rocks and the way out
  React.useEffect(() => {
    [
      ...HOUSE_TILES,
      ...HOUSE_ROCKS.map((rock) => rock.spawn),
      EXIT_SPAWN,
    ].forEach((coords) => {
      dispatch({
        type: "TOGGLE_TILES",
        coordinates: coords,
        mapName: "/house",
        unblocked: false,
      });
    });
  }, []);

  return (
    <div className={styles.mapContainer}>
      <Head>
        <title>Tiny Mystery Club - House</title>
        <meta property="og:title" content="Tiny Mystery Club - House" />
        <meta name="description" content="A React RPG." />
      </Head>

      <ClueJournal />

      <img
        src={`/static/house-exterior.svg`}
        alt="a lil house with a green front door"
        className={styles.facade}
      />

      <Link href="/room" data-cy="room-link">
        <img
          onMouseEnter={() => setDoorSrc(`/static/house-front-door-open.svg`)}
          onMouseLeave={() => setDoorSrc(`/static/house-front-door.svg`)}
          src={doorSrc}
          alt="front door"
          className={styles.door}
        />
      </Link>

      {/* Window peeking, for anyone who tries the glass instead of the door */}
      <div
        onClick={() =>
          setSpeech("u peek thru the window... someones definitely home")
        }
        style={{
          position: "absolute",
          left: 160,
          top: 130,
          width: 60,
          height: 60,
          cursor: "pointer",
          zIndex: 5,
        }}
      />

      {HOUSE_ROCKS.map(({ spawn, variant }) => (
        <Rock
          key={`rock_x${spawn.x}_y${spawn.y}`}
          spawn={spawn}
          variant={variant}
        />
      ))}

      <Link href="/" data-cy="village-link">
        <div
          className={styles.exit}
          style={{ left: EXIT_SPAWN.x * 100, top: EXIT_SPAWN.y * 100 }}
        >
          <img
            src="/static/sign-village.svg"
            alt="Village"
            className={styles.exitImage}
          />
          <span className={styles.exitLabel}>Village</span>
        </div>
      </Link>

      <Prize />

      {devMode ? <MapDebug mapSize={MAP_SIZE} /> : null}
      <Map cypressAttr="house-page" devMode={devMode} mapSize={MAP_SIZE} />

      <SpeechBox speech={speech} onClose={() => setSpeech("")} />
    </div>
  );
});
