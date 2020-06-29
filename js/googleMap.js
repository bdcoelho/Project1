function initMap () {
    apiKey = "AIzaSyDkoaZdFxBFFsVXF2Hey8DXZ-tIiR_NBYM"

    var workAddress = "436 Johnston st Abbotsford,au"; // can probalby do $("#work-input")

    var propertyAddress = "216 Johnston st Abbotsford,au"; //can potentially get the element by the propertyaddress

    
    

        var queryURL = "https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=" + propertyAddress + "&destinations=" + workAddress + "&key=" + apiKey;
        console.log(queryURL);

  
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
                console.log(response);
                var distanceToWork= response.rows[0].elements[0].distance.text;
                var pOne = $("<p>").text("Distance to destination: " + distanceToWork);
                console.log(distanceToWork)
                var duration = response.rows[0].elements[0].duration.text;
                var pTwo = $("<p>").text("Duration: " + duration);

                    
                $(".travelInfo").append(pOne);
                $(".travelInfo").append(pTwo);
                


                
            })
        }


        // save the work address in the local storage//

        $("#saveWorkAddress").on("click",function(){
            var testing = $(this).parent().attr("id")
            var textContent = $(this).siblings("input").val;
            

            localStorage.setItem(testing, textContent)
            

        })

        $(".work-address").children("input").val(localStorage.getItem("work-address"))







