$(document).ready(function() {
    apiKey ="AIzaSyCnVWozX9Hf-XWt1r5OL9Mc7Lsr18dFtUU"

    var workAddress = $("#work-input");

    var topVisitPlace = [];
    
    var propertyAddress = "";
    
    function distanceToTopVisitPlace (){
    
        // [ORIGINAL] queryURL = "https://maps.googleapis.com/maps/api/distancematrix/json?units=metric&origins=Washington,DC&destinations=New+York+City,NY&key=" + apiKey;
    
        queryURL = "https://maps.googleapis.com/maps/api/distancematrix/json?units=metric&origins=" + propertyAddress + "&destinations=" + workAddress + "&key=" + apiKey;
        
        $ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response){
            console.log(response);
        });
    }
    
    distanceToTopVisitPlace()
})
