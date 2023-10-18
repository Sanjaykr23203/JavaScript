let studentss = [
    {name:"Sanjay", rollNuber:25, marks: 88},
    {name:"abc", rollNuber:21, marks: 58},
    {name:"def", rollNuber:28, marks: 68},
    {name:"ghi", rollNuber:20, marks: 98},
];
const capitalNames = studentss.map((stu)=>stu.name.toUpperCase())
console.log(capitalNames);

//scored more than 60 marks
const MoreMarks = studentss.filter((mar)=>mar.marks>60)
console.log(MoreMarks);

//scored more than 60 marks and rollno >50
const MoreMarksAndRollNum = studentss.filter((mar)=>mar.marks>60 && mar.rollNuber>65)
console.log(MoreMarksAndRollNum);

//sum of marksn of all student
console.log("sum of marksn of all student");
const sum = studentss.reduce((acc,curr)=>
acc+curr.marks,0)
console.log(sum);


//scored more than 60 marks and rollno >50
const MoreMarksAndRollNum11 = studentss.filter((mar)=> mar.marks>60 && mar.rollNuber>50)
console.log(MoreMarksAndRollNum11);


console.log("return total marks of the students who scored more than 60 and after 20 marks added to those who scored less than 60");

const totalMarks = studentss.map((st)=>{
    if(st.marks<60){
        st.marks=st.marks+20;
    }
    return st;
}).filter((st)=>{st.marks>60})
   .reduce((acc,curr)=>{acc+curr.marks},0);

console.log(totalMarks);


