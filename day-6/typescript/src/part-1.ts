import {readFileData} from "../helpers/reader";
import {calculatePathCount, parseData} from "../helpers/transformers";

const data = readFileData("../data/input.txt");
if (data) {
    const parsedData = parseData(data);

    if (parsedData) {
        console.log("Part One Answer:", calculatePathCount(parsedData));
    } else {
        console.log("No valid data found.");
    }
}


