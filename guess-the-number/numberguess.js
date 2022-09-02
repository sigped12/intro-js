var knapp = document.querySelector("#knappID")
var input = document.querySelector("#inputID")

function sjekkTall(){
    console.log(input.Value)
}

knapp.addEventListener("click", sjekkTall);