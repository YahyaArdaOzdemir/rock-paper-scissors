let computer;
let human;
let computerScore = 0;
let humanScore = 0;

function getComputerChoice(){
    let x = Math.floor(Math.random()* 100) + 1
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
    human = x.slice(0, 1).toUpperCase() + x.slice(1).toLowerCase();
    if(human !== "Rock" && human !=="Paper" && human !=="Scissors"){
        return "Sire, I beseech thee. Choose either rock, paper or scissors.\n"
    }
    console.log("You have made your choice...");
    return human;
}

function playRound(human, computer){
    human = getHumanChoice();
    computer = getComputerChoice();
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