$(document).ready(function () {
  let game = new Game();

  $("#rock").click(function () {
    game.playerOneActionSelection("rock");
    game.botActionSelection();
    game.comparePlayersActions();
    clearPreviousAction();
    setTimeout(renderGameResult(), 3000);
  });

  $("#paper").click(function () {
    game.playerOneActionSelection("paper");
    game.botActionSelection();
    game.comparePlayersActions();
    clearPreviousAction();
    setTimeout(renderGameResult(), 3000);
  });

  $("#scissors").click(function () {
    game.playerOneActionSelection("scissors");
    game.botActionSelection();
    game.comparePlayersActions();
    clearPreviousAction();
    setTimeout(renderGameResult(), 3000);
  });

  function updateScores() {
    $("#player-1-score").text(game.getPlayerOneScore());
    $("#player-2-score").text(game.getPlayerTwoScore());
  }

  function selectIconToDisplay(playerAction) {
    if (playerAction === "rock") {
      return "far fa-hand-rock fa-5x";
    } else if (playerAction === "paper") {
      return "far fa-hand-paper fa-5x";
    } else {
      return "far fa-hand-scissors fa-5x";
    }
  }

  function displayPlayersActions() {
    let playerOneIcon = selectIconToDisplay(game.playerOneAction);
    $("#player-1-action").addClass(playerOneIcon);
    let playerTwoIcon = selectIconToDisplay(game.playerTwoAction);
    $("#player-2-action").addClass(playerTwoIcon);
  }

  function renderGameResult() {
    displayPlayersActions();
    updateScores();
    // $("#game-results").removeProp("visibility");
  }

  function clearPreviousAction() {
    $("#player-1-action").removeClass();
    $("#player-2-action").removeClass();
  }
});
