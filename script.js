
var queryURL = "https://api.domain.com.au/v1/listings/residential/_search";

$.ajax({
    url: queryURL,
    method: "POST",
    headers: {accept: "application/json", "X-Api-Key": "key_761023226fcf3d4ecaa2f37b37d35d19"},
    datatype: "json",
    data: JSON.stringify({
        "listingType":"Sale",
        "propertyTypes":[
          "House",
          "NewApartments"
        ],
        "minBedrooms":3,
        "minBathrooms":2,
        "minCarspaces":1,
        "locations":[
          {
            "state":"NSW",
            "region":"",
            "area":"",
            "suburb":"Newtown",
            "postCode":"",
            "includeSurroundingSuburbs":false
          }
        ]
      }),

      error: function(e) {
        console.log(e);
      },
      contentType: "application/json"

}).then(function(response) {
    console.log(response);
})



