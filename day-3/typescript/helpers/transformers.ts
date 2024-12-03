import { ValuePair } from "../types/data";

export const parseData = (data?: IterableIterator<RegExpExecArray>): ValuePair[] | undefined => {
    if (data) {
        const parsedData: ValuePair[] = [];
        for (const match of data) {
            const matchString = match[0];
            const values = matchString.match(/\d+/g);
            if (values && values.length === 2) {
                parsedData.push({
                    valueOne: parseInt(values[0], 10),
                    valueTwo: parseInt(values[1], 10),
                });
            }
        }
        return parsedData;
    }
    return undefined;
};

