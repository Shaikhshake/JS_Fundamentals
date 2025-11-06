// Class inheritance is a way for one class to extend another class.
// So we can create new functionality on top of the existing.

//syntax is
// class Class1 extends <expression>{}
//note that it can be any expression
// so, this is valid code
function f(phrase) {
    return class {
      sayHi() { console.log(phrase); }
    };
  }
  
class User extends f("Hello") {}
  
new User().sayHi(); // Hello

class Vehicle {
    constructor(name, cost, wheelCount){
        this.name = name
        this.cost = cost
        this.wheelCount = wheelCount
    }

    declareMaxSpeed = (maxSpeed) => {
        console.log(this.name, "has a max speed of :", maxSpeed)
    }

}

let truck = new Vehicle("truck", "45l", 16)
console.log("Declaring max speed vvvvvv ")
truck.declareMaxSpeed(25)


class Car extends Vehicle{
    constructor(name, cost){
        super(name, cost, 4)
    }

}

let nexon = new Car("nexon", "10l")
console.log("Nexon's wheelcount: ", nexon.wheelCount, ", name: ", nexon.name, ", cost: ", nexon.cost)
console.log("Inheriting a method from parent: ")
nexon.declareMaxSpeed(180)


// To override constructor, 
// you must call the parent class constructor and do it
// before you use "this"
// when A regular function is executed with new, 
// it creates an empty object and assigns it to "this"
// but a when a derived constructor run, it expects
// the parent constructor to do this job.

            // **************************************//
//=============================================================== //


// Overriding class fields
// There's some slightly odd behavior in JS
// When the parent constructor is called in the derived class, 
// it uses the overridden method.

// …But for class fields it’s not so. 
// As said, the parent constructor always uses the parent field.

// Why is there a difference?
// Well, the reason is the field initialization order. 
// The class field is initialized:
// 1. Before constructor for the base class 
//    (that doesn’t extend anything),
// 2. Immediately after super() for the derived class.


class Clock{
    timer=undefined;
    constructor({template}){
        this.template = template
    }
    render= () => {
        let date = new Date();
  
        let hours = date.getHours();
        if (hours < 10) hours = '0' + hours;
    
        let mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;
    
        let secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;
        
        let output = this.template
          .replace('h', hours)
          .replace('m', mins)
          .replace('s', secs);
        
        console.log(output); 
    }
    start = () => {
        this.render();
        this.timer= setInterval(this.render, 1000)
    }
    stop = () => {
        clearInterval(this.timer)
        process.exit()
    }
    

}


class ExtendedClock extends Clock{
    constructor({template, precision=1000}){
        super({template})
        this.precision = precision
    }
    start = () => {
        this.render()
        this.timer = setInterval(this.render, this.precision)
    }
}


let newClock = new ExtendedClock({template: "s:m:h", precision: 250})
newClock.start()
setInterval(newClock.stop, 5000)