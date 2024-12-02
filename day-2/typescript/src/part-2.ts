import {readFileData} from "../helpers/reader";
import {parseData} from "../helpers/transformers";
import {whenUpdatedIsSafe} from "../helpers/helpers";

const data = readFileData("../data/input.txt");
const parsedData = parseData(data);

if (parsedData) {
    let answer = 0;

    for (const line of parsedData) {
        if (whenUpdatedIsSafe(line)) {
            answer++;
        }
    }

    console.log("Part Two: ", answer);
}
