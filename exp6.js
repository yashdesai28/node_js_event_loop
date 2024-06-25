const fs =require("fs");

fs.readFile("exp1.js",()=>{
    console.log("this is readfile 1");
})

Promise.resolve().then(()=>{console.log("this is promiss.resolve 1")});
process.nextTick(()=>{console.log("this is process.next 1")});


