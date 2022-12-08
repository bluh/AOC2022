const { readLines, DIRECTIONS_LIST, DIRECTIONS_VEC } = require("./shared");

const fields = [];

readLines("day8", (line) => {
    fields.push([...line].map(v => parseInt(v)));
})

var score = 0;

const travel = (x,y,dir) => {
    const [nextX, nextY] = [x, y].add(DIRECTIONS_VEC[dir]);
    if(nextX >= 0 && nextY >= 0 && nextX < fields.length && nextY < fields.length){
        return Math.max(fields[y][x], travel(nextX, nextY, dir));
    }
    return fields[y][x];
}

const surroundingTrees = (x, y) => {
    return DIRECTIONS_LIST.map(dir => travel(...([x,y].add(DIRECTIONS_VEC[dir])), dir));
}

for (let y = 1; y < fields.length - 1; y++) {
    const field = fields[y];
    for (let x = 1; x < field.length - 1; x++) {
        const tree = field[x];
        const [ treeN, treeS, treeW, treeE ] = surroundingTrees(x, y);
        if(tree > treeN || tree > treeS || tree > treeW || tree > treeE){
            score++;
        }
    }
}

score += fields.length + fields.length + fields[0].length + fields[0].length - 4;

console.log(score);