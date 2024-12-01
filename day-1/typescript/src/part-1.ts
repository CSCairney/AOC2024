import { readFileData } from "../helpers/reader";
import {parseData} from "../helpers/transformers";
import {valueSort} from "../helpers/helper";

const data = readFileData("../data/input.txt");
const parsedData = parseData(data);

if (parsedData) {
    const sortedData = valueSort(parsedData);
    let answer = 0;

    sortedData.forEach((value) => {
        answer += Math.abs(value.valueOne - value.valueTwo);
    });

    console.log("Part One: ", answer);
}
