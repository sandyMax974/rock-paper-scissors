$(document).ready(function () {
  let game = new Game();

  $("#rock").click(function () {
    game.playerOneActionSelection("rock");
    game.botActionSelection();
    announceResult(game.comparePlayersActions());
    clearPreviousAction();
    renderGameResult();
    updateScores();
  });

  $("#paper").click(function () {
    game.playerOneActionSelection("paper");
    game.botActionSelection();
    announceResult(game.comparePlayersActions());
    clearPreviousAction();
    renderGameResult();
    updateScores();
  });

  $("#scissors").click(function () {
    game.playerOneActionSelection("scissors");
    game.botActionSelection();
    announceResult(game.comparePlayersActions());
    clearPreviousAction();
    renderGameResult();
    updateScores();
  });

  $("#replay").click(function () {
    displayActionsAndHideSelection();
  });

  function updateScores() {
    $("#player-1-score").text(game.getPlayerOneScore());
    $("#player-2-score").text(game.getPlayerTwoScore());
  }

  function selectIconToDisplay(playerAction) {
    if (playerAction === "rock") {
      return "images/icon-rock.svg";
    } else if (playerAction === "paper") {
      return "images/icon-paper.svg";
    } else {
      return "images/icon-scissors.svg";
    }
  }

  function displayPlayersActions() {
    let playerOneIcon = selectIconToDisplay(game.playerOneAction);
    $("#player-1-action").attr("src", playerOneIcon);
    $("#player-1-result").addClass(game.playerOneAction);
    let playerTwoIcon = selectIconToDisplay(game.playerTwoAction);
    $("#player-2-action").attr("src", playerTwoIcon);
    $("#player-2-result").addClass(game.playerTwoAction);
  }

  function announceResult(results) {
    $("#game-result-text").html(results);
  }

  function renderGameResult() {
    displayPlayersActions();
    hideActionsAndDisplaySelection();
  }

  function hideActionsAndDisplaySelection() {
    $("#game-result").css("display", "flex");
    $("#actions").css("display", "none");
    $("#replay").css("display", "block");
  }

  function displayActionsAndHideSelection() {
    $("#game-result").css("display", "none");
    $("#actions").css("display", "block");
    $("#replay").css("display", "none");
    $("#game-result-text").html("");
  }

  function clearPreviousAction() {
    $("#player-1-action").removeAttr("src");
    $("#player-1-action").removeClass(game.playerOneAction); // issue with these
    $("#player-2-action").removeAttr("src");
    $("#player-2-action").removeClass(game.playerTwoAction); // issue with these
  }

  $("#rules-modal").click(function () {
    $("#myModal").css("display", "block");
  });

  $("#close").click(function () {
    $("#myModal").css("display", "none");
  });

  $("#myModal").click(function () {
    $("#myModal").css("display", "none");
  });
});
