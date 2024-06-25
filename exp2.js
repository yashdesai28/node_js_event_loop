Promise.resolve().then(()=>{console.log("this is promiss.resolve 1")});
process.nextTick(()=>{console.log("this is process.next 1")});
