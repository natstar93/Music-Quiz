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
  this.trivia = '{"name":"Music Quiz","questions":[{"id":"1", "answer":"a", "question":"Who is known as the fifth Beatle?", "a":"Stuart Sutcliffe", "b":"Peter Heathcliff", "c":"Brian Epstein"}, {"id":"2", "answer":"b", "question":"Who\'s still alive?", "a":"Ben E. King", "b":"Bieber", "c":"B.B. King"}, {"id":"3", "answer":"c", "question":"Which band has Damon Albarn not been in?", "a":"Blur", "b":"Gorrilaz", "c":"The Strokes"}]}';
};

Game.prototype.checkAnswer = function(guess) {
  var result = (guess === this.answers[this.turn])
  console.log(this.answers[this.turn]);
  if (result) {
    this.score++
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
};
