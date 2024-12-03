let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock" , "paper" , "scissors"];
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
}

const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin){
        msg.innerText = `You Win! ${userChoice} Beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        userScore++;
        userScorePara.innerText = userScore;
    }
    else{
        msg.innerText = `You Lose! ${userChoice} Beats ${compChoice}`;
        msg.style.backgroundColor = "red";
        compScore++;
        compScorePara.innerText = compScore;
    }
}

const drawGame = () => {
    msg.innerText = "Game was Draw. Play Again";
    msg.style.backgroundColor = "#081b31";
}

const playGame = (userChoice) => {
    //console.log(`User choosed ${userChoice}`);
    const compChoice = genCompChoice();
    //console.log(`Comp choosed ${compChoice}`);

    if(userChoice === compChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === 'rock'){
            userWin = compChoice === 'paper' ? false : true ;
        } 
        else if(userChoice === 'paper'){
            userWin = compChoice === 'scissors' ? false : true ;
        }
        else{
            userWin = compChoice === 'rock' ? false : true ;
        }
        showWinner(userWin, userChoice , compChoice);
    }

}

choices.forEach((choice) =>{
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        //console.log(userChoice);
        playGame(userChoice);
    })
})