$(document).ready(function () {

    var retrieveStorage = localStorage["favoriteStore"];
    var favoriteProps = retrieveStorage ? JSON.parse(retrieveStorage) : [];
    
    $("#work-input").on("click", function (event) {
   
   
    });


    for(var i=0; i<favoriteProps.length; i++){
propertyAddress=favoriteProps[i].listing.propertyDetails.displayableAddress;
console.log(propertyAddress);


var thisRow= $("<tr></tr>");
var thisAddress= $("<td>"+propertyAddress+"</td>");
var thisDistance= $("<td>00</td>");
var thisTime= $("<td>00</td>");


$("#table-body").append(thisRow.append(thisAddress,thisDistance,thisTime))
    }






    console.log(favoriteProps);
    console.log("Hello")

});

