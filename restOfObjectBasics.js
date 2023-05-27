//----------------------------------------------------------
// new Operator- allows to create many similar objects
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

//----------------------------------------------------------

//----------------------------------------------------------

//----------------------------------------------------------