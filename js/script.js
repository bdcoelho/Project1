// GetResponseFromDomain
$(document).ready(function(){

  var instance=  $('select').formSelect();
  
  // Function to convert to camelCase and remove forward slash. Unnecessary - changed value in index.html
  //   function camelCase(str) { 
  
  //     return str
  //         .replace(/\//g, " ")
  //         .replace(/\s(.)/g, function(a) { 
  //             return a.toUpperCase(); 
  //         }) 
  //         .replace(/\s/g, '') 
  //         .replace(/^(.)/, function(b) { 
  //             return b.toLowerCase(); 
  //         }); 
  // } 
  
  
  
  
  $( "[name='action']" ).on("click", function (event) {
    event.preventDefault();
    console.log("clicked");
   
    var suburb = $("#9").val();
    var numOfBed = parseInt($(instance[0]).val());
    var numOfBath = parseInt($(instance[1]).val());
    var numOfCarpark = parseInt($(instance[2]).val());
    var propertyType = $(instance[3]).val();
  
  // Working code, but unnecessary - changed value in index.html
  //  if(propertyType.indexOf("Apartment/Unit/Flat")!==-1){
  // index=propertyType.indexOf("Apartment/Unit/Flat")
  // propertyType[index]=camelCase(propertyType[index])
  // console.log(propertyType)
  //  }
  
  
  
    console.log(suburb);
    console.log(numOfBed);
    console.log(numOfBath);
    console.log(numOfCarpark);
    console.log(propertyType);
  
  
    listProperties(suburb,
      numOfBed,
      numOfBath,
      numOfCarpark,
      propertyType
      );
  
  
  });
  
  
  function listProperties(suburb,
    numOfBed,
    numOfBath,
    numOfCarpark,
    propertyType){
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
      propertyTypes: propertyType,
      minBedrooms: numOfBed,
      minBathrooms: numOfBath,
      minCarspaces: numOfCarpark,
      pageSize: 10,
      locations: [
        {
          state: "VIC",
          region: "",
          area: "",
          suburb: suburb,
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
  
  });
        

