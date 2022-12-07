const fs = require("fs");

function* splitTextIntoChunks(text, chunkSize){
    let stringIndex = 0;
    let chunkIndex = 0;
    while(stringIndex < text.length){
        yield {
            chunk: text.substring(stringIndex, stringIndex+chunkSize), 
            stringIndex,
            chunkIndex
        };
        stringIndex += chunkSize;
        chunkIndex++;
    }
}

module.exports = {
    readLines: (fileName, callback) => {
        const inputFile = fs.readFileSync(`data//${fileName}.txt`);
        const inputText = inputFile.toString();
        const inputLines = inputText.split("\n");

        if(callback){
            return inputLines.map((line) => {
                const strippedLine = line.trimEnd();
                return callback(strippedLine);
            });
        }

        return inputLines;
    },
    splitTextIntoChunks
}