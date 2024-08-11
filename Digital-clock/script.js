let htmlHours = document.getElementById("hours");
let htmlMints = document.getElementById("mints");
let htmlSec = document.getElementById("sec");


function digitalClock() {
    setInterval(() => {
        let now = new Date();
        htmlHours.innerHTML = `${now.getHours()}`;
        htmlMints.innerHTML = `${now.getMinutes()}`;
        htmlSec.innerHTML = `${now.getSeconds()}`;
    }, 0)
}

digitalClock();