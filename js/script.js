$(document).ready(function(){
  $('select').formSelect();

  

  

var queryURL = "https://api.domain.com.au/v1/listings/residential/_search";


// numOfBed numOfBath, numOfCarpark, properityType

var numOfBed=1//$("#numOfBed")
var numOfBath=1//$("#numOfBath")
var numOfCarpark=1//$("#numOfCarpark")
var properityType=1//$("#properityType")

console.log(numOfBed)
console.log(numOfBath)
console.log(numOfCarpark)
console.log(properityType)


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

});
      