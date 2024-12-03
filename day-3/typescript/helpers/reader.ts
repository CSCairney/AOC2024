import {readFileSync} from "fs";

const regex = /mul\(\d+,\d+\)/g;

export const readFileData = (path: string) => {
    try {
        let data: string;
        data = readFileSync(path, "utf8");
        return data.matchAll(regex);
    } catch (error) {
        console.error("Error With Value: ", error);
    }
}