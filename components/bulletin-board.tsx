import React from "react";

import styles from "./bulletin-board.module.css";

interface Props {
  spawn: MapCoordinates;
}

export default function BulletinBoard(props: Props) {
  return (
    <img
      className={styles.bulletinBoard}
      src="/static/bulletin-board.svg"
      alt="bulletin board"
      style={{
        left: props.spawn.x * 100,
        top: props.spawn.y * 100,
      }}
    />
  );
}
