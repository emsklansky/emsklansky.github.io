// Define vars to hold time values

let TimerLength = 45;
let seconds = 45;
let hundredths = 00;

//Define vars to hold "display" value
let displayHundredths = 0;
let displaySeconds = 0;

//Define var to hold set interval function
let interval = null;

//Define var to hold timer status
let status = 'stopped';

//Timer function (logic to determine when to increment next value, etc.)
function Timer(){
    
    hundredths--;

    if(hundredths === -1){
        seconds--;
        hundredths = 99;
    }

    //If seconds/hundredths are only one digit, add leading 0 to the value

    if(seconds<10){
        displaySeconds = "0" + seconds.toString();
    }
    else{
        displaySeconds = seconds;
    }

    if(hundredths<10){
        displayHundredths = "0" + hundredths.toString();
    }
    else{
        displayHundredths = hundredths;
    }

//Display updated time value to user
document.getElementById("display").innerHTML = displaySeconds + ":" + displayHundredths;
}

//show beginning time to user
// window.onload = function(){
//     var seconds = TimerLength;

//     document.getElementById("display").innerHTML = TimerLength;
// };

function StartStop(){

        if(status === "stopped"){

        //start the stopwatch (by calling the setInterval() funciton)
        interval = window.setInterval(Timer, 10);
        document.getElementById("StartStop").innerHTML = "Stop";
        status = "Started";
        }
        else{

            window.clearInterval(interval);
            document.getElementById("StartStop").innerHTML = "Start";
            status = "stopped";
        }


}

//funciton to reset the timer

function Reset(){

    window.clearInterval(interval);
    seconds = TimerLength;
    hundredths = 0;
    document.getElementById("display").innerHTML = seconds + ":" + "00"
    document.getElementById("StartStop").innerHTML = "Start"
    status = "stopped";
}

function getInput() {
    var userInput = document.getElementById('TimerLength').value;
    TimerLength = parseInt(userInput);
    console.log(userInput);
    console.log(TimerLength);
}  

