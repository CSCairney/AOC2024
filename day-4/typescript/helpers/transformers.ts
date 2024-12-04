import {directions} from "../constants";

export function parseData(data: string[]): string[][] {
    const parsedData: string[][] = [];

    data.forEach((value) => {
        parsedData.push(value.trim().split(''));
    });

    return parsedData;
}


export function findChristmasOrWeAllDie(grid: string[][], word: string): number {
    const rows = grid.length;
    const cols = grid[0]?.length || 0;
    let count = 0;

    const isValid = (x: number, y: number): boolean =>
        x >= 0 && y >= 0 && x < rows && y < cols;

    const searchFrom = (x: number, y: number): void => {
        for (const { dx, dy } of directions) {
            let nx = x, ny = y;
            let found = true;

            for (let i = 0; i < word.length; i++) {
                if (!isValid(nx, ny) || grid[nx][ny] !== word[i]) {
                    found = false;
                    break;
                }
                nx += dx;
                ny += dy;
            }

            if (found) count++;
        }
    };

    for (let x = 0; x < rows; x++) {
        for (let y = 0; y < cols; y++) {
            if (grid[x][y] === word[0]) {
                searchFrom(x, y);
            }
        }
    }

    return count;
}
