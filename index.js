let scoreHomeSelector = document.getElementById("score-home");
let scoreGuestSelector = document.getElementById("score-guest");
let scoreHome = 0;
let scoreGuest = 0;

function incrementHome1() {
    scoreHome += 1
    scoreHomeSelector.textContent = scoreHome
}
function incrementHome2() {
    scoreHome += 2
    scoreHomeSelector.textContent = scoreHome
}
function incrementHome3() {
    scoreHome += 3
    scoreHomeSelector.textContent = scoreHome
}

function incrementGuest1() {
    scoreGuest += 1
    scoreGuestSelector.textContent = scoreGuest
}
function incrementGuest2() {
    scoreGuest += 2
    scoreGuestSelector.textContent = scoreGuest
}
function incrementGuest3() {
    scoreGuest += 3
    scoreGuestSelector.textContent = scoreGuest
}
