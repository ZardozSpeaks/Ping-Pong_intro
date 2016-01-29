$(function() {
  $("form#playersNumberInput").submit(function(event) {
    event.preventDefault();
    var playersNumber = parseInt($("input#playersNumber").val());
    var myCountArr = myGame(playersNumber);
    myCountArr.forEach(function(item) {
      $("#displayResults").append( "<li>" + item + "</li>");
    });
  });

  $('button#reset').click(function(){
    $("#displayResults").empty();
  });

});


var myGame = function(playersNumber) {
  var myCountArr = [];
  var i = 0;
  for (i = 1; i <= playersNumber; i++) {
    if(i % 15 === 0) {
      myCountArr.push("pingpong");
    } else if(i % 5 === 0) {
        myCountArr.push("pong");
      } else if(i % 3 === 0) {
          myCountArr.push("ping");
        } else {
            myCountArr.push(i);
          }
  }
  return(myCountArr);
};
