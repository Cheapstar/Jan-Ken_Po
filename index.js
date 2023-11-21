
    //Returns one of the Rock , Paper , Scissors randomly.
    function getComputerChoice(){
      
        let choice = Math.floor(Math.random()*3) + 1 ;
  
        //Assigning number to the options
        if( choice == 1 ){
          return "Rock";
        }
        else if ( choice == 2 ){
          return "Paper";
        }
        else{
          return "Scissors";
        }
  
      }
  
      //Make the choice lexically consistent // case insensitive
      function capitalize(str){
            let strLower=str.toLowerCase();
            let result = str[0].toUpperCase() + strLower.slice(1);
            return result;
          }
  
      
  
      //A round of game
      function playRound(playerSelection,computerSelection){
  
        if( ( playerSelection==="Rock"&& computerSelection==="Scissors") ||
            ( playerSelection==="Scissors"&& computerSelection==="Paper") ||
            ( playerSelection==="Paper"&& computerSelection==="Rock") 
          ){
            console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
            return "Win";
  
          }
        else if( ( playerSelection==="Rock"&& computerSelection==="Paper") ||
                 ( playerSelection==="Scissors"&& computerSelection==="Rock") ||
                 ( playerSelection==="Paper"&& computerSelection==="Scissors") 
              ){
                console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
                return "Lose";
  
              }
       else{
              console.log("Draw!");
              return 0;
        }
      }
  
      //game
      function game(){
        //Players Selection
        let playerSelection ;
        let computerSelection ;
  
        let playerScore=0;
        let computerScore=0;
        let res;
        for(let i=0;i<5;i++){
            playerSelection = capitalize(prompt("Enter your choice : "));
            computerSelection = getComputerChoice();
            res = playRound(playerSelection,computerSelection);
  
            if(res==="Win"){
              playerScore++;
            }
            else if(res==="Lose"){
              computerScore++;
            }
            else{
              
            }
        }
        showResult(playerScore,computerScore);
        
      }
      //Result
      function showResult(playerScore,computerScore){
        if(playerScore>computerScore){
          console.log(`You Win! Score ${playerScore} - ${computerScore}`);
        }
        else if(playerScore<computerScore){
          console.log(`You Lose! Score ${playerScore} - ${computerScore}`);
        }
        else{
          console.log(`Draw! Score ${playerScore} - ${computerScore}`);
        }
      }