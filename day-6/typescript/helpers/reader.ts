import {readFileSync} from "fs";

export const readFileData = (path: string): string[] | undefined => {
    try {
        const fileInput = readFileSync(path, "utf8");
        return fileInput.trim().split("\n");
    } catch (error) {
        console.error("Error With Value: ", error);
    }
}
