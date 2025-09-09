let humanScore=0;
let computerScore=0;

function getComputerChoice(){
    let computerChance;
    let chance= Math.floor(Math.random()* 3);
    if (chance === 0)
        return computerChance="Rock";
    else if(chance === 1)
        return computerChance="Paper";
    else
        return computerChance="Scissor";
}

function getHumanChoice(){
    let humanChance= prompt("enter ur choice; Rock,Paper, Scissor");
    return humanChance;
}

function playRound(humanChoice, computerChoice){
    if(humanChoice.toLowerCase() === "rock")
        humanChoice = "Rock";
    else if(humanChoice.toLowerCase() === "paper")
        humanChoice = "Paper"
    else if(humanChoice.toLowerCase() === "scissor")
        humanChoice = "Scissor"
    else
        return humanChoice;

    if(humanChoice === computerChoice){
        console.log("draw match");
        console.log(humanScore, computerScore)
    }
    else if(humanChoice == "Rock" && computerChoice == "Scissor" || humanChoice == "scissor" && computerChoice == "paper" || humanChoice == "Paper" && computerChoice == "Rock"){
        console.log("You Win! Rock defeats Scissor/Scissor defeats Paper/Paper defeats Rock");
        humanScore += 1;
        console.log(humanScore, computerScore);
    }
    else if(humanChoice == "Rock" && computerChoice == "Paper" || humanChoice == "Scissor" && computerChoice=="Rock" || humanChoice == "Paper" && computerChoice=="Scissor"){
        console.log("oops!!You lose:( Paper defeats Rock/Rock defeats Scissor/ Scissor defeats Paper");
        computerScore += 1;
        console.log(humanScore, computerScore);
    }
        
}

let humanSelection = getHumanChoice();
console.log(humanSelection);
let computerSelection = getComputerChoice()
console.log(computerSelection);
playRound(humanSelection, computerSelection);
