# Application: Work Day Scheduler

## Description

The Javascript quiz is a testing tool to help prepare students for written exams. 
Select each question at random and grade based on user response.
In the end the fiinal grade will be calculated and presented in the highscores table.

## Acceptance Criteria Coverage

GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
1. This is accomplished between Main functions:
    1. A document ready primes and pings every second to constantly update date/time element.
    2. imTasking() is the main created function that will call method that need to up the page every second. In this case it is constantly updating date/time value
WHEN I scroll down
THEN I am presented with time blocks for standard business hours
1. Time blocks are hard set from 9-5 in the html
WHEN I view the time blocks for that day
THEN each time block is color-coded to indicate whether it is in the past, present, or future
1. whatColor() is a called function of imTasking ():
    1. This will update the timeblocks every second based on collected hour
    2. For timeblock in Past: textarea will be read only; button will be disabled
WHEN I click into a time block
THEN I can enter an event
WHEN I click the save button for that time block
THEN the text for that event is saved in local storage
1. saveTask(element) is called to perform this task:
    1. Local storage is pulled empty or not
    2. For button that is clicked:
        1. hourVal is collected based on button/parent/id
        2. inputVall is collected based on button/prev-sibling/value that user created
    3. Based on hourVal
        1. If data is present in local storage that record is removed
        2. New data {day, hourVal, inputVal} is added
        3. Local storage is sorted by hourVal
        4. Local storage is pushed back
        5. Method is called to display data from local storage
WHEN I refresh the page
THEN the saved events persist
1. dataShow() is used to present data from the local storage
    1. It is called:
        1. Upon loading of the javascript
        2. When an event is made
        3. When local storage is cleared at midnight
2. dataBegone() clears local storage and textarea at midnight

### Objective Evidence
![Example Picture](/assets/images/example.png?raw=true "Here is an example!")
[Try it yourself!](https://dolomiteson.github.io/git-init-mod5-challenge/)
