const fs =require("fs");

setTimeout(()=>{console.log("this is settimeout 1")},0);

fs.readFile(__filename,()=>{
    console.log("this is readfile 1");
})




