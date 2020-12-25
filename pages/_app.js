import React from "react";
import GameContext from "components/game-context";
import { generateBooleanMap } from "components/utils";

import "../css/global.css";

const ADD_POINT = "ADD_POINT";
const GENERATE_MAP = "GENERATE_MAP";
const TOGGLE_TILES = "TOGGLE_TILES";

export const INITIAL_MAP_SIZE = 59;

const initialState = {
  maps: {
    "/": generateBooleanMap(INITIAL_MAP_SIZE),
    "/room": generateBooleanMap(4),
  },
  points: 0,
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
    default:
      return state;
  }
};

export const Game = React.createContext();

function MyApp({ Component, pageProps }) {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <GameContext.Provider value={[state, dispatch]}>
      <Component {...pageProps} />
    </GameContext.Provider>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;
