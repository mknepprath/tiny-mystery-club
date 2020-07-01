import React from "react";
import { useRouter } from "next/router";

import GameContext from "./game-context";
import { findUnblockedTile } from "./utils";

import styles from "./prize.module.css";

export default function Prize() {
  const [state, dispatch] = React.useContext(GameContext);
  const router = useRouter();
  const [coordinates, setCoordinates] = React.useState({ x: 0, y: 0 });

  React.useEffect(() => {
    const coordinates = findUnblockedTile(state.maps[router.pathname]);
    setCoordinates(coordinates);
    dispatch({
      type: "TOGGLE_TILES",
      coordinates,
      mapName: router.pathname,
      unblocked: false,
    });
  }, []);

  return (
    <div
      className={styles.prize}
      onClick={() => {
        dispatch({
          type: "TOGGLE_TILES",
          coordinates,
          mapName: router.pathname,
          unblocked: true,
        });
        const nextCoordinates = findUnblockedTile(state.maps[router.pathname]);
        setCoordinates(nextCoordinates);
        dispatch({
          type: "TOGGLE_TILES",
          coordinates: nextCoordinates,
          mapName: router.pathname,
          unblocked: false,
        });
        dispatch({ type: "ADD_POINT" });
      }}
      style={{
        left: coordinates.x * 100,
        top: coordinates.y * 100,
      }}
      suppressHydrationWarning
    />
  );
}
