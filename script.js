let timerEl = document.getElementById("timer");
let quoteDisplay = document.getElementById("quoteDisplay");
let inpEl = document.getElementById("quoteInput");
let submitEl = document.getElementById("submitBtn");
let resetEl = document.getElementById("resetBtn");
let result = document.getElementById("result");
let spinnerEl = document.getElementById("spinner");

let options = {
    method: "GET"
};

fetch("https://apis.ccbp.in/random-quote", options)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonData) {
        quoteDisplay.textContent = jsonData.content;
    });

let countdown = 0;
let intervalId = setInterval(function() {
    countdown = countdown + 1;
    timerEl.textContent = countdown;

}, 1000);
let b = "";
submitEl.onclick = function() {
    if (quoteDisplay.textContent === inpEl.value) {
        timerEl.textContent = countdown;
        clearInterval(intervalId);
        b = "You have done it in " + countdown + " seconds.";
        result.textContent = b;
    } else {
        b = "It is wrong.Try again";
        result.textContent = b;
    }
}

resetEl.onclick = function() {
    spinnerEl.classList.add("d-inline");
    fetch("https://apis.ccbp.in/random-quote", options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {

            quoteDisplay.textContent = jsonData.content;

        });
    spinnerEl.classList.remove("d-inline");
    clearInterval(intervalId);
    let countdown = 0;
    intervalId = setInterval(function() {
        countdown = countdown + 1;
        timerEl.textContent = countdown;

    }, 1000);
}
