$(document).ready(function() {
    apiKey ="AIzaSyDkoaZdFxBFFsVXF2Hey8DXZ-tIiR_NBYM"

    var workAddress = "436 Johnston St, Abbotsford VIC 3067,au";
    
    var propertyAddress = "216 Johnston St, Fitzroy VIC 3067,au"; //can potentially get the element by the propertyaddress
    
    function distanceToWork (){
        // [ORIGINAL]var queryURL = "https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=Washington,DC&destinations=New+York+City,NY&key=" + apiKey;
    
       var queryURL = "https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=" + propertyAddress + "&destinations=" + workAddress + "&key=" + apiKey;
       console.log(queryURL);
        
        $ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response){
            console.log(response);



            var distance = response.rows[0].elements[0].distance.value;
            console.log("the distance is"+ distance);
        });
    }
    
    distanceToWork()

    
});



