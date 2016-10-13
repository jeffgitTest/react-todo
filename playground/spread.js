// function add(a, b) {
//   return a + b;
// }
//
// console.log(add(3,1));
//
// var toAdd = [9,5];
//
// console.log(add(...toAdd));

// var groupA = ['mark','steve'];
// var groupB = ['andrew'];
// var final = [3, ...groupA, ...groupB];
//
// console.log(final);


var person = ['Andrew', 25];
var personTwo = ['Jen', 29];

function greet(a,b){
  console.log('Hi '+ a+ ', you are ' + b );
}

greet(...person);
greet(...personTwo);

var names = ['neil','rr'];
var final = ['bry',...names];

final.forEach(function(sname){
  console.log('Hi ' + sname);
});
