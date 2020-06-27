function initMap () {
    apiKey = "AIzaSyDkoaZdFxBFFsVXF2Hey8DXZ-tIiR_NBYM"

    var workAddress = "436 Johnston st Abbotsford,au";

    var propertyAddress = "216 Johnston st Abbotsford,au"; //can potentially get the element by the propertyaddress

    
        // [ORIGINAL]var queryURL = "https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=Washington,DC&destinations=New+York+City,NY&key=" + apiKey;

        var queryURL = "https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=" + propertyAddress + "&destinations=" + workAddress + "&key=" + apiKey;
        console.log(queryURL);

        // $.ajax({
        //     url: queryURL,
        //     method: "GET",
        // }).then(function(response){
        //     console.log(response);

            //     });
    // }

    // distanceToWork()
        var service = new google.maps.DistanceMatrixService();
        service.getDistanceMatrix(
            {
                origins: [workAddress],
                destinations: [propertyAddress],
                travelMode: 'DRIVING',
                // transitOptions: TransitOptions,
                // drivingOptions: DrivingOptions,
                // unitSystem: UnitSystem,
                // avoidHighways: Boolean,
                // avoidTolls: Boolean,
            }, function (response) {
                console.log(response)
            })
        }







