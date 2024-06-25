const fs = require("fs");

fs.readFile(__filename, () => {
    console.log("this is readfile 1");
    setImmediate(() => { console.log("this is the setimmediate 1") })
    Promise.resolve().then(() => { console.log("this is promiss.resolve  inside read file 1") });
    process.nextTick(() => { console.log("this is process.nextinside readfile 1") });
})

Promise.resolve().then(() => { console.log("this is promiss.resolve 1") });
process.nextTick(() => { console.log("this is process.next 1") });
setTimeout(() => { console.log("this is settimeout 1") }, 0);





