import { readFileData } from "../helpers/reader";
import {parseData} from "../helpers/transformers";
import {count, valueSort} from "../helpers/helper";

const data = readFileData("../data/input.txt");
const parsedData = parseData(data);

if (parsedData) {
    let answer = 0;

    parsedData.map((value) => {
        answer += value.valueOne * count(parsedData, value.valueOne)
    })
    console.log("Part Two: ", answer);
}
