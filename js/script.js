
$( "[name='action']" ).on("click", function (event) {
  event.preventDefault();
  console.log("clicked");
  // console.log($(instance[0]).val());
  // console.log($(instance[1]).val());
  // console.log($(instance[2]).val());
  // console.log($(instance[3]).val());
  var instance=  $('select').formSelect();
  var numOfBed = $(instance[0]).val();
  var numOfBath = $(instance[1]).val();
  var numOfCarpark = $(instance[2]).val();
  var propertyType = $(instance[3]).val();

  

  console.log(numOfBed);
  console.log(numOfBath);
  console.log(numOfCarpark);
  console.log(propertyType);



});


listProperties = function(){
var queryURL = "https://api.domain.com.au/v1/listings/residential/_search";
$.ajax({
  url: queryURL,
  method: "POST",
  headers: {
    accept: "application/json",
    "X-Api-Key": "key_761023226fcf3d4ecaa2f37b37d35d19",
  },
  datatype: "json",
  data: JSON.stringify({
    listingType: "Sale",
    propertyTypes: ["House", "apartmentUnitFlat", "townhouse"],
    minBedrooms: numOfBed,
    minBathrooms: numOfBath,
    minCarspaces: numOfCarpark,
    pageSize: 10,
    locations: [
      {
        state: "VIC",
        region: "",
        area: "",
        suburb: "Glen huntly",
        postCode: "",
        includeSurroundingSuburbs: false,
      },
    ],
  }),

  error: function (e) {
    console.log(e);
  },
  contentType: "application/json",
}).then(function (response) {
  console.log(response);
});
}


      