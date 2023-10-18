//1
const values = [1,1,2,3,2,4,5,4]
const DuplicateValues = values.filter((ele,index,arr)=> arr.indexOf(ele) !== index);

const v1 = document.getElementById('display');
v1.textContent = DuplicateValues;



//2
const Mvalue =[22,4,5,23,2,4,4,99]

const maxx = Mvalue.reduce((pre,curr)=> pre>curr?pre:curr);
console.log(maxx);

const minn = Mvalue.reduce((pre,curr)=>pre<curr? pre:curr);
console.log(minn);

const v2 = document.getElementById('display1');
v2.textContent = maxx;
const v3 = document.getElementById('display11');
v3.textContent = minn;


//3
//== and ===
//== is used for compare values 
//=== is used for compare values and data types 

var a= 10;
var b = '10';
console.log(a==b);//true
console.log(a===b);//false

//4 
//-- Second largest element in array --
//1.find largest value in array, 2.find index of largest value, 3.delete index using splice method, 4.largest value  in array

const Slargest = [22,33,87,56,95,78,12,45,24,65]

const firstLagestValue = Math.max(...Slargest);
const index = Slargest.indexOf(firstLagestValue);
console.log('Deleted First largest element '+Slargest.splice(index,1));
const SecondLargestValue = Slargest.reduce((pre,curr)=>pre>curr?pre:curr)
console.log(SecondLargestValue);

// const LargetsValue = (arr)=>{
//     firstL = Math.max(...arr);
//     index =arr.indexOf(firstL);
//     arr.splice(index,1)
//     secondL = Math.max(...arr)
//     return console.log(secondL);
// }
// LargetsValue(Slargest);

//5
//filter -> return a array based on codtion satisifyies.
//find -> return value if codtion satisifyies and checks only single value and dont looks for next value.

const FilterAndFinf = [
    {
        name:'sanjay',
        age:23
    },
    {
        name:'sdjb',
        age:13
    },
    {
        name:'jbak',
        age:24
    },
    {
        name:'anbd',
        age:63
    },
    {
        name:'jay',
        age:20
    },
]

const FilterEx = FilterAndFinf.filter((v)=> v.age>20)
console.log(FilterEx)

const FindEx = FilterAndFinf.find((v)=>v.age<22);
console.log(FindEx);

//6
//Finding missing element in JS

const arrNum = [1,2,3,4,5,6,9,100];
const missArray = []

const MisssVAlue = (arr)=>{
const MinV = Math.min(...arr);
const MaxV = Math.max(...arr);

for(let i=MinV; i<MaxV;i++){
    if(arr.indexOf(i)<0){
    missArray.push(i);
    }
}
console.log(missArray)
return missArray;
}

console.log(MisssVAlue(arrNum));

//7
//even and odd num in given array

const EOArray = [1,2,3,4,5,6,7,8,9,10]
const evenValue = EOArray.filter((arr)=>arr%2 == 0);
const oddValue  = EOArray.filter((arr)=> arr%2 !== 0);
console.log(evenValue);
console.log(oddValue);


//8
//sum of all element in aray
 const SumArray = [2,3,4,2,4,6,3,5]

const SRes = SumArray.reduce((pre,curr)=>pre+curr);
console.log(SRes);

//fns
const SRES =(arr)=> arr.reduce((pre,curr)=>pre+curr);
console.log(SRES(SumArray));

//9
//Factorial Num 

// const inputNum = prompt("pleasec enter a number")
// var fact = 1;

// if(inputNum<0){
//     console.log(`factorial of ${inputNum} is not possible`)
// }else{
//     for(i=1; i<=inputNum; i++){
//         fact = fact*i;
//     }
//     console.log(`fact of ${inputNum} is ${fact}`)
// }

//10
//prime num
//  const PNum = prompt('enter a number');
//   if(PNum == 1){
//     console.log(`${PNum}  is not a prime number`)
//   }
//   else{
//     for(let i=0; i<PNum; i++){
//         if(PNum % i == 0 ){
//            console.log(`${PNum} is not  a prime number`)
//         }else{
//             console.log(`${PNum} is  a prime number`)
//         }
//     }
//   }

  //11
  //vowels 

  //string is vowel or not
// var string = prompt('ennter a string')
//  string = string.toLocaleLowerCase();

//  if(string == 'a' || string == 'e' || string == 'i' || string == 'o' || string == 'u' ){
//     console.log(`${string} is a vowel`)
//  }else{
//     console.log(`${string} is not vowel`)
//  }


 //counting num of vowels in string


//  var wordd = prompt('enter characters')
//  var vowels = ['a','e','i','o','u']
//  var count = 0;

//  for(let letter of wordd.toLocaleLowerCase()){
//     if(vowels.includes(letter)){
//         count++
//     }
//  }
// console.log(count);

 //using fn
//  const countVowels =(s)=>{
//     for(let letter of s.toLocaleLowerCase()){
//         if(vowels.includes(letter)){
//             count++;
//         }
//     }
//     console.log(count)
//  }

// countVowels(wordd);


//12 rever string

// var stringa = 'sanjayfrombangalore'
// //convert to array
// var stringToArray = stringa.split('')
// //reverse
// var StringToArrayRev = stringToArray.reverse();
// console.log(StringToArrayRev)
// //join back to normal string
// var revActual = StringToArrayRev.join("");
// console.log(revActual);


//fn 
//  const RevStringddd = (s)=>{
//     var sa = s.split(' ');
//     var sb = sa.reverse();
//     var sc = sb.join('')
//     return sc;
//  }
//  console.log(RevStringddd("Sanjasay"));

 //13
//   var plaindromeText = prompt('Enter a Palindrome String')
//  plaindromeText.toLocaleLowerCase()

//   const palindromeaa=(a)=>{
//     var resultas = a.split('').reverse().join('')
//     if(resultas === a){
//         console.log('Palindrome')
//     }else{
//         console.log('Not a Plaindrome')
//     }
//   }

//   palindromeaa(plaindromeText);

//14
//swaping 
var a1 = 10;
var b1= 20;
 

a1 = a1+b1;//30
b1 = a1-b1//10
a1 = a1 - b1;//20

console.log(a1)
console.log(b1)

//using 3rd var

var a2 = 10;
var b2= 20;
var temp;

temp = a2;//10
a2 = b2;20
b2 = temp;//10

console.log(a2)
console.log(b2)

//15 merge array
const arrt1 = ['a','d','w','d','r','q','c',]
const arrt2 = ['w','f','c','k','g','t','a',]

const arrt31 = arrt1.concat(arrt2); 
console.log(arrt31);
const arrt3 = ([...arrt1,...arrt2])
console.log(arrt3);
const finalRes = arrt3.sort((a,b)=>{
    return a-b
})
console.log(finalRes); 
