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

    const isValid = (x: number, y: number): boolean => x >= 0 && y >= 0 && x < rows && y < cols;

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

export function countXmasPatterns(grid: string[][]): number {
    const rows = grid.length;
    const cols = grid[0]?.length || 0;
    let count = 0;

    const isValid = (x: number, y: number): boolean =>
        x >= 0 && y >= 0 && x < rows && y < cols;

    const sequences = ['MAS', 'SAM'];

    const diagonals = [
        { dx: -1, dy: -1 },
        { dx: -1, dy: 1 }
    ];

    for (let x = 0; x < rows; x++) {
        for (let y = 0; y < cols; y++) {
            if (grid[x][y] !== 'A') continue;

            for (const seq1 of sequences) {
                for (const seq2 of sequences) {
                    let match = true;

                    for (let k = -1; k <= 1; k++) {
                        const nx = x + k * diagonals[0].dx;
                        const ny = y + k * diagonals[0].dy;
                        const seqIdx = k + 1;
                        if (!isValid(nx, ny) || grid[nx][ny] !== seq1[seqIdx]) {
                            match = false;
                            break;
                        }
                    }

                    if (!match) continue;

                    for (let k = -1; k <= 1; k++) {
                        const nx = x + k * diagonals[1].dx;
                        const ny = y + k * diagonals[1].dy;
                        const seqIdx = k + 1;
                        if (!isValid(nx, ny) || grid[nx][ny] !== seq2[seqIdx]) {
                            match = false;
                            break;
                        }
                    }

                    if (match) {
                        count++;
                    }
                }
            }
        }
    }

    return count;
}
