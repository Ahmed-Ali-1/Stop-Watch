var getMinute = document.getElementById("minute")
var getSecond = document.getElementById("second")
var getMilisecond = document.getElementById("milisecond")

var startButton = document.getElementById("startBtn")

var minute = 0
var second = 0
var milisecond = 0

var interval;

function start() {
    interval = setInterval(function () {
        getMilisecond.innerText = milisecond
        if (getMilisecond.innerText == 100) {
            if (second < 10) {
                getSecond.innerText = "0" + second
            } else {
                getSecond.innerText = second
            }
            second++
            milisecond = 0
        }
        if (second == 6) {
            minute++
            if (minute < 10) {
                getMinute.innerText = "0" + minute
            } else {
                getMinute.innerText = minute
            }
            second = 0
        }
        milisecond++
    }, 10);
    startBtn.disabled = true
}

function stop() {
    clearInterval(interval)
    startBtn.disabled = false
}
function reset() {
    clearInterval(interval)
    getMinute.innerText = "00"
    getSecond.innerText = "00"
    getMilisecond.innerText = "00"
}