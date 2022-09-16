var attemptsSet = 5;
var secondsSet = 60;

var attempts = attemptsSet;
var attemptsUp = false;
var seconds = secondsSet;
var playing = true;
var randomnumber = Math.floor(Math.random() * 101);
console.log("randomnumber: " + randomnumber);

var guessBt = document.querySelector("#guess");
var restartBt = document.querySelector("#restart");
var input = document.querySelector("#input");
var output = document.querySelector("#output");
var countdownEl = document.querySelector("#countdown");

function checkNumber(){
    if (playing == true) {
        console.log("input: " + input.value);
        console.log("attempts: " + attempts);

        if (input.value == randomnumber) {
            console.log("correct");
            attemptsUp = true;
            if (attempts > 1) {
                output.innerHTML="You guessed correct with " + attempts + " attempts left.";
            } else {
                output.innerHTML="You guessed correct with " + attempts + " attempt left.";
            }
        } else if (input.value < randomnumber) {
            attempts--;
            console.log("too low");
            if (attempts > 1) {
                output.innerHTML="Too low. " + attempts + " attempts left";
            } else {
                output.innerHTML="Too low. " + attempts + " attempt left";
            }
        } else {
            attempts--;
            console.log("too high");
            if (attempts > 1) {
                output.innerHTML="Too high. " + attempts + " attempts left";
            } else {
                output.innerHTML="Too high. " + attempts + " attempt left";
            }
        }

        if (attempts <= 0) {
            playing = false;
            attemptsUp = true;
            console.log("attemptsUp: ", attemptsUp);
            console.log("no attempts left");
            output.innerHTML="No attempts left. The number was " + randomnumber;
        }
    } else {
        if (seconds <= 0) {
            output.innerHTML="You are out of time. The number was " + randomnumber;
        } else if (attempts <= 0) {
            output.innerHTML="No attempts left. The number was " + randomnumber;
        } else {
            output.innerHTML="error";
        }
        
    }
    
}


function restartGame(){
    console.log("game restarted");
    output.innerHTML="Game restarted. Guess a number";
    attempts = attemptsSet;
    attemptsUp = false;
    seconds = secondsSet;
    playing = true;
    randomnumber = Math.floor(Math.random() * 101);
    console.log("randomnumber: " + randomnumber);
}


if (playing = true) {
    a = setInterval(countdown, 1000);  
    countdownEl.innerHTML=seconds;
}

// kjører 1 gang i sekundet
function countdown(){
    if (seconds > 0 && attemptsUp == false) {
        seconds--;
    }
    countdownEl.innerHTML=seconds;
    if (seconds <= 0) {
        seconds = 0;
        playing = false;
        console.log("playing: ", playing);
        output.innerHTML="You are out of time. The number was " + randomnumber;
        console.log("out of time");
    }
    
}

guessBt.addEventListener("click", checkNumber);
restartBt.addEventListener("click", restartGame);
window.addEventListener("keyup", function(event) {
    if (event.key == "Enter"){
        checkNumber();
        playing = false;
        console.log("pressed enter");
    }
});