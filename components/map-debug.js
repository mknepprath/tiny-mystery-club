import React from "react";
import { useRouter } from "next/router";

import GameContext from "./game-context";
import { indexToCoords } from "./utils";

import styles from "./map-debug.module.css";

// When not debugging, this can be 100% STATIC. I think.

export default function MapDebug(props) {
  const [state] = React.useContext(GameContext);
  const router = useRouter();

  return (
    <div
      className={styles.map}
      style={{
        height: props.mapSize * 100,
        width: props.mapSize * 100,
      }}
    >
      {[...Array(props.mapSize * props.mapSize)].map((_, index) => {
        const { x, y } = indexToCoords(index, props.mapSize);

        return (
          <div
            className={styles.tile}
            key={`map_tile_${index}`}
            style={{
              border: state.maps[router.pathname][y][x]
                ? "2px solid rgba(0, 0, 0, .2)"
                : "2px solid red",
              color: state.maps[router.pathname][y][x]
                ? "rgba(0, 0, 0, .2)"
                : "red",
            }}
            suppressHydrationWarning
          >
            {`${x}×${y}, ${index}`}
          </div>
        );
      })}
    </div>
  );
}
