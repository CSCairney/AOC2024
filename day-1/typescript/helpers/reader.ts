import {readFileSync} from "fs";

export const readFileData = (path: string) => {
    try {
        return readFileSync(path, "utf8");
    } catch (error) {
        console.error("Error With Value: ", error);
    }
}