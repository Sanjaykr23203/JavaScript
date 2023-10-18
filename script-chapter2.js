//map,filter,reduce are array method used to itarate over a array and 
//perform cumputation and also may return new array

//what is map() ?
//used to create a new array from existing one
//map takes initial value index array

const numbers =[1,2,4,5,6,7,8]

const mapNumbers = numbers.map((num,i,arr)=>{
    //return num*3+i;
    return num;
})
console.log(mapNumbers);


//what is filter() ?
//filter() will takes each statement in an array and applies conditional statement
//if condition gets true element get pushed into the output array and vice versa
//filter returns those element in an array which statisfyies the condition

const Items =[2,3,4,5,6,17,22,4,5,90,20]
const LessThanNum = Items.filter((num)=>{
    return num<=20;
})
console.log("Filter Method");
console.log(LessThanNum);

//what is reduce() ?
//reduce method reduce the elements of array makes into single element at the end

const ReduceNums = [1,2,3,4,5,6]
//takes callback fn and initial value
//parameters are accumualtor, currentValue, index, array
//acc->result of previous computation = 0 initially
const NumbersOfReduce = ReduceNums.reduce((acc,num,arr,i)=>{
    return acc + num;
    //0+1,1+2........
},0)
console.log(NumbersOfReduce);


//Map() polyfills
console.log("Map Polyfills")
//prototype adding mymap of array method to .JS file 
Array.prototype.myMap = function(cb){
    let temp=[];
    for(let i=0; i<this.length;i++){
        temp.push(cb(this[i],i,this))
        //this[i] initial value
        //i index
        //this is actual array
        //here this is parent arrays
    }
    return temp;
}

const numbers1 =[1,2,4,5,6,7,8]

const mapNumbers1 = numbers.myMap((num,i,arr)=>{
    //return num*3+i;
    return num;
})
console.log(mapNumbers);


//Filter() polyfills
Array.prototype.MyFilter = function(cbf){
    let temp=[];
    for(let i=0; i<this.length;i++){
        if(cbf(this[i],i,this)){
            temp.push(this[i]);
        }
    }
    return temp;
}

const Items1 =[2,3,4,5,6,17,22,4,5,90,20]
const LessThanNum1 = Items.MyFilter((num)=>{
    return num<=20;
})
console.log("Polyfills Filter Method");
console.log(LessThanNum);

//Reduce() polyfills
console.log("Polyfills Reduce Method");
Array.prototype.MyReduce = function(cbf1,initialvalue){
    var accumulator = initialvalue;
    for (let i = 0; i < this.length; i++) {
        accumulator = accumulator ? cbf1(accumulator, this[i],this):this[i];
    }
    return accumulator;
}

const ReduceNums1 = [1,2,3,4,5,6]
//takes callback fn and initial value
//parameters are accumualtor, currentValue, index, array
//acc->result of previous computation = 0 initially
const NumbersOfReduce1 = ReduceNums.MyReduce((acc,num,arr,i)=>{
    return acc + num;
    //0+1,1+2........
},0)
console.log(NumbersOfReduce);




//Map and foreach
//These are array fns loop through the items of array
//map returns an array but foreach dont
//we can modify original array with foreach but we cant make it return
console.log("Map v/s forEach");
const arr22 = [2,3,4,5,6,7,8]
const mapresult = arr22.map((arri)=>{
    return arri;
})

const forEachResult = arr22.forEach((ar,i)=>{
    arr22[i] = ar+2;
})

console.log(mapresult,forEachResult,arr22)

//Problems

//1. Return only name of student in capital
console.log("Problems");

let studentss = [
    {name:"Sanjay",rollNuber:23, marks:66},
    {name:"hbh",rollNuber:13, marks:96},
    {name:"nmmk",rollNuber:33, marks:66},
    {name:"hjnlk",rollNuber:53, marks:96},
];

const capitalNames = studentss.map((stu)=>stu.name.toUpperCase());
console.log(capitalNames);

const stumorethan60 = studentss.filter((st)=>st.marks>60);
console.log(stumorethan60);

//scored more than 60 marks
const MoreMarks = studentss.filter((mar)=>mar.marks>60)
console.log(MoreMarks);


//scored more than 60 marks and rollno >50
const MoreMarksAndRollNum = studentss.filter((mar)=> mar.marks>60 && mar.rollNuber>50)
console.log(MoreMarksAndRollNum);

//sum of marksn of all student
console.log("sum of marksn of all student");
const sum = studentss.reduce((acc,curr)=>
acc+curr.marks,0)
console.log(sum);