$(document).ready(function(){
//each game must start in the reset function

// generate computer random number (19 - 120)
var computerRandomNumber = 0;

// create crystal array to house index values from html
var crystal = [];

// generate win and loss variables
var wins = 0;
var loss = 0;
var yourTotal = 0;

    $(".btn").on("click", function(){
        var index = $(this).attr("index")
        console.log(this)
        console.log(index)
        yourTotal = yourTotal + crystal[index];
        console.log(yourTotal)
        $("#your-total").text("$" + yourTotal + ".00");
        if (yourTotal === computerRandomNumber) {
            wins++;
            $("#wins").text(wins);
            restart();
        }
        else if (yourTotal > computerRandomNumber) {
            loss++;
            $("#loss").text(loss);
            restart();
        }
    });

    function restart() {
        computerRandomNumber = Math.floor((Math.random()* 101) + 19);
        $("#order-total").text("$" + computerRandomNumber + ".00");
        yourTotal = 0;
        $("#your-total").text(yourTotal);
        // generate crystal random numbers (1 - 12)
        crystal = [];
        for (var i = 0; i < 4; i++) {
            crystal [i] = Math.floor((Math.random()* 12) + 1);
        }
    
        console.log(crystal);
    };

    restart();
});