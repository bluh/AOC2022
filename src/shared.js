const fs = require("fs");

module.exports = {
    readLines: (fileName, callback) => {
        const inputFile = fs.readFileSync(`data//${fileName}.txt`);
        const inputText = inputFile.toString();
        const inputLines = inputText.split("\n");

        if(callback){
            return inputLines.map(callback);
        }

        return inputLines;
    }
}