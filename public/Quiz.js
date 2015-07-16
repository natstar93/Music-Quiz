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
  this.trivia = '{"name":"Music Quiz","questions":[{"id":"1", "answer":"a", "question":"Which of these is in RHCP", "a":"Flea", "b":"Spider", "c":"Snail"}, {"id":"2", "answer":"b", "question":"Who\'s alive?", "a":"Cobain", "b":"Bieber", "c":"Winehouse"}, {"id":"3", "answer":"c", "question":"Who has Damon Albarn not been in", "a":"Blur", "b":"Gorrilaz", "c":"The Strokes"}]}';
  // this.lyrics = '{"name":"Lyric Quiz","questions":
  //   [
  //     {
  //       "id":"1",
  //       "answer":"a",
  //       "question":"You\'re on the phone with your girlfriend<br />She\'s upset, she\'s going off about something that you said",
  //       "a":"You belong With Me",
  //       "b":"Love Story",
  //       "c":"Fifteen"
  //     },
  //     {
  //       "id":"2",
  //       "answer":"b",
  //       "question":"Aren\'t you somethin\' to admire?<br />\'Cause your shine is somethin\' like a mirror",
  //       "a":"Suit &amp; Tie",
  //       "b":"Mirrors",
  //       "c":"Not A Bad Thing"
  //     },
  //     {
  //       "id":"3",
  //       "answer":"c",
  //       "question":"Left a good job in the city<br />Workin\' for the Man every night and day",
  //       "a":"River Deep Mountain High",
  //       "b":"You Don\'t Need Another Hero",
  //       "c":"Proud Mary"
  //     }
  //   ]
  // }';

    this.lyrics = '{"name":"Lyric Quiz","questions":[{"id":"1", "answer":"a", "question":"You\'re on the phone with your girlfriend<br />She\'s upset, she\'s going off about something that you said", "a":"You belong With Me", "b":"Love Story", "c":"Fifteen"}, {"id":"2", "answer":"b", "question":"Who\'s alive?", "a":"Cobain", "b":"Bieber", "c":"Winehouse"}, {"id":"3", "answer":"c", "question":"Who has Damon Albarn not been in", "a":"Blur", "b":"Gorrilaz", "c":"The Strokes"}]}';
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
};
