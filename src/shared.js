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

function* flatten(object, path) {
    path = path || "$";
    for (const key in object) {
        const value = object[key];
        if(typeof value === "object"){
            yield* flatten(object[key], `${path}['${key}']`);
        }else{
            yield { path, key, value };
        }
    }
}

Array.prototype.add = function(other){
    return this.map((v,i) => v + other[i]);
}

const DIRECTIONS = {
    NORTH: 1,
    EAST: 2,
    SOUTH: 3,
    WEST: 4
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
    readChars: (fileName, callback) => {
        const inputFile = fs.readFileSync(`data//${fileName}.txt`);
        const inputText = inputFile.toString();
        
        var charIndex = 0;
        for (const char of inputText) {
            callback(char, charIndex++);
        }
    },
    splitTextIntoChunks,
    flatten,
    DIRECTIONS,
    DIRECTIONS_LIST: [DIRECTIONS.NORTH, DIRECTIONS.EAST, DIRECTIONS.SOUTH, DIRECTIONS.WEST],
    DIRECTIONS_VEC: {
        [DIRECTIONS.NORTH]: [0, -1],
        [DIRECTIONS.SOUTH]: [0 ,1],
        [DIRECTIONS.WEST]: [-1, 0],
        [DIRECTIONS.EAST]: [1, 0]
    }
}