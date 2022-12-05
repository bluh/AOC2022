const fs = require("fs");

module.exports = {
    readLines: (fileName, callback) => {
        const inputFile = fs.readFileSync(`data//${fileName}.txt`);
        const inputText = inputFile.toString();
        const inputLines = inputText.split("\n");

        if(callback){
            return inputLines.map((line) => {
                const strippedLine = line.trim();
                return callback(strippedLine);
            });
        }

        return inputLines;
    }
}