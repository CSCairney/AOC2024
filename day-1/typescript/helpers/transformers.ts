import {InputPair} from "../types/input";
import {devMode} from "../constants/dev";

export const parseData = (data?: string): InputPair[] | undefined => {
    if (data) {
        const parsedData = data
            .trim()
            .split("\n")
            .map((line) => {
                const [first, second] = line.trim().split(/\s+/);
                return { valueOne: parseInt(first, 10), valueTwo: parseInt(second, 10) };
            });

        if (devMode) {
            console.log("parsed data: ", parsedData);
        }

        return parsedData;
    }
};
