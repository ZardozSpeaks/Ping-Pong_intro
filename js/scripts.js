$(function() {
  $("form#playersNumberInput").submit(function(event) {
    var playersNumber = $("input#playersNumber").val();
    myCount(playersNumber);
    myCountArr.forEach(function(item) {
    $("#displayResults").append( "<li>" + item + "</li>");
  });
    event.preventDefault();
  });
});

var playersNumber = [];
var myCountArr = [];


var myCount = function(playersNumber) {
  var start = 0;
  while (start < playersNumber) {
    start+= 1;
    myCountArr.push(start);
  };
  myGame();
};


var myGame = function(){
    myCountArr.forEach(function(item, i) {
      if(item % 3 === 0) {
      myCountArr[i] = "ping"
    } if (item % 5 === 0 && item % 15 !== 0) {
      myCountArr[i] = "pong"
    } else if (item % 5 === 0  && item % 15 === 0) {
      myCountArr[i] = "pingpong"};
  });
  return(myCountArr);
};
