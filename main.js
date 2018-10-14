$(document).ready(function () {
    console.log('javascript connected!');

    var placesLeft = 9;
    var play = true;
    var xArray = [];
    var oArray = [];


    $("td").click(function () {
        if ($(this).text() == "" && play) {
            if ((placesLeft % 2) == 1) {
                $(this).text("X");
                xArray.push(Number($(this).attr("id")));
                if (xArray.length >= 3) {
                    isGameOver(xArray);
                }
            }
            else {
                $(this).text("O");
                oArray.push(Number($(this).attr("id")));
                if (oArray.length >= 3) {
                    isGameOver(xArray);
                }
            }
        }
        placesLeft--;
    });

    function isGameOver(Array) {
        if (Array.includes(11) && Array.includes(12) && Array.includes(13)) {
            // return gameOver
        } else if (Array.includes(21) && Array.includes(22) && Array.includes(23)) {
            // return gameOver
            console.log("won");
        } else if (Array.includes(31) && Array.includes(32) && Array.includes(33)) {
            // return gameOver
            console.log("won");
        } else if (Array.includes(11) && Array.includes(21) && Array.includes(31)) {
            // return gameOver
            console.log("won");
        } else if (Array.includes(12) && Array.includes(22) && Array.includes(32)) {
            // return gameOver
            console.log("won");
        } else if (Array.includes(13) && Array.includes(23) && Array.includes(33)) {
            // return gameOver
            console.log("won");
        } else if (Array.includes(11) && Array.includes(22) && Array.includes(33)) {
            // return gameOver
            console.log("won");
        } else if (Array.includes(13) && Array.includes(22) && Array.includes(31)) {
            // return gameOver
            console.log("won");
        }

    }




})