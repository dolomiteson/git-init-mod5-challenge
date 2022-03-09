
/* Date/Time Funtionality */
var dateTime = null; 
var date = null;

// Function that gets the most current date
var currentDateTime = function(){
    date = moment(new Date());
    dateTime.html(date.format('MMMM Do YYYY, h:mm:ss a'));
}

// Function that  maintains accurate date and time in the heasder
$(document).ready(function(){
    dateTime = $("#displayMoment");
    currentDateTime();
    setInterval(currentDateTime, 1000);
});

/*TODO: Create Function that will create blocks for the following hours
-0900
-1000
-1100
-1200
-1300
-1400
-1500
-1600
-1700
*/
