import React from "react";

const useInterval = (callback: Function, delay: number) => {
  const savedCallback: { current: Function } = React.useRef();

  React.useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  React.useEffect(() => {
    const handler = (...args: []) => {
      return savedCallback.current(...args);
    };

    if (delay !== null) {
      const id = setInterval(handler, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};

export default useInterval;
