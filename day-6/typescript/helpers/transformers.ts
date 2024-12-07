import {Direction, Position} from "../types/data";


export function parseData(data: string[]): string[][] {
    return data.map((line) => line.trim().split(""));
}

function isBlocked(location: string): boolean {
    return location === "#";
}

function isOutOfBounds(position: Position, map: string[][]): boolean {
    return (
        position.x < 0 ||
        position.x >= map.length ||
        position.y < 0 ||
        position.y >= map[0].length
    );
}

function turnRight(direction: Direction): Direction {
    switch (direction) {
        case "UP": return "RIGHT";
        case "RIGHT": return "DOWN";
        case "DOWN": return "LEFT";
        case "LEFT": return "UP";
    }
}

function moveGuard(position: Position, direction: Direction): Position {
    switch (direction) {
        case "UP": return { x: position.x - 1, y: position.y };
        case "DOWN": return { x: position.x + 1, y: position.y };
        case "LEFT": return { x: position.x, y: position.y - 1 };
        case "RIGHT": return { x: position.x, y: position.y + 1 };
    }
}

function findGuard(data: string[][]): Position | undefined {
    for (let x = 0; x < data.length; x++) {
        for (let y = 0; y < data[x].length; y++) {
            if (data[x][y] === "^") {
                return { x, y };
            }
        }
    }
    return undefined;
}

export function calculatePathCount(data: string[][]): number {
    const initialGuardPosition = findGuard(data);

    if (!initialGuardPosition) {
        throw new Error("Guard's initial position not found.");
    }

    const visitedPositions = new Set<string>();
    let direction: Direction = "UP";
    let currentPosition: Position = initialGuardPosition;

    visitedPositions.add(`${currentPosition.x},${currentPosition.y}`);

    while (true) {
        const forwardPosition = moveGuard(currentPosition, direction);

        if (isOutOfBounds(forwardPosition, data)) {
            break;
        }

        if (isBlocked(data[forwardPosition.x][forwardPosition.y])) {
            direction = turnRight(direction);
            continue;
        }

        currentPosition = forwardPosition;
        visitedPositions.add(`${currentPosition.x},${currentPosition.y}`);
    }

    return visitedPositions.size;
}
