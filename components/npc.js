import React from "react";
import { useRouter } from "next/router";

import GameContext from "./game-context";
import useInterval from "../hooks/useInterval";
import { FACING, MOVE } from "./constants";
import { shuffle } from "./utils";

import styles from "./npc.module.css";

export default function NPC(props) {
  const [state, dispatch] = React.useContext(GameContext);

  const router = useRouter();

  const [clicked, setClicked] = React.useState(false);
  const [hovered, setHovered] = React.useState(false);

  function onClickNPCHandler() {
    setClicked((clicked) => !clicked);
    props.onClick();
  }

  const [direction, setDirection] = React.useState(Object.keys(FACING)[0]);
  const [coordinates, setCoordinates] = React.useState(props.spawn);
  const [walking, setWalking] = React.useState(false);

  React.useEffect(() => {
    setDirection(shuffle(Object.keys(FACING))[0]);
    dispatch({
      type: "TOGGLE_TILES",
      coordinates: props.spawn,
      mapName: router.pathname,
      unblocked: false,
    });
  }, []);

  useInterval(() => {
    // Don't random walk if stationary
    if (props.stationary) return;

    const nextCoordinates = {
      x: coordinates.x,
      y: coordinates.y,
    };

    const moveType = Object.values(MOVE)[Math.floor(Math.random() * 5)];
    if (moveType != null) setDirection(moveType);

    switch (moveType) {
      case MOVE.DOWN:
        nextCoordinates.y =
          coordinates.y + 1 < props.mapSize ? coordinates.y + 1 : coordinates.y;
        break;
      case MOVE.LEFT:
        nextCoordinates.x =
          coordinates.x > 0 ? coordinates.x - 1 : coordinates.x;
        break;
      case MOVE.RIGHT:
        nextCoordinates.x =
          coordinates.x + 1 < props.mapSize ? coordinates.x + 1 : coordinates.x;
        break;
      case MOVE.UP:
        nextCoordinates.y =
          coordinates.y > 0 ? coordinates.y - 1 : coordinates.y;
        break;
      default:
        break;
    }

    if (state.maps[router.pathname][nextCoordinates.y][nextCoordinates.x]) {
      setWalking(true);
      dispatch({
        type: "TOGGLE_TILES",
        coordinates,
        mapName: router.pathname,
        unblocked: true,
      });
      setCoordinates(nextCoordinates);
      dispatch({
        type: "TOGGLE_TILES",
        coordinates: nextCoordinates,
        mapName: router.pathname,
        unblocked: false,
      });
    } else {
      setWalking(false);
    }
  }, 1000);

  return (
    <div
      style={{
        position: "absolute",
        left: coordinates.x * 100,
        top: coordinates.y * 100,
        width: 100,
        height: 100,
        transition: "top 1s linear, left 1s linear",
        zIndex: 5,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {props.name && hovered && (
        <div className={styles.nameLabel}>{props.name}</div>
      )}
      <img
        className={styles.npc}
        onClick={onClickNPCHandler}
        src={`/static/${props.spriteType}-${FACING[direction]}${
          walking ? "-walk" : ""
        }.gif`}
        style={{
          boxShadow: clicked && props.devMode ? "0 0 16px red" : null,
          [`border${direction}`]: props.devMode ? "4px solid red" : "none",
        }}
        suppressHydrationWarning
      />
    </div>
  );
}
