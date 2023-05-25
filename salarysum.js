
function sumSalaries(obj){
    let sum = 0;
    for(let key in obj){
        if(typeof obj[key] === 'number')
            sum += obj[key];
           
    }
    return sum;
}