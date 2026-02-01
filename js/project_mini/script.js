let comp_choice = null;
let user_choice = null;
let userScore = 0;
let computerScore = 0;

const result = document.getElementById('result');
const scoreYou = document.getElementById('score_you');
const scoreComputer = document.getElementById('score_computer');

function option_generator() {
    let options = ["rock", "paper", "scissor"];
    const randomIndex = Math.floor(Math.random() * options.length);
    comp_choice = options[randomIndex];
    return comp_choice;
}

document.getElementById('button_rock').addEventListener('click', getUserChoice);
document.getElementById('button_paper').addEventListener('click', getUserChoice);
document.getElementById('scissor').addEventListener('click', getUserChoice);

function getUserChoice(e) {
    user_choice = e.currentTarget.value;
    option_generator();
    winner();
}

function winner() {

    if (user_choice === comp_choice) {
        result.innerText = 'Draw 🤝';
    } 
    else if (
        (user_choice === 'rock' && comp_choice === 'scissor') ||
        (user_choice === 'paper' && comp_choice === 'rock') ||
        (user_choice === 'scissor' && comp_choice === 'paper')
    ) {
        userScore++;
        scoreYou.innerText = userScore;
        result.innerText = 'You won 🎉';
    } 
    else {
        computerScore++;
        scoreComputer.innerText = computerScore;
        result.innerText = 'Computer won 💻';
    }
}
