$(document).ready(function () {

    var retrieveStorage = localStorage["favoriteStore"];
    var favoriteProps = retrieveStorage ? JSON.parse(retrieveStorage) : [];
    
    $("#saveWorkAddress").on("click", function (event) {
        var myWork=$("#work-input").val()
        localStorage["myWorkStore"] = myWork;
        $("#table-body").empty();
        renderFavorites();
    });

var myWork=localStorage["myWorkStore"];

    
function renderFavorites(){
    for(var i=0; i<favoriteProps.length; i++){

propertyAddress=favoriteProps[i].listing.propertyDetails.displayableAddress;
var thisRow= $("<tr></tr>");
var thisAddress= $("<td>"+propertyAddress+"</td>");
var thisDistance= $("<td>00</td>");
var thisTime= $("<td>00</td>");

$("#table-body").append(thisRow.append(thisAddress,thisDistance,thisTime))
    };

};

renderFavorites();



});

