import {readFileSync} from "fs";

const regex = /do\(\)|don't\(\)|mul\((\d+),(\d+)\)/g;

export const readFileData = (path: string): IterableIterator<RegExpExecArray> | undefined => {
    try {
        const data = readFileSync(path, "utf8");
        return data.matchAll(regex);
    } catch (error) {
        console.error("Error reading file:", error);
        return undefined;
    }
};