import {readFileData} from "../helpers/reader";
import {calculateInfiniteLoopCount, parseData} from "../helpers/transformers";

const data = readFileData("../data/input.txt");
if (data) {
    const parsedData = parseData(data);

    if (parsedData) {
        console.log("Part Two Answer:", calculateInfiniteLoopCount(parsedData));
    } else {
        console.log("No valid data found.");
    }
}


