import {ValuePair} from "../types/data";

export const parseData = (data?: IterableIterator<RegExpExecArray>): ValuePair[] => {
    if (!data) return [];

    let isEnabled = true;
    const results: ValuePair[] = [];

    for (const match of data) {
        const [instruction, num1, num2] = match;

        if (instruction === "do()") {
            isEnabled = true;
        } else if (instruction === "don't()") {
            isEnabled = false;
        } else if (instruction.startsWith("mul") && isEnabled) {
            results.push({
                valueOne: parseInt(num1, 10),
                valueTwo: parseInt(num2, 10),
            });
        }
    }

    return results;
};


