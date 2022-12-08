const { readLines, DIRECTIONS_LIST, DIRECTIONS_VEC } = require("./shared");

const fields = [];

readLines("day8", (line) => {
    fields.push([...line].map(v => parseInt(v)));
})

var score = 0;

const travel = (x,y,dir,beat) => {
    const [nextX, nextY] = [x, y].add(DIRECTIONS_VEC[dir]);
    if(nextX >= 0 && nextY >= 0 && nextX < fields.length && nextY < fields.length){
        const nextValue = fields[y][x];
        if(nextValue < beat){
            return 1 + travel(nextX, nextY, dir, beat);
        }else{
            return 0;
        }
    }
    return 0;
}

const surroundingTrees = (x, y) => {
    const beatValue = fields[y][x];
    return DIRECTIONS_LIST.map(dir => travel(...([x,y].add(DIRECTIONS_VEC[dir])), dir, beatValue) + 1);
}

for (let y = 1; y < fields.length - 1; y++) {
    const field = fields[y];
    for (let x = 1; x < field.length - 1; x++) {
        const [ treeN, treeS, treeW, treeE ] = surroundingTrees(x, y);
        const treeScore = treeN * treeS * treeW * treeE;
        if(treeScore > score){
            score = treeScore;
        }
    }
}

console.log(score);