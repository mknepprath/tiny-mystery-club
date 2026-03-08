import { useEffect, useRef, useCallback } from "react";

const EDGE_ZONE = 100; // pixels from edge that triggers scrolling
const SCROLL_SPEED = 14; // pixels per frame
const KEYS_SPEED = 32; // pixels per frame for keyboard

export default function useMapScroll() {
  const scrolling = useRef({ x: 0, y: 0 });
  const keysHeld = useRef(new Set());
  const frameRef = useRef(null);

  const tick = useCallback(() => {
    let dx = scrolling.current.x;
    let dy = scrolling.current.y;

    // Keyboard overrides edge scrolling
    const keys = keysHeld.current;
    if (keys.has("ArrowUp") || keys.has("w")) dy = -KEYS_SPEED;
    if (keys.has("ArrowDown") || keys.has("s")) dy = KEYS_SPEED;
    if (keys.has("ArrowLeft") || keys.has("a")) dx = -KEYS_SPEED;
    if (keys.has("ArrowRight") || keys.has("d")) dx = KEYS_SPEED;

    if (dx !== 0 || dy !== 0) {
      window.scrollBy(dx, dy);
    }

    frameRef.current = requestAnimationFrame(tick);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;

      let x = 0;
      let y = 0;

      if (clientX < EDGE_ZONE) {
        x = -SCROLL_SPEED * (1 - clientX / EDGE_ZONE);
      } else if (clientX > innerWidth - EDGE_ZONE) {
        x = SCROLL_SPEED * (1 - (innerWidth - clientX) / EDGE_ZONE);
      }

      if (clientY < EDGE_ZONE) {
        y = -SCROLL_SPEED * (1 - clientY / EDGE_ZONE);
      } else if (clientY > innerHeight - EDGE_ZONE) {
        y = SCROLL_SPEED * (1 - (innerHeight - clientY) / EDGE_ZONE);
      }

      scrolling.current = { x, y };
    };

    const handleMouseLeave = () => {
      scrolling.current = { x: 0, y: 0 };
    };

    const handleKeyDown = (e) => {
      const key = e.key.toLowerCase();
      if (["arrowup", "arrowdown", "arrowleft", "arrowright", "w", "a", "s", "d"].includes(key)) {
        e.preventDefault();
        keysHeld.current.add(key);
      }
    };

    const handleKeyUp = (e) => {
      keysHeld.current.delete(e.key.toLowerCase());
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);

    frameRef.current = requestAnimationFrame(tick);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
      cancelAnimationFrame(frameRef.current);
    };
  }, [tick]);
}
