import {readFileData} from "../helpers/reader";
import {parseData} from "../helpers/transformers";
import {devMode} from "../constants/dev";
import {isConsistent} from "../helpers/helpers";

const data = readFileData("../data/input.txt");
const parsedData = parseData(data);

if (parsedData) {
    let answer = 0;

    for (let line of parsedData) {
        devMode && console.log("Reading values: ", line);

        if (!isConsistent(line)) {
            devMode && console.log("failed consistent change, table: " + line);
        } else {
            const lineCondition = line.every((currentValue, index) => {
                if (index === 0) return true;
                return Math.abs(line[index - 1] - currentValue) <= 3;
            });
            devMode && console.log("Line condition: " + lineCondition);
            if (lineCondition) {
                answer++;
            }
        }
    }

    console.log("Part One: ", answer);
}
