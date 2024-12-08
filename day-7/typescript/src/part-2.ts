import {readFileData} from "../helpers/reader";
import {calibrateResult, calibrateResultWithCombine, parseData} from "../helpers/transformers";

const data = readFileData("../data/input.txt");
if (data) {
    const parsedData = parseData(data);
    let total = 0;

    if (parsedData) {
        parsedData.map((value) => {
            const output = calibrateResultWithCombine(value.answer, value.values);
            if (output) {
                total += value.answer
            }
        })

        console.log("Part Two Answer:", total);
    } else {
        console.log("No valid data found.");
    }
}


