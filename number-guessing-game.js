var prompt = require("prompt");


//The random number generator
var randomNumber = parseInt(Math.floor(Math.random() * (10 - 1 + 1)) + 1)
var counter = 0;
var trial = 4;

function randomNumberCheck() {

    prompt.get(['Number'], function(err, result) {


        if (Number(result['Number']) === randomNumber) {
            console.log("You got the right number!");
        }
        else if (counter < 3 && (randomNumber < Number(result['Number']))) {
            counter++;
            trial--;
            console.log("Wrong number! You have " + trial + " left, your number is too high!");
            randomNumberCheck();


        }
        else if (counter < 3 && randomNumber > Number(result['Number'])) {
            counter++;
            trial--;
            console.log("Wrong number! You have " + trial + " trial left, your number to too low!");
            randomNumberCheck();
        }

    });
}

randomNumberCheck();
