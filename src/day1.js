const { readLines } = require("./shared");

const elves = [0];
var elfIndex = 0;
readLines("day1", (line) => {
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