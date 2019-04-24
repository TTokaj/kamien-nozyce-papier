// Buttons
var rockButton = document.getElementById('rock');
var scissorsButton = document.getElementById('scissors');
var paperButton = document.getElementById('paper');
var newGameButton = document.getElementById('new-game');

var output = document.getElementById('output');

// Listener
rockButton.addEventListener('click', function() {
  playerMove('rock');
});

scissorsButton.addEventListener('click', function() {
  playerMove('scissors');
});

paperButton.addEventListener('click', function() {
  playerMove('paper');
});

newGameButton.addEventListener('click', function(){
startGame();
})

var gameState = {
  computerPoints: 0,
  playerPoints: 0,
  maxPoints: 0,
  isGameStarted: false
}

function startGame() {
  gameState.isGameStarted = true;
  gameState.maxPoints = prompt('podaj maksymalną ilość punktów');
  document.getElementById("game-started").style.display = "block";
  document.getElementById('new-game').style.display = "none";
}

function playerMove(move) {
  var computerMove = getComputerMove();
  var winner = checkWinner(move, computerMove);
  printStatus(winner, move, computerMove);
  if (gameState.computerPoints == gameState.maxPoints || 
    gameState.playerPoints == gameState.maxPoints) {
    quitGame()
  }
}

function quitGame() {
  if (gameState.computerPoints == gameState.maxPoints) {
    alert('koniec gry, wygrał komputer')
  }
  else {alert('koniec gry, wygrał gracz')}
  document.getElementById("game-started").style.display = "none";
  document.getElementById('new-game').style.display = "block";
  gameState.computerPoints = 0;
  gameState.playerPoints = 0
  output.innerText = "";
}

function printStatus(winner, pm, cm) {
  if(winner === 'player') {
    var firstPart = 'YOU WON:';
    gameState.playerPoints +=1;
  } else if(winner === 'computer') {
    var firstPart = 'YOU LOSE:';
    gameState.computerPoints +=1;
  } else {
    var firstPart = 'REMIS:';
  }
     
  var secondPart = 'you played ' + pm + ', computer played ' 
  + cm + 'masz' + gameState.playerPoints + 'punktów, komputer ma'
   + gameState.computerPoints + 'punktów'
  output.innerText = firstPart + secondPart;
};

function checkWinner(pm, cm) {
  // pm = playerMove, cm = computerMove
  if(pm === cm) {
    return null;
  }
  
  if(
    pm === 'rock' && cm === 'scissors' ||
    pm === 'scissors' && cm === 'paper' ||
    pm === 'paper' && cm === 'rock'
  ) {
    return 'player';
  } else {
    return 'computer';
  }
  
}
  
function getComputerMove() {
  var id = Math.floor(Math.random() * 3) + 1;
  if(id === 1) {
    return 'rock';
  } else if(id === 2) {
    return 'scissors';
  } else {
    return 'paper';
  }
}

