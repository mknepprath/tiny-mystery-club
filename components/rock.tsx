import React from "react";

import styles from "./rock.module.css";

interface Props {
  spawn: MapCoordinates;
  variant: number;
}

export default function Rock(props: Props) {
  return (
    <img
      className={styles.rock}
      src={`/static/rock${props.variant || 0}.png`}
      style={{
        left: props.spawn.x * 100,
        top: props.spawn.y * 100,
      }}
    />
  );
}
