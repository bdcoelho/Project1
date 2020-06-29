$(document).ready(function () {
  var retrieveStorage = localStorage["favoriteStore"];
  var favoriteProps = retrieveStorage ? JSON.parse(retrieveStorage) : [];
  var myWork = localStorage["myWorkStore"];
  $("#saveWorkAddress").on("click", function (event) {
    var myWork = $("#work-input").val();
    localStorage["myWorkStore"] = myWork;
    $("#table-body").empty();
    initMap();
  });


myPropertyAddressArray=[]
for(i=0;i<favoriteProps.length;i++){
   myPropertyAddress =
   favoriteProps[i].listing.propertyDetails.displayableAddress;

   myPropertyAddressArray.push(myPropertyAddress)

  }


  function initMap() {
travelDataArray=[]
for(i=0;i<favoriteProps.length;i++){
    apiKey = "AIzaSyDkoaZdFxBFFsVXF2Hey8DXZ-tIiR_NBYM";

    var workAddress = myWork;

    var propertyAddress = favoriteProps[i].listing.propertyDetails.displayableAddress;

    var queryURL =
      "https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=" +
      propertyAddress +
      "&destinations=" +
      workAddress +
      "&key=" +
      apiKey;
    console.log(queryURL);

    var service = new google.maps.DistanceMatrixService();
    service.getDistanceMatrix(
      {
        origins: [workAddress],
        destinations: [propertyAddress],
        travelMode: "DRIVING",
        // transitOptions: TransitOptions,
        // drivingOptions: DrivingOptions,
        // unitSystem: UnitSystem,
        // avoidHighways: Boolean,
        // avoidTolls: Boolean,
      },
      function (response) {
        var distanceToWork = response.rows[0].elements[0].distance.text;
        var duration = response.rows[0].elements[0].duration.text;

        travelData = {
          distance: distanceToWork,
          time: duration,
        };

        travelDataArray.push(travelData);
       console.log(travelDataArray);
       $("#table-body").empty();
  renderFavorites(travelDataArray);
      }
    );
    };
  };



  function renderFavorites(travelDataArray) {
    for (var i = 0; i < favoriteProps.length; i++) {

      var thisRow = $("<tr></tr>");
      var thisAddress = $("<td>" + myPropertyAddressArray[i] + "</td>");

  
      var thisDistance = $("<td>"+travelDataArray[i].distance+"</td>");
      var thisTime = $("<td>"+travelDataArray[i].time+"</td>");

      $("#table-body").append(
        thisRow.append(thisAddress, thisDistance, thisTime)
      );
    }
  }

  initMap()
});
