const { readLines, splitTextIntoChunks } = require("./shared");

const MODES = {
    BUILDING: 0,
    READING: 1,
};

let mode = MODES.BUILDING;

const piles = Array(9).fill(0).map(_ => []);

readLines("day5", (line) => {
    console.log(line);
    if(mode === MODES.BUILDING){
        if(line.trim() === ""){
            mode = MODES.READING;
            console.log(piles);
        }else{
            for({ chunk, chunkIndex } of splitTextIntoChunks(line.trimEnd(), 4)){
                if(chunk.trim() != ""){
                    const box = chunk.trim().substring(1, 2);
                    if(box != ''){
                        piles[chunkIndex].push(box);
                    }
                }
            }
        }
    }else{
        const [ _, qty, from, to] = line.trim().split(/[a-z]+/i).map(v => v.trim());
        const values = [];
        for (let i = 0; i < qty; i++) {
            values.push(piles[from - 1].shift());
        }
        piles[to - 1].unshift(...values);
    }
});

console.log(piles);

var answer = "";

piles.forEach(pile => {
    answer += pile[0];
});

console.log(answer);