describe('Game', function(){

  var game;

  beforeEach(function(){
    game = new Game();
  });

  it('starts with a score of 0', function(){
    expect(game.score).toEqual(0);
  });

  it('can check if an answer is correct', function(){
    expect(game.checkAnswer('a','a')).toEqual(true);
  });

  it('increments score count', function(){
    game.checkAnswer('a','a');
    expect(game.score).toEqual(1);
  });

});