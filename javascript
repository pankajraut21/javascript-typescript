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
