var getMinute = document.getElementById("minute")
var getSecond = document.getElementById("second")
var getMilisecond = document.getElementById("milisecond")

var getHour = document.getElementById("hour")

var startButton = document.getElementById("startBtn")

var minute = 0
var second = 0
var milisecond = 0
var hour = 0

var interval;

function start() {
    interval = setInterval(function () {

        if (milisecond < 10) {
            getMilisecond.innerText = "0" + milisecond
        } else {
            getMilisecond.innerText = milisecond

        }

        if (getMilisecond.innerText == 100) {
            second++
            if (second < 10) {
                getSecond.innerText = "0" + second
            } else {
                getSecond.innerText = second
            }
            milisecond = 0

        }

        if (second == 60) {
            minute++
            if (minute < 10) {
                getMinute.innerText = "0" + minute
            } else {
                getMinute.innerText = minute
            }
            second = 0

        }

        if (minute == 60) {
            hour++
            if (hour < 10) {
                getHour.innerHTML = "0" + hour
            } else {
                getHour.innerText = hour
            }
            minute = 0

        }

        if (getHour.innerText == 24) {
            hour = 0

        }

        milisecond++
    }, 10);

    startButton.disabled = true
}

function stop() {
    clearInterval(interval)
    startButton.disabled = false
}

function reset() {
    clearInterval(interval)
    getMinute.innerText = "00"
    getSecond.innerText = "00"
    getMilisecond.innerText = "00"
    getHour.innerText = "00"
}