function isEmpty(obj){
    
    for(let key in obj){
        return false;
    }
    return true;
}

let user = {}
let test = {notempty: "yes"}

isEmpty(user);
isEmpty(test);