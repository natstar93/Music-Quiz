describe('Game', function(){

  var game;

  beforeEach(function(){
    game = new Game();
    game.setGame();
  });

  it('starts with a score of 0', function(){
    expect(game.score).toEqual(0);
  });

  describe("correct answer", function() {
    it('can check if an answer is correct', function(){
      expect(game.checkAnswer('a')).toEqual(true);
    });

    it('increments score count', function(){
      game.checkAnswer('a');
      expect(game.score).toEqual(1);
    });
  });

  describe("incorrect answer", function() {
    it('can check if an answer is correct', function(){
      expect(game.checkAnswer('b')).toEqual(false);
    });

    it('does not increment score count', function(){
      game.checkAnswer('b');
      expect(game.score).toEqual(0);
    });
  });

  it('increments turn count', function(){
      game.checkAnswer('b');
      expect(game.turn).toEqual(1);
  });

  it('exits when 3 games have been played', function() {
    game.checkAnswer('a');
    game.checkAnswer('a');
    game.checkAnswer('a');
    expect(game.playing).toBe(false);
  })
});