describe ("myGame", function(){

  it('should replace numbers divisable by three with ping', function() {
    expect(myGame(9)).to.equal("ping");
  });

  it('should replace numbers divisable by five with pong', function() {
    expect(myGame(10)).to.equal("pong");
  });

  it('should replace numbers divisable by fifteen with pingpong', function() {
    expect(myGame(30)).to.equal("pingpong");
  });
});
