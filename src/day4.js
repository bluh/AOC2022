const { readLines } = require("./shared");

// Part 1

let score = 0;

readLines("day4", (line) => {
    const [ elf1, elf2 ] = line.split(",");

    const [ elf1Min, elf1Max ] = elf1.split("-");
    const [ elf2Min, elf2Max ] = elf2.split("-");

    const elf1MinNum = parseInt(elf1Min);
    const elf1MaxNum = parseInt(elf1Max);
    const elf2MinNum = parseInt(elf2Min);
    const elf2MaxNum = parseInt(elf2Max);

    if((elf1MinNum >= elf2MinNum && elf1MaxNum <= elf2MaxNum) || (elf2MinNum >= elf1MinNum && elf2MaxNum <= elf1MaxNum)){
        score++;
    }
});

console.log(score);

// Part 2

score = 0;

readLines("day4", (line) => {
    const [ elf1, elf2 ] = line.split(",");

    const [ elf1Min, elf1Max ] = elf1.split("-");
    const [ elf2Min, elf2Max ] = elf2.split("-");

    const elf1MinNum = parseInt(elf1Min);
    const elf1MaxNum = parseInt(elf1Max);
    const elf2MinNum = parseInt(elf2Min);
    const elf2MaxNum = parseInt(elf2Max);

    if(
        (elf1MinNum >= elf2MinNum && elf1MinNum <= elf2MaxNum) ||(elf1MaxNum >= elf2MinNum && elf1MaxNum <= elf2MaxNum) ||
        (elf2MinNum >= elf1MinNum && elf2MinNum <= elf1MaxNum) ||(elf2MaxNum >= elf1MinNum && elf2MaxNum <= elf1MaxNum)
    ){
        score++;
    }
});

console.log(score);