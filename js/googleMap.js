$(document).ready(function() {
    apiKey ="AIzaSyCnVWozX9Hf-XWt1r5OL9Mc7Lsr18dFtUU"

    var workAddress = $("#work-input");
    
    var propertyAddress = "";
    
    function distanceToTopVisitPlace (){
    
        // [ORIGINAL] queryURL = "https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=Washington,DC&destinations=New+York+City,NY&key=" + apiKey;
    
        queryURL = "https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=" + propertyAddress + "&destinations=" + workAddress + "&key=" + apiKey;
        
        $ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response){
            console.log(response);
        });
    }
    
    distanceToTopVisitPlace()

    
});



