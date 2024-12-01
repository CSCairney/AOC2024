import {InputPair} from "../types/input";
import {devMode} from "../constants/dev";

export const valueSort = (data: InputPair[]): InputPair[] => {
    const sortedFirst: number[] = [];
    const sortedSecond: number[] = [];

    data.forEach((value) => {
        sortedFirst.push(value.valueOne);
        sortedSecond.push(value.valueTwo);
    });

    sortedFirst.sort((a, b) => a - b);
    sortedSecond.sort((a, b) => a - b);

    if (devMode) {
        console.log("Sorted First List: ", sortedFirst)
        console.log("Sorted Second List: ", sortedSecond)
    }

    const sorted: InputPair[] = sortedFirst.map((value, index) => ({
        valueOne: value,
        valueTwo: sortedSecond[index],
    }));

    if (devMode) {
        console.log("Value Sort: ", sorted)
    }

    return sorted;
};

export const count = (data: InputPair[], target: number): number => {
    const occurrence = data.filter((value) => value.valueTwo === target).length;

    if (devMode) {
        console.log("Target: " + target + ", occurrence: " + occurrence);
    }
    return occurrence;
};


