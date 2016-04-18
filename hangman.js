var prompt = require("prompt");


var word = ["hello"].split();
var arr = [];



prompt.start();
prompt.get(['Letter: '], function(err, result) {
    var arrPosition = word.indexOf(result['Letter']);
    console.log(typeof arrPosition)
})



/*  while (<>) { # <> puts the keyboard entry into $_
        gallows($_);# inside gallows $_[0] is the 1st argument 
                    # which is our keyboard entry $_
    }
    sub gallows { 
        # First the crossbar of the gallows 
            print "_____________   \n"; 
            print "|           |   \n"; 
        if ($_[0] == 0){ # Now the head 
            print "|               \n"; 
            print "|               \n"; 
            print "|               \n"; 
            print "|               \n"; 
        } else { 
            print "|           o   \n"; 
            print "|          o o  \n"; 
            print "|          o o  \n"; 
            print "|           o   \n"; 
        } 
        if ($_[0] <= 1) { # The body and arms
            print "|               \n"; 
            print "|               \n"; 
            print "|               \n"; 
        } elsif ($_[0] == 2) { 
            print "|           |    \n"; 
            print "|           |    \n"; 
            print "|           |    \n"; 
        } elsif ($_[0] == 3) { 
            print "|           |    \n"; 
            print "|          /|    \n"; 
            print "|         / |    \n"; 
        } elsif ($_[0] >3) { 
            print "|           |    \n"; 
            print "|          /|\\  \n"; 
            print "|         / | \\ \n"; 
        } 
        # Excercise: Write the code to print the legs here.   
    }
    */
