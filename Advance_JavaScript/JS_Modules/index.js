const functions = require ("./Functions");
let output;
let output2;
let output3;

output= functions.addition(500,1200);
output2= functions.multiplication(15,10);
output3= functions.subtraction(500,100);

console.log("Addition is: "+output);
console.log("Multiplication is: "+output2);
console.log("Subtraction is: "+output3);