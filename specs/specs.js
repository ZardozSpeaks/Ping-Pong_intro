describe ("myGame", function(){

  it('should count up by an increment of 1', function() {
    expect(myGame(2)).to.eql([1, 2]);
  });

  it('should replace numbers divisable by three with ping', function() {
    expect(myGame(3)).to.eql([1, 2, "ping"]);
  });

  it('should replace numbers divisable by five with pong', function() {
    expect(myGame(5)).to.eql([1, 2, "ping", 4, "pong"]);
  });

  it('should replace numbers divisable by fifteen with pingpong', function() {
    expect(myGame(15)).to.eql([1, 2, "ping", 4, "pong", "ping", 7, 8, "ping", "pong", 11, "ping", 13, 14, "pingpong"]);
  });

});
