window.onload = function () {
    var seconds = 51;
    var tens = 00;
    var hours = 00;
    var mins = 59;
    var appendTens = document.getElementById("tens");
    var appendSeconds = document.getElementById("seconds");
    var appendMin = document.getElementById("mins");
    var appendHours = document.getElementById("hours");
    var buttonStart = document.getElementById("button-start");
    var buttonStop = document.getElementById("button-stop");
    var buttonReset = document.getElementById("button-reset");
    var Interval;

    buttonReset.onclick = function () {
        clearInterval(Interval);
        tens = "00";
        seconds = "00";
        hours = "00";
        mins = "00";
        appendTens.innerHTML = tens;
        appendSeconds.innerHTML = seconds;
        appendHours.innerHTML = hours;
        appendMin.innerHTML = mins;
    };

    buttonStop.onclick = () => {
        clearInterval(Interval);
    };

    buttonStart.onclick = () => {
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
    };

    const startTimer = () => {
        tens++;
        if (tens <= 9) {
            appendTens.innerHTML = "0" + tens;
        }
        if (tens > 9) {
            appendTens.innerHTML = tens;
        }

        if (tens > 99) {
            seconds++;
            appendSeconds.innerHTML = "0" + seconds;
            tens = 0;
            appendTens.innerHTML = "0" + tens;
        }

        if (seconds > 9) {
            appendSeconds.innerHTML = seconds;
        }

        if (seconds > 59) {
            mins++;
            appendMin.innerHTML = "0" + mins;
            seconds = 0;
            appendSeconds.innerHTML = "0" + seconds;
        }

        if (mins > 9) {
            appendMin.innerHTML = mins;
        }
        if (mins > 59) {
            hours++;
            appendHours.innerHTML = "0" + hours;
            mins = 0;
            appendMin.innerHTML = "0" + mins;
        }

        if (hours > 9) {
            appendHours.innerHTML = hours;
        }
    };
};
