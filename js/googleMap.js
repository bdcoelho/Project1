$(document).ready(function() {
    apiKey ="AIzaSyDkoaZdFxBFFsVXF2Hey8DXZ-tIiR_NBYM"

    var workAddress = "436%20Johnston%20St,%20Abbotsford%20VIC%203067,au";
    
    var propertyAddress = "216%20Johnston%20St,%20Abbotsford%20VIC%203067,au"; //can potentially get the element by the propertyaddress
    
    function distanceToWork (){
        // [ORIGINAL]var queryURL = "https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=Washington,DC&destinations=New+York+City,NY&key=" + apiKey;
    
       var queryURL = "https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=" + propertyAddress + "&destinations=" + workAddress + "&key=" + apiKey;
       console.log(queryURL);
        
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response){
            console.log(response);




            
        });
    }
    
    distanceToWork()

    
});



