//objects
// The Object type represents one of JavaScript's data types. 
//It is used to store various keyed collections and more complex entities.


const user ={
    name:"sanjay",
    age: 23,
    age1:33,
    "like this learning":true
}


console.log("Looping object");
for ( a in user){
    console.log(user[a]);
}

delete user.age1;
console.log(user);
console.log(user["like this learning"]);
delete user["like this learning"];
console.log(user.name, user.age);
console.log(user);

//op quuestion
//here op is 5 because this delete fn is not applied to 
//local variable it used only to objects
// Here Fn is IIFE
const func = (function (a) {
    delete a;
    return a;
    })(5);
    console.log(func);

// Question 2 - Create a function multiplyByTwo (obj) that
// multiplies all numeric property values of nums by 2.
let nums12 = {
    a: 100,
    b: 200,
    title: "My nums"
    };
    console.log(nums12);

    function MultiplayObject(obj){
        for(key in obj){
            if(typeof obj[key]==="number"){
                obj[key]=obj[key]*2;
            }
        }
    }
    MultiplayObject(nums12);
    console.log(nums12);


// Objects in Javascript
// Question 3 - What's the Output of the following code?
const a1 = {};
const b = { key: "b" };
const c = { key: "c" };
a1[b] = 123;
a1[c] = 456;
//object will not convert unless its a string
console.log(a1[b]);//456
console.log(a1);


const Object67={
    name:"sanjay",
    Age:23
}
const converter=JSON.stringify(Object67);
console.log(converter);
//obj back
console.log(JSON.parse(converter));

console.log("Inside Local storage");
localStorage.setItem("test", converter);
console.log(localStorage.getItem("test"));

//spread operator
console.log([..."sanjay"]);

// Objects in Javascript
// Question 6 - What's the Output ?
const userq = { name: "Lydia", age: 21 };
const admin = { admin: true, ...userq};
console.log(admin);



// Objects in Javascript
// Question 7 - What's the Output ?
const settings = {
    username: "Piyush",
    level: 19,
    health: 90,
    };
    const data = JSON.stringify(settings, ["level", "health"]);
    console.log(data);


// Objects in Javascript
// Question 8 - What's the Output ?
const shape = {
    radius: 10,
    diameter() {
    return this.radius * 2;
    },
    perimeter: () => 2 * Math.PI * this.radius,
    };
    console.log(shape.diameter());
    console.log(shape.perimeter());


// Objects in Javascript
// Question 9 - What is destructuring in objects ?
let userxx= {
    name: "Piyush",
    age: 24,
    };
    const name = "Roadside Coder";
    const { name: myName} = userxx;
    console.log(myName)


// Objects in Javascript
// Question 11 - What's the output?
let c1 = { greeting: "Hey!" };
let d; 
//giving refrence not full object
d = c1;
c1.greeting = "Hello";
console.log(d.greeting); // "Hello"

// Objects in Javascript
// Question 12 - What's the output?
console.log({ a: 1 } == {a: 1 });//false
console.log({ a: 1 } === {a: 1 });//false


// Objects in Javascript
// Question 14 - What's the output?
const value = { number: 10 };
const multiply = (x = { ...value }) => {
console.log((x.number *= 2));
};
multiply(); // 20
multiply(); // 20
multiply (value); // 20
multiply (value); //40


// Objects in Javascript
// Question 17 - How to deep copy / clone an object?
//shallow copy -> copy ref
//deep copy -> copy complete object
console.log("How to deep copy / clone an object?");
let puser = {
    name: "Roadside Coder",
    age: 24,
    };
    // const objClone = Object.assign({}, user);
    const objClone = JSON.parse(JSON.stringify(user));
    //const objClone = { ...puser};
    objClone.name = "Piyush";
    console.log(puser, objClone);