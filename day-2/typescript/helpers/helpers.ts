export function increasing(arr: number[]): boolean {
    return arr.every((value, index) =>
        index === 0 || (value > arr[index - 1] && Math.abs(value - arr[index - 1]) <= 3))
}

export function decreasing(arr: number[]): boolean {
    return arr.every((value, index) =>
        index === 0 || (value < arr[index - 1] && Math.abs(value - arr[index - 1]) <= 3)
    );
}

export function lineConditionMet(arr: number[]): boolean {
    return arr.every((value, index) => {
        if (index === 0) return true;
        const difference = Math.abs(arr[index] - arr[index - 1]);
        return difference >= 1 && difference <= 3;
    });
}


export function isConsistent(arr: number[]): boolean {
    if (arr.length <= 1) return true;

    const isIncreasing = increasing(arr);
    const isDecreasing = decreasing(arr);

    return isIncreasing || isDecreasing;
}


export function whenUpdatedIsSafe(line: number[]): boolean {
    if (isConsistent(line)) return true;

    for (let i = 0; i < line.length; i++) {
        const updatedLine = line.filter((_, index) => index !== i);
        if (isConsistent(updatedLine)) return true;
    }

    return false;
}



