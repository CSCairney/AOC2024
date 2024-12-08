import {Problem} from "../types/data";


export function parseData(data: string[]): Problem[] {
    return data.map(line => {
        const [answerPart, valuesPart] = line.split(':').map(part => part.trim());
        return {
            answer: parseInt(answerPart, 10),
            values: valuesPart.split(' ').map(Number)
        };
    });
}


export function calibrateResult(answer: number, values: number[]) {
    const operators = ['+', '*'];

    function evaluateExpression(nums: number[], ops: string[]) {
        let result = nums[0];
        for (let i = 0; i < ops.length; i++) {
            const next = nums[i + 1];
            if (ops[i] === '+') result = result + next;
            else if (ops[i] === '*') result = result * next;
        }
        return result;
    }

    function generateAllCombinations(nums: number[]) {
        if (nums.length === 1) return nums[0] === answer;
        const length = nums.length - 1;
        const total = Math.pow(operators.length, length);
        for (let i = 0; i < total; i++) {
            const ops = [];
            let x = i;
            for (let j = 0; j < length; j++) {
                ops.push(operators[x % operators.length]);
                x = Math.floor(x / operators.length);
            }
            if (evaluateExpression(values, ops) === answer) return true;
        }
        return false;
    }

    return generateAllCombinations(values);
}


