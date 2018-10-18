$(document).ready(function() {
  $(".start").click(function() {
    $(".landing-page").hide();
    $(".main").show();
    $(".main").css("display", "flex");
  });
  var placesLeft = 9;
  var xArray = [];
  var oArray = [];
  var xWins = 0;
  var oWins = 0;
  var draws = 0;
  var opponent;
  var turn;
  var places = [11, 12, 13, 21, 22, 23, 31, 32, 33];
  var firstMove = [11, 13, 22, 31, 33];
  var player1 = "Player1";
  var player2 = "Player2";
  $(".options2").hide();
  $(".options1").on("change", opts);
  $(".options2").on("change", opts);
  function opts() {
    opponent = $(".opponent:checked").val();
    if (opponent === "AI") {
      $(".options2").show();
      turn = $(".turn:checked").val();
      myTurn(turn);
    } else if (opponent === "human") {
      $(".options2").hide();
      $(".player1").show();
      $(".player2").show();
    } else {
      alert("call the developer!\n something went wrong.");
    }
  }
  function myTurn(turn) {
    if (turn === "first") {
      $(".player1").show();
      $(".player2").hide();
    } else if (turn === "second") {
      $(".player1").hide();
      $(".player2").show();
    } else {
      alert("call the developer!\n something went wrong.");
    }
  }
  $("#submit").on("click", whoPlay);
  function whoPlay() {
    if ($(".player1").is(":hidden")) {
      player1 = "AI";
      player2 = $("input.player2").val();
    } else if ($(".player2").is(":hidden")) {
      player1 = $("input.player1").val();
      player2 = "AI";
    } else if ($(".player1").is(":visible") && $(".player2").is(":visible")) {
      player1 = $("input.player1").val();
      player2 = $("input.player2").val();
    } else {
      alert("call the developer!\n something went wrong.");
    }
    $("#1").text(player1 + " wins");
    $("#2").text(player2 + " wins");
    play();
  }
  function play() {
    $("#board td")
      .empty()
      .off();
    xArray = [];
    oArray = [];
    placesLeft = 9;
    if (player1 === "AI") {
      aiTurn("X");
    }
    $("#board td").click(onClick);
  }
  function onClick() {
    if ($(this).text() === "") {
      if (placesLeft % 2 == 1) {
        $(this).text("X");
        xArray.push(Number($(this).attr("id")));
        placesLeft--;
        // result = isGameOver(xArray);
        if (isGameOver(xArray) !== "") {
          if (xArray.length >= 3) {
            window.setTimeout(function() {
              xWins++;
              swal({
                title: "Good job!",
                text: player1 + " wins the game.",
                icon: "images/thumps-up.png"
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
            play();
          }, 200);
        }
      } else {
        $(this).text("O");
        oArray.push(Number($(this).attr("id")));
        placesLeft--;
        console.log(placesLeft);
        if (oArray.length >= 3) {
          // var result = isGameOver(oArray);
          if (isGameOver(oArray) !== "") {
            window.setTimeout(function() {
              // alert("The second " + result);
              swal({
                title: "Good job!",
                text: player2 + " wins the game.",
                icon: "images/thumps2.jpg"
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
  // function aiTurn(letter) {
  //   if (placesLeft === 9) {
  //     var id = "#" + firstMove[Math.floor(Math.random() * 5)].toString();
  //     $(id).text(letter);
  //   } else if (placesLeft === 8) {
  //     if ($("#22").text() === "") {
  //       $("#22").text(letter);
  //     } else {
  //       firstMove.splice(2, 1);
  //       var id = "#" + firstMove[Math.floor(Math.random() * 4)].toString();
  //       $(id).text(letter);
  //     }
  //   } else if (placesLeft === 7) {
  //   }
  // }
  play();
  function checkThree(num1, num2, num3, array) {
    return array.includes(num1) && array.includes(num2) && array.includes(num3);
  }
  function isGameOver(array) {
    if (
      checkThree(11, 12, 13, array) ||
      checkThree(21, 22, 23, array) ||
      checkThree(31, 32, 33, array) ||
      checkThree(11, 21, 31, array) ||
      checkThree(12, 22, 32, array) ||
      checkThree(13, 23, 33, array) ||
      checkThree(11, 22, 33, array) ||
      checkThree(13, 22, 31, array)
    ) {
      return " wins the game";
    }
    return "";
  }
});
