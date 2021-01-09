import React from "react";
import { useRouter } from "next/router";

import GameContext from "./game-context";
import { coordsToIndex, indexToCoords } from "./utils";
import { ROCKS, WATER } from "./constants";

import styles from "./map.module.css";

// When not debugging, this can be 100% STATIC. I think.

export default function Map(props) {
  const [, dispatch] = React.useContext(GameContext);
  const router = useRouter();

  const [backgroundIds, setBackgroundIds] = React.useState();
  React.useEffect(() => {
    let backgroundIds = [...Array(Math.pow(props.mapSize, 2))].map(() => {
      let backgroundId = "grass1.png";

      // Randomize grass tiles
      const backgroundLottery = Math.floor(Math.random() * 299);

      if (backgroundLottery < 1) {
        backgroundId = "grass2.png";
      } else if (backgroundLottery < 2) {
        backgroundId = "grass5.png";
      } else if (backgroundLottery < 79) {
        backgroundId = "grass3.png";
      } else if (backgroundLottery < 159) {
        backgroundId = "grass4.png";
      } else if (backgroundLottery < 229) {
        backgroundId = "grass6.png";
      }

      return backgroundId;
    });
    if (props.water) {
      props.water.forEach(({ spawn }) => {
        const index = coordsToIndex(spawn, props.mapSize);
        backgroundIds[index] = "water.gif";
      });
    }
    setBackgroundIds(backgroundIds);

    // block rocks, water, one-off link rock
    // TODO: also this should not go here... I'm not sure where it should go
    // - Eh
    // - This shouldn't be a dispatch at all, these should get added when hydrating state
    [...ROCKS, ...WATER, { spawn: { x: 6, y: 7 } }].forEach(({ spawn }) => {
      dispatch({
        type: "TOGGLE_TILES",
        coordinates: spawn,
        mapName: router.pathname,
        unblocked: false,
      });
    });
  }, []);

  if (!backgroundIds) return null;

  return (
    <div
      className={styles.map}
      data-cy={props.cypressAttr}
      style={{
        height: props.mapSize * 100,
        width: props.mapSize * 100,
      }}
    >
      {backgroundIds.map((backgroundId, index) => {
        return (
          <div
            key={`${index}_${backgroundId}`}
            style={{
              background: `url('/static/${
                props.interior ? "wood-floor.gif" : backgroundId
              }')`,
            }}
            suppressHydrationWarning
          />
        );
      })}
    </div>
  );
}
