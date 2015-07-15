var Game = function() {
  this.score = 0;
  this.turn = 0;
  this.playing = true;
  this.questions = 3;
  this.answers = ['a','b','c'];
}

Game.prototype.checkAnswer = function(guess) {
  var result = (guess === this.answers[this.turn])
  if (result) {
    this.score++
  }
  this.turn ++;
  return result;
};

Game.prototype.checkPlaying = function() {
   this.playing = (this.questions != (this.turn))
};