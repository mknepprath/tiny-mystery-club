import React from "react";
import GameContext from "components/game-context";
import { generateBooleanMap } from "components/utils";

import "../css/global.css";

const ADD_POINT = "ADD_POINT";
const GENERATE_MAP = "GENERATE_MAP";
const TOGGLE_TILES = "TOGGLE_TILES";
const DISCOVER_CLUE = "DISCOVER_CLUE";
const SOLVE_MYSTERY = "SOLVE_MYSTERY";
const SET_PRESENTING = "SET_PRESENTING";
const CLEAR_PRESENTING = "CLEAR_PRESENTING";
const START_MYSTERY_2 = "START_MYSTERY_2";
const DISCOVER_CLUE_2 = "DISCOVER_CLUE_2";
const SOLVE_MYSTERY_2 = "SOLVE_MYSTERY_2";
const START_MYSTERY_3 = "START_MYSTERY_3";
const DISCOVER_CLUE_3 = "DISCOVER_CLUE_3";
const SOLVE_MYSTERY_3 = "SOLVE_MYSTERY_3";

export const INITIAL_MAP_SIZE = 59;

const initialState = {
  maps: {
    "/": generateBooleanMap(INITIAL_MAP_SIZE),
    "/room": generateBooleanMap(4),
    "/townhall": generateBooleanMap(6),
    "/library": generateBooleanMap(5),
    "/cave": generateBooleanMap(5),
  },
  points: 0,
  clues: {
    footprints: false,
    witness: false,
    note: false,
    gossip: false,
    caveEvidence: false,
  },
  solved: false,
  presentingClue: null,
  mystery2: {
    active: false,
    clues: {
      shadows: false,
      flickering: false,
      crystal: false,
      confession: false,
    },
    solved: false,
  },
  mystery3: {
    active: false,
    clues: {
      melody: false,
      instrument: false,
      wetTrail: false,
      underwater: false,
    },
    solved: false,
  },
};

/* I should make a separate reducer for the non-iterable (setTimeout) stuff */
const reducer = (state, action) => {
  switch (action.type) {
    case GENERATE_MAP:
      return {
        ...state,
        maps: {
          ...state.maps,
          [action.mapName]: generateBooleanMap(action.mapSize),
        },
      };
    case TOGGLE_TILES:
      return {
        ...state,
        maps: {
          ...state.maps,
          [action.mapName]: state.maps[action.mapName].map((row, index) =>
            index !== action.coordinates.y
              ? row
              : row.map((tile, index) =>
                  index !== action.coordinates.x ? tile : action.unblocked
                )
          ),
        },
      };
    case ADD_POINT:
      return {
        ...state,
        points: state.points + 1,
      };
    case DISCOVER_CLUE:
      return {
        ...state,
        clues: {
          ...state.clues,
          [action.payload]: true,
        },
      };
    case SOLVE_MYSTERY:
      return {
        ...state,
        solved: true,
      };
    case SET_PRESENTING:
      return {
        ...state,
        presentingClue: action.payload,
      };
    case CLEAR_PRESENTING:
      return {
        ...state,
        presentingClue: null,
      };
    case START_MYSTERY_2:
      return {
        ...state,
        mystery2: {
          ...state.mystery2,
          active: true,
        },
      };
    case DISCOVER_CLUE_2:
      return {
        ...state,
        mystery2: {
          ...state.mystery2,
          clues: {
            ...state.mystery2.clues,
            [action.payload]: true,
          },
        },
      };
    case SOLVE_MYSTERY_2:
      return {
        ...state,
        mystery2: {
          ...state.mystery2,
          solved: true,
        },
      };
    case START_MYSTERY_3:
      return {
        ...state,
        mystery3: {
          ...state.mystery3,
          active: true,
        },
      };
    case DISCOVER_CLUE_3:
      return {
        ...state,
        mystery3: {
          ...state.mystery3,
          clues: {
            ...state.mystery3.clues,
            [action.payload]: true,
          },
        },
      };
    case SOLVE_MYSTERY_3:
      return {
        ...state,
        mystery3: {
          ...state.mystery3,
          solved: true,
        },
      };
    default:
      return state;
  }
};

export const Game = React.createContext();

function MyApp({ Component, pageProps }) {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  // Hydrate clues and solved from localStorage on mount
  React.useEffect(() => {
    try {
      const savedClues = localStorage.getItem("tmc_clues");
      const savedSolved = localStorage.getItem("tmc_solved");
      if (savedClues) {
        const clues = JSON.parse(savedClues);
        Object.keys(clues).forEach((key) => {
          if (clues[key]) {
            dispatch({ type: DISCOVER_CLUE, payload: key });
          }
        });
      }
      if (savedSolved === "true") {
        dispatch({ type: SOLVE_MYSTERY });
      }
      const savedMystery2 = localStorage.getItem("tmc_mystery2");
      if (savedMystery2) {
        const m2 = JSON.parse(savedMystery2);
        if (m2.active) {
          dispatch({ type: START_MYSTERY_2 });
        }
        Object.keys(m2.clues || {}).forEach((key) => {
          if (m2.clues[key]) {
            dispatch({ type: DISCOVER_CLUE_2, payload: key });
          }
        });
        if (m2.solved) {
          dispatch({ type: SOLVE_MYSTERY_2 });
        }
      }
      const savedMystery3 = localStorage.getItem("tmc_mystery3");
      if (savedMystery3) {
        const m3 = JSON.parse(savedMystery3);
        if (m3.active) {
          dispatch({ type: START_MYSTERY_3 });
        }
        Object.keys(m3.clues || {}).forEach((key) => {
          if (m3.clues[key]) {
            dispatch({ type: DISCOVER_CLUE_3, payload: key });
          }
        });
        if (m3.solved) {
          dispatch({ type: SOLVE_MYSTERY_3 });
        }
      }
    } catch (e) {
      // localStorage not available
    }
  }, []);

  // Persist clues and solved to localStorage
  React.useEffect(() => {
    try {
      localStorage.setItem("tmc_clues", JSON.stringify(state.clues));
      localStorage.setItem("tmc_solved", String(state.solved));
      localStorage.setItem("tmc_mystery2", JSON.stringify(state.mystery2));
      localStorage.setItem("tmc_mystery3", JSON.stringify(state.mystery3));
    } catch (e) {
      // localStorage not available
    }
  }, [state.clues, state.solved, state.mystery2, state.mystery3]);

  return (
    <GameContext.Provider value={[state, dispatch]}>
      <Component {...pageProps} />
    </GameContext.Provider>
  );
}

export default MyApp;
