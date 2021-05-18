//event listner for action selection
// dislay player 1 action
// couple second pause between each event
// dislay player 2 action
// update score

$(document).ready(function () {
  let game = new Game();

  $("#rock").click(function () {
    game.playerOneActionSelection("rock");
    game.botActionSelection();
    console.log(
      `player 1: ${game.playerOneAction},player 2: ${game.playerTwoAction}`
    );
    game.comparePlayersActions();
    updateScores();
  });

  $("#paper").click(function () {
    game.playerOneActionSelection("paper");
    game.botActionSelection();
  });

  $("#scissors").click(function () {
    game.playerOneActionSelection("scissors");
    game.botActionSelection();
  });

  function updateScores() {
    $("#player-1-score").text(game.getPlayerOneScore());
    $("#player-2-score").text(game.getPlayerTwoScore());
  }
});
