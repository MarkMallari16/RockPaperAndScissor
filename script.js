let userScore = 0;
let computerScore = 0;
let tieScore = 0;
let userEmoji = document.getElementById("emoji1");
let computerEmoji = document.getElementById("emoji2");
function moves() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;

    if (randomNumber === 1) {
        return "rock";
    } else if (randomNumber === 2) {
        return "paper";
    } else if (randomNumber === 3) {
        return "scissor";
    }
}


function getMove(move) {
    const computerMove = moves();
    let result = getUserMoves(move, computerMove);
    displayEmoji(move, computerMove);


    setTimeout(() => {
        alert(`You chose ${move} and computer chose ${computerMove}. ${result}`);

        if (result === "You Win!") {
            userScore++;
        } else if (result === "You Lose!") {
            computerScore++;
        }else if (result === "Tie!"){
            tieScore++;
        }
        updateScores();
    }, 1000);

}

function updateScores() {
    document.getElementById("userScore").textContent = userScore;
    document.getElementById("computerScore").textContent = computerScore;
    document.getElementById("tieScore").textContent = tieScore;
}
function displayEmoji(move, computerMove) {
    if (move === "rock") {
        userEmoji.textContent = "✊";
        if (computerMove === "rock") {
            return computerEmoji.textContent = "✊";
        } else if (computerMove === "paper") {
            return computerEmoji.textContent = "✋";
        } else if (computerMove === "scissor") {
            return computerEmoji.textContent = "✌️";
        }
    } else if (move === "paper") {
        userEmoji.textContent = "✋"
        if (computerMove === "rock") {
            return computerEmoji.textContent = "✊";
        } else if (computerMove === "paper") {
            return computerEmoji.textContent = "✋";
        } else if (computerMove === "scissor") {
            return computerEmoji.textContent = "✌️";
        }
    } else if (move === "scissor") {
        userEmoji.textContent = "✌️"
        if (computerMove === "rock") {
            return computerEmoji.textContent = "✊";
        } else if (computerMove === "paper") {
            return computerEmoji.textContent = "✋";
        } else if (computerMove === "scissor") {
            return computerEmoji.textContent = "✌️";
        }
    }
}
function getUserMoves(userMove, computerMove) {
    if (userMove === computerMove) {
        return "Tie!";
    } else if ((userMove === "rock" && computerMove === "scissor") || (userMove === "paper" && computerMove === "rock") || (userMove === "scissor" && computerMove === "paper")) {
        return "You Win!";
    } else {
        return "You Lose!"
    }
}
function reset() {
    userEmoji.textContent = "?";
    computerEmoji.textContent = "?";
    updateScores();
}
function resetAll() {
    userScore = 0;
    computerScore = 0;
    tieScore = 0;
    updateScores();
    reset();
}