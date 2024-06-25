const fs =require("fs");

const readfilestrem =fs.createReadStream(__filename);
readfilestrem.close();

readfilestrem.on("close",()=>{
    console.log("this is the readfilestrem close event callback");
})

Promise.resolve().then(()=>{console.log("this is promiss.resolve 1")});
process.nextTick(()=>{console.log("this is process.next 1")});
setTimeout(()=>{console.log("this is settimeout 1")},0);

