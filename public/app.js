$(document).ready(function() {

  var game = new Game;
  game.setGame();
  showEverything();

  function showEverything() {
  	if (game.playing === false) {
      $('#quiz-main').hide();
      $('#score-main').show();
      $('#final').html(game.score);
      $('#outof').html(game.noQuestions);
    }
    $("#turn").html(game.turn + 1);
    $("#score").html(game.score);
    $("#noQuestions").html(game.noQuestions);
    $('#question').html(game.questions[game.turn]);
    $('#a').html(game.answerAs[game.turn]);
    $('#b').html(game.answerBs[game.turn]);
    $('#c').html(game.answerCs[game.turn]);
    $("#playing").html(game.playing);
  }

  $("#a").click(function() {
    game.checkAnswer('a');
    showEverything();
  });

  $("#b").click(function() {
    game.checkAnswer('b');
    showEverything();
  });

  $("#c").click(function() {
    game.checkAnswer('c');
    showEverything();
  }); 

  $("#replay").click(function() {
    location.reload();
  }); 
});