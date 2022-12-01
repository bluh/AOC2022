const fs = require("fs");

const inputFile = fs.readFileSync("data//day1.txt");
const inputText = inputFile.toString()
const inputLines = inputText.split("\n");

const elves = [0];
var elfIndex = 0;
inputLines.forEach(line => {
    const trimmedLine = line.trim();
    if(trimmedLine === ""){
        elves[++elfIndex] = 0;
    }else{
        elves[elfIndex] += parseInt(trimmedLine);
    }
});

elves.sort((a,b) => b-a);

console.log(elves[0]);

console.log(elves[0] + elves[1] + elves[2]);