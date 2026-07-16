let time = document.querySelector(".time")
let hours = document.querySelector(".hours")
let minutes = document.querySelector(".minutes")
let seconds = document.querySelector(".seconds")

let btns = document.querySelector(".btns")
let startBtn = document.querySelector(".start")
let stopBtn = document.querySelector(".stop")
let resetBtn = document.querySelector(".reset")

let condition = document.querySelector(".condition")

let interval = false

if (window.localStorage.getItem("sec")) {
    seconds.textContent = String(window.localStorage.sec).padStart(2, "0")
}
if (window.localStorage.getItem("min")) {
    minutes.textContent = String(window.localStorage.min).padStart(2, "0")
}
if (window.localStorage.getItem("hr")) {
    hours.textContent = String(window.localStorage.hr).padStart(2, "0")
}

startBtn.onclick = function () {
    stopBtn.classList.add('active')
    resetBtn.classList.add('active')
    btns.classList.add("active")
    
    condition.textContent = "Timer Is Counting"
    
    let s = 1
    
    if (interval === true) {return;}
    

    let int = setInterval(function () {
        seconds.textContent = String(parseInt(seconds.textContent) + 1).padStart(2, "0")
        
        if (parseInt(seconds.textContent) >= 60) {
            minutes.textContent = String(parseInt(minutes.textContent) + s).padStart(2, "0")
            seconds.textContent = "00"
        }
        if (parseInt(minutes.textContent) >= 60) {
            hours.textContent = String(parseInt(hours.textContent) + s).padStart(2, "0")
            seconds.textContent = "00"
            minutes.textContent = "00"
        }
        window.localStorage.setItem("sec", seconds.textContent)
        window.localStorage.setItem("min", minutes.textContent)
        window.localStorage.setItem("hr", hours.textContent)
        interval = true
    }, 1000)
    stopBtn.onclick = function () {
        clearInterval(int)
        condition.textContent = "Timer Is Paused"
        interval = false
    }
    resetBtn.onclick = function () {
        stopBtn.classList.remove('active')
        resetBtn.classList.remove('active')
        btns.classList.remove("active")
        
        seconds.textContent = "00"
        minutes.textContent = "00"
        hours.textContent = "00"
        clearInterval(int)
        window.localStorage.clear()
        condition.textContent = 'Press "Start" To Start Counting'
        interval = false
    }
}
