function name(){
    //fn scope
}

var a =5;//global scope can access anywhere
//var is functional scope let and const are block scope
console.log(a);
{
   var av=10;
}
console.log(av);
//acceseble outside of the block
//variable Shadowing - when a variable is declared in a certain scope 
//having the same name defined on its outer


//variable Shadowing
let z1=10;
if (true){
    let z1=20;
console.log(z1);
}
console.log("Shadowing Example"+z1);

{
    let b1=100;
    console.log(b1);
}
//let and const cant acessable outside of the block
//let and const cant redeclared in same scope {let a=2; const a=2;}
//var can be redeclared in same scope{var a=2; var a=2;}


//variable shadowing
// when a variable declared in a certain scope (e.g. a local variable) 
// has the same name as a variable in an outer scope (e.g. a global variable). 
// When this happens, the outer variable is said to be shadowed by the inner variable.
function varShadowing(){
    var a = 1000;

    if(true){
        let a=2000;
        console.log("Inside block "+a);
    }
    console.log("outside block "+a);
}
varShadowing();



//declaration without initialization
let x;
var x1;
//const a;//cant declare without initialization

//reinitialization
let c=10;
c=20

var c1=10;
c1=20

const a111=111;
// a111=222;
// const c2;//should initialize


//Hoisting
//JS engine excecutes line by line code
//during excecution, declaration of fns and variables get moved on top of code = hoisting

console.log(count);
// console.log(count2);
// console.log(count3);
var count = 1;
let count2 = 2;
const count3 = 23;

//temp-dead-zome -> time between declarion and initialization of let and const varriables
//where variable an fns declared in the scope but no initilized

function abc(){
    console.log(q1,q2,q3);
    var q1=10;
    let q2=200;
    const q3=89;
}
abc();
