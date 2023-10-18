//1
// console.log("start");

// const promise1 = new Promise((resolve, reject)=>{
//     console.log(1);//sync code
//     resolve(2);//async code
// });

// promise1.then((res)=>{
//     console.log(res); 
// })

// console.log("stop");


//2
// console.log("start");
// const promise11 = new Promise((resolve, reject) => {
// console.log(1);//sync code
// resolve (2);//async code
// console.log (3);//sync code
// });
// promise11.then((res) => {
// console.log(res);
// });
// console.log("end");


//3
// console.log("start");

// const promise1 = new Promise((resolve, reject)=>{
//     console.log(1);//sync code
//     console.log(2);//sync code
//     console.log(3);//sync code
  
// });

// promise1.then((res)=>{
//     console.log(res); 
// })

// console.log("stop");


//4
// console.log("start");

// const fn = ()=>
//     new Promise((resolve,reject)=>{
//         console.log(1);
//         resolve("success");
//     })


// console.log("middle");

// fn().then((res)=>{
// console.log(res);
// });

// console.log("stop");

//5
// function job(){
//     return new Promise((resolve,reject)=>{
//         reject();
//     })
// }
// let p1 = job();

// p1.then(()=>{
// console.log("s1");
// })
// .then(()=>{
//     console.log("s2");
//     })
//     .then(()=>{
//         console.log("s3");
//         })
//         .catch(()=>{
//             console.log("eror");

//         }).then(()=>{
//             console.log("s4");
//         })


//6
// const firstPromise = new Promise((reject,resolve)=>{
//     resolve("First");
// });


// const SecondPromise = new Promise((reject,resolve)=>{
//     resolve(firstPromise);
// });

// SecondPromise.then((res)=>{
//     return res;
// })
// .then((res)=>
// console.log(res));

//7

async function loadJson(url){
    let response = await fetch(url)
    console.log(response);

    if(response.status==200){
        let json = await response.json();
        console.log(json);
    }

    throw new Error(response.status);

}

loadJson("https://jsonplaceholder.typicode.com/posts").catch((err)=>{
    console.log(err)
})
