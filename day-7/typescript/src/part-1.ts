import {readFileData} from "../helpers/reader";
import {calibrateResult, parseData } from "../helpers/transformers";

const data = readFileData("../data/input.txt");
if (data) {
    const parsedData = parseData(data);
    let total = 0;

    if (parsedData) {
        parsedData.map((value) => {
            const output = calibrateResult(value.answer, value.values);
            if (output) {
                total += value.answer
            }
        })

        console.log("Part One Answer:", total);
    } else {
        console.log("No valid data found.");
    }
}


