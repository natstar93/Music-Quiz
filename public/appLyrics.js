var Game = function() {
  this.score = 0;
  this.turn = 0;
  this.playing = true;
  this.noQuestions = 3;
  this.answers = [];
  this.questions = [];
  this.answerAs = [];
  this.answerBs = [];
  this.answerCs = [];
  this.lyrics = '{"name":"Lyric Quiz","questions":[{"id":"1", "answer":"a", "question":"Well, my friends, the time has come<br />To raise the roof and have some fun", "a":"All Night Long", "b":"Hello", "c":"Dancing on the Ceiling"}, {"id":"2", "answer":"b", "question":"Load Up on guns, bring your friends<br />It\’s fun to lose and to pretend", "a":"Come As You Are", "b":"Smells Like Teen Spirit", "c":"Stay Away"}, {"id":"3", "answer":"c", "question":"Left a good job in the city<br />Workin\' for the Man every night and day", "a":"River Deep Mountain High", "b":"We Don\'t Need Another Hero", "c":"Proud Mary"}]}';
}


Game.prototype.checkAnswer = function(guess) {
  var result = (guess === this.answers[this.turn])
  console.log(this.answers[this.turn]);
  if (result) {
    this.score++
    alert('correct');
  }
  this.checkPlaying();
  this.turn ++;
  return result;
};

Game.prototype.checkPlaying = function() {
   this.playing = (this.noQuestions != (this.turn + 1))
};

Game.prototype.setGame = function() {

 var obj = JSON.parse(this.lyrics);

  for(var i = 0; i < this.noQuestions; i++) {
    this.answers.push(obj.questions[i].answer);
  }

  for(var i = 0; i < this.noQuestions; i++) {
    this.questions.push(obj.questions[i].question);
  }

  for(var i = 0; i < this.noQuestions; i++) {
    this.answerAs.push(obj.questions[i].a);
  }

  for(var i = 0; i < this.noQuestions; i++) {
    this.answerBs.push(obj.questions[i].b);
  }

  for(var i = 0; i < this.noQuestions; i++) {
    this.answerCs.push(obj.questions[i].c);
  }
};
