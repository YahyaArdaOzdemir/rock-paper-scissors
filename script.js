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

function playRound(humanChoice){
    p.textContent = "";
    let human = humanChoice;
    let computer = getComputerChoice();
    div.textContent = "Humanity has chosen: " + human + " against " +computer;
    if((human === "Rock" && computer === "Scissors") ||
        (human === "Paper" && computer === "Rock") ||
        (human === "Scissors" && computer === "Paper")){
            humanScore++;
            divz.textContent ="Humanity is VICTORIOUS!";
            
        }
    else if (human === computer){
        divz.textContent = "How could this be? It's a DRAW!";
    }
    else{
        computerScore++;
        divz.textContent ="Humanity has been DEFEATED!";
        
    }
    leftscore.textContent = humanScore;
    rightscore.textContent = computerScore;
    if(humanScore === 5){
        p.textContent = "Humanity has defeated the evil computers. Long live the king!";
        humanScore = 0;
        computerScore = 0;
    }
    else if(computerScore === 5){
        p.textContent = "Humanity has lost against the evil computers. May god preserve us...";
        humanScore = 0;
        computerScore = 0;
    }


}

function playGame(){
    humanScore = 0;
    computerScore = 0;


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

const rock = document.querySelector("#rock");
rock.addEventListener("click", () => playRound("Rock"));

const paper = document.querySelector("#paper");
paper.addEventListener("click", () => playRound("Paper"));

const scissors = document.querySelector("#scissors");
scissors.addEventListener("click", () => playRound("Scissors"));

const div = document.querySelector("#versus");
const divz = document.querySelector("#result");
const leftscore = document.querySelector("#leftscore");
const rightscore = document.querySelector("#rightscore");


const score = document.querySelector("#tally");

const p = document.querySelector("p");
