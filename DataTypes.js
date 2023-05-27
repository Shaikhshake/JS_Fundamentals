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
// ---------------------------------------------------------

