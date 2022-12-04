
function getPlayerChoice(){
    let playerChoice = prompt("Please choose rock paper scissors")
    let playerChoiceText = playerChoice.toUpperCase()
    if (playerChoiceText == "ROCK") {
    playerChoiceNumber = 1
    } else if (playerChoiceText == "PAPER") {
    playerChoiceNumber = 2
    } else if (playerChoiceText == "SCISSORS"){
    playerChoiceNumber = 3
    } else {
    playerChoiceNumber = 0
    }
    
    
}
console.log(getPlayerChoice(), playerChoiceText)

function getComputerChoice() {
   let  compChoiceNum = Math.floor(Math.random() * (3 - 1 + 1) ) + 1;
    if (compChoiceNum == 1) {
        compChoiceText = "Rock"
     } else if (compChoiceNum == 2) {
        compChoiceText = "Paper"
     }
        else if (compChoiceNum == 3) {
            compChoiceText = "Scissors"
        }
        else {
            compChoiceText = "Invalid"
        }
        return compChoiceNum
    }



 


    
    
 
    

 