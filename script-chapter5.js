//The value of this is determined by how a function is called (runtime binding). 
//So, there are two types of binding when it comes to object binding in JS, one is implicit and other is explicit.

//Implicit Binding
//Implicit Binding is applied when you invoke a function in an Object using the dot notation. 
//this in such scenarios will point to the object using which the function was invoked. 

//Implicit Bindings
var calc = {
  total: 10,
  add(a) {
  this.total += a;
  return this;
  },
  subtract(a) {
  this.total = this.total - a;
  return this;
  },
  };
  const result = calc.add(10)//using the dot notation
  console.log(result);


//this will ref to object
function myFunction() {
    console.log(this)
}
myFunction(); // window object

let a = 6;
console.log(this.a); //undefined

const myFun=()=> {
    console.log(this)
}
myFun(); // window object

let user = {
    name: "Piyush",
    age: 24,
      getDetails() {
          console.log(this.name); //Piyush
      }
  };
  user.getDetails();
  

  let user1 = {
    name: "Piyush",
    age: 24,
      childObj:{
          newName:"Roadside Coder",
          getDetails() {
              console.log(this.newName, "and" ,this.name);//Roadside coder and undefined 
              //becuse this.name pointing to it's parent object
          }
      }
  };
  user1.childObj.getDetails();

  console.log("Arrow fn");
  let user121 = {
    name: "Piyush",
    age: 24,
      getDetails111: () => {
          console.log(this.name); 
      }
  };
  console.log(user121.getDetails111());
  // give you any output? Well it is empty since it points to window object.


  let usera = {
    name: "Piyush",
    age: 24,
      getDetailss() {
          const nestedArrow = () => console.log(this.name); //Piyush
          nestedArrow();
      }
  };
  console.log(usera.getDetailss());


  class userC {
    constructor(n){
        this.name = n
    }
    getName(){
        console.log(this.name);
    }
}
const User = new userC("Piyush Class") // => This will generate a user object from the above class
User.getName();



const userP = {
    firstName: 'Piyush Parent Access!',
    getName() {
      const firstName = 'Jen!';
      return this.firstName;
      //this keyword refere to object first not fn
    }
  };
  console.log(userP.getName()); // What is logged?


  function makeUser() {
    return {
      name: "John",
      ref: this
    };
  }
console.log("Result = Enpty")
console.log(makeUser().ref) // What's the result?=refering to window object so output is empty

//ref put as fn
//makeing as function and calling it
  function makeUser() {
    return {
      name: "John",
      ref(){
        return this;
      }
    };
  }
  
  let userqw = makeUser();
  alert( userqw.ref().name ); // What's the result?



// 'this' Keyword in Javascript (Implicit Binding)
// Question 4 - What is the Output?
const userC1 = {
    name: "Piyush",

    greet() {
    return `Hello, ${this.name}!"`;
    },

    //arrow fn points to window object
    farewell: () => {
    return `Goodbye, ${this.name}!"`;
    }
    };
    console.log(userC1.greet()); // What is logged?
    console.log(userC1.farewell()); // What is logged?

    const user232 = {
      name: "Piyush Agarwal!",
      logMessage() {
      console.log(this.name); // What is logged?
      },
    };
      setTimeout(user232.logMessage, 1000);


      const user000 = {
        name: "Sanjay@24",
        logMessage(){
        console.log(this.name); // What is logged?
      }};

      setTimeout(user000.logMessage(), 1000);//Null

        setTimeout(function() {  
        user000.logMessage();
        }, 1000);//Sanjay@24 
        //makeing as function and calling it


        //Question 5 - Create an object calculator
        let caluculator={

          read(){
            this.a = +prompt("a= ",0)
            this.b = +prompt("b= ",0)
          },
          add(){
            console.log(this.a + this.b);
          },
          multiply(){
            console.log(this.a*this.b);
          }

        };
        caluculator.read();
        caluculator.add();
        caluculator.multiply();
      

        // 'this' Keyword in Javascript (Implicit Binding)
                // Question 6 - What will be the Output?
                var length = 4;
                function callback() {
                  console.log(this.length); // What is logged?
                  }
                   const object = {
                  length: 5,
                  method(fn) {
                  fn();
                  },
                  };
        object.method (callback);//4


        calc={
          total:0,
          add(a){
            this.total = this.total+a;
            return this;
          },

          multiply(a){
            this.total = this.total*a;
            return this;
          },

          subtract(a){
            this.total = this.total-a;
            return this;
          },

        };
        const resultaaa1 = calc.add(10).multiply(5).subtract (30).add(10)
        console.log("Result");
        console.log(resultaaa1.total);


