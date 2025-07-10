let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const rand = Math.random();
  if (rand < 0.34) return "rock";
  else if (rand < 0.67) return "paper";
  else return "scissors";
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return `It's a draw! Both chose ${humanChoice}`;
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    return `You win! ${humanChoice} beats ${computerChoice}`;
  } else {
    computerScore++;
    return `You lose! ${computerChoice} beats ${humanChoice}`;
  }
}

function updateUI(message) {
  document.getElementById("result").textContent = message;
  document.getElementById("score").textContent = `Human: ${humanScore} | Computer: ${computerScore}`;

  if (humanScore === 5 || computerScore === 5) {
    document.getElementById("winner").textContent =
      humanScore === 5 ? "🎉 You won the game!" : "😢 You lost the game!";
    
    disableButtons();
    document.getElementById("reset").classList.remove("hidden");
  }
}

function disableButtons() {
  document.getElementById("rock").disabled = true;
  document.getElementById("paper").disabled = true;
  document.getElementById("scissors").disabled = true;
}

function enableButtons() {
  document.getElementById("rock").disabled = false;
  document.getElementById("paper").disabled = false;
  document.getElementById("scissors").disabled = false;
}

function resetGame() {
  humanScore = 0;
  computerScore = 0;

  document.getElementById("result").textContent = "";
  document.getElementById("score").textContent = "Human: 0 | Computer: 0";
  document.getElementById("winner").textContent = "";

  enableButtons();
  document.getElementById("reset").classList.add("hidden");
}

// Play Buttons
document.getElementById("rock").addEventListener("click", () => {
  const result = playRound("rock", getComputerChoice());
  updateUI(result);
});
document.getElementById("paper").addEventListener("click", () => {
  const result = playRound("paper", getComputerChoice());
  updateUI(result);
});
document.getElementById("scissors").addEventListener("click", () => {
  const result = playRound("scissors", getComputerChoice());
  updateUI(result);
});

// Reset Button
document.getElementById("reset").addEventListener("click", resetGame);
