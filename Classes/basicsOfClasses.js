// syntax
class MyClass {
    constructor(...args) {}
    method1() {}
    method2() {}
    // and so on ...
}
// MyClass is technically a function (the one that we provide as constructor), while methods, getters and setters are written to MyClass.prototype.



// use new MyClass(...args) to create a new object

class MyUser{
    constructor(name){
        this.name = name;
    }
    sayHi(){
        console.log("Hi! ", this.name)
    }
}

let aUser = new MyUser("shaikh")
aUser.sayHi() // will produce "Hi! shaikh" on console

// classes are functions
console.log("Type of User class: ", typeof MyUser)

// In js, each object has a special hidden property [[Prototype]]
// this is either null, or it references another object.
// That object is called a prototype

// prototype obj 
//      ^
//      |
//      |  [[Prototype]]
//      |
//    object

// What class User {...} construct really does is:

// 1.Creates a function named User, that becomes the result of the 
//   class declaration. The function code is taken from the constructor 
//   method (assumed empty if we don’t write such method).
// 2.Stores class methods, such as sayHi, in User.prototype.


console.log(Object.getOwnPropertyNames(MyUser.prototype)) 
//[ 'constructor', 'sayHi' ]


class User {

    constructor(name) {
      // invokes the setter
      this.name = name;
    }
  
    get name() {
      return this._name;
    }
  
    set name(value) {
      if (value.length < 4) {
        console.log("Name is too short.");
        return;
      }
      this._name = value;
    }
  
  }
  
let user = new User("John");
console.log(user.name); // John
  
user = new User(""); // Name is too short.
console.log(user) // User {}

class User1 {
    name = "John";
}

let userForClassFields = new User1()
console.log(userForClassFields.name) // John
console.log(User1.prototype.name) // undefined

// Binding functions
// basic syntax
//let boundFunc = func.bind(context)
// lets you call boundFunc(), while executing func with
// context, example below

let aname = {
    firstName: "Hi"
}
function func() {
    console.log(this.firstName)
}

let boundFunc = func.bind(aname)
boundFunc(); //gives Hi
// all args are passed to original func as is

// try with an object method

let user2 = {
    firstName: "harry", 
    sayHi() {
        console.log("Hi ", this.firstName)
    }
}
for(let key in user2){
    console.log("Key:", key)
}
// Key: firstName
// Key: sayHi


let sayHi = user2.sayHi.bind(user2)
// it can be called without the object, as it defined
sayHi()
setTimeout(sayHi, 1000)
// even if the value of user changes within 1 second
// sayHi uses the pre-bound value which is reference to the old user object
user2 ={
    sayHi(){
        console.log("Hi Noone")
    }
}



// for classes, we don't have to either of the above methods

class Button {
    constructor(val){
        this.val = val
    }
    click = ()=> {
        console.log("val: ", this.val)
    }
}

let button = new Button("helllllooooo")
setTimeout(button.click, 1000)

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
        
        console.log("template:  ", this.template)
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

let newClock = new Clock({template:"h:m:s"});
newClock.start()
setInterval(newClock.stop, 5000)

