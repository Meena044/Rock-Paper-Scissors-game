let humanScore=0;
let computerScore=0;
let humanSelection;
let computerSelection;
playGame();

function playGame(){
for(let i=1; i <= 5; i++){
console.log(`Match ${i} .............`)
humanSelection = getHumanChoice();
console.log(`Human: ${humanSelection}`);
computerSelection = getComputerChoice()
console.log(`Computer: ${computerSelection}`);
playRound(humanSelection, computerSelection);

}
winnerCheck(humanScore, computerScore);
}

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
    let humanChance= window.prompt("Enter ur choice: Rock, Paper, Scissor");
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
            console.log(`human score: ${humanScore}, computer score:${computerScore}`);
            return {humanScore, computerScore};
        }
        else if(humanChoice == "Rock" && computerChoice == "Scissor" ){
            console.log("You Win! Rock defeats Scissor");
            humanScore += 1;
            console.log(`human score: ${humanScore}, computer score:${computerScore}`);
            return {humanScore, computerScore};
        }
        else if(humanChoice == "Scissor" && computerChoice == "Paper"){
            console.log("You Win! Scissor defeats Paper");
            humanScore += 1;
            console.log(`human score: ${humanScore}, computer score:${computerScore}`);
            return {humanScore, computerScore};
        }
        else if(humanChoice == "Paper" && computerChoice == "Rock"){
            console.log("You Win! Paper defeats Rock");
            humanScore += 1;
            console.log(`human score: ${humanScore}, computer score:${computerScore}`);
            return {humanScore, computerScore};
        }
        else if(humanChoice == "Rock" && computerChoice == "Paper"){
            console.log("oops!!You lose:( Paper defeats Rock");
            computerScore += 1;
            console.log(`human score: ${humanScore}, computer score:${computerScore}`);
            return {humanScore, computerScore};
        }
        else if(humanChoice == "Scissor" && computerChoice=="Rock"){
            console.log("oops!!You lose:( Rock defeats Scissor");
            computerScore += 1;
            console.log(`human score: ${humanScore}, computer score:${computerScore}`);
            return {humanScore, computerScore};
        }
        else if(humanChoice == "Paper" && computerChoice=="Scissor"){
            console.log("oops!!You lose:( Scissor defeats Paper");
            computerScore += 1;
            console.log(`human score: ${humanScore}, computer score:${computerScore}`);
            return {humanScore, computerScore};
        }
        else
            return {humanScore, computerScore};
    }


function winnerCheck(humanScore, computerScore){
        if(humanScore < computerScore)
            console.log("loser")
        else if (humanScore > computerScore)
            console.log("Winner")
        else if (humanScore == computerScore)
            console.log("draw")
        else
            console.log("invalid match ")
    }
