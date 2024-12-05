import {countXmasPatterns, parseData} from "../helpers/transformers";
import {readFileData} from "../helpers/reader";

const data = readFileData("../data/input.txt");
if (data) {
    const parsedData = parseData(data);

    if (parsedData) {
        console.log("Part Two Answer:", countXmasPatterns(parsedData));
    } else {
        console.log("No valid data found.");
    }
}


