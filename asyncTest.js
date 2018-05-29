console.log('start');

setTimeout(()=>{
    console.log("Async")
}, 2000)

setTimeout(() => {
    console.log("Second timeOut with no delay")
}, 0)

console.log('end')