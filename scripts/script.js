let pcImage = document.querySelector('.computer-choice-img');
let playerImage = document.querySelector('.player-choice-img')

let images=['images/rock-image.png','images/paper-image.png','images/scissors-image.png']

myInterval = setInterval(function()
{
    let random = Math.floor(Math.random() * 3);
    pcImage.src = images[random];
} , 75)

let playerButtons = document.querySelectorAll('.player-button');

function getComputerChoice()
{
    let randomNumber = Math.random();

    if(randomNumber>=0 && randomNumber < 1/3)
    {
        return 'rock';
    }
    else if(randomNumber>=1/3 && randomNumber < 2/3)
    {
        return 'paper';
    }
    else return 'scissors';
}

function game(playerChoice, computerChoice)
{
    if(playerChoice=='rock')
    {
        if(computerChoice=='rock')
        {
            return 'draw';
        }
        else if(computerChoice=='paper')
        {
            return 'loss';
        }
        else if(computerChoice=='scissors')
        {
            return 'victory';
        }
    }

    if(playerChoice=='paper')
    {
        if(computerChoice=='rock')
        {
            return 'victory';
        }
        else if(computerChoice=='paper')
        {
            return 'draw';
        }
        else if(computerChoice=='scissors')
        {
            return 'loss';
        }
    }

    if(playerChoice=='scissors')
    {
        if(computerChoice=='rock')
        {
            return 'loss';
        }
        else if(computerChoice=='paper')
        {
            return 'victory';
        }
        else if(computerChoice=='scissors')
        {
            return 'draw';
        }
    }
}

const rockButton = document.querySelector('.player-rock-button');
const paperButton = document.querySelector('.player-paper-button');
const scissorsButton = document.querySelector('.player-scissors-button');


const resultText = document.querySelector('.result-text');

let playerScore = 0;
let computerScore = 0;

const playerScoreText = document.querySelector('.player-score-text');
const computerScoreText = document.querySelector('.computer-score-text');


function setComputerImage(computerChoice)
{
    if(computerChoice=='rock')
    {
        pcImage.src='images/rock-image.png';
    }
    else if(computerChoice=='paper')
    {
        pcImage.src='images/paper-image.png';
    }
    else if(computerChoice=='scissors')
    {
        pcImage.src='images/scissors-image.png';
    }
}

function setScore(result)
{
    if(result=='victory')
    {
        resultText.textContent = 'You \xa0 Win The Round!';
        playerScore++;
    }
    else if(result=='draw')
    {
        resultText.textContent = 'This Round Is a Draw!';
    }
    else if(result=='loss')
    {
        resultText.textContent = 'You\xa0 Lose The Round!';
        computerScore++;
    }
}

function checkForWinner(playerScore, computerScore)
{
    if(playerScore>=5)
    {
        resultText.textContent = `You\xa0 Win The Game! ${playerScore} : ${computerScore}`;
        return true;
    }
    else if(computerScore>=5)
    {
        resultText.textContent = `You\xa0 Lose The Game! ${playerScore} : ${computerScore}`;
        return true;
    }
    return false;
}



rockButton.addEventListener('click',()=>
{
    clearInterval(myInterval);

    playerImage.src='images/rock-image.png';
    const computerChoice = getComputerChoice();

    setComputerImage(computerChoice);

    const result = game('rock',computerChoice);

    setScore(result);

    playerScoreText.textContent = "Player: " + playerScore;
    computerScoreText.textContent = "Computer: " + computerScore;

    if(checkForWinner(playerScore,computerScore))
    {
        playerScore = 0;
        computerScore = 0;
    }

})

paperButton.addEventListener('click',()=>
{
    clearInterval(myInterval);

    playerImage.src='images/paper-image.png';
    const computerChoice = getComputerChoice();

    setComputerImage(computerChoice);

    const result = game('paper',computerChoice);

    setScore(result);

    playerScoreText.textContent = "Player: " + playerScore;
    computerScoreText.textContent = "Computer: " + computerScore;

    if(checkForWinner(playerScore,computerScore))
    {
        playerScore = 0;
        computerScore = 0;
    }
})

scissorsButton.addEventListener('click',()=>
{
    clearInterval(myInterval);

    playerImage.src='images/scissors-image.png';
    const computerChoice = getComputerChoice();

    setComputerImage(computerChoice);

    const result = game('scissors',computerChoice);

    setScore(result);

    playerScoreText.textContent = "Player: " + playerScore;
    computerScoreText.textContent = "Computer: " + computerScore;

    if(checkForWinner(playerScore,computerScore))
    {
        playerScore = 0;
        computerScore = 0;
    }
})
