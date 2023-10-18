// //16
// //fact of num
// var factNum = prompt("Enter Number ")
// factNum = parseInt(factNum);
// console.log(`fact of ${factNum} is :`)
// for(let i=0; i<=factNum; i++){
//     if(factNum%i == 0){
//         console.log(i);
//     }
// }

// //17 
// //simple caluculator
//  const op = prompt("Enter operator");
//  const n1 = parseFloat(prompt("Enter Num1"))
//  const n2 = parseFloat(prompt("Enter Num2"))

//  if(op == '+'){
//     console.log(n1+n2);
//  }
//  if(op == '-'){
//     console.log(n1-n2);
//  }
//  if(op == '*'){
//     console.log(n1*n2);
//  }
//  if(op == '/'){
//     console.log(n1/n2);
//  }


 //18
 //comparing 2 arrays are equal
// var arr1 = [2,3,4,1,6,5]
// arr1 = arr1.sort();

// var arr2 = [1,2,3,4,5,6]
// arr2 = arr2.sort();

//  if(JSON.stringify(arr1) === JSON.stringify(arr2)){
//     console.log('True');
// }
// else{
//     console.log("false")
// }

// //19
// //intersection of 2 arrays or sets

// var IntArray1 = [2,4,23,68,224,68,0]
// var IntArray2 = [2,42,223,468,224,68,0]

// var intSecArr = IntArray1.filter((v)=> IntArray2.includes(v))
// intSecArr = [...new Set(intSecArr)]
// console.log(intSecArr)

// //20 
// //union of 2 array 

// const Uarr1 = [1,24,12,5,6,22,78,90]
// const Uarr2 = [21,232,90,21,34,24,78]

// const UnionArray = [...new Set([...Uarr1, Uarr2])]
// console.log(UnionArray);

// //21
// //celsius To Vfahren

// const CTFInput = parseFloat(prompt("Enter in celsius"));

// const CelsiusTofharen = CTFInput*1.8+32;
// console.log('CelsiusTofharen : '+CelsiusTofharen)

// //FahrenToCel

// const FahrenToCel = 5/9*(CTFInput-32)
// console.log('FahrenToCel : '+FahrenToCel);

// //22
// //km to miles 

// const KMilesIN = parseFloat(prompt("Enter in KM"))
// const factor = 0.621371
// const mile = KMilesIN*factor;
// console.log(`${KMilesIN} KM in miles is ${mile} miles`)


//23
//uppercase first char
//charAt() - get char at an index
//toUpperCase() - upper char
//map()- return new  array
//slice() - return specific char in string

// var imputSTRR = prompt("Enter String")
// var newSTR = imputSTRR.split(" ")
// var newARRR = newSTR.map((v)=>v.charAt(0).toUpperCase()+v.slice(1))
// var ResSTR = JSON.stringify(newARRR.join(" "))
// console.log(ResSTR)

//24
//table 

const TableInptut = parseInt(prompt("Enter a NumberS"))

const Table= (value)=>{
    
    for(let i=1; i<=10; i++){
        var res22 = i*value;
        console.log(`${value} * ${i} = ${res22}`);
    }
}
Table(TableInptut);

