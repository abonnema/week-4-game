// Initialize Document
// Assign Global Variables
// a random number between 19-120 for computer to be displayed
// assign each crystal a random number at start of game and keep hidden
// display total of each click at bottom
// if total =, then win
// if total goes over, then lose alert
// after alert, reset game
    

    //start script
$(document).ready(function() {
    //global variables

    // Win Lose
    var winCounter = 0;
    var lossCounter = 0;
    var valueCounter = 0;
    //add to HTML
    $("#winCounter").text(winCounter);
    $("#lossCounter").text(lossCounter);


    //function to start game;
    function startGame () {

        //Put crystal counter at 0;
        valueCounter = 0;
        //Add to HTML
        console.log(valueCounter);


        //Assign random number 19-120 for computer;
        var randomNumber = Math.floor(Math.random() * 101) + 19;
        //Add to HTML
        $("#numberChosen").text(randomNumber);
        console.log(randomNumber);

        //Assign random number to crystals 1-12;
        var crystal1 = Math.floor(Math.random() * 11) + 1;
        var crystal2 = Math.floor(Math.random() * 11) + 1;
        var crystal3 = Math.floor(Math.random() * 11) + 1;
        var crystal4 = Math.floor(Math.random() * 11) + 1;
        
        //Clicking on Crystal 1;
        console.log(crystal1);
        $("#crystal-1").on("click", function() {
            //Parse the value to integer;
            crystal1 = parseInt(crystal1);
            //Add value of crystal1 to counter;
            valueCounter += crystal1;
            $("#crystal-value").text(valueCounter);
            //check to see if counter is added;
            if (valueCounter === randomNumber) {
                winCounter++;
                $("#winCounter").text(winCounter);
                startGame ();
            }
            if (valueCounter >= randomNumber) {
                lossCounter++;
                $("#lossCounter").text(lossCounter);
                startGame ();
            }
            
        });    

        //Clicking on Crystal 2;
        console.log(crystal2);
        $("#crystal-2").on("click", function() {
            crystal2 = parseInt(crystal2);
            valueCounter += crystal2;
            $("#crystal-value").text(valueCounter);
            if (valueCounter === randomNumber) {
                winCounter++;
                $("#winCounter").text(winCounter);
                startGame ();
            }
            if (valueCounter >= randomNumber) {
                lossCounter++;
                $("#lossCounter").text(lossCounter);
                startGame ();
            }
        });

        //Clicking on Crystal 3;
        console.log(crystal3);
        $("#crystal-3").on("click", function() {
            crystal3 = parseInt(crystal3);
            valueCounter += crystal3;
            $("#crystal-value").text(valueCounter);
            if (valueCounter === randomNumber) {
                winCounter++;
                $("#winCounter").text(winCounter);
                startGame ();
            }
            if (valueCounter >= randomNumber) {
                lossCounter++;
                $("#lossCounter").text(lossCounter);
                startGame ();
            }
        });

        //Clicking on Crystal 4;
        console.log(crystal4);
        $("#crystal-4").on("click", function() {
            crystal4 = parseInt(crystal4);
            valueCounter += crystal4;
            $("#crystal-value").text(valueCounter);
            if (valueCounter === randomNumber) {
                winCounter++;
                $("#winCounter").text(winCounter);
                startGame ();
            }
            if (valueCounter >= randomNumber) {
                lossCounter++;
                $("#lossCounter").text(lossCounter);
                startGame ();
            }
        });
    };

    startGame ();
});




