// Promises in Javascript->async
// Synchronous vs Asynchronous Code

// Asynchronous programs can be faster than synchronous programs, as tasks can be executed
// in parallel and don't need to wait for each other. 
//Instructions in asynchronous code can execute in parallel.Next operation can occur while the previous operation is still getting processed.
//Instruction in synchronous code executes in a given sequence.Each operation waits for the previous operation to complete its execution.




//sync code
console.log("start");
console.log("I am Sanjay")
console.log("Finish");


// Async Code
console.log("start1");
setTimeout(() => {
console.log("Subscribe to Roadside Coder");
}, 1000);
console.log("I am Sanjay")
console.log("Finish1");




console.log("start2");
function importantAction(username) {
setTimeout(() => {
return `'Subscribe to ${username}`;
}, 1000);
}

const message = importantAction("Unkown user XYZ");
console.log(message);//undefined
console.log("stop2");
//Output
// start undefined stop




// to solve output of code like aboves we use callback
console.log("start");

//now this is async code
function importantAction(username,cb) {
//insted of returning we using cb
setTimeout(() => {
cb(`${username}`);
}, 1000);
}

function OneMoreExample(userrole,cb){
    setTimeout(()=>{
        cb(`user role is ${userrole}`);
    },1000)
}

function locationDetails(loc,cb){
    setTimeout(()=>{
        cb(`user location is ${loc}`);
    },1000)
}

const message1 = 
     importantAction("Call Back Async Example",(message1)=>{
    console.log(message1);
    OneMoreExample("Devoloper",(r1)=>{
        console.log(r1);
    })
    locationDetails("Bnagalore",(o1)=>{
        console.log(o1);     
})
});
console.log("stop");

//so many callbacks makes code messy so to sort out this we use promises in JS.

