1) Remove duplicate from Array
let a = [1,2,2,3,4];
console.log([...new Set(a)])
============================================================================================================

2) callback function example
function modifyArray(arr, callback) {
  // do something to arr here
  arr.push(100);
  // then execute the callback function that was passed
  callback();
}

var arr = [1, 2, 3, 4, 5];

modifyArray(arr, function() {
  console.log("array has been modified", arr);
});
===============================================================================================

3) reverse each word in the sentence

var string = "Welcome to this Javascript Guide!";
((string.split("")).reverse()).join("")

Output =>
'!ediuG tpircsavaJ siht ot emocleW'
====================================================================================================================

4) object is an array or not?
Answer =>

var user = {'name': 'pankaj'};
Array.isArray(user)
==> false

typeof(user)
==> true
=====================================================================================================================

5) Hoisting in javascript.
Hoisting is a default behaviour of javascript where all the variable and function declarations are moved on top.

Ex.
hoistedVariable = 3;
console.log(hoistedVariable); // outputs 3 even when the variable is declared after it is initialized	
var hoistedVariable;

**Note - Variable initializations are not hoisted, only variable declarations are hoisted:
var x;
console.log(x); // Outputs "undefined" since the initialization of "x" is not hoisted
x = 23;

**Note - To avoid hoisting, you can run javascript in strict mode by using “use strict” on top of the code:
"use strict";
x = 23; // Gives an error since 'x' is not declared
var x; 
====================================================================================================================

6) NaN property in JavaScript

isNaN("Hello")  // Returns true
isNaN(345)   // Returns false
isNaN('1')  // Returns false, since '1' is converted to Number type which results in 0 ( a number) 
isNaN(true) // Returns false, since true converted to Number type results in 1 ( a number)
isNaN(false) // Returns false
isNaN(undefined) // Returns true
=====================================================================================================================

7) Differences Between Arrow and Regular Functions
 Arrow function cannot be used as a constructor.
 Regular function can easily construct objects.
 
 Inside the regular function, 'arguments' is a special array-like object containing the list of arguments with which the function has been invoked
 No arguments special keyword is defined inside an arrow function.
 
 Regular function ()
 function myFunction() {
  console.log(arguments);
 }
 
 Arraow function () 
 const myArrowFunction = (...args) => {
  console.log(args);
 }

 If the return statement is missing, or there's no expression after return statement, the regular function implicitely returns undefined:
 If the arrow function contains one expression, and you omit the function's curly braces, then the expression is implicitly returned. These are the inline arrows function.
 
Regular =>
 function myEmptyFunction() {
    42;
  }
  function myEmptyFunction2() {
    42;
    return;
  }
  myEmptyFunction();  // => undefined
  myEmptyFunction2(); // => undefined
 
Arrow =>
  const increment = (num) => num + 1;
  increment(41); // => 42
=================================================================================================================================

8) rest parameter and spread operator
function extractingArgs(...args){
  return args[1];
}

// extractingArgs(8,9,1); // Returns 9

function addAllArgs(...args){
  let sumOfArgs = 0;
  let i = 0;
  while(i < args.length){
    sumOfArgs += args[i];
    i++;
  }
  return sumOfArgs;
}

addAllArgs(6, 5, 7, 99); // Returns 117
addAllArgs(1, 3, 4); // Returns 8


// Incorrect way to use rest parameter
function randomFunc(a,...args,c){
//Do something
}

// Correct way to use rest parameter
function randomFunc2(a,b,...args){
//Do something
}


function addFourNumbers(num1,num2,num3,num4){
  return num1 + num2 + num3 + num4;
}

let fourNumbers = [5, 6, 7, 8];


addFourNumbers(...fourNumbers);
// Spreads [5,6,7,8] as 5,6,7,8

let array1 = [3, 4, 5, 6];
let clonedArray1 = [...array1];
// Spreads the array into 3,4,5,6
console.log(clonedArray1); // Outputs [3,4,5,6]


let obj1 = {x:'Hello', y:'Bye'};
let clonedObj1 = {...obj1}; // Spreads and clones obj1
console.log(obj1);

let obj2 = {z:'Yes', a:'No'};
let mergedObj = {...obj1, ...obj2}; // Spreads both the objects and merges it
console.log(mergedObj);
// Outputs {x:'Hello', y:'Bye',z:'Yes',a:'No'};

=================================================================================================================================
