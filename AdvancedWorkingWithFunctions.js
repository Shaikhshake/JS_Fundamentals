// -------------------------------------------------------------------------------------------------
//          Skipped Recursion and stack, since I know most of those concepts

// -------------------------------------------------------------------------------------------------
//              Rest Parameter and spread Syntax
//      Rest parametres, you know what is - getting array from list of args
function showName(fName, lName, ...titles){// notes that rest parameter can only be used once,
    // and must be used at the end
    //in this func, the first two args passed to the func will be assigned to fname and lname
    // and all the rest will be assigned as an array to titles
}

//      Spread Syntax -- getting values out of an iterable
// to pass the values of an array, it is trivial using spread syntax, consider the following
let x = [1,2,3,];
Math.max(...x) //gives 3, Math.max(x) wont work

let arr = [1,2,3,4]
let arr2 = [3,4,2,5,1]
let merged = [-1, ...arr, 0,-33,3443, ...arr2] //[-1, 1, 2, 3, 4, 0, -33, 3443, 3, 4, 2, 5, 1]

//works on strings too, since strings are iterables
let what = "hi???"
let not = [...what] // ['h', 'i', '?', '?', '?']
// shorted way of copying arrays
let p = [1,2,3,4]
let n = [...p]// much shorted than Object.assign()

// inBetween(a,b) function that checks if a val is between a and b(inclusive) to be used in filter 

function inBetween(lower, upper){
    return (x)=> (x>=lower)&&(x<=upper)
}
let a = [1, 2, 3, 4, 5, 6, 7];
a.filter(inBetween(3, 6)) // [3, 4, 5, 6]

// inArray(arr) checks if val is in array
function inArray(arr){
    return (x)=> arr.includes(x)
}

// given an array of objects to sort, writea function to sort them by field
let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
  ];

function byField(field){
    return (a, b)=> a[field]>b[field]? 1: -1;
}
users.sort(byField('name'))
// [
// {name: 'Ann', age: 19, surname: 'Hathaway'},
// {name: 'John', age: 20, surname: 'Johnson'},
// {name: 'Pete', age: 18, surname: 'Peterson'}
// ]

// -------------------------------------------------------------------------------------------------
//      The old Var, don't need it anymore
// -------------------------------------------------------------------------------------------------
//      Global object
// called window in NodeJs, global in other environments
// type window into the console and see the results
window.document// will give the current page as a doc
// can set properties using
window.testname = "john"// creates a special prop called testname: "john"
// can be used for polyfills
if(!window.Promise){
    //custom implementation of Promise feature
}
// -------------------------------------------------------------------------------------------------
//              Function Object, NFE
// Js functions are objects, i.e they can be add/remove properties, pass by reference, etc
// fn.name property gives the name of the function
let saysomething = function test(){

}
console.log(saysomething.name)// returns test

// function created inside array
let arrr = [function() {}];

alert( arr[0].name ); // <empty string>
// the engine has no way to set up the right name, so there is none


// length property gives the number of parameters
function f(a,b, ...c){

}
f.length// 2, rest parameters arent counted


// NFE - Named function expression
let saysay = function (one){} // not an NFE
saysay = function fn(one){} // an nfe
// -------------------------------------------------------------------------------------------------
//                  new Function syntax
// syntax-->let func = new Function([arg1, arg2, ...argN], functionbody);
// functionBody is string, this is used when server returns a string that ought to be
// run as code
let sum = new Function("a", "b", "return a-b");
sum(1,2)// -1

//note that function body has access to only local and global scope, and anything outside of those,
// two will not be in function body's lexical environment
// -------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------
//              Scheduling: setTimeout, setInterval
//
//syntax ->let timerId = setTimeout(func|code, [delay], [arg1], [arg2], ...)
// pass a REFERENCE to a func(dont run the funct), delay is optional(default 0) and in milisec
// args are optional

let pepe = setTimeout((val)=>val+1, 1000, 22) //will execute once
clearTimeout(pepe)// will cancel the function execution

//syntax -> let timerId = setInterval(func|code, [delay], [arg1], [arg2], ...)
// repeats function execution after given delay
let pepe1 = setInterval((val)=> val+1, 1000, 22)//
clearInterval(pepe1)

// -------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------
