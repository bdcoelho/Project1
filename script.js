
var queryURL = "https://api.domain.com.au/v1/disclaimers?ids=1";

$.ajax({
    url: queryURL,
    method: "GET",
    headers: {accept: "application/json", "X-Api-Key": "key_761023226fcf3d4ecaa2f37b37d35d19"}
}).then(function(response) {
    console.log(response);
})

