
   let  compChoiceNum = Math.floor(Math.random() * (3 - 1 + 1) ) + 1;
    if (compChoiceNum == 1) {
        compChoice = "Rock"
     } else if (compChoiceNum == 2) {
        compChoice = "Paper"
     }
        else if (compChoiceNum == 3) {
            compChoice = "Scissors"
        }
        else {
            compChoice = "Invalid"
        }
    
    

  console.log(compChoice)