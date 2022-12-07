const { readChars } = require("./shared");

const length = 4;

const chars = Array(length).fill(0);
var stop = false;

readChars("day6", (char, index) => {
    if(stop) return;
    chars.push(char);
    chars.shift();
    if(index > (length - 1)){
        const isUnique = chars.reduce((prev, curr) => {
            if(prev === ""){
                return curr;
            }
            if(prev === false){
                return false;
            }
            if(prev.indexOf(curr) > -1){
                return false;
            }else{
                return prev + curr;
            }
        }, "");
        if(isUnique){
            stop = true;
            console.log(chars, index + 1);
        }
    }
})