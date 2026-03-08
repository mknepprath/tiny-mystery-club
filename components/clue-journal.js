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

export default function ClueJournal() {
  const [state, dispatch] = React.useContext(GameContext);
  const [open, setOpen] = React.useState(false);

  const clueCount = Object.values(state.clues).filter(Boolean).length;
  const m2ClueCount = Object.values(state.mystery2.clues).filter(Boolean).length;

  function handlePresent(clueKey) {
    dispatch({ type: "SET_PRESENTING", payload: clueKey });
    setOpen(false);
  }

  // Determine which clue description to show in the presenting banner
  const allClueDescriptions = { ...CLUE_DESCRIPTIONS, ...CLUE_DESCRIPTIONS_M2 };

  // Determine badge text
  let badgeText;
  if (state.mystery2.active || state.mystery2.solved) {
    badgeText = state.mystery2.solved
      ? "All Cases Solved!"
      : `Case 2: ${m2ClueCount}/4`;
  } else {
    badgeText = `Clues: ${clueCount}/5`;
  }

  return (
    <>
      <button className={styles.badge} onClick={() => setOpen(true)} title="click to open clue journal">
        {badgeText}
        {!open && clueCount === 0 && !state.mystery2.active && (
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
              {/* Mystery 1 */}
              <p className={styles.title}>
                {state.mystery2.active || state.mystery2.solved
                  ? `Mystery 1: ${state.solved ? "Solved" : "The Missing Trophy"}`
                  : "clue journal"}
              </p>
              <ul className={styles.clueList}>
                {Object.entries(CLUE_DESCRIPTIONS).map(([key, desc]) => (
                  <li
                    key={key}
                    className={`${styles.clueItem} ${
                      !state.clues[key] ? styles.undiscovered : ""
                    } ${state.solved ? styles.solvedClue : ""}`}
                  >
                    <span>{state.clues[key] ? `- ${desc}` : "- ???"}</span>
                    {state.clues[key] && !state.solved && (
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

              {/* Mystery 2 */}
              {(state.mystery2.active || state.mystery2.solved) && (
                <>
                  <p className={styles.title} style={{ marginTop: 14 }}>
                    Mystery 2: {state.mystery2.solved ? "Solved" : "The Whispering Shadows"}
                  </p>
                  <ul className={styles.clueList}>
                    {Object.entries(CLUE_DESCRIPTIONS_M2).map(([key, desc]) => (
                      <li
                        key={key}
                        className={`${styles.clueItem} ${
                          !state.mystery2.clues[key] ? styles.undiscovered : ""
                        } ${state.mystery2.solved ? styles.solvedClue : ""}`}
                      >
                        <span>{state.mystery2.clues[key] ? `- ${desc}` : "- ???"}</span>
                        {state.mystery2.clues[key] && !state.mystery2.solved && (
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
                </>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
}
