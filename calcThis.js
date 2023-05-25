// this refers to the object itself. Remember that.
let calculator = {
    read(){
        this.a = prompt("Enter first value", 0);
        this.b = prompt("Enter the second value", 0)
    },
    sum(){
        return Number(this.a) + Number(this.b);
    },
    mul(){
        return this.a*this.b;
    }
}