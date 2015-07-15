var Game = function() {
  this.score = 0
}

Game.prototype.checkAnswer = function(answer, guess) {
  if (answer === guess) {
    this.score++
  }
  return (answer === guess)
};

