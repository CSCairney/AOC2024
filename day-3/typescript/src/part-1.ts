import {parseData} from "../helpers/transformers";
import {readFileData} from "../helpers/reader";

const data = readFileData("../data/input.txt");
const parsedData = parseData(data);

if (parsedData) {
    const sum = parsedData.reduce((total, pair) => total + pair.valueOne * pair.valueTwo, 0);
    console.log("Part One Answer:", sum);
} else {
    console.log("No valid data found.");
}
