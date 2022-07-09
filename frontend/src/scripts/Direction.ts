export type Direction = [drow: number, dcol: number];

// (row:0, col:0) is top left
export const directions: { [key: string]: Direction } = {
  UP: [-1, 0],
  DOWN: [1, 0],
  LEFT: [0, -1],
  RIGHT: [0, 1]
};

