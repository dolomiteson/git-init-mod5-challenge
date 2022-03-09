
/* Date/Time Funtionality */
var dateTime = ""; 
var date = "";
var hour = "";

// Function that gets the most current date
function currentDateTime (){
    date = moment(new Date());
    dateTime.html(date.format('MMMM Do YYYY, h:mm:ss a'));
    hour = parseInt(date.format('H'));
    whatColor();
}

// TODO: Function to disable text Area and Button for past items 

// Function to change timeblocks color in relation to current hour
function whatColor(){
     var timeBlockArr = $(".container").children();
     
    for(var index = 0; index < timeBlockArr.length; index++){
        if(parseInt(timeBlockArr[index].id) < hour){
            timeBlockArr[index].classList.add("bg-light");
        }
        else if(parseInt(timeBlockArr[index].id) === hour){
            timeBlockArr[index].classList.add("bg-danger");
        }
        else{timeBlockArr[index].classList.add("bg-success");}
    }
}

// Function that  maintains accurate date and time in the heasder
$(document).ready(function(){
    dateTime = $("#displayMoment");
    currentDateTime();
    setInterval(currentDateTime , 1000);
});
 

