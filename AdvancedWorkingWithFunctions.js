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
// -------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------
