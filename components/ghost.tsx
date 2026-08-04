import React from "react";

import styles from "./ghost.module.css";

interface Props {
  spawn: MapCoordinates;
}

export default function Ghost(props: Props) {
  return (
    <img
      className={styles.ghost}
      data-cy="ghost"
      src="/static/ghost.svg"
      alt="a ghost"
      style={{
        left: props.spawn.x * 100,
        top: props.spawn.y * 100,
      }}
    />
  );
}
