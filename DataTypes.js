// ---------------------------------------------------------
//              Methods Of Primitives
// Objects require more complex ways to operate
// primitives do not, yet they too should have the ability
// to be manipulated using methods.

console.log("makethiscapital".toUpperCase());
// after .toUppercase is called, a new string object is created
// with the value of our string and toUpperCase is run on that
// object and it is console.logged and the new object is 
// destroyed. This object is called WRAPPER OBJECT

console.log(1.23333442.toFixed(4)); //same thing here

//notable example
let str = "test"
str.hi = "hi"; // wrapper object is created and writing is an error in strict mode
console.log(str.hi)
// if in strict mode then the result is an error, if not 
// then it is undefined

//note that null and undefined types have no methods


// ---------------------------------------------------------
//                      Numbers
// Two types - regular (64 bit 2^53-1 to -2^53+1) and bigInt
// 52 bits for digits 11 to store position of the decimal point
// and 1 bit for sign

let billion = 1000000000
let _billion = 1_000_000_000; // _ is syntactix sugar, ignored
console.log(_billion === billion); //will give true

let sciBillion = 1e9
console.log(sciBillion === billion); //will give true

let nano = 1e-9
console.log(nano);// = 0.0000000001

let hexa = 0xff;// =0xFF = 255
let octa = 0o377;// = 255
let bina = 0b1111111;// = 255

//toString(base)
//123.toString() NOT ALLOWED
123..toString()//allowed
123.23.toString()// allowed
(123).toString()//allowed

(255).toString(16)//returns 'ff', a string
(255).toString(16) === 'ff'// true

//Math.floor(), Math.ceil() exist and they do their namesake
//Math.round() rounds to the nearest integer and
//Math.trunc() gives the integer value before the decimal.

//two way to get precision
//
let num = 1.2345;
console.log(Math.round(num*100)/100)
console.log(Number(num.toFixed(2)))//toFixed returns a string


//isFinite and isNaN

//isNaN converts its arg into a number and checks equality 
//against NaN(not a number) note NaN === NaN is false
// NaN equals nothings, not even itself
//isFinite converts arg into a number and return false if
//conversion yields NaN/ Infinity/-Infinity
//note that (-)Infinity is (smaller)larger than all
console.log(isNaN(NaN))//true
console.log(isNaN("string"))// true
console.log(isFinite(-Infinity))//false
console.log(isFinite({}))//false


//conversions
//+ and Number() are strict conversions and raise error
//if the arg isn't a strict number
//but what about 100px, or 19€
console.log(parseInt("19$"))//will give 19(number)
//parseInt() reads a number until it can't
console.log(parseInt('123.3.4')); //gives 123.3
console.log(parseInt('a123'))//gives NaN

//parseFloat() also exists
console.log(parseFloat("12.2321.23"))//will give 12.2321


//parseInt(str, radix) exists, 
//parsefloat(str, radix) DOESNT EXIST
console.log(parseInt("0xff", 16));//gives 255
console.log(parseInt("0xff.ff", 16))//giives 244

//for random
console.log(Math.random())//value between 0 and 1
//for exponents
console.log(Math.pow(2, Math.sqrt(2)))// 2^sqrt(2)


function readNumber(){
    let num;
    do{
        num = prompt("enter valid num");
    }while(!isNaN(num))
    if(num === null || num === '') return null
    return +num;
}
console.log(`Read: ${readNumber()}`)

//random floating point number between min and max
function floatRand(min, max){
    let randNumb = min;
    for(let index = 0; index < (max-min); index++){
        randNumb += Math.random()
    }
    return randNumb;
}
// ---------------------------------------------------------
//              Strings- strings are IMMUTABLE

// single and double quotes mean the same, 
// use `(backticks) to embedd vars and write multiline strings

console.log(`1 + 2 = ${1+2}`)// gives 1+ 2 = 3
let bulletlist = `list
1. Something
2. Something else
3. Different something else`
console.log(bulletlist);// will print the list as is

// you know about special chars like \b \v \f \t \n ..etc

// find length- its a property, not a method, so no ()
console.log("how are you?".length)//12

//find individual char
console.log("something or else"[10]);//"o"-str at index 10
console.log("something or else".at(10)) //"o"-str at index 10
console.log("something or else".charAt(10))//returns str
"str".at(-1);; // will give r

//convert toUpperCase() or toLowerCase()
console.log("something or else".toUpperCase())
console.log("sOmeTimes Or not TIMEs".toLowerCase())
//sometimes or not times


// searching for substring
// str.indexOf(substr) -returns index of first match, or -1
console.log("test me you SOB".indexOf("you")) //8
console.log("test me you SOB".indexOf("nil")) //-1
//str.indexOf(substr, startingsearchindex)--optional
console.log("test me you SOB".indexOf("you", 9)) //-1

// str.lastIndexOf(substr, position) also exists, finds the last index where
// the substring occurs
console.log("This is a callback to simpler times".indexOf("e"))// 27
console.log("This is a callback to simpler times".lastIndexOf("e"))//3

// str.includes(subst, pos) //pos is optional
// returns true if str contains substr, else false
console.log("test me you SOB".includes("you", 3))// true
console.log("test me you SOB".includes("you", 9))// false

// str.startWith(substr), str.endsWith(substr) do what they say
console.log("test me you SOB".startsWith("you"))// false
console.log("test me you SOB".endsWith("sob".toUpperCase()))//T

// three ways to get substrings
// 1.slice - str.slice(start [, end]) -end optional & strt<end
// returns string from start to (not including) end
console.log("something or else".slice(1))//omething or else
console.log("something or else".slice(1, 3))// om
console.log("something or else".slice(9, 20))// or else
console.log("something or else".slice(20))// undefined
//neg positions mean start counting from the right
console.log("something or else".slice(-1, -3))//else

// 2. str.substring(start, [, end])- end optional
// same as slice, except start can be > end
// incase start > end , it just swaps them
console.log("something or else".substring(1, 3))//om
console.log("something or else".substring(10, 1))//omething

//to give the latin Alphabet
let str = ""
for(let i = 0; i<= 220; i++){
    str += String.fromCodePoint(i);
}
console.log(str)

//!"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~ ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜ

//this is helpful in remembering comparisons
console.log("a" > "A")// true

//to repeat, use str.repeate(n)
console.log("HI" + "!".repeat(10))//HI!!!!!!!!!!
//to trim whitespace, use str.trim
console.log("    *writing  *    ".trim()) //*writing  *

// search involves regular expression, so that will come


//function to return str back with the first character Upper
//cased

function ucFirst(str){
    return str.slice(0, 1).toUpperCase() + str.slice(1, str.length)
}
//check for inclusion of viagra or XXX
function checkSpam(str){
    return (str.toLowerCase().includes('viagra') || str.toLowerCase().includes('xxx')? true:false)
}

//function to truncate a string by adding ellipsis ... at the 
// end to meet the required string length
function truncate(str, maxlength){
    if(str.length <= maxlength){
        return str
    }else{
        return str.slice(0, maxlength-1) + "..."
    }
}

//function to convert money strings into numbers
function extractCurrencyValue(str){
    if(str.charAt(0) === '$'){
        if(Number(str.slice(1)) !== NaN){
            return Number(str.slice(1)) 
        }else return "not a valid input"
    }else{
        if(Number(str.slice(1)) !== NaN){
            return Number(str.slice(0)) 
        }else return "not a valid input"
    }
}
// ---------------------------------------------------------
//                  ARRAYS - are just objects
let arr1 = ["apple ", "bear", "banana", "cream", "h", "six ",
            "s", "three"]
//or 
let arr2 = new Array("something", 1, "the other one");
let fancyarr = new Array(2);//creates empty arr of len 2


//finding length using
arr1.length
//note that length is writable i.e if I do
// arr1.length = 2, then arr1 = [ "apple", "bear"]
// and then if I do arr1.length = 5, and arr1[4] gives 
// undefined

// search using
arr1[1];//note negative vals not allowed in []
arr1.at(1)//can use neg vals, will read from the last if so.
arr1.at(-1)// returns the last elem

//push-> add to the last, pop->delete from the last
//both change the array, pop returns the elem, push returns
//the index to which it was added.
arr1.pop()//
arr1.push("something")

//shift-> remove from the front, unshift->add to the front
//returns the elem
arr1.shift()//removes the first elem and returns it
arr1.unshift("one","two")//adds at front,returns new length

//push pop are faster(usually) than shift unshift

//loops- basic, for (let elem of array ) -> cycles through elem
for(let elem of arr1) console.log(elem + " bing! ")


//another kind of loop exists for(let key in obj) 
// this cycles through all the properties
let testingobj = [1, 2, 3, 4, 5]
testingobj["lord"] = "fraud";
testingobj.whatever = "whatchagonnado"
testingobj.setshit = {"a": 2222, "hehe": 444324423}
//Above stuff is legal since ARRAYS are objects
let emptystr = ""
for(let key in testingobj) emptystr += key + ", "
//'0, 1, 2, 3, 4, lord, whatever, setshit, '

//cant compare arrays using == or even ===, have to use loops

//function to take valid numberic user input and return the sum

function sumInput(){
    let arr = []
    while(true){
        let x = prompt("Enter a number")
        let sum = 0;
        if(x === null || x === "" || isNaN(x)){
            for(let val in arr) sum += (val);
            return sum;
        }
        
        arr.push(Number(x))

    }
}




//possible sizes of max subarray sum include zero to 
//length of arr
// for each size, look up the largest, the among those, 
// select the largest

function maxSub(arr){
    let thisSizeLargest = 0;
    let innerlargest = [];
    let largest = 0;
    for(let i = 1; i<= arr.length; i++){
        for(let j = 0; j< arr.length; j++){
            if(findSum(arr, j, j+i) > thisSizeLargest){
                thisSizeLargest = findSum(arr, j, i+j);
            }
        }
        innerlargest[i-1] = thisSizeLargest;
    }
    for(let i = 0; i< innerlargest.length; i++){
        if(innerlargest[i] > largest){
            largest = innerlargest[i]
        }
    }
}
function findSum (myarr, left, right){
    let sum = 0;
    for(let i= left; i< right; i++){
        sum += myarr[i];
    }
    return sum;
}

// Although this works, it is very slow, O(n^2)

//quicker solution would be to pass through the elements
// adding them and keeping a partial sum stored in an array. 
//As soon as your sum becomes neg, set partial sum to zero
// and keep choosing using Math.max()



//---------------------------------------------------------------------
//                      ARRAY-METHODS

// splice - arr.splice(start, [,deleteCount, elem1, elem2 ,.. ,elemN])
// deletes from start deleteCount number of elems and insert elm1, elm2...
// into that place and returns the delete items 

let arr = ["this", "language", "uses", "too", "many", "commas"]
arr.splice(0, 2, "Javascript")//returns ['this', 'language']
// arr = ['Javascript', 'uses', 'too', 'many', 'commas']

//can also add by setting deleteCount to 0
arr.splice(arr.length-1, 0, "!!!")
//'Javascript', 'uses', 'too', 'many', '!!!', 'commas']


//slice - arr.slice([start], [end]), neg values allowed
//returns a new arr from start to (not including) end
//default start is 0, default end is arr.length-1, arr.slice() creates
//copy of array
arr.slice(1, 3)// 'uses', 'too'], arr is the same
arr.slice(-4)// reads from the end, returns ['too', 'many', '!!!', 'commas']



//concat- arr.concat(arg1, arg2...), add args to arr, if any arg is array
//then adds that arrays vals to arr. For objects with special property
// Symbol.isConcatSpreadable = true, then its vals are also added,
// else the objects are added as whole.
//returns the arr

arr.concat("1", "2", "3")
//['Javascript', 'uses', 'too', 'many', '!!!', 'commas', '1', '2', '3']


// arrays also have indexOf() and lastIndexOf() as as strings
// indexOf searches from the front, lastIndexOf from the end


//arrays also have includes(val)

//finding objects with certain conditions
// 
let result = arr.find(function (item, index, array){
    //if true is returned, item is returnd and iteration stops
    //for falsy scenario returns undefined
})
// function is called for each item,

let users = [
    {id: 1, name: "something"},
    {id: 2, name:"nothing"},
    {id: 3, name:"madness"},
]
let userlist = users.find((val)=> val.id !== null)//will give
// {id: 1, name: 'something'}

// findIndex returns the index, instead of object like find
// findLastIndex returns the last index, i.e first from the end
userlist = users.findIndex(val => val.id ===3)// returns 2
userlist = users.findLastIndex(val => val.id ===3)// returns 2 as well here


//filter, like clojure filter, only select those values for which
// the function returns a true value, syntax same as find
userlist = users.filter(val=>val.id %2 ===0)//[{id: 2, name: 'nothing'}]


// TRANFORMING AN ARRAY

//map - arr.mapy(fn)-- syntax same as find
arr = ["this", "language", "uses", "too", "many", "commas"]
arr.map(item => item.length >= 5)
// [false, true, false, false, false, true]


// sort(fn)- sorts it in place based on fn, or default by converting to str
let myarr = [1, 2 , 15, 4, 5]
myarr.sort()// [1, 15, 2, 4, 5], cuz string are being compared, not numbers

myarr.sort(function (a, b){
    console.log(a + "<>" + b)
    return a-b;
}) //[1, 2, 4, 5, 15]

// the comparer fn needs to take two values, and return
// 1 if a>b, 0 if a==b, -1 if a<c. 
myarr.sort((a,b)=>a-b)// //[1, 2, 4, 5, 15]

//arr.reverse reverses the order of the string

//str.split(delim) returns an arr with string
// split along a specified delimiter
let str = "now this is what I'm talking about huh??"
str.split("a")// ['now this is wh', "t I'm t", 'lking ', 'bout huh??']

// arr.join(glue) takes an array and returns the string of arr items
// with glued between em

let userList = [
    {id: 1, name: "something"},
    {id: 2, name:"nothing"},
    {id: 3, name:"madness"},
]
userList.join(",,,,")
//'[object Object],,,,[object Object],,,,[object Object]'
userList = ["JavaScript", "is ", "so ", "very", "tedious"]
userList.join(",")// 'JavaScript,is ,so ,very,tedious'


// arr.reduce(fn)
//heres the syntax
let value = arr.reduce(function(accumulator, item, index, array){
    //////////
}, [initial])
//initial is optional, and equals accumulator. item is the current item
// index is the current index, array is....well array

//like clojure, it returns (f(f(f...(f x [initial]) y)z) lastElem)
userList = ["JavaScript", "is ", "so ", "very", "tedious"];
userList.reduce((sum, current)=> sum+current, "")
// 'JavaScriptis so verytedious'

userList = [1, 2, 3, 4, 5, 6, 7]
userList.reduce((sum, current)=> sum+ current)// 48

//note that reduce will give error if arr is empty and initVal isnt given
//arr.reduceRight(), starts from the right.

// Array.isArray(object) returns true if obj is array, false otherwise

Array.isArray(userList)//true
Array.isArray({})// false

// arr.some(fn)/ arr.every(fn) check the array and do the obvious

//can use arr.every(fn) to compare to arrays
function arraysEqual(arr1, arr2) {
    return arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index]);
  }

//create a function that removes all dashes and returns the string in
//camelCase
function camelize(str){
    let x = str.split("-");
    let empty = ""
    for(let item of x){
        
        if (item !== ""){
            empty += item[0].toUpperCase()+item.slice(1);
        }    
    }
    return x[0]===""?  empty[0].toUpperCase() + empty.slice(1):empty[0].toLowerCase() + empty.slice(1)

}


//filterRange
function filterRange(arr, start, end){
    let x= arr.filter((val)=>{
            if(val >=start && val < end)
            //console.log(val)
            return val;
        })

    return x

}

// filterRangeInPlace
function filterRangeInPlace(arr, start, end){
    let arr = arr.filter((val,index) =>{
        if(val< start || val >= end){
            arr.splice(arr[index], 1) 
        }
    })

}

//sort in decreasing order
function revSort(arr){
    return arr.sort((a, b)=>  b-a)
}

// copy and sort Array
function copySorted(arr){
    let x = [];
    return x.concat(arr).sort((a,b)=>a-b)
}

// extendable calculator
function Calculator(){
    this.OpList = {
        "+": (a, b)=> a+b,
        "-": (a, b)=> a-b,
    }
    this.addMethod = function(strOp, fn){
        this.OpList[strOp] = fn;
    }
    this.calculate =function (str){
        let x = str.split(" ")
        let a = +x[0];
        let b = +x[2];
        let Op = x[1];
        return this.OpList[Op](a,b);
    }
}


//given an array of objects with each obj having user.name, convert into 
//convert into array of name

function convertToNames(arr){
    let x = [];
    let i = 0;
    for(let obj of arr){
        x[i++] = obj.name
    }
    return x;
}

//given an arr of objs, with name, surname and id props, 
// make new arr with name+surname, id as is
function addNames(arr){
    let initArr = [];
    let counter = 0;
    for(let obj of arr){
        initArr[counter++] = {
            fullName: (obj.name + " " + obj.surname), 
            id: obj.id
        }
    }
    return initArr;

}
//or using map
function shortAddNames(arr){
    return arr.map(user=> ({
        fullName: `${user.name} ${user.surname}`,
        id: user.id,
    }))
}

//given array of objects, sort users by age
function sortByAge(arr){
    return arr.sort((userA,userB)=> userA.age - userB.age)
}

// write a function to shuffle(array)
function shuffle(arr){
    for(let counter = 0; counter<arr.length ;counter++){
        let one = Math.round(counter + Math.random()*(arr.length-1))
        
        //swapping the arr[one], arr[i]
        let temp = arr[counter];
        arr[counter] = arr[one];
        arr[one] = temp;
        //console.log(arr)
        console.log("count:" +counter + ",ar.le:" + arr.length)
       
    }
}

//or use the Fisher-Yates Shuffle
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
  
      // swap elements array[i] and array[j]
      // we use "destructuring assignment" syntax to achieve that
      // you'll find more details about that syntax in later chapters
      // same can be written as:
      // let t = array[i]; array[i] = array[j]; array[j] = t
      [array[i], array[j]] = [array[j], array[i]];
    }
  }



// write a fn to return avg of arr of objs with property age
function getAverageAge(arr){
    let sum = 0;
    for(let obj of arr){
        sum += +obj.age;
    }
    return sum/(arr.length)
}


// get unique items of an array
function unique(arr){
    let x = []
    let index = 0;
    for(let item of arr){
        if(!x.includes(item))  
            x.splice(index++, 0, item)
    }
    return x;
}

//given a arr of objs with props id: name: and age:, create a new arr with
// id as the key and arr items as values
function groupById(arr){
    let x = {};
    for(let obj of arr){
        x[obj.id] = obj;
        console.log(obj.id +":obj.id," +",obj:" +'obj')
    }
    return x
}

//using reduce
function groupByIdReduce(arr){
    return arr.reduce((accumulator, arrObj)=> {
        accumulator[arrObj.id] = arrObj;
        return accumulator;
    },{})
}


// ------------------------------------------------------------------------
//                  MAP AND SET

//                      MAP- 
//any time of key is possible, even objects, unlike regular objects
//where each key is converted to string
// Methods and properties are:

// new Map() – creates the map.
// map.set(key, value) – stores the value by the key, returns new map
// map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
let map = new Map();
map.set(1,2).set(2,1).set(3,1)//can chain cuz set returns new map
map.get(2)//returns 1
//or
map = new Map([
    [1,2],
    [2,3],
    [3,4]
])
// map.has(key) – returns true if the key exists, false otherwise.
// map.delete(key) – removes the element (the key/value pair) by the key.
// map.clear() – removes everything from the map.
// map.size – returns the current element count.
//NOTE: Insertion order is maintained
// differs from objects in two ways, 
// key can be any val, and.. I'll have to come back

//map.keys() returns an iterable of keys, NOT AN ARRAY, 
// use Array.from(map.keys()) to get an array from iterables
//map.values() returns an iterable of values,
//map.entries() returns an iterable of [key, value] pairs

//converting an object into a map
let obj = {name: "right", surname:"here"};
let mymap = new Map(Object.entries(obj));
mymap;//Map(2) {'name' => 'right', 'surname' => 'here'}

//converting a map into an object
mymap = new Map();
obj = Object.fromEntries(myamp)// {1: 2, 2: 3, 3: 4}

// forEach method exists
mymap.forEach((value,key,map)=>{console.log(value)})

//                       SET
//collection of unique values, can be objs
// Its main methods are:

// new Set([iterable]) – creates the set, and if an iterable object is 
//provided (usually an array), copies values from it into the set.
let set = new Set([1,2,2,3,3,4,5]);//{1, 2, 3, 4, 5}
// set.add(value) – adds a value, returns the set itself.
// set.delete(value) – removes the value, returns true if value existed at the moment of the call, otherwise false.
// set.has(value) – returns true if the value exists in the set, otherwise false.
// set.clear() – removes everything from the set.
// set.size – is the elements count

//set also has a forEach function
set.forEach((value, valueAgain, set)=>{
    console.log(value)
})

//for compatiblity reasons, set.keys() gives iterable object for values,
// set.values() gives iterable object for values,
// set.entries() returns an iterable of [value, value]

// Write a function aclean(arr) that returns an array cleaned from anagrams.
function aclean(arr){
    let map = new Map();
    arr.forEach((val)=>{
        let sorted = val.toLowerCase().split("").sort().join("");
        console.log(map)
        map.set(sorted,val);
    });
    return Array.from(map.values());
}


// Create a function unique(arr) that should return an 
// array with unique items of arr
function unique(arr){
    let set = new Set(arr);
    return set;
}

//-------------------------------------------------------------------
//      SKIPPED WEAKMAPS AND WEAKSETS



//-------------------------------------------------------------------
//          OBJECT.KEYS, VALUES, ENTRIES

//salary object with arbitrary number of salaries
//fn to returns sum of all salaries using object.values and for...of loop

function sumSalaries(obj){
    let newSal = Object.values(obj);
    let sum = 0;
    for(let x of newSal){
        sum += x;
    }
    return sum;
}

//Write a function count(obj) that returns the number of properties 
//in the object:
function count(obj){
    let iter = Object.entries(obj);
    return iter.length
}


// ------------------------------------------------------------------
//              DESTRUCTURING ASSIGNMENT - just like clojure
// Two types, array destructuring and object destructuring

// Array Destructuring
// syntax
//let [item1 = default, item2, ...rest] = array;
// item1 is assigned to the first item of array, if array[0] doesn't exist
// then item1 is assigned default val. Same for item2, except no default val,
// only undefined if arr[1] doesn't exist
// ...rest(... is the spread operator) is an array assigned to rem elems of
// array
// default values can be object or even function calls
let [x = prompt("something", y = prompt("something else"))] = ["jules"]
console.log(x, y)

let [p = "testing", ...rem] = [1,2,3,4,5]// rem = [2,3,4,5]

let s, r, t;
[s,r,t] = [1,2,3]// s == 1, r==2, t==3



//Object Destructing




//Nested Destructuring and smart functions
