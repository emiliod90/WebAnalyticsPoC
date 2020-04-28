// Clock
function clock() {
    let hours = document.getElementById('hour')
    let minutes = document.getElementById('minute')
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    hours.innerHTML = h
    minutes.innerHTML = m
}
// Run Clock 1st time
clock()
// Run every 30s
var interval = setInterval(clock, 20000);