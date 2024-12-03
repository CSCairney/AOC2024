import {readFileData} from "../helpers/reader";
import {parseData} from "../helpers/transformers";

const data = readFileData("../data/input.txt");
const parsedData = parseData(data);

if (parsedData.length > 0) {
    const sum = parsedData.reduce((total, pair) => total + pair.valueOne * pair.valueTwo, 0);
    console.log("Part Two Answer:", sum);
} else {
    console.log("No valid data found.");
}
