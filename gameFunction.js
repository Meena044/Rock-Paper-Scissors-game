let humanScore=0;
let computerScore=0;
let humanSelection;
let computerSelection;
let roundcounter=0;


let final = document.getElementById('final');

const hover = document.querySelector("#selection");
hover.addEventListener("mouseover", (e)=> {
    e.target.style.width = "85%";
    e.target.style.borderColor = "rgba(243, 147, 225, 1)";

})

const out = document.querySelector("#selection");
out.addEventListener("mouseout", (e) => {
    e.target.style.width = "75%";
    e.target.style.borderColor = "palegoldenrod";
})

const press = document.querySelector("#selection");
press.addEventListener("click", (e) => {
    e.target.style.borderColor = "rgba(173, 241, 164, 1)";
})


const rockBtn = document.querySelector('#rock');
rockBtn.addEventListener("click", () => {
    computerSelection = getComputerChoice();
    playRound("Rock",computerSelection);
    document.getElementById('human').textContent= `Human Selection = Rock`;
    document.getElementById('computer').textContent = `Computer Selection = ${computerSelection}`;
    });


const paperBtn = document.querySelector('#paper');
paperBtn.addEventListener("click", () => {
    computerSelection = getComputerChoice();
    playRound("Paper",computerSelection);
    document.getElementById('human').textContent= `Human Selection = Paper`;
    document.getElementById('computer').textContent = `Computer Selection = ${computerSelection}`;
    });


const scissorBtn = document.querySelector('#scissor');
scissorBtn.addEventListener("click",  () => {
    computerSelection = getComputerChoice();
    playRound("Scissor",computerSelection);
    document.getElementById('human').textContent= `Human Selection = Scissor`;
    document.getElementById('computer').textContent = `Computer Selection = ${computerSelection}`;
    });


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


function playRound(humanChoice, computerChoice){

        const roundResult = document.querySelector(".result");
        const roundState = document.querySelector(".resultstate");

        if(roundcounter === 0){
            final.textContent = "";
        }
        
        if(humanChoice === computerChoice){
            roundResult.textContent="It's a Draw";
            roundState.textContent=`human score: ${humanScore}, computer score:${computerScore}`;
            roundResult.style.color = "purple";
        }
        else if(humanChoice == "Rock" && computerChoice == "Scissor" || humanChoice == "Scissor" && computerChoice == "Paper" || humanChoice == "Paper" && computerChoice == "Rock"){
            roundResult.textContent =`You Win! ${humanChoice} defeats ${computerChoice}`;
            humanScore += 1;
            roundResult.style.color = "green";
        }
        
        // else if(humanChoice == "Rock" && computerChoice == "Paper" || humanChoice == "Scissor" && computerChoice=="Rock" || humanChoice == "Paper" && computerChoice=="Scissor")
            
        else{
            roundResult.textContent =`oops!! You lose ${computerChoice} defeats ${humanChoice}`;
            computerScore += 1;
            roundResult.style.color = "red";
        }
        
        roundState.textContent =`human score: ${humanScore}, computer score:${computerScore}`;

        roundcounter++;

        if(roundcounter===5){
            winnerCheck(humanScore, computerScore);
            humanScore =0;
            computerScore=0; 
            roundcounter =0; 
        }
}

function winnerCheck(humanScore, computerScore){
        
        if(humanScore < computerScore){
            final.textContent="5 rounds result: Loser";
            final.style.color = "red";
        }
        else if (humanScore > computerScore){
            const final = document.getElementById('final');
            final.textContent="5 rounds result:Winner 🏆🥇✨👏";
            final.style.color = "green";
        }
        else{
            const final = document.getElementById('final');
            final.textContent="5 rounds result:Draw match";
            final.style.color = 'purple';
        }
}
