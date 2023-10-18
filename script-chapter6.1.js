//Promises -> basically represents the upcoming completion or a failure of a async 
// functions and it resulting values.


//1
console.log("start");


const sub = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        const result = true;
        if(result){
            resolve("Succesfuuly Executed 😊")
        }
        else{
            reject("Sorry, we cant deliver your output");
        }
    },2000)
});


console.log(sub);

//then and catch will helps us to get a result and catch a eror
sub.then((res)=>{
    console.log(res);
}).catch((eror)=>{
 console.log(eror)
})


console.log("stop");

//2
//promises are async operation.

console.log("start1");

const ans = Promise.resolve("Executed ⚙️");
// console.log(ans);

ans.then((a)=>{
    console.log(a);
}).catch((e)=>{
console.log(e);
})
console.log("stop1");


//3
console.log("start");

//now this is async code
function importantAction(username) {
return new Promise((resolve,reject)=>{
setTimeout(() => {
resolve(`${username}`);
}, 1000);
});
}

function OneMoreExample(userrole){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(`user role is ${userrole}`);
    },1000);
});
}

function locationDetails(loc){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(`user location is ${loc}`);
    },1000);
});
}

//promises chaining method
//returning the promise one after another so looks like chaining
// importantAction("Sanjay")
// .then((res) => {
// console.log(res);
// return  OneMoreExample("FED");
// })
// .then((res) => {
// console.log(res);
// return locationDetails("Bangalore");
// })
// .then((res) => {
// console.log(res);
// })
// .catch((err) => console.error(err));


// these also look soo leanther so for that we use ||Promise combinator|| 
//helps us excute promises more than 1 at a time.
//there are 4 types
//1.Promise.all -> Run all the promises at parallel and return promises in form  of array
//if one promises failed then it wont execute any another.
//2.Promise.race -> return the 1st promise which get fullfilled or rejected.
//3.await -> excutes the promises one after one where it fullfilles or rejected


//Promise.all
// Promise.race([
//     importantAction("Sanjay🈸"),
//     OneMoreExample("FED🙏"),
//     locationDetails("Bangalore🈂️"),
// ]).then((r)=>{
//     console.log(r);
// }).catch((e)=>{
//     console.log("promises failed "+e);
// })

//await
 const result = async() =>{

    try {
        const message1 = await importantAction("Sanjay...🈸");
        console.log(message1);
        const message2 = await OneMoreExample("FED...🙏");
        console.log(message2);
        const message3 = await locationDetails("Bangalore...🈂️");
        console.log(message3);

    } catch (error) {
        console.log("Eror in "+error);
    }
 }
 result();
console.log("stop");

