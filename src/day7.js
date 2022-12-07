const { readLines, flatten } = require("./shared");

const fs = { size: 0 };
let currentDirectoryString = "";

traverse = (directoryString) => {
    if(directoryString === ""){
        return fs;
    }
    const dirs = directoryString.split("/");
    var result = fs;
    for (const dir of dirs) {
        result = result[dir];
    }
    return result;
}

addSize = (directoryString, size) => {
    if(directoryString === ""){
        fs.size += size;
        return;
    }
    const dirs = directoryString.split("/");
    var result = fs;
    result.size += size;
    for (const dir of dirs) {
        result = result[dir];
        result.size += size;
    }
}

readLines("day7", (line) => {
    if(line[0] === "$"){
        const [ _, cmd, args] = line.split(" ");
        if(cmd === "cd"){
            if(args === "/"){
                currentDirectoryString = "";
            }else if(args === ".."){
                currentDirectoryString = currentDirectoryString.substring(0, currentDirectoryString.lastIndexOf("/"));
            }else{
                const currentDirectory = traverse(currentDirectoryString);
                currentDirectory[args] = {size: 0};
                if(currentDirectoryString === ""){
                    currentDirectoryString = args;
                }else{
                    currentDirectoryString += ("/" + args);
                }
            }
        }
    }else{
        const [size, fileName] = line.split(" ");
        if(size === "dir") return;
        addSize(currentDirectoryString, parseInt(size));
    }
});

const totalFSSize = 70000000;
const updateSize = 30000000;

const requiredSize = updateSize - (totalFSSize - fs.size);

var score = 0;

var lowestScore = 0;

for (const dir of flatten(fs)) {
    if(dir.key === "size"){
        if(dir.value <= 100000){
            score += dir.value;
        }
        if(dir.value >= requiredSize && (dir.value <= lowestScore || lowestScore === 0)){
            lowestScore = dir.value;
        }
    }
}

console.log(score);
console.log(lowestScore);