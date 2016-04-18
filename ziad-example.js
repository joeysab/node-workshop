setTimeout(function() {
    console.log('five seconds are gone');
    setTimeout(function() {
        console.log('ten seconds are gone');
    }, 5000);
    console.log('inside first timeout')
}, 5000);
​
var prompt = require('prompt');
prompt.start();
prompt.get(['do you know code?'], function (err, result) {
    if (result['do you know code?'] === 'yes') {
        prompt.get(['what are you doing here?'], function(err, result) {
            // ...
        })
    }
    else {
        prompt.get(['what are you waiting for?'], function(err, result) {
            // ...
        })
    }
});
​
var request = require('request');
var address = "https://api.forecast.io/forecast/0600a90c202a8c1212fcc0fdd16b8823/37.8267,-122.423";
request(address, function(err, result) {
    var resultObject = JSON.parse(result.body);
    console.log("The current weather is: " + resultObject.currently.summary);
    console.log("The current temperature is " + resultObject.currently.temperature + "F");
​
    // //var temperature = ????;
​
    // if (temperature < 5) {
    //     console.log('stay home if you can')
    // }
    // else if (temperature > 5 && temperature <= 20) {
    //     console.log('go out')
    // }
    // else {
    //     console.log('stay home if you can')
    // }
    
});