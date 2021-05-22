"use strict";

class Game {
  constructor() {
    this.playerOneScore = 0;
    this.playerTwoScore = 0;
  }

  playerOneActionSelection(action) {
    return (this.playerOneAction = action);
  }

  botActionSelection() {
    return (this.playerTwoAction = this.getRandomAction());
  }

  getPlayerOneScore() {
    return this.playerOneScore;
  }

  getPlayerTwoScore() {
    return this.playerTwoScore;
  }

  getRandomAction() {
    let actionsArray = ["rock", "scissors", "paper"];
    let randomIndex = Math.floor(Math.random() * actionsArray.length);
    return actionsArray[randomIndex];
  }

  comparePlayersActions() {
    let winningComboOne =
      this.playerOneAction === "rock" && this.playerTwoAction === "scissors";
    let winningComboTwo =
      this.playerOneAction === "scissors" && this.playerTwoAction === "paper";
    let winningComboThree =
      this.playerOneAction === "paper" && this.playerTwoAction === "rock";

    if (this.playerOneAction === this.playerTwoAction) {
      return "draw";
    } else if (winningComboOne || winningComboTwo || winningComboThree) {
      this.playerOneScore += 1;
      return "You win";
    } else {
      this.playerTwoScore += 1;
      return "You lose";
    }
  }
}
