$(document).ready(function() {
  console.log("javascript connected!");

  var placesLeft = 9;
  var xArray = [];
  var oArray = [];
  var xWins = 0;
  var oWins = 0;
  var draws = 0;
  var opponent;
  var turn;

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

  //   var opponent = $(".opponent:checked").val();
  //   console.log(opponent);

  //   if (opponent === "AI") {
  //     $(".options2").show();
  //     var turn = $(".turn:checked").val();
  //     console.log(turn);
  //   } else if (opponent === "human") {
  //     console.log("human");

  //   } else{

  //   }

  //     if (turn === "first") {
  //       $(".player1").show();
  //       $(".player2").hide();

  //       // $(".names").css({
  //       //   justifyContent: "flex-start"
  //       // });
  //       // $("p.player1").css({
  //       //   width: "100px",
  //       //   height: "35px"
  //       // });
  //       // $("input.player1").css({
  //       //   width: "130px",
  //       //   height: "30px"
  //       // });
  //       // $("input.player1").css("width", "60px");
  //       // } else {
  //       // $(".player1").hide();
  //       //     $(".names").css({
  //       //       justifyContent: "flex-end"
  //       //     });
  //       //     $("p.player1").css({
  //       //       width: "100px",
  //       //       height: "35px"
  //       //     });
  //       //     $("input.player1").css({
  //       //       width: "130px",
  //       //       height: "30px"
  //       //     });
  //       //   }
  //     } else {
  //       $(".options2").hide();

  //       $(".player1").hide();
  //       $(".player2").show();

  //       //   $(".names").css({
  //       //     justifyContent: "space-around"
  //       //   });
  //       // $("p.player1").css("width", "auto");
  //       // $("input.player1").css("width", "auto");
  //     }
  //   }
  // });

  function onClick() {
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
  // function checkThree(num1,num2,num3,array)
  // {
  //   if (array.includes(num1) && array.includes(num2) && array.includes(num3)) {
  //     return true
  // }else {
  //     return false

  // }
  function isGameOver(array) {
    if (array.includes(11) && array.includes(12) && array.includes(13)) {
      console.log("won");
      return "player won the game";
    } else if (array.includes(21) && array.includes(22) && array.includes(23)) {
      console.log("won");
      return "player won the game";
    } else if (array.includes(31) && array.includes(32) && array.includes(33)) {
      console.log("won");
      return "player won the game";
    } else if (array.includes(11) && array.includes(21) && array.includes(31)) {
      console.log("won");
      return "player won the game";
    } else if (array.includes(12) && array.includes(22) && array.includes(32)) {
      console.log("won");
      return "player won the game";
    } else if (array.includes(13) && array.includes(23) && array.includes(33)) {
      console.log("won");
      return "player won the game";
    } else if (array.includes(11) && array.includes(22) && array.includes(33)) {
      console.log("won");
      return "player won the game";
    } else if (array.includes(13) && array.includes(22) && array.includes(31)) {
      console.log("won");
      return "player won the game";
    }
    return "";
  }
});
