import {Direction} from "../types/data";

export const XMAS = "XMAS";

export const directions: Direction[] = [
    { name: 'topLeft', dx: -1, dy: -1 },
    { name: 'topRight', dx: -1, dy: 1 },
    { name: 'bottomLeft', dx: 1, dy: -1 },
    { name: 'bottomRight', dx: 1, dy: 1 }
];
