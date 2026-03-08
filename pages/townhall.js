import React from "react";
import Head from "next/head";
import Link from "next/link";
import Map from "components/map";
import MapDebug from "components/map-debug";
import NPC from "components/npc";
import Prize from "components/prize";
import GameContext from "components/game-context";
import SpeechBox from "components/speech-box";
import ClueJournal from "components/clue-journal";
import { getNpcReaction } from "components/constants";

import styles from "./room.module.css";

const MAP_SIZE = 6;

export default React.memo(function TownHall() {
  const [state, dispatch] = React.useContext(GameContext);
  const [devMode, setDevMode] = React.useState(false);
  const isClient = typeof window !== "undefined";
  React.useEffect(() => {
    if (isClient) {
      const urlParams = new URLSearchParams(window.location.search);
      setDevMode(urlParams.get("devMode") != null);
    }
  }, [isClient]);

  const [speech, setSpeech] = React.useState();
  const [doorSrc, setDoorSrc] = React.useState(`/static/door.png`);
  const [accusationStep, setAccusationStep] = React.useState(0);

  const allCluesFound =
    state.clues.footprints &&
    state.clues.witness &&
    state.clues.note &&
    state.clues.gossip &&
    state.clues.caveEvidence;

  const allM2CluesFound =
    state.mystery2.clues.shadows &&
    state.mystery2.clues.flickering &&
    state.mystery2.clues.crystal &&
    state.mystery2.clues.confession;

  const allM3CluesFound =
    state.mystery3?.clues.melody &&
    state.mystery3?.clues.instrument &&
    state.mystery3?.clues.wetTrail &&
    state.mystery3?.clues.underwater;

  function handleRoryClick() {
    // Evidence presentation mode
    if (state.presentingClue) {
      const reaction = getNpcReaction("rory", state.presentingClue);
      setSpeech(reaction);
      dispatch({ type: "CLEAR_PRESENTING" });
      return;
    }

    // Mystery 3 solved
    if (state.mystery3?.solved) {
      setSpeech("THREE mysteries solved!! u r officially the towns greatest detective!! i should make u a badge");
      return;
    }

    // Mystery 3 accusation
    if (state.mystery3?.active && allM3CluesFound) {
      setSpeech({
        text: "who has been stealin all the instruments??",
        choices: [
          {
            label: "bubbles the peng",
            onSelect: () => {
              setSpeech({
                text: "and what was she doin with them??",
                choices: [
                  {
                    label: "buildin an underwater concert",
                    onSelect: () => {
                      dispatch({ type: "SOLVE_MYSTERY_3" });
                      setSpeech("AN UNDERWATER CONCERT?? case closed!! bubbles has been stealin instruments to build a secret orchestra beneath the lake!! the music everyone heard was her rehearsals!! mystery solved!!");
                    },
                  },
                  {
                    label: "sellin them",
                    onSelect: () =>
                      setSpeech("hmm thats not quite right... think about the music comin from the lake"),
                  },
                  {
                    label: "destroyin them",
                    onSelect: () =>
                      setSpeech("hmm thats not quite right... think about the music comin from the lake"),
                  },
                ],
              });
            },
          },
          {
            label: "waddles the peng",
            onSelect: () =>
              setSpeech("waddles has been on her best behavior since the trophy incident... think about who spends all their time in the water"),
          },
          {
            label: "grumbles the lion",
            onSelect: () =>
              setSpeech("grumbles is a VICTIM here... his flute was stolen!! think about who was actin nervous about the instruments"),
          },
        ],
      });
      return;
    }

    // Mystery 3 active but not all clues
    if (state.mystery3?.active) {
      setSpeech("instruments keep vanishin!! the town band cant practice!! pls figure out whats goin on");
      return;
    }

    // Mystery 2 solved, trigger mystery 3
    if (state.mystery2.solved && !state.mystery3?.active) {
      dispatch({ type: "START_MYSTERY_3" });
      setSpeech("u solved the shadow mystery!! but now we got ANOTHER problem... instruments keep disappearin all over town. ppl hear strange music from the lake at nite. can u investigate??");
      return;
    }

    // Mystery 2 solved (already triggered m3)
    if (state.mystery2.solved) {
      setSpeech("any luck findin those missin instruments??");
      return;
    }

    // Mystery 2 accusation
    if (state.mystery2.active && allM2CluesFound) {
      setSpeech({
        text: "who is causing the shadows??",
        choices: [
          {
            label: "rex the lion",
            onSelect: () => {
              setSpeech({
                text: "how are they doin it??",
                choices: [
                  {
                    label: "an ancient crystal",
                    onSelect: () => {
                      dispatch({ type: "SOLVE_MYSTERY_2" });
                      setSpeech("case closed!! lets go talk to rex. he had an ancient crystal from the forest that was projectin shadows when the moonlight hit it!! mystery solved!!");
                    },
                  },
                  {
                    label: "a magic spell",
                    onSelect: () =>
                      setSpeech("hmm thats not quite right... think about what u found in the forest"),
                  },
                  {
                    label: "a flashlight",
                    onSelect: () =>
                      setSpeech("hmm thats not quite right... think about what u found in the forest"),
                  },
                ],
              });
            },
          },
          {
            label: "waddles the peng",
            onSelect: () =>
              setSpeech("hmm the evidence doesnt point to waddles this time... think about who was actin suspicious about the shadows"),
          },
          {
            label: "fern the sprite",
            onSelect: () =>
              setSpeech("fern loves the forest... she wouldnt do somethin like this. think about who was nervous when u showed them evidence"),
          },
        ],
      });
      return;
    }

    // Mystery 2 active but not all clues
    if (state.mystery2.active) {
      setSpeech("any leads on the shadow situation?? ppl are gettin real nervous...");
      return;
    }

    // Mystery 1 solved, trigger mystery 2
    if (state.solved && !state.mystery2.active) {
      dispatch({ type: "START_MYSTERY_2" });
      setSpeech("glad thats sorted... but somthin else is goin on. ppl keep seein weird shadows around town at nite. can u look into it??");
      return;
    }

    if (allCluesFound) {
      setAccusationStep(1);
      setSpeech({
        text: "u found all the clues!! so... who took the trophy and where did they hide it??",
        choices: [
          {
            label: "it was grumbles the lion",
            onSelect: () =>
              setSpeech("hmm that doesnt add up with the evidence... think about those webbed footprints and who was acting suspicious"),
          },
          {
            label: "it was waddles the peng",
            onSelect: () => {
              setAccusationStep(2);
              setSpeech({
                text: "waddles?! do u have proof?? why would she do it??",
                choices: [
                  {
                    label: "she thinks pengs built the trophy first",
                    onSelect: () => {
                      setAccusationStep(3);
                      setSpeech({
                        text: "ok thats a motive... and where did she hide it??",
                        choices: [
                          {
                            label: "in the pond",
                            onSelect: () =>
                              setSpeech("the evidence points somewhere else... think about what puddle said"),
                          },
                          {
                            label: "in the cave behind the waterfall",
                            onSelect: () => {
                              dispatch({ type: "SOLVE_MYSTERY" });
                              setAccusationStep(0);
                              setSpeech("THE CAVE!! of course!! case closed!! waddles hid the trophy in the cave behind the waterfall!! i cant believe it!!");
                            },
                          },
                          {
                            label: "in the library",
                            onSelect: () =>
                              setSpeech("the evidence points somewhere else... think about what puddle said"),
                          },
                        ],
                      });
                    },
                  },
                  {
                    label: "she was hungry",
                    onSelect: () =>
                      setSpeech("that doesnt match the note u found..."),
                  },
                  {
                    label: "she was bored",
                    onSelect: () =>
                      setSpeech("that doesnt match the note u found..."),
                  },
                ],
              });
            },
          },
          {
            label: "it was bubbles the peng",
            onSelect: () =>
              setSpeech("hmm that doesnt add up with the evidence... think about those webbed footprints and who was acting suspicious"),
          },
        ],
      });
    } else {
      setSpeech("the golden trophy is GONE!! someone stole it!! pls help us find who did it");
    }
  }

  function handlePedestalClick() {
    if (!state.clues.footprints) {
      dispatch({ type: "DISCOVER_CLUE", payload: "footprints" });
    }
    setSpeech("theres muddy footprints here... they look like lil webbed feet");
  }

  return (
    <div className={styles.mapContainer}>
      <Head>
        <title>Tiny Mystery Club - Town Hall</title>
        <meta property="og:title" content="Tiny Mystery Club - Town Hall" />
        <meta name="description" content="A React RPG." />
        <style>{`body {background-color: rgba(37, 35, 39, 1)}`}</style>
      </Head>

      <ClueJournal />

      <Link href="/">
        <img
          onMouseEnter={() => setDoorSrc(`/static/wall-door-open.png`)}
          onMouseLeave={() => setDoorSrc(`/static/door.png`)}
          src={doorSrc}
          style={{
            height: 100,
            left: 0,
            position: "absolute",
            top: 0,
            width: 100,
          }}
        />
      </Link>

      {/* Walls */}
      <img
        src={`/static/wall.png`}
        style={{ height: 100, left: 100, position: "absolute", top: 0, width: 100 }}
      />
      <img
        src={`/static/wall-picture.png`}
        style={{ height: 100, left: 200, position: "absolute", top: 0, width: 100 }}
      />
      <img
        src={`/static/wall.png`}
        style={{ height: 100, left: 300, position: "absolute", top: 0, width: 100 }}
      />
      <img
        src={`/static/wall.png`}
        style={{ height: 100, left: 400, position: "absolute", top: 0, width: 100 }}
      />
      <img
        src={`/static/wall.png`}
        style={{ height: 100, left: 500, position: "absolute", top: 0, width: 100 }}
      />

      {/* Pedestal spot with evidence sprites */}
      <div
        onClick={handlePedestalClick}
        style={{
          position: "absolute",
          left: 100,
          top: 200,
          width: 100,
          height: 100,
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src="/static/evidence-footprints.svg"
          style={{
            width: 60,
            height: 60,
            imageRendering: "pixelated",
          }}
          alt="muddy footprints"
        />
      </div>

      {/* Pedestal where trophy was */}
      <div
        onClick={handlePedestalClick}
        style={{
          position: "absolute",
          left: 200,
          top: 200,
          width: 100,
          height: 100,
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src="/static/evidence-pedestal.svg"
          style={{
            width: 60,
            height: 60,
            imageRendering: "pixelated",
          }}
          alt="empty pedestal"
        />
      </div>

      {/* Mayor Rory */}
      <NPC
        devMode={devMode}
        mapSize={MAP_SIZE}
        name="Mayor Rory"
        stationary
        onClick={handleRoryClick}
        spawn={{ x: 3, y: 1 }}
        spriteType="sprite"
      />

      <Prize />

      {devMode ? <MapDebug mapSize={MAP_SIZE} /> : null}
      <Map cypressAttr="townhall-page" devMode={devMode} interior mapSize={MAP_SIZE} />

      <SpeechBox speech={speech} onClose={() => setSpeech("")} />
    </div>
  );
});
