/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
// initialize each component(react term for element) at the top
const playerOneScore = document.getElementById('score-0')
const playerTwoScore = document.getElementById('score-1')
const playerOneCurrentScore = document.getElementById('current-0')
const playerTwoCurrentScore = document.getElementById('current-1')
const dice = document.querySelector(".dice")
const btnRoll = document.querySelector('button.btn-roll')
const btnHold = document.querySelector('button.btn-hold')

const game = {
    active: true,
    currentPlayer: 1,
    player1: {
        score: 0,
        currentScore: 0,
        dom: playerOneCurrentScore,
        gameDom: playerOneScore
    },
    player2: {
        score: 0,
        currentScore: 0,
        dom: playerTwoCurrentScore,
        gameDom: playerTwoScore
    }
}

// reset game screen
resetGame();

// find winning score
// const winningScore = prompt("Enter winning score: ")
const winningScore = 100

// click on roll-dice to change dice
btnRoll.addEventListener('click', function(e) {
    const currentDiceScore = diceRandomValue()
    showDice()
    changeDice(currentDiceScore)
    updateCurrentScore(currentDiceScore)
    // console.log(game.player1.currentScore)
})

// click hold button to hide dice
btnHold.addEventListener('click', function(e) {
    hideDice()

    // update game score
    const currentPlayer = game[`player${game.currentPlayer}`]
    currentPlayer.score += currentPlayer.currentScore
    currentPlayer.currentScore = 0

    currentPlayer.gameDom.textContent = currentPlayer.score
    currentPlayer.dom.textContent = currentPlayer.currentScore

    changePlayer()

    // is game won?

})


// ----------------------------------------------------------------
// all function definitions
// ----------------------------------------------------------------
// return current player

// update current score
function updateCurrentScore(score) {
    const currentPlayer = game[`player${game.currentPlayer}`]
    
    if (score === 1) {
        currentPlayer.currentScore = 0
        changePlayer()
    } else {
        currentPlayer.currentScore += score
    }

    currentPlayer.dom.textContent = currentPlayer.currentScore
}

// If game is won

// find winner
function winner() {}

// change player
function changePlayer() {
    if (game.currentPlayer == 1) {
        game.currentPlayer = 2
    } else {
        game.currentPlayer = 1
    }

    updatePlayerDom()
}

// update Current Player Dom
function updatePlayerDom() {
    playerOneScore.parentElement.classList.toggle("active")
    playerTwoScore.parentElement.classList.toggle("active")
}

// set game active
function activateGame() {
    game.active = true
}

// change dice when rolled
function changeDice(number) {
    if (game.active) {
    dice.src = `dice-${number}.png`
}}

// hide dice
function hideDice() {dice.classList.add('hide')}

// show dice
function showDice() {dice.classList.remove('hide')}

// random dice roll
const diceRandomValue = () => Math.floor(Math.random() * 6) + 1

// reset game
function resetGame() {
    playerOneScore.textContent = "0"
    playerTwoScore.textContent = "0"
    playerOneCurrentScore.textContent = "0"
    playerTwoCurrentScore.textContent = "0"
    hideDice()
}

