const { readLines } = require("./shared");

// Part 1

const priorities = [];

readLines("day3", (line) => {
    const halfway = line.length / 2;
    const characters = [];
    var found = false;
    for (let index = 0; index < line.length; index++) {
        const character = line[index];
        if(index < halfway){
            characters.push(character);
        }else{
            if(characters.indexOf(character) > -1){
                priorities.push(character);
                found = true;
                break;
            }
        }
    }
    if(!found){
        throw new Error();
    }
});

var score = 0;

priorities.forEach(priority => {
    const charCode = (priority.charCodeAt(0) - 38) % 58;
    score += charCode;
})

console.log(score);

// Part 2


const badges = [];
const history = [];
var lineIndex = 0;

readLines("day3", (line) => {
    lineIndex++;
    history.push(line);
    if(lineIndex % 3 === 0){
        const [line1, line2, line3] = history;
        for(char of line1){
            if(line2.indexOf(char) > -1 && line3.indexOf(char) > -1){
                badges.push(char);
                break;
            }
        }
        // calculate using history
        history.pop();
        history.pop();
        history.pop();
    }
})

score = 0;

badges.forEach(priority => {
    const charCode = (priority.charCodeAt(0) - 38) % 58;
    score += charCode;
})

console.log(score);