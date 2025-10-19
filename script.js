let computer;
let human;

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
    console.log(x);
    return computer;
}

function getHumanChoice(){
    let x = prompt("Will you have 'Rock', 'Paper' or 'Scissors', sire?")
    human = x.slice(0, 1).toUpperCase() + x.slice(1).toLowerCase();
    if(human !== "Rock" && human !=="Paper" && human !=="Scissors"){
        return "Sire, I beseech thee. Choose either rock, paper or scissors."
    }
    console.log("You have made your choice...");
    return human;
}