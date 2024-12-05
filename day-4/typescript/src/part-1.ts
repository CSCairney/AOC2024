import {findChristmasOrWeAllDie, parseData} from "../helpers/transformers";
import {readFileData} from "../helpers/reader";
import {XMAS} from "../constants";

const data = readFileData("../data/input.txt");
if (data) {
    const parsedData = parseData(data);

    if (parsedData) {
        console.log("Part One Answer:", findChristmasOrWeAllDie(parsedData, XMAS));
    } else {
        console.log("No valid data found.");
    }
}


