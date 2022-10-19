//declare variables and third party apis
var today = moment();
var saveBtn = document.getElementById("saveBtn");
var textArea = document.getElementsByClassName("col-md-10 description");
//display current day
$("#currentDay").text(today.format("MMM Do, YYYY"));


//Was supposed to save what would be inputed in any of the time blocks
function saveText(){
    $("#col-md-10 description").val(localStorage.getItem ("abc")); //Get
    localStorage.setItem ($("#col-md-10 description").val());
}

//event listener on the button to initiate the function
saveBtn.addEventListener("click", function(event) {
event.preventDefault();
gameclock();
});