/* Constants */
const TASK_STORE = 'taskStore'
const TIME_BLOCK_ARR = $(".container").children();

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
     
    for(var index = 0; index < TIME_BLOCK_ARR.length; index++){
        if(parseInt(TIME_BLOCK_ARR[index].id) < hour){
            disable(TIME_BLOCK_ARR[index]);
        }
        else if(parseInt(TIME_BLOCK_ARR[index].id) === hour){
            TIME_BLOCK_ARR[index].classList.add("bg-danger");
        }
        else{TIME_BLOCK_ARR[index].classList.add("bg-success");}
    }
}

/* Inputs/Storage Functionality */
// Function to save tasks
function saveTask(element){
    var tasks = JSON.parse(localStorage.getItem(TASK_STORE)) ?? [];
    var hourVal = parseInt($(element).parent().attr("id"));
    var inputVal = $(element).prev().val();

    // Remove any old records to be replaced
    for(var index = 0; index < tasks.length; index++){
        if(tasks[index].hourVal === hourVal){
            tasks.splice(index, 1);
        }
    }

    tasks.push({day, hourVal, inputVal});

    tasks.sort((a,b) => a.hourVal - b.hourVal);

    // Set local storage
    localStorage.setItem(TASK_STORE, JSON.stringify(tasks));

    dataShow();
}

// Function to Clear local storage is day has passed
function dataBegone(){
    var tasks = JSON.parse(localStorage.getItem(TASK_STORE)) ?? [];
    if(tasks.length === 0 || tasks[0].day < day){
        localStorage.clear();
        dataShow();
    }
}

// Function to display data based on local storage
function dataShow(){
    var tasks = JSON.parse(localStorage.getItem(TASK_STORE)) ?? [];

    for(var index = 0; index < tasks.length; index++){
        var idNum = tasks[index].hourVal;
        $('#' + idNum).children(".description").html(tasks[index].inputVal);
    } 
} 

/* Main */
// Display Data
dataShow();
// Runs every second updating page
$(document).ready(function(){
    dateTime = $("#displayMoment");
    imTasking();
    setInterval(imTasking , 1000);
});

 

