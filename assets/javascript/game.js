var wins_counter = 0;
var loses_counter = 0
var guesses_left_counter = 10;
var guesses_sofar_counter = 0;
var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var won_var = "LOSE"


$("#whichkey").on("keydown", function( event ) {

    random_index = Math.floor(Math.random() * letters.length) + 1;
    random_key = (letters[random_index]).toLowerCase();
    if ((event.key).toLowerCase() == random_key) {
        wins_counter = wins_counter + 1;
        guesses_left_counter = guesses_left_counter - 1;
        guesses_sofar_counter = guesses_sofar_counter + 1;
        var won_var = "WON"
        letter_color = "green"
    } else {
        loses_counter = loses_counter + 1;
        guesses_left_counter = guesses_left_counter - 1;
        guesses_sofar_counter = guesses_sofar_counter + 1;
        var won_var = "LOSE"
        letter_color = "red"
    };
    whichkey.value = "";
    $("#random_key_display").html("<br><h2>THE KEY I'M THINKING OF IS: <font color='" + letter_color + "'>" + random_key.toUpperCase() + "" + "</font></h2>");
    $("#log").html("You typed " + event.key.toUpperCase() + ", and the key I'm thinking of is "+ random_key.toUpperCase() + "! YOU <font color='" + letter_color + "'>" + won_var + "!</font>");
    $("#wins").html("<h5>Wins: " + wins_counter + "" + "</h5>");
    $("#loses").html("<h5>Loses: " + loses_counter + "" + "</h5>");
    $("#guesses_left").html("<h5>Guesses Left: " + guesses_left_counter + "" + "</h5>");
    $("#guesses_sofar").html("<h5>Your Guesses So Far: " + guesses_sofar_counter + "" + "</h5>");

    if (guesses_sofar_counter == 10) {
        if (parseInt(wins_counter)) === parseInt(0)) {
            $("#keys").html("<div style='color:red'><h5>GAME OVER! YOU LOST ON ALL 10 TRIES!<br><br>Click on RESTART to reset the game."); 
        }
        if (parseInt(wins_counter) === parseInt(1)) {
            $("#keys").html("<div style='color:red'><h5>GAME OVER! You won once, and lost 9 times.<br><br>Click on RESTART to reset the game."); 
        }
     if (parseInt(wins_counter) < parseInt(1)) {
            $("#keys").html("<div style='color:red'><h5>GAME OVER! You won " + wins_counter + " times, and lost " + loses_counter + " times!<br><br>Click on RESTART to reset the game."); 
        }
      
    }
  });

$('#restart').click(function() {
    location.reload();
});
