
function getplayerchoice(){
    return prompt("1 for rock, 2 for scissors, 3 for papers");
}

function getRandom(begin = 0, end) {
    return Math.floor(begin+ Math.random()*end)
}

function play(){
        const pChoice = parseInt(getplayerchoice());

        //const pChoice = 
        const compChoice = getRandom(3);
        if(pChoice === 1){
            if(compChoice == 1){
                        alert("both rocks, it's a tie");
                        return;
            }
            if(compChoice == 2){
                alert("rock beats scissors, you win!!");
                return;
            }
            if(compChoice = 3){
                alert("paper beats rock, you lose womp womp!!");
                return;
            }
        }
        else if(pChoice === 2){
            if(compChoice == 1){
                        alert("rock beats scissors, you lose womp womp!!");
                        return;
            }
            if(compChoice == 2){
                alert("both scissors, it's a tie");
                return;
            }
            if(compChoice = 3){
                alert("scissors beats paper, you win!!");
                return;
            }
        }
        else if(pChoice === 3){
            if(compChoice == 1){
                        alert("paper beats rock, you win!!");
                        return;
            }
            if(compChoice == 2){
                alert("scissors beats paper, you lose womp womp!!");
                return;
            }
            if(compChoice = 3){
                alert("both paper, its a tie!!");
                return;
            }
        }
        else 
        {
            alert("Not valid, please enter a valid");
        }
}

while(true){
    let test = confirm("Do you want to play Rock,paper scissors?");
    if(test) play();
    else{
        alert("thanks for playing");
        break;
    }
}
console.log("The first change I've made so in this simple code.This is purely to learn how git is working")