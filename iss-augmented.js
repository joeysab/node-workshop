var request = require("request");
var prompt = require("prompt");
var util = require("util");

prompt.start();
prompt.get(["city"], function(err, result) {

    //to Radians prototype
    Number.prototype.toRadians = function() {
        return this * Math.PI / 180;
    };

    //Getting location of city prompted
    var city = result.city;
    var addressISS = "https://maps.googleapis.com/maps/api/geocode/json?address=" + city;
    request(addressISS, function(err, result) {
        var objResult = JSON.parse(result.body);
        var latitude = objResult.results[0].geometry.location.lat;
        var longitude = objResult.results[0].geometry.location.lng;
        //console.log(util.inspect(objResult, { showHidden: true, depth: null, colors: true }));
         console.log("Location of " + city + ": Latitude: " + latitude + ", Longitude: " + longitude)


        //Getting location of ISS
        var addressLocation = "http://api.open-notify.org/iss-now.json";

        request(addressLocation, function(err, result) {
            var resultObj = JSON.parse(result.body);
            var latitude1 = resultObj.iss_position.latitude;
            var longitude1 = resultObj.iss_position.longitude;


            //rest of code
            var R = 6371000; // metres
            var φ1 = latitude.toRadians();
            var φ2 = latitude1.toRadians();
            var Δφ = (latitude1 - latitude).toRadians();
            var Δλ = (longitude1 - longitude).toRadians();

            var a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
                Math.cos(φ1) * Math.cos(φ2) *
                Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
            var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

            var d = R * c;

            console.log("Location of ISS : Latitude: " + latitude1.toFixed(2) + "Longitude: " + longitude1.toFixed(2));
            console.log("Distance between ISS and City : " + d.toFixed(0) + " meters");
        })
    });
})
