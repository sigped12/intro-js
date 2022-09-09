var attempts = 5;
var randomnumber = Math.floor(Math.random() * 101);
console.log("randomnumber: " + randomnumber);
var button = document.querySelector("#buttonID");
var input = document.querySelector("#inputID");
function checkNumber(){
    console.log("input: " + input.value);
    console.log("attempts: " + attempts);

    if (input.value == randomnumber) {
        console.log("correct");
        document.getElementById("output").innerHTML="You guessed correct with " + attempts + " attempts left.";
    } else if (input.value < randomnumber) {
        attempts--;
        console.log("too low");
        document.getElementById("output").innerHTML="Too low. " + attempts + " attempts left";
    } else {
        attempts--;
        console.log("too high");
        document.getElementById("output").innerHTML="Too high. " + attempts + " attempts left";
    }

    if (attempts <= 0) {
        console.log("no attempts left");
        document.getElementById("output").innerHTML="No attempts left. The number was " + randomnumber;
    }

}

//function timer(){}


button.addEventListener("click", checkNumber);
//button.addEventListener("click", function(){setTimeout(myFunc, 60000)});