const fs = require("fs");

const inputFile = fs.readFileSync("data/day2.txt");
const inputText = inputFile.toString()
const inputLines = inputText.split("\n");

var score = 0;

const scoreMap = { R: 1, P: 2, S: 3 };

const theirsMap = { A: "R", B: "P", C: "S" };
const mineMap = { X: "R", Y: "P", Z: "S" };

// Part 1

inputLines.forEach(line => {
    const [ theirs, mine ] = line.split(" ");

    const theirsRPS = theirsMap[theirs.trim()];
    const mineRPS = mineMap[mine.trim()];
    
    score += scoreMap[mineRPS];

    if(theirsRPS === mineRPS){ //draw
        score += 3;
    }else if(
        (theirsRPS === "R" && mineRPS === "P") ||
        (theirsRPS === "P" && mineRPS === "S") ||
        (theirsRPS === "S" && mineRPS === "R")
    ){
        score += 6;
    }
});

console.log(score);

// Part 2

score = 0;
const winMap = { R: "P", P: "S", S: "R" };
const loseMap = { R: "S", P: "R", S: "P"};

inputLines.forEach(line => {
    const [ theirs, mine ] = line.trim().split(" ");

    const theirsRPS = theirsMap[theirs.trim()];

    var mineChoice = "";
    var matchPoints = 0;
    
    if(mine === "X"){
        //lose
        mineChoice = loseMap[theirsRPS];
        matchPoints = 0;
    }else if(mine === "Y"){
        //draw
        mineChoice = theirsRPS;
        matchPoints = 3;
    }else{
        //win
        mineChoice = winMap[theirsRPS];
        matchPoints = 6;
    }

    score += matchPoints + scoreMap[mineChoice];
});

console.log(score);