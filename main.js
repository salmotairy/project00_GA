$(document).ready(function() {
  console.log("javascript connected!");

  var placesLeft = 9;
  var xArray = [];
  var oArray = [];
  var xWins = 0;
  var oWins = 0;
  var draws = 0;
  // if (document.getElementById('r1').checked) {
  //   rate_value = document.getElementById('r1').value;
  // }
  $(".opponent").on("change", function() {
    var opponent = $(".opponent:checked").val();
    console.log(opponent);
    if (opponent === "AI") {
      $(".player2").hide();
    } else {
      $(".player2").show();
    }
  });
  // if (opponent === "AI") {
  //   $(".player2").hide();
  // }

  function onClick() {
    console.log(opponent);
    if ($(this).text() === "") {
      if (placesLeft % 2 == 1) {
        $(this).text("X");
        xArray.push(Number($(this).attr("id")));
        placesLeft--;
        console.log(placesLeft);
        result = isGameOver(xArray);
        if (result !== "") {
          if (xArray.length >= 3) {
            window.setTimeout(function() {
              xWins++;
              swal({
                title: "Good job!",
                text: "The first " + result,
                icon: "success"
              });
              $("td#4").text(xWins);
              play();
            }, 200);
          }
        } else if (placesLeft === 0) {
          window.setTimeout(function() {
            draws++;
            swal({
              title: "No Winner!",
              text: "The game went to a draw",
              icon: "success"
            });
            $("td#6").text(draws);
          }, 200);
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
              // alert("The second " + result);
              swal({
                title: "Good job!",
                text: "The second " + result,
                icon: "success"
              });
              oWins++;
              $("td#5").text(oWins);
              play();
            }, 200);
          } else if (placesLeft === 0) {
            window.setTimeout(function() {
              // alert("No Winner!, the game went to a draw");ß
              draws++;
              swal({
                title: "No Winner!",
                text: "The game went to a draw",
                icon: "success"
              });
              $("td#6").text(draws);
              play();
            }, 200);
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
    $("#board td").click(onClick);
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
