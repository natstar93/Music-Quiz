var Game = function() {
  this.score = 0;
  this.turn = 0;
  this.playing = true;
  this.noQuestions = 5;
  this.answers = [];
  this.questions = [];
  this.answerAs = [];
  this.answerBs = [];
  this.answerCs = [];
  this.songs = [];
  this.trivia = '{"name":"Guess that song!","questions":[{"id":"1", "answer":"a", "question":"What is the name of this song?", "a":"Stay With Me", "b":"Lay Me Down", "c":"I\'m Not The Only One", "song":"78282086"}, {"id":"2", "answer":"a", "question":"What is the name of this song?", "a":"Just Give Me A Reason", "b":"Try", "c":"Beam Me Up", "song":"60200391"}, {"id":"3", "answer":"c", "question":"What is the name of this song?", "a":"Darlington County", "b":"Dancing In The Dark", "c":"I\'m On Fire", "song":"15586369"}, {"id":"4", "answer":"b", "question":"What is the name of this song?", "a":"Goodbye Yellow Brick Road", "b":"Are You Ready For Love", "c":"Bennie and the Jets", "song":"1160181"},{"id":"5", "answer":"c", "question":"What is the name of this song?", "a":"Shine", "b":"Eyes Shut", "c":"King", "song":"93183390"}]}';
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

 var obj = JSON.parse(this.trivia);

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

  for(var i = 0; i < this.noQuestions; i++) {
    this.songs.push(obj.questions[i].song);
  }
};