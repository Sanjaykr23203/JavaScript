//function

//fn declaration or statement
function squre(n){
    return n*n;
}

//store fn inside a variable is called fn expression
const fn1 = function(n){
    return n*n;
}
console.log(fn1(10));

//fns which treated as variable = first class fn
function add(num){
    return num+num;
}

function DisplayFunction(fn){
    console.log("Add num is "+fn(10));

}
console.log(DisplayFunction(add));

//IIFE -> immediate invoked fn expression
(function add11(num){
   console.log(num+num);
})(3);
//we can call fn next to the fn only
//the ability of fn that able to acess variables and fn outside of the scope its called -> closure

//fn Hoisting

functionHoisting();//accesable
console.log(c);//undefined

function functionHoisting(){
    console.log("fn hoisting example");
}

var c=30;

//params vs args
function squre1(num) {//parameters
    console.log(num*num);
}

squre1(10);//value inside fn call is argumenent 


//passing array of values using spread operator
function squre12(num1,num2) {
    console.log(num1*num2);
}
var arr2=[2,4];//spread op
squre12(...arr2);

function squre123(...nums) {// use inside fn called as rest op
    console.log(nums[0]*nums[1]);
}
var arr2=[21,41];//spread op
squre123(...arr2);

//o/p question
function fn(a,b,c,...num) {
    console.log(a,b,c,num);
}

fn(1,2,3,4,5,43,3,3,2);

//callback fn is fn that passes as argument inside a fn

function greeting(name) {
    alert("Name is "+name)
}
function CallBackfnExample(callback) {
var name1="Sanjay";
    alert("Enter your name");
callback(name1);
}

CallBackfnExample(greeting);

//arrow fn
//Syntax
//no return keyword
//this points global object
//cant get arguments without defining