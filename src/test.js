const { flatten } = require("./shared");

const nested = {
    value: "Top",
    a: {
        value: "Top.A"
    },
    b: {
        value: "Top.B",
        c: {
            value: "Top.B.C"
        }
    }
}

for (const value of flatten(nested)) {
    console.log(value);
}