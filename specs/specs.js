describe ("myGame", function(){

  it('should count up by an increment of 1', function() {
    expect(myCount(5)).to.equal([1, 2, 3, 4, 5]);
  });

  it('should replace numbers divisable by three with ping', function() {
    expect(forEach(4)).to.equal([1, 2, "ping", 4]);
  });

  it('should replace numbers divisable by five with pong', function() {
    expect(forEach(10)).to.equal([1, 2, 3, 4, "pong", 6, 7, 8, 9, "pong"]);
  });

  it('should replace numbers divisable by fifteen with pingpong', function() {
    expect(forEach(15)).to.equal([1, 2, 3, 4, 5, 6, 7, 8, 9, "pingpong"]);
  });
});
