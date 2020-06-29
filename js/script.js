// GetResponseFromDomain
$(document).ready(function () {
  var maxPropertyValue = 5000000;
  var instance = $("select").formSelect();
  var iteratorMin = 0;
  var iteratorMax = 9;
  var searchResults = $("#card-container");
  var filteredArray =[]
  var lowIndex = 0;
  var highIndex = 10;

  $("[name='next-btn']").on("click", function () {
    lowIndex = iteratorMax;
    highIndex = lowIndex + 10;
    searchResults.empty();
    renderResults(filteredArray,lowIndex,highIndex);
  });

  $("[name='prev-btn']").on("click", function () {
    lowIndex = iteratorMin - 10;
    lowIndex=Math.max(lowIndex,0)
    highIndex = lowIndex + 10;
    searchResults.empty();
    renderResults(filteredArray,lowIndex,highIndex);
  });

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

  // Working code, but unnecessary - changed value in index.html
  //  if(propertyType.indexOf("Apartment/Unit/Flat")!==-1){
  // index=propertyType.indexOf("Apartment/Unit/Flat")
  // propertyType[index]=camelCase(propertyType[index])
  // console.log(propertyType)
  //  }

  var slider = document.getElementById("slider");

  $("#slider").on("click", function (event) {
    maxPropertyValue = $(".value").html();
    return maxPropertyValue;
  });

  $("[name='action']").on("click", function (event) {
    event.preventDefault();
    searchResults.empty();
    var propertyStore = [];

    var suburb = $("#9").val();
    var numOfBed = parseInt($(instance[0]).val());
    var numOfBath = parseInt($(instance[1]).val());
    var numOfCarpark = parseInt($(instance[2]).val());
    var propertyType = $(instance[3]).val();

    listProperties(
      suburb,
      numOfBed,
      numOfBath,
      numOfCarpark,
      propertyType,
      maxPropertyValue
    );
  });

  function listProperties(
    suburb,
    numOfBed,
    numOfBath,
    numOfCarpark,
    propertyType
  ) {
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
        maxPrice: maxPropertyValue,
        pageSize: 100,
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
      var type = ["PropertyListing"];
      filteredArray = response.filter(function (itm) {
        return type.indexOf(itm.type) > -1;
      });

      console.log(filteredArray);
      localStorage["propertyStore"] = JSON.stringify(filteredArray);
      renderResults(filteredArray,lowIndex,highIndex);
    });
  }

  function renderResults(filteredArray,lowIndex,highIndex) {
    var heading = $("<h2 class='header'>Search Results</h2>");
    searchResults.append(heading);

    console.log(lowIndex);
    console.log(highIndex)

    for (
      var i = Math.max(lowIndex, 0);
      i < Math.min(highIndex, filteredArray.length);
      i++
    ) {
      
      console.log("iterator=" + i);
      iteratorMin = Math.min(lowIndex, i);
      iteratorMax = Math.max(highIndex, i);

      var propertySuburb = filteredArray[i].listing.propertyDetails.suburb;
      var propertyState = filteredArray[i].listing.propertyDetails.state;
      var propertyPostCode = filteredArray[i].listing.propertyDetails.postcode;
      var propertyBeds = filteredArray[i].listing.propertyDetails.bedrooms;
      var propertyBaths = filteredArray[i].listing.propertyDetails.bathrooms;
      var propertyCars = filteredArray[i].listing.propertyDetails.carspaces;
      var propertyHeadline = filteredArray[i].listing.headline;
      var propertySummary = filteredArray[i].listing.summaryDescription;
      var propertyImage = filteredArray[i].listing.media[0].url;
      var propertyAddress =
        filteredArray[i].listing.propertyDetails.displayableAddress;
      var propertyId = filteredArray[i].listing.id;

      var thisCard = $(
        "<div class='card horizontal' id='card" + i + "'></div>"
      );

      var thisCardImg = $("<div class='card-image'></div>");

      var thisImg = $("<img class='result-img'></img>");
      thisImg.attr("src", propertyImage);

      var thisStack = $("<div class='card-stacked'></div>");

      var thisContent = $("<div class='card-content'></div>");

      var thisHeader = $(
        "<div id='header" + i + "'" + " data-id=" + i + "></div>"
      );

      var thisFavoriteImg = $("<img class='favorite'></img>");

      thisFavoriteImg.attr("src", "./css/img/LoveUnSelect.png");
      // This next line should update depending on local storage
      thisFavoriteImg.attr("data-state", "Unselected");

      thisFavoriteImg.attr("width", "7%");
      var thisPara = $("<p class='title-text'>" + propertyHeadline + "</p>");

      var thisSummary = $("<p>" + propertySummary + "</p>");
      var thisAction = $("<div class='card-action'></div>");

      var thisBeds = $(
        "<span class='spaced-icons'>" + propertyBeds + "</span>"
      );
      var thisBaths = $(
        "<span class='spaced-icons'>" + propertyBaths + "</span>"
      );
      var thisCars = $(
        "<span class='spaced-icons'>" + propertyCars + "</span>"
      );

      var bedImgSpan = $("<span class='spaced-icons'></span>");
      var bathImgSpan = $("<span class='spaced-icons'></span>");
      var carImgSpan = $("<span class='spaced-icons'></span>");

      var bedImg = $("<img></img>");
      bedImg.attr("src", "./css/img/Bed.png");
      bedImg.attr("width", "7%");

      var thisShortAddress = $(
        "<span class='right-aligned'>" +
          propertySuburb +
          ", " +
          propertyState +
          " " +
          propertyPostCode +
          "</span>"
      );

      var bathImg = $("<img></img>");
      bathImg.attr("src", "./css/img/Bath.png");
      bathImg.attr("width", "7%");

      var carImg = $("<img></img>");
      carImg.attr("src", "./css/img/Car.png");
      carImg.attr("width", "7%");

      var thisLink = $("<div></div>");

      searchResults.append(
        thisCard.append(
          thisCardImg.append(thisImg),
          thisStack.append(
            thisContent.append(
              thisHeader.append(thisPara, thisFavoriteImg),

              thisSummary
            ),
            thisAction.append(
              thisLink.append(
                bedImgSpan.append(bedImg),
                thisBeds,
                bathImgSpan.append(bathImg),
                thisBaths,
                carImgSpan.append(carImg),
                thisCars,
                thisShortAddress
              )
            )
          )
        )
      );
    }


    $("[name='next-btn']").css("display","inline")
    $("[name='prev-btn']").css("display","inline")
    
    // This event listener should be able to update local storage

    $(".favorite").on("click", function () {
      // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
      var state = $(this).attr("data-state");
      favoriteIndex = event.target.parentElement.getAttribute("data-id");
      console.log(favoriteIndex);
      if (state === "Unselected") {
        $(this).attr("src", "./css/img/LoveSelect.png");
        $(this).attr("data-state", "Selected");
      } else {
        $(this).attr("src", "./css/img/LoveUnSelect.png");
        $(this).attr("data-state", "Unselected");
      }
    });
  }
});
