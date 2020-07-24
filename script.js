// Define vars to hold time values

let TimerLength = 45;
let seconds = TimerLength;
let minutes = 0;
let hours = 0;

//Define var to hold set interval function
let interval = null;

//Define var to hold timer status
let status = 'stopped';

//Timer function (logic to determine when to increment next value, etc.)
function Timer(){

seconds--;


//Display updated time value to user
document.getElementById("display").innerHTML = seconds;

}

//show beginning time to user
window.onload = function(){
    var seconds = TimerLength;

    document.getElementById("display").innerHTML = TimerLength;
};

function StartStop(){

        if(status === "stopped"){

        //start the stopwatch (by calling the setInterval() funciton)
        interval = window.setInterval(Timer, 1000);
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
    document.getElementById("display").innerHTML = TimerLength
    document.getElementById("StartStop").innerHTML = "Start"
}