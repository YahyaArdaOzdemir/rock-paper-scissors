let computerScore = 0;
let humanScore = 0;

function getComputerChoice(){
    let x = Math.floor(Math.random()* 100) + 1
    let computer;
    if(x < 34){
        computer = "Rock"
    }
    else if(x < 67){
        computer = "Paper"
    }
    else{
        computer = "Scissors"
    }
    return computer;
}

function getHumanChoice(){
    let x = prompt("Will you have 'Rock', 'Paper' or 'Scissors', sire?")
    let human;
    human = x.slice(0, 1).toUpperCase() + x.slice(1).toLowerCase();
    console.log("You have made your choice...");
    return human;
}

function playRound(){
    let human = getHumanChoice();
    let computer = getComputerChoice();
    if((human === "Rock" && computer === "Scissors") ||
        (human === "Paper" && computer === "Rock") ||
        (human === "Scissors" && computer === "Paper")){
            humanScore++;
            console.log("Humanity has chosen: " + human + " against " +computer);
            console.log("Humanity is VICTORIOUS! Score: " + humanScore + " / " + computerScore);

        }
    else if (human === computer){
        console.log("Humanity has chosen: " + human + " against " +computer);
        console.log("How could this be? It's a DRAW! Score: " + humanScore + " / " + computerScore)
    }
    else{
        computerScore++;
        console.log("Humanity has chosen: " + human + " against " +computer);
        console.log("Humanity has been DEFEATED! Score: " + humanScore + " / " + computerScore)
    }

}

function playGame(){
    humanScore = 0;
    computerScore = 0;
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();

    if(humanScore > computerScore){
        return "Humanity has defeated the evil computers. Long live the king!";
    }
    else if(humanScore < computerScore){
        return "Humanity has lost against the evil computers. May god preserve us...";
    }
    else{
        return "The battle of supremacy against computers rages on.";
    }
}