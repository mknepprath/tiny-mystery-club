export const FACING = {
  Bottom: "down",
  Left: "left",
  Right: "right",
  Top: "up",
};

export const MOVE = {
  DOWN: "Bottom",
  LEFT: "Left",
  RIGHT: "Right",
  UP: "Top",
};

export const NPCS = [
  { spawn: { y: 8, x: 32 }, spriteType: "lion" },
  { spawn: { y: 20, x: 20 }, spriteType: "peng" },
  { spawn: { y: 40, x: 5 }, spriteType: "sprite" },
  // { spawn: { y: 21, x: 21 }, spriteType: "lion" },
  // { spawn: { y: 22, x: 19 }, spriteType: "peng" },
  // { spawn: { y: 22, x: 20 }, spriteType: "sprite" },
  // { spawn: { y: 22, x: 21 }, spriteType: "peng" },
];

export const ROCKS = [
  { spawn: { y: 19, x: 19 }, variant: 2 },
  { spawn: { y: 19, x: 20 }, variant: 1 },
  { spawn: { y: 19, x: 21 }, variant: 1 },
  { spawn: { y: 20, x: 18 }, variant: 1 },
  { spawn: { y: 20, x: 22 }, variant: 2 },
  { spawn: { y: 21, x: 19 }, variant: 1 },
  { spawn: { y: 21, x: 20 }, variant: 2 },
  { spawn: { y: 21, x: 22 }, variant: 2 },
  { spawn: { y: 22, x: 22 }, variant: 2 },
  { spawn: { y: 23, x: 20 }, variant: 1 },
  { spawn: { y: 23, x: 21 }, variant: 1 },
  { spawn: { y: 38, x: 38 }, variant: 2 },
];

export const WATER = [
  { spawn: { x: 15, y: 12 } },
  { spawn: { x: 15, y: 13 } },
  { spawn: { x: 16, y: 13 } },
  { spawn: { x: 17, y: 13 } },
  { spawn: { x: 14, y: 14 } },
  { spawn: { x: 15, y: 14 } },
  { spawn: { x: 16, y: 14 } },
];
