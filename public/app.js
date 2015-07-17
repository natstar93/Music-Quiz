$(document).ready(function() {
  
  $.getJSON('/mock_data.json', function(mock_data) {
    var game = new Game(mock_data.responseText);
    game.setGame();
    showEverything();
  });

  function displayGameResult() {
    $('#quiz-main').hide();
    $('#score-main').show();
    $('#final').html(game.score);
    $('#outof').html(game.noQuestions);
  }

  function showEverything() {
  	if (game.playing === false) {
      displayGameResult();
    }
    $("#turn").html(game.turn + 1);
    $("#score").html(game.score);
    $("#noQuestions").html(game.noQuestions);
    $('#question').html(game.questions[game.turn]);
    $('#a').html(game.answerAs[game.turn]);
    $('#b').html(game.answerBs[game.turn]);
    $('#c').html(game.answerCs[game.turn]);
    $("#playing").html(game.playing); // put all above in a function telling me what it's doing
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
