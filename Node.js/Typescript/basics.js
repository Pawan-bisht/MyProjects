/*
for dynamic type in typescript we use any as type-annotation
 */
var some = ['pawan', 'bisht', 3345, true];
// See no error
/**
 * for dynamic array we use array as type-annotation
 */
var arr = ['pawan', 'bisht', 'is', 'a', 'good boy'];
var num = [2, 3, 4, 5, 6];
var boolArray = [true, false, true, true, false];
/**
 * the following method is called tupple in tupple [data:annotaion]
 * in this the order of values are correponding to tupple otherwise it shoes an error
 */
var tuppletest = ["this is the test string of tupple", true, 34];
/**
 * we can enum also in this ts
 */
var doorstep;
(function (doorstep) {
    doorstep[doorstep["closed"] = 10] = "closed";
    doorstep[doorstep["open"] = 11] = "open";
    doorstep[doorstep["break"] = 12] = "break";
})(doorstep || (doorstep = {}));
;
console.log(doorstep[10]);
console.log(doorstep.closed);
console.log(doorstep["break"]);
var str = "pawan";
str = 23453;
/**
 * Union Type : we can make a variable to take multiple type of values;
 */
var uniontype;
uniontype = 'pawan bisht';
uniontype = 234;
uniontype = true;
console.log(uniontype);
/**
 * functions
 */
function addNumber(arg1, arg2) {
    return arg1 + arg2;
}
console.log(addNumber('pawan ', 'bisht'));
