let computerChoice;
let humanChoice;
let computerScore = 0;
let humanScore = 0;

//Front-End: Create three buttons: Rock, Paper and Scissors
const buttonRock = document.createElement("button");
buttonRock.textContent = "Rock";
// Anton fragen, warum das nicht geht aber Zeile 18 schon????
// buttonRock.addEventListener("click",console.log("Rock"));
buttonRock.addEventListener("click",() => playRound("rock"));
const buttonPaper= document.createElement("button");
buttonPaper.textContent = "Paper";
buttonPaper.addEventListener("click",() => playRound("paper"));
const buttonScissors = document.createElement("button");
buttonScissors.textContent = "Scissors";
// Hierunter ist Zeile 18
// buttonScissors.addEventListener("click",() => console.log("Scissors"));
buttonScissors.addEventListener("click",() => playRound("scissors"));

//Link parent to later append buttons
const div = document.querySelector("body");
div.appendChild(buttonRock);
div.appendChild(buttonPaper);
div.appendChild(buttonScissors);

//Front-End: Create variable Result-Elements
const results = document.createElement("div");
div.appendChild(results)

const result1 = document.createElement("p")
const result2 = document.createElement("p")
results.appendChild(result1);
results.appendChild(result2);

//create button that appears when the game is over in order to restart

// All functions below v

function restartGame(){
    const restart = document.createElement("button");
    restart.textContent = "Click to restart Game";
    div.appendChild(restart);
    restart.addEventListener("click", () => {
        buttonPaper.disabled = false;
        buttonScissors.disabled = false;
        buttonRock.disabled = false;
        div.removeChild(restart)
        result1.textContent = "";
        result2.textContent ="";
<<<<<<< HEAD
        computerScore = 0;
        humanScore = 0;
=======
        humanScore = 0;
        computerScore = 0;
>>>>>>> 7913a0cdb0031db0fe84ecd48ec76eaf14352219
    })
}

function playRound (humanInput){
    let computer = getComputerChoice();
    let human = humanInput;

    if (computer == human)
        result1.textContent = "It's a tie"
    else if(computer=="rock"&&human=="scissors" || computer=="paper"&&human=="rock" || computer=="scissors"&&human=="paper"){
        computerScore++;
        result1.textContent = "Computer beat your "+human+" with "+computer;
    }
    else {
        humanScore++;
        result1.textContent = "You beat computers "+computer+" with your "+human;
    }
    
    if(humanScore==5){
        result2.textContent = "You win "+humanScore+" to "+computerScore+"! Humans were always meant to beat computers!!!";
        buttonPaper.disabled = true;
        buttonScissors.disabled = true;
        buttonRock.disabled = true;
        restartGame();
    }
    else if (computerScore==5){
        result2.textContent = "Daaaaamn! The computer absolutely obliterated you! You lose "+computerScore+" to "+humanScore+"!"
        buttonPaper.disabled = true;
        buttonScissors.disabled = true;
        buttonRock.disabled = true;
        restartGame();
    }
    else {
    result2.textContent = "The new score is Human: "+humanScore+" and Computer: "+computerScore;
    }
}

function getComputerChoice(){
    let randN = Math.round(Math.random()*100);
    let choice;
    
        if(randN<=33){
            choice = "rock";
            return choice;
        }
        else if(randN>33&&randN<=66){
            choice = "paper";
            return choice;
        }
        else {
            choice = "scissors";
            return choice;
        }
}

// Not needed anymore, because Input comes from clicking buttons and not from typing into an alert (old Version)
// function getHumanChoice(){
//     let choice = prompt("Please chose between 'Rock', 'Paper' or 'Scissors'. Please make sure that the spelling is right. Lower- or uppercase does not matter.");
//     switch (choice.toLowerCase()){
//         case "rock" :
//         case "paper" :
//         case "scissors": 
//             return choice.toLowerCase();
//         default : console.log("Input not accepted. Please make sure to reload the page and be extra careful about the spelling!");
//     }
// }



    // Commented out bc old version of the game
// function playGame (){

//     // playRound(computerChoice,humanChoice);

//     while (true){    
//         computerChoice = getComputerChoice();
//         humanChoice = getHumanChoice();
        
//         playRound(computerChoice,humanChoice);
//     }

//     if(computerScore==5){
//         console.log("Computer beat Human "+computerScore+" to "+humanScore);
//     }
//     else if(humanScore==5){
//         console.log("Human beat Computer "+humanScore+" to "+computerScore);
//     }
//     else {
//         console.log("some shit went wrong");
//     }
// }
