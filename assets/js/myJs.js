/* Constants */
const TASK_STORE = 'taskStore'

/*Variables */
var dateTime = ""; 
var date = "";
var day = "";
var hour = "";

/* Date/Time Funtionality */
// Function that tasks any changes to the page when called 
function imTasking (){
    date = moment(new Date());
    dateTime.html(date.format('MMMM Do YYYY, h:mm:ss a'));
    day = parseInt(date.format('D'));
    hour = parseInt(date.format('H'));
    whatColor();
    dataBegone();
}

// Function to disable text Area and Button for past items 
function disable(element){
    element.classList.add("bg-light");
    element.getElementsByTagName("textarea")[0].readOnly = "true";
    element.getElementsByTagName("button")[0].disabled = true;
}

// Function to change timeblocks color in relation to current hour
function whatColor(){
     var timeBlockArr = $(".container").children();
     
    for(var index = 0; index < timeBlockArr.length; index++){
        if(parseInt(timeBlockArr[index].id) < hour){
            disable(timeBlockArr[index]);
        }
        else if(parseInt(timeBlockArr[index].id) === hour){
            timeBlockArr[index].classList.add("bg-danger");
        }
        else{timeBlockArr[index].classList.add("bg-success");}
    }
}

/* Inputs/Storage Functionality */
// Function to Clear local storage is day has passed
function dataBegone(){
    var storage = localStorage.getItem(TASK_STORE);
    var tasks = JSON.parse(localStorage.getItem(storage)) ?? [];
    console.log(tasks);
    if(tasks.length === 0 || tasks[0].dayVal < day){
        localStorage.clear();
    }
}

/* Main */
// Runs every second updating page
$(document).ready(function(){
    dateTime = $("#displayMoment");
    imTasking();
    setInterval(imTasking , 1000);
});

 

