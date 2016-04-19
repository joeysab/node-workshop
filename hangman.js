var drawing = require('./hangmandrawing.js');

var prompt = require("prompt");


var word = "hello".split("");
var arr = [];
var wrongCounter = 0;




var image = [drawing.hangPiece0, drawing.hangPiece1, drawing.hangPiece2, drawing.hangPiece3, drawing.hangPieceFull]







function hangman() {
    prompt.start()
    image[wrongCounter]()
    return prompt.get(['Letter: '], function(err, result) {
        var arrPosition = word.indexOf(result['Letter: ']);
        while (wrongCounter < 4) {
            if (wrongCounter < 4 && arrPosition !== -1) {
                console.log("YOU GOT IT BABY!")
                return hangman()
            }
            else {
                wrongCounter++;
                return hangman()
            }

        }
    })
}

hangman();
