const fs = require("fs");

setTimeout(() => { console.log("this is settimeout 1") }, 0);
setTimeout(() => {
    console.log("this is settimeout 2")
    Promise.resolve().then(() => { console.log("this is promiss.resolve 1") });
    process.nextTick(() => { console.log("this is process.next 1") });

}, 0);
setTimeout(() => { console.log("this is settimeout 3") }, 0);







