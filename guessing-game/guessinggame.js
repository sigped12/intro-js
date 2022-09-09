var attempts = 5;
var seconds = 60;
var playing = false;
var randomnumber = Math.floor(Math.random() * 101);
console.log("randomnumber: " + randomnumber);
var button = document.querySelector("#buttonID");
var input = document.querySelector("#inputID");
function checkNumber(){
    console.log("input: " + input.value);
    console.log("attempts: " + attempts);

    if (input.value == randomnumber) {
        console.log("correct");
        if (attempts > 1) {
            document.getElementById("output").innerHTML="You guessed correct with " + attempts + " attempts left.";
        }
        else {
            document.getElementById("output").innerHTML="You guessed correct with " + attempts + " attempt left.";
        }
    } else if (input.value < randomnumber) {
        attempts--;
        console.log("too low");
        if (attempts > 1) {
            document.getElementById("output").innerHTML="Too low. " + attempts + " attempts left";
        }
        else {
            document.getElementById("output").innerHTML="Too low. " + attempts + " attempt left";
        }
    } else {
        attempts--;
        console.log("too high");
        if (attempts > 1) {
            document.getElementById("output").innerHTML="Too high. " + attempts + " attempts left";
        }
        else {
            document.getElementById("output").innerHTML="Too high. " + attempts + " attempt left";
        }
    }

    if (attempts <= 0) {
        console.log("no attempts left");
        document.getElementById("output").innerHTML="No attempts left. The number was " + randomnumber;
    }

}

// når knapp trykkes

a = setInterval(countdown, 1000);  
document.getElementById("countdown").innerHTML=seconds;

// kjører 1 gang i sekundet
function countdown(){
    seconds--;
    console.log(seconds)
    document.getElementById("countdown").innerHTML=seconds;
    if (seconds <= 0) {
        seconds = 60;
        document.getElementById("countdown").innerHTML="You are out of time";
    }
    
}

button.addEventListener("click", checkNumber);
