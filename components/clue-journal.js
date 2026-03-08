import React from "react";
import GameContext from "./game-context";
import styles from "./clue-journal.module.css";

const CLUE_DESCRIPTIONS = {
  footprints: "muddy webbed footprints near the trophy pedestal",
  witness: "marlo saw somone waddling from town hall toward the lake",
  note: "a torn note about pengs building the trophy first",
  gossip: "puddle says waddles keeps goin behind the waterfall",
  caveEvidence: "golden sparkles found in the cave",
};

const CLUE_DESCRIPTIONS_M2 = {
  shadows: "pip saw weird shadows movin from the forest direction",
  flickering: "flickerin lights and scorch marks in the library",
  crystal: "a warm crystal shard found in the forest",
  confession: "rex panicked when shown the crystal evidence",
};

const CLUE_DESCRIPTIONS_M3 = {
  melody: "fern hears music comin from the lake at nite",
  instrument: "a broken flute found near the rocky hills",
  wetTrail: "wet trail leadin from the village to the lake",
  underwater: "strange sounds comin from beneath the lake",
};

const CLUE_DESCRIPTIONS_M4 = {
  frozenFlowers: "flowers near the village r frozen solid in summer",
  coldTrail: "a trail of ice on the path between lake and village",
  amulet: "a glowin frost amulet found at the lake shore",
  puddleSlip: "puddle panicked when shown the amulet",
};

const MYSTERIES = [
  {
    key: "m1",
    title: "The Missing Trophy",
    clueDescriptions: CLUE_DESCRIPTIONS,
    getClues: (state) => state.clues,
    isSolved: (state) => state.solved,
    isActive: () => true,
    total: 5,
  },
  {
    key: "m2",
    title: "The Whispering Shadows",
    clueDescriptions: CLUE_DESCRIPTIONS_M2,
    getClues: (state) => state.mystery2.clues,
    isSolved: (state) => state.mystery2.solved,
    isActive: (state) => state.mystery2.active || state.mystery2.solved,
    total: 4,
  },
  {
    key: "m3",
    title: "The Vanishing Music",
    clueDescriptions: CLUE_DESCRIPTIONS_M3,
    getClues: (state) => state.mystery3.clues,
    isSolved: (state) => state.mystery3.solved,
    isActive: (state) => state.mystery3.active || state.mystery3.solved,
    total: 4,
  },
  {
    key: "m4",
    title: "The Frozen Garden",
    clueDescriptions: CLUE_DESCRIPTIONS_M4,
    getClues: (state) => state.mystery4.clues,
    isSolved: (state) => state.mystery4.solved,
    isActive: (state) => state.mystery4.active || state.mystery4.solved,
    total: 4,
  },
];

function getCurrentMysteryIndex(state) {
  if (state.mystery4?.active && !state.mystery4?.solved) return 3;
  if (state.mystery3?.active && !state.mystery3?.solved) return 2;
  if (state.mystery2.active && !state.mystery2.solved) return 1;
  return 0;
}

export default function ClueJournal() {
  const [state, dispatch] = React.useContext(GameContext);
  const [open, setOpen] = React.useState(false);

  function handlePresent(clueKey) {
    dispatch({ type: "SET_PRESENTING", payload: clueKey });
    setOpen(false);
  }

  const allClueDescriptions = { ...CLUE_DESCRIPTIONS, ...CLUE_DESCRIPTIONS_M2, ...CLUE_DESCRIPTIONS_M3, ...CLUE_DESCRIPTIONS_M4 };

  // Determine current mystery for badge
  const currentIdx = getCurrentMysteryIndex(state);
  const currentMystery = MYSTERIES[currentIdx];
  const currentClues = currentMystery.getClues(state);
  const currentClueCount = Object.values(currentClues).filter(Boolean).length;

  let badgeText;
  if (state.mystery4?.solved) {
    badgeText = "All Cases Solved!";
  } else if (state.mystery4?.active) {
    badgeText = `Case 4: ${currentClueCount}/${currentMystery.total}`;
  } else if (state.mystery3?.solved) {
    badgeText = "Cases 1-3 Solved!";
  } else if (state.mystery3?.active) {
    badgeText = `Case 3: ${currentClueCount}/${currentMystery.total}`;
  } else if (state.mystery2.active && !state.mystery2.solved) {
    badgeText = `Case 2: ${currentClueCount}/${currentMystery.total}`;
  } else if (state.mystery2.solved) {
    badgeText = "Cases 1&2 Solved!";
  } else {
    badgeText = `Clues: ${currentClueCount}/${currentMystery.total}`;
  }

  // Sort mysteries so current/active is first
  const activeMysteries = MYSTERIES.filter((m) => m.isActive(state));
  const sorted = [...activeMysteries].sort((a, b) => {
    const aIdx = MYSTERIES.indexOf(a);
    const bIdx = MYSTERIES.indexOf(b);
    const aIsCurrent = aIdx === currentIdx;
    const bIsCurrent = bIdx === currentIdx;
    if (aIsCurrent) return -1;
    if (bIsCurrent) return 1;
    return bIdx - aIdx; // more recent mysteries next
  });

  return (
    <>
      <button className={styles.badge} onClick={() => setOpen(true)} title="click to open clue journal">
        {badgeText}
        {!open && currentClueCount === 0 && !state.solved && !state.mystery2.active && (
          <span className={styles.badgeHint}>tap here</span>
        )}
      </button>

      {state.presentingClue && !open && (
        <div className={styles.presentingBanner}>
          showing: {allClueDescriptions[state.presentingClue]} — click on someone to show them this clue...
          <button
            className={styles.cancelPresent}
            onClick={() => dispatch({ type: "CLEAR_PRESENTING" })}
          >
            cancel
          </button>
        </div>
      )}

      {open && (
        <>
          <div
            className={styles.modalOverlay}
            onClick={() => setOpen(false)}
          />
          <div className={styles.modal}>
            <div className={styles.modalContents}>
              {sorted.map((mystery, i) => {
                const clues = mystery.getClues(state);
                const solved = mystery.isSolved(state);
                const isCurrent = MYSTERIES.indexOf(mystery) === currentIdx;
                const mysteryNum = MYSTERIES.indexOf(mystery) + 1;

                return (
                  <div key={mystery.key}>
                    {i > 0 && <hr className={styles.divider} />}
                    <p className={styles.title}>
                      {activeMysteries.length > 1
                        ? `Mystery ${mysteryNum}: ${solved ? "Solved" : mystery.title}`
                        : "clue journal"}
                      {isCurrent && !solved && activeMysteries.length > 1 && (
                        <span className={styles.currentTag}> (current)</span>
                      )}
                    </p>
                    <ul className={styles.clueList}>
                      {Object.entries(mystery.clueDescriptions).map(([key, desc]) => (
                        <li
                          key={key}
                          className={`${styles.clueItem} ${
                            !clues[key] ? styles.undiscovered : ""
                          } ${solved ? styles.solvedClue : ""}`}
                        >
                          <span>{clues[key] ? `- ${desc}` : "- ???"}</span>
                          {clues[key] && !solved && (
                            <button
                              className={styles.showButton}
                              onClick={() => handlePresent(key)}
                            >
                              Show
                            </button>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      )}
    </>
  );
}
