console.log(name); // undefined (variable is hoisted but not initialized)
var name = "John";
console.log(name); // "John" (variable is now initialized)


sayHello(); // "Hello, there!" (function is hoisted and can be called before the declaration)
function sayHello() {
  console.log("Hello, there!");
}

sayHello1(); // TypeError: sayHello is not a function (the variable is hoisted but not the function)
var sayHello1 = function() {
  console.log("Hello, there!");
}