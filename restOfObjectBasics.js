//----------------------------------------------------------
//              new Operator
//m allows to create many similar objects
// uses constructor functions to do , take this example

function User(username){//constructor are named with a capital
    //letter and only used with the new operator
    this.name = username;
    this.age = 22;
}

let mypersona = new User("Shaikhy");
//can omit paren i.e new User; is fine too if no arg required
for (let key in mypersona) {
    console.log(mypersona[key] + " ")
}

//it creates a new object, assigns it to 'this', function body
//executes and 'this' is returned


/*
let arr = [];
for(let i = 0 ; i < 3 ; i++){
    arr.push(prompt("Enter the name of your enemies", "dungbomb"));
}
arr.forEach(el => {console.log(el + " sucks!")});
*/

//new calc using new
function Calculator(){
    this.read = function (){
        this.a = prompt("Num 1", 0);
        this.b = prompt("Num 2", 0);
    }
    this.sum = function (){
        return Number(this.a) + Number(this.b);
    }
    this.mul = function (){
        return this.a * this.b;
    }
}

let calcyalator = new Calculator;
calcyalator.read();
console.log("sum :" + calcyalator.sum() + ", mul: "+ calcyalator.mul())

//new accumulator
function Accumulator(startingVal){
    this.value = startingVal;
    this.read = function (){
        let queryResult = prompt("Enter the number to be added", 0);
        this.value += Number(queryResult);
    }
}
let accumulator = new Accumulator(10);
accumulator.read();
accumulator.read();
console.log(accumulator.value);



//----------------------------------------------------------
//          Optional chaining
let element = document.querySelector('.elem').innerHTML;
//in the above case if no element with class .elem exists then the result is null and will through and error, however if it were undefined then no further problems would occur
element = document.querySelector('.elem')?.innerHTML;
//this code will return undefined if .elem doesn't exist
//operator  -->>>> ?.
//note that only the value before ?. is optional, so in
console.log(user?.address.street)// it is okay for user to 
//not exist(although user must be a declared variable), but 
//once a user, does, so must the address 
//and the street, else error occurs.


//use ?.() to check for methods and  ?.[] for properties

//----------------------------------------------------------
//              Symbol Type
//Leaving this for now. Seems to too technical, will come back
// later when basics are covered

//----------------------------------------------------------
//          Object To primitive Conversions
// doesn't seem very important, will return when needed.
// use http://www.adequatelygood.com/Object-to-Primitive-Conversions-in-JavaScript.html

