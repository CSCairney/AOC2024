import {devMode} from "../constants/dev";

export function isConsistent(arr: number[]): boolean {
    const isIncreasing = arr.every((value, index) => index === 0 || value > arr[index - 1]);
    const isDecreasing = arr.every((value, index) => index === 0 || value < arr[index - 1]);

    devMode && console.log("Increasing: " + isIncreasing + ", Decreasing: " + isDecreasing);
    return isIncreasing || isDecreasing;
}
