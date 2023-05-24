function leapYears(num){
    if( typeof num === 'Nan')
    {
        console.log("not a number try again");
        return;
    }   
    if(num%400 === 0)
    {
        console.log("a leap year");
        return;
    } 
    else if(num % 100 === 0)
    {
        console.log("not a leap year");
        return;
    } 
    else if(num % 4 === 0)
    {
        console.log("leap year");
        return;
    }   
    else console.log("not a leap year");
}