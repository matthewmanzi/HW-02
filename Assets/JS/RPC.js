    //Initializing global variables//
    var RPS = ["rock", "paper", "scizzors"];    //The array that maintains our game pieces
    var player1, player2;                       //The RNG from 0-2 points in array to the player choice
    var p1 = p2 = round = 0;                    //Player score holders and round number
    var targetScore = 3;                        //Number of wins for victory
    var gameState = true;
    


    //Main subroutine: While the condition that neither score has reached target remains, loop the process

while (gameState == true) { //Controls whether the game restarts depending on the user's input
var p1 = p2 = round = 0;    //Reinitializing variables after a restart
    do {                    //Conditional wrapper: stops the game once the target number of wins is reached
        round++;                                //Incremement the round number by one before starting
        alert("Round " + round + "!");          //Announce the round number
        player1 = Math.floor(Math.random()*3);  //RNG player one
        player2 = Math.floor(Math.random()*3);  //RNG player two

        player1roll = RPS[player1];             //Convert RNG to corresponding string
        player2roll = RPS[player2];             //for players one and two

        alert("Player 1 threw " + player1roll + "!");       //Alert the user as to what
        alert("Player 2 threw " + player2roll + "!");       //each player threw this round

        matchOutcome = [player1roll, player2roll];          //Store individual match outcomes to an array
                                                            //for condition checking and future add-ons

    //Endpoint conditions:
        //Conditions for a draw.
        if (matchOutcome[0] == matchOutcome[1]) {
            alert("Neither player wins this match.");
        }

        //All possible outcomes for player one to win the round: 
        //Player one wins IF ANY of the following are true:
        //rock AND scizzors :: OR paper AND rock :: OR scizzors AND paper
        if ((player1roll == "rock" && player2roll == "scizzors") || (player1roll == "paper" && player2roll == "rock") || (player1roll == "scizzors" && player2roll == "paper")) {
            alert("Player one wins this match!");
            p1++; //increment player one score by one point
        }

        //All possible outcomes for player two to win the round: 
        if ((player1roll == "rock" && player2roll == "paper" ) || (player1roll == "paper" && player2roll == "scizzors") || (player1roll == "scizzors" && player2roll == "rock")) {
            alert("Player two wins this match!");
            p2++; //increment player two score by one point
        }

    //Scoreboard tracking:
        alert("Current score: Player one: " + p1 + ". Player two: " + p2 + ".");
        var score = [p1, p2];       //Storing score in array for future add-ons
    } //End of main subroutine

    while (p1 < targetScore && p2 < targetScore);   
    //This is the WHILE condition connected to the DO
    //conditional wrapper at the beginning. Closes the DO loop.

    //Wrapping up the game
        alert("GAME OVER!");
        alert("And the winner is...");
 
    //One score will necessarily be larger since the WHILE routine ends once either score hits 10
        if (p1>p2) {
            alert("PLAYER ONE!!!"); //Player one wins
        }

        if (p2>p1) {
            alert("PLAYER TWO!!!"); //Player two wins
        }

        if (p1===p2) {
            alert("This is an impossible situation. You broke something."); //Included for debugging purposes
        }

        retryAns = confirm("Would you like to play again?");    //Restart or quit.
            if (retryAns == false) {
                alert("Goodbye.");
                var gameState = false; //Ensures the game does not restart is user hits cancel
                }
            if (retryAns == true) {
                alert("Here we go again!"); 
                var gameState = true; //Allows the WHILE wrapper to proceed and restart from the beginning.
                }
    } //Closes the WHILE wrapper
