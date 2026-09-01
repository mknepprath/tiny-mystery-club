import React from "react";

import styles from "./tree.module.css";

interface Props {
  spawn: MapCoordinates;
}

// The spawn coordinates are the tree's stump, which blocks its tile. The canopy
// sits on the tile above and renders over characters so they can walk behind it.
export default function Tree(props: Props) {
  return (
    <>
      <img
        className={styles.canopy}
        src="/static/tree-canopy.svg"
        style={{
          left: props.spawn.x * 100,
          top: (props.spawn.y - 1) * 100,
        }}
      />
      <img
        className={styles.stump}
        src="/static/tree-stump.svg"
        style={{
          left: props.spawn.x * 100,
          top: props.spawn.y * 100,
        }}
      />
    </>
  );
}
