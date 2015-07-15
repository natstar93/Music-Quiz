var game = new Game();

$("#answer1a").on('click', function() {
  event.preventDefault();
  game.checkAnswer('a');
  $('#result').html(game.score);
});

$("#answer1b").on('click', function() {
  event.preventDefault();
});

$("#answer1c").on('click', function() {
  event.preventDefault();
});

$("#answer2b").on('click', function() {
  event.preventDefault();
  game.checkAnswer('b');
  $('#result').html(game.score);
});

$("#answer1a").on('click', function() {
  event.preventDefault();
});

$("#answer1c").on('click', function() {
  event.preventDefault();
});

$("#answer3c").on('click', function() {
  event.preventDefault();
  game.checkAnswer('c');
  $('#result').html(game.score);
});

$("#answer3a").on('click', function() {
  event.preventDefault();
});

$("#answer1b").on('click', function() {
  event.preventDefault();
});
