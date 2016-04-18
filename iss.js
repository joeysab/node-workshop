var request = require("request");
var address = "http://api.open-notify.org/iss-now.json";

request(address, function(err, result){
    var resultObj = JSON.parse(result.body);
    var latitude1 = resultObj.iss_position.latitude;
    var longitude1 = resultObj.iss_position.longitude;

    
    
    console.log("Latitude: " + latitude1.toFixed(2));
    console.log("Longitude: " + longitude1.toFixed(2));

})