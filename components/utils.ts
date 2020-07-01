/**
 * Convert coordinate values to index.
 * @param {Object} coords - The coordinates of the tile.
 * @param {number} coords.x - The left coordinate of the tile.
 * @param {number} coords.y - The top coordinate of the tile.
 * @param {number} size - The size of the current map.
 * @returns {number} - The index of the tile.
 */
export const coordsToIndex = (coords: MapCoordinates, size: number) =>
  coords.y * size + coords.x;

/**
 * Find an unblocked map tile.
 * @param {Object[]} map - The map matrix (array of arrays).
 * @returns {MapCoordinates} - The coordinates of the unblocked position.
 */
export const findUnblockedTile = (
  map: Array<Array<boolean>>
): MapCoordinates => {
  let spawn: MapCoordinates = { x: 0, y: 0 };

  do {
    spawn = randomSpawn(map.length);
  } while (!map[spawn.y][spawn.x]);

  return spawn;
};

/**
 * Generate a map matrix for tracking tiles.
 * @param {number} mapSize - The size of the map.
 * @returns {Object[]} - The map matrix (array of arrays).
 */
export const generateBooleanMap = (mapSize: number) => {
  let row = [];
  let map = [];

  for (let i = 0; i < mapSize; i++) {
    row[i] = true;
  }

  for (let i = 0; i < mapSize; i++) {
    map[i] = [...row];
  }

  return map;
};

/**
 * Converts index values to coordinates.
 * @param {number} index - The index of the tile.
 * @param {number} size - The size of the current map.
 * @returns {Object} - The coordinates of the tile.
 */
export const indexToCoords = (index: number, size: number) => ({
  x: index % size,
  y: Math.floor(index / size),
});

/**
 * Find a random map tile.
 * @param {number} mapSize - The size of the map.
 * @returns {MapCoordinates} - Random coordinates within the current map.
 */
export const randomSpawn = (mapSize: number): MapCoordinates => ({
  x: Math.floor(Math.random() * mapSize),
  y: Math.floor(Math.random() * mapSize),
});

/**
 * Shuffle an array.
 * @param {Object[]} array - An array to shuffle.
 * @returns {Object[]} - The shuffled array.
 */
export const shuffle = (array: []) => {
  let currentIndex: number = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};
