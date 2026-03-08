import React from "react";
import styles from "./speech-box.module.css";

export default function SpeechBox({ speech, onClose }) {
  if (!speech) return null;

  const isChoiceDialogue = typeof speech === "object" && speech.choices;

  return (
    <>
      <div
        className={styles.overlay}
        onClick={isChoiceDialogue ? undefined : onClose}
      />
      <div className={styles.speech}>
        <div className={styles.contents}>
          {isChoiceDialogue ? speech.text : speech}
          {isChoiceDialogue && (
            <div className={styles.choices}>
              {speech.choices.map((choice, i) => (
                <button
                  key={i}
                  className={styles.choiceButton}
                  onClick={choice.onSelect}
                >
                  {choice.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
