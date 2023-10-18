//lexical scopeing..
function outerFunction(){
    let name = 'sanjay';
    // console.log(example1);

    function innerFunction(){
        // var example1 = 'abc';
        console.log("inner 1 "+name); // sanjay
    }
    function innerFunction1(){
        console.log("inner 2 "+name);
        // console.log(example1);
    }
    innerFunction();
    innerFunction1();
}
outerFunction();



//clousers
function outer(){
    var num =24;

    function inner(){
        console.log(num);
    }
    return inner;
}

const functionReturn = outer();
functionReturn();


//example
function ClickHandler(color){
    return function(){
        document.body.style.backgroundColor = `${color}`
    }
}

document.getElementById('orange').onclick = ClickHandler("orange");
document.getElementById('green').onclick = ClickHandler("green");