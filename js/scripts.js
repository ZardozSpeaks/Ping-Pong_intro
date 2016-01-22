// var playersNumber = parseInt($("input#playersNumber").val(), 10);
var myCountArr = [];

var myCount = function(playersNumber) {
  var start = 0;
  while (start < playersNumber) {
    start+= 1;
    myCountArr.push(start);
  };
  return(myCountArr);
};


myCountArr.forEach(function(item, i) {
    if(item % 3 === 0) {
      myCountArr[i] = "ping";
    }else if (item % 5 === 0) {
      myCountArr[i] = "pong";
    }else if (item % 5 === 0 && playersNumber % 15 === 0) {
      myCountArr[i] = "pingpong";
  };
  return(myGame);
});


// $(function() {
//   $("form#playersNumberInput").submit(function(event) {
//     event.preventDefault();
//   });
// });
//
// a.forEach(function(item, i) { if (item == 3452) a[i] = 1010; });
