let computer
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

