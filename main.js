$(document).ready(function() {
  console.log("javascript connected!");
  var placesLeft = 9;
  var xArray = [];
  var oArray = [];
  var result = "";
  $("<div/>", {
    class: "scoring-board",
    title: "Scoring Board"
  }).appendTo("#board");
  // I just created a div, put that div at the end of #board
  // $()
  function onClick() {
    if ($(this).text() === "") {
      if (placesLeft % 2 == 1) {
        $(this).text("X");
        xArray.push(Number($(this).attr("id")));
        placesLeft--;
        console.log(placesLeft);
        var result = isGameOver(xArray);
        if (result !== "") {
          if (xArray.length >= 3) {
            window.setTimeout(function() {
              alert("The first " + result);
              play();
            }, 200);
          }
        } else if (placesLeft === 0) {
          window.setTimeout(function() {
            alert("No Winner!, the game went to a draw");
          }, 200);
          play();
        }
      } else {
        $(this).text("O");
        oArray.push(Number($(this).attr("id")));
        placesLeft--;
        console.log(placesLeft);
        if (oArray.length >= 3) {
          var result = isGameOver(oArray);
          if (result !== "") {
            window.setTimeout(function() {
              alert("The second " + result);
              play();
            }, 200);
          } else if (placesLeft === 0) {
            window.setTimeout(function() {
              alert("No Winner!, the game went to a draw");
            }, 200);
            play();
          }
        }
      }
    } else {
      window.setTimeout(function() {
        alert("Sorry! you can't play here");
      }, 200);
    }
  }

  function play() {
    $("#board td")
      .empty()
      .off();
    // var play = true;
    xArray = [];
    // console.log(xArray, oArray);
    oArray = [];
    result = "";
    placesLeft = 9;
    $("td").click(onClick);
  }

  play();

  function isGameOver(Array) {
    if (Array.includes(11) && Array.includes(12) && Array.includes(13)) {
      console.log("won");
      return "player won the game";
    } else if (Array.includes(21) && Array.includes(22) && Array.includes(23)) {
      console.log("won");
      return "player won the game";
    } else if (Array.includes(31) && Array.includes(32) && Array.includes(33)) {
      console.log("won");
      return "player won the game";
    } else if (Array.includes(11) && Array.includes(21) && Array.includes(31)) {
      console.log("won");
      return "player won the game";
    } else if (Array.includes(12) && Array.includes(22) && Array.includes(32)) {
      console.log("won");
      return "player won the game";
    } else if (Array.includes(13) && Array.includes(23) && Array.includes(33)) {
      console.log("won");
      return "player won the game";
    } else if (Array.includes(11) && Array.includes(22) && Array.includes(33)) {
      console.log("won");
      return "player won the game";
    } else if (Array.includes(13) && Array.includes(22) && Array.includes(31)) {
      console.log("won");
      return "player won the game";
    }
    return "";
  }
});
