

// flow control in js
// js is single threaded language.. so event loops helps to do the async task
// the main thread wont wait for async operation to complete..

console.log("start")

function dosomething() {
    setTimeout(() => {
        console.log("Timeout 1")
    }, 1000);
    setTimeout(() => {
        console.log("Timeout 2")
    }, 1000);
    setTimeout(() => {
        console.log("Timeout 3")
    }, 1000);
}

// dosomething();

console.log("end")

/* Out Put

start
end
Timeout 1
Timeout 2
Timeout 3 */


//node js event loop

console.log("begin")

// it will run after timer - check queue.. if some task needs to run after poll or io operation we can use setImmediate..
for(let i = 1 ; i <= 5 ; i++){
    setImmediate(()=>{
        console.log("immediate")
    })
}

//added to the timer queue.. it is a macrotask has less priority than the promise (microtask)
setTimeout(()=>{
    console.log("Timeout 1");
    Promise.resolve().then(()=>{
        console.log("Promise 1");
        setTimeout(()=>{
            console.log("timeout 2")
        })
        return Promise.resolve();
    }).then(()=>{
        console.log("check1");
    })
},0)

//has the highest priority next to process.nextTick()- it is a microtask
Promise.resolve().then(()=>{
    console.log("promise 2");
    setTimeout(()=>{
        console.log("timout 3");
    },100)
    return Promise.resolve();
}).then(()=>{
    console.log("check2");
})

//execute immediately.. 
for(let i = 1 ; i <= 5 ; i++){
    process.nextTick(()=>{
        console.log("Hello world");
    })
}


console.log("end")

/* 
Output

begin
end
Hello world
Hello world
Hello world
Hello world
Hello world
promise 2
check2
Timeout 1
Promise 1
check1
immediate
immediate
immediate
immediate
immediate
timeout 2
timout 3 */