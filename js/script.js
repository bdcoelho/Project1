// GetResponseFromDomain
$(document).ready(function () {
  var maxPropertyValue = 5000000;
  var instance = $("select").formSelect();

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
    console.log(maxPropertyValue);
    return maxPropertyValue;
  });

  $("[name='action']").on("click", function (event) {
    event.preventDefault();
    console.log("clicked");

    var suburb = $("#9").val();
    var numOfBed = parseInt($(instance[0]).val());
    var numOfBath = parseInt($(instance[1]).val());
    var numOfCarpark = parseInt($(instance[2]).val());
    var propertyType = $(instance[3]).val();

    // var suburb = "";
    // var numOfBed = 1;
    // var numOfBath = 1;
    // var numOfCarpark = 1;
    // var propertyType = ["House", "apartmentUnitFlat", "Townhouse"];

    console.log(suburb);
    console.log(numOfBed);
    console.log(numOfBath);
    console.log(numOfCarpark);
    console.log(propertyType);
    console.log(maxPropertyValue);

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
      var filteredArray = response.filter(function (itm) {
        return type.indexOf(itm.type) > -1;
      });

      var thisProperty = $("#card-container");
      thisProperty.empty();

      for (let i = 0; i < 3; i++) {
        console.log(filteredArray[i]);
        propertySuburb = filteredArray[i].listing.propertyDetails.suburb;
        console.log(propertySuburb);
        propertyState = filteredArray[i].listing.propertyDetails.state;
        propertyPostCode = filteredArray[i].listing.propertyDetails.postcode;
        propertyBeds = filteredArray[i].listing.propertyDetails.bedrooms;
        propertyBaths = filteredArray[i].listing.propertyDetails.bathrooms;
        propertyCars = filteredArray[i].listing.propertyDetails.carspaces;
        propertyHeadline = filteredArray[i].listing.headline;
        propertySummary = filteredArray[i].listing.summaryDescription;
        propertyImage = filteredArray[i].listing.media[0].url;

        var thisCard = $("<div class='card horizontal'></div>");

        var thisCardImg = $("<div class='card-image'></div>");

        var thisImg = $("<img class='result-img'></img>");
        thisImg.attr("src", propertyImage);

        var thisStack = $("<div class='card-stacked'></div>");

        var thisContent = $("<div class='card-content'></div>");

        var thisHeader = $("<div></div>");

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

        thisProperty.append(
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

      // This event listener should be able to update local storage
      $(".favorite").on("click", function () {
        // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
        var state = $(this).attr("data-state");
        console.log(this);
        if (state === "Unselected") {
          $(this).attr("src", "./css/img/LoveSelect.png");
          $(this).attr("data-state", "Selected");
        } else {
          $(this).attr("src", "./css/img/LoveUnSelect.png");
          $(this).attr("data-state", "Unselected");
        }
      });
    });
  }
});

/* <div class="card horizontal">
<div class="card-image">
  <img src="https://lorempixel.com/100/190/nature/6">
</div>
<div class="card-stacked">
  <div class="card-content">
    <p>I am a very simple card. I am good at containing small bits of information.</p>
  </div>
  <div class="card-action">
    <a href="#">This is a link</a>
  </div>
</div>
</div> */
