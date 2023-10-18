
//refers to current context
//object method
const user = {
    username : 'sanjay',
    age:24,

    message : function(){
        console.log(`Hello ${this.username}, you are ${this.age} years old.`);
        console.log(this)
    }
    
}

// user.username;
// user.message();
// user.username='sam';
// user.message();


//global context
// console.log(this);


function test(){
    let a=10;
    console.log(this.a)
}
test();

//arrow fn 


const arrowFn = ()=> {
    console.log("sanjay");
}
arrowFn();

const add = (a1,b1)=>{
    return a1+b1;
}
console.log(add(108,21))


const divide = (n1,n2)=> n1/n2; 

const divide1 = (n1,n2)=> (n1/n2);
console.log(divide1(56,3));

const objEx = ()=> ({name:'sanjay'})

//constructor
function Person(name){
    this.name = name;
}

const person1111 = new Person('Personasa A');
console.log(person1111.name);

//evnetListner

const button = document.querySelector('button');
button.addEventListener('click',function(){
    console.log(this);
})


//arrow fn

const objj1 = {
    name: 'Sanjay24',
    alertmsg : function(){
        setTimeout(()=>{
            alert(`Hello ${this.name}`);
        })
    }
}
objj1.alertmsg();
