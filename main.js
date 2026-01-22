function CountdownTimer(){
let now = new Date();
console.log(now);
let release = new Date("19 november 2026");
console.log(release);
let daysElement = document.getElementById("days");
let hoursElement = document.getElementById("hours");
let minutesElement = document.getElementById("minutes");
let secondsElement = document.getElementById("seconds");

let milisecond = release - now;
let days = Math.floor(milisecond / (1000 * 60 * 60 * 24));
let hours = Math.floor((milisecond % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
let minutes = Math.floor((milisecond % (1000 * 60 * 60)) / (1000 * 60));
let seconds = Math.floor((milisecond % (1000 * 60)) / 1000);
console.log(days, hours, minutes, seconds);

daysElement.innerText = days;
hoursElement.innerText = hours;
minutesElement.innerText = minutes;
secondsElement.innerText = seconds;
}

setInterval(CountdownTimer, 1000);