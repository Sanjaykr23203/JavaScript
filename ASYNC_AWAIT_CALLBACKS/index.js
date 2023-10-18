function placeOrder(food, callback) {
    // Waiter takes note of your order
    console.log("Ordering " + food);

    // Chef prepares the food asynchronously
    setTimeout(function() {
      //callback is called when food is ready
    //  console.log('Food preapered by chef!');
      callback(food);
    }, 3000); 
  }

  //this function will executed when cooking food is done here
  //callback fn
  function prepareFood(food) {
    console.log(food + " is ready!");
  }
  
// Ordering food (providing a callback)
placeOrder("Pizza", prepareFood);




//Promise
// fetch('https://api.github.com/users/octocat')
// .then((result)=>{
//     return result.json();
// }).then((data)=>{
//     console.log(data)
// }).catch((e)=>{
//  console.log(e);
// })



//promise
function OrderPackage(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const isDeliverd=false;
            if(isDeliverd){
                resolve("Package is delivered👍")
            }else{
                reject('failed to deliver the order⚠️');
            }
        },4000)
    })
}
//handling outcomes
OrderPackage()
.then((result)=>{
console.log(result);
}).catch((eror)=>{
console.error(eror)
})


//async await

// async function getUsers(){
// try {
//         const response = await fetch('https://api.github.com/users/octocat')
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.error(error);
//     }    
// }

// getUsers();


  

// function boilwater(){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             const boil = true;
//             if(boil){
//                console.log('Water Boiled');
//                resolve()
//             }else{
//                 reject('Failed to boil water')
//             }
//         },3000)
//     })
// }


// function cookeggs(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             const eggscooked=false;
//             if (eggscooked) {
//                 console.log('egg is cooked');
//                 resolve()
//             } else {
//                 reject('failed to cook egg')
//             }
//         },2000)
//     })
// }


// function toasttbread(){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             const toasted = true;
//             if (toasted) {
//                 console.log('bread toasted');
//                 resolve()
//             } else {
//                 reject('failed to toast the bread');
//             }
//         },4000)
//     })
// }


// async function Breakfast(){
//     try {
//         console.log('breakfast preparation started');
//         await boilwater();
//         await cookeggs();
//         await toasttbread();
//         console.log('Breakfast id ready😋')  
//     } catch (error) {
//         console.error(error);
//     }
// }

// Breakfast();