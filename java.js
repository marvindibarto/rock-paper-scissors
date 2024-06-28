let computerChoice;
let humanChoice;
let computerScore = 0;
let humanScore = 0;

playGame();



function playGame (){

    while (computerScore<5&&humanScore<5){    
        computerChoice = getComputerChoice();
        humanChoice = getHumanChoice();
        
        playRound(computerChoice,humanChoice);
    }

    if(computerScore==5){
        console.log("Computer beat Human "+computerScore+" to "+humanScore);
    }
    else if(humanScore==5){
        console.log("Human beat Computer "+humanScore+" to "+computerScore);
    }
    else {
        console.log("some shit went wrong");
    }
}




function playRound (computer,human){
    if (computer == human)
        console.log("it's a tie");
    else if(computer=="rock"&&human=="scissors" || computer=="paper"&&human=="rock" || computer=="scissors"&&human=="paper"){
        computerScore++;
        console.log("Computer beat your "+human+" with "+computer);
    }
    else {
        humanScore++;
        console.log("You beat computers "+computer+" with your "+human);
    }
    console.log("The new score is Human: "+humanScore+" and Computer: "+computerScore);
}

function getHumanChoice(){
    let choice = prompt("Please chose between 'Rock', 'Paper' or 'Scissors'. Please make sure that the spelling is right. Lower- or uppercase does not matter.");
    switch (choice.toLowerCase()){
        case "rock" :
        case "paper" :
        case "scissors": 
            return choice.toLowerCase();
        default : console.log("Input not accepted. Please make sure to reload the page and be extra careful about the spelling!");
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

