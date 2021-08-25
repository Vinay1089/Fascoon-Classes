//using function as a variable values.. 
function interest(principal){
    var interest=0.15;
    return principal*interest;
}
var principal=2000;
var interest=interest(principal);
console.log(interest);
var finalvalue= principal+interest;
console.log(finalvalue);