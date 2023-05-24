function reverseString(str){
    if(typeof(str) !== 'string') {
        console.log("not a string, try again");
        return;
    }
    let ne = (str.toLowerCase()).split("");
    let hm = [];
    let j = 0
    for(let i = str.length; i>=0; i--)
    {
        hm[j++] = ne[i];
    }
    
    return (hm.join(""));
}

function palindromes(str){
    if(typeof(str) !== 'string') {
        console.log("not a string, try again");
        return;
    }
    let one = str.split("");
    let two = [];
    ;
    let punc = [",", "'", '"', "/", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
    let j = 0
    for(let i = 0; i < one.length; i++)
    {
        if(punc.includes(one[i]))
        {
            i++;
            i--;
        }
        else
        {
            two[j++] = one[i];
        }
        
    }
    
    let three = two.join("");
    if(three.toLowerCase() === reverseString(three).toLowerCase())
    {
        console.log("Palindrome, huzzah");
    }
    else console.log("Not a palindrome, womp, womp");
}