export const parseData = (data?: string): number[][] | undefined => {
    if (data) {
        return data
            .trim()
            .split("\n")
            .map((line) => {
                return line.split(" ").map(char => parseInt(char, 10))
            });
    }
};
