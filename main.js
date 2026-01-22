console.log("script loaded");

function setActiveButton(clicked) {
	document.querySelectorAll('.cta-buttons .btn').forEach(b => b.classList.remove('btn--active'));
	if (clicked) clicked.classList.add('btn--active');
}

document.addEventListener('DOMContentLoaded', () => {
	const btnHome = document.getElementById('btn-home');
	const btnFeatures = document.getElementById('btn-features');
	const btnBoom = document.getElementById('btn-boom');

	if (btnHome) btnHome.addEventListener('click', () => {
		setActiveButton(btnHome);
		console.log('Home clicked');
		// For demo: navigate to top (if there were pages)
		window.scrollTo({ top: 0, behavior: 'smooth' });
	});

	if (btnFeatures) btnFeatures.addEventListener('click', () => {
		setActiveButton(btnFeatures);
		console.log('Features clicked');
		// For demo: show a tiny inline message
		alert('Features: This demo shows Home, Features, and Boom buttons.');
	});

	if (btnBoom) btnBoom.addEventListener('click', () => {
		setActiveButton(btnBoom);
		console.log('Boom clicked');
		// Boom effect: quick background flash
		const body = document.body;
		body.style.transition = 'background-color 220ms ease';
		const original = getComputedStyle(body).backgroundColor;
		body.style.backgroundColor = '#fff7ed';
		setTimeout(() => { body.style.backgroundColor = original; }, 220);
	});
});
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
console.log("script loaded");

// Новогодняя ёлка с интерактивными огнями
const toggleBtn = document.getElementById('toggleBtn');
const lightsContainer = document.querySelector('.lights');
const messageEl = document.getElementById('message');

let lightsActive = false;

toggleBtn.addEventListener('click', () => {
    lightsActive = !lightsActive;
    
    if (lightsActive) {
        lightsContainer.classList.add('active');
        toggleBtn.textContent = '🌙';
        toggleBtn.classList.add('active');
        messageEl.textContent = '✨';
    } else {
        lightsContainer.classList.remove('active');
        toggleBtn.textContent = '✨';
        toggleBtn.classList.remove('active');
        messageEl.textContent = 'Нажми на кнопку, чтобы зажечь огни на ёлке!';
    }
});

// Добавим падающий снег
function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.style.position = 'fixed';
    snowflake.style.top = '-10px';
    snowflake.style.left = Math.random() * window.innerWidth + 'px';
    snowflake.style.fontSize = (Math.random() * 10 + 10) + 'px';
    snowflake.style.color = 'white';
    snowflake.style.opacity = Math.random() * 0.5 + 0.5;
    snowflake.style.pointerEvents = 'none';
    snowflake.style.zIndex = '1';
    snowflake.textContent = '❄';
    
    document.body.appendChild(snowflake);
    
    let top = -10;
    let left = parseFloat(snowflake.style.left);
    
    const interval = setInterval(() => {
        top += Math.random() * 2 + 1;
        left += (Math.random() - 0.5) * 2;
        snowflake.style.top = top + 'px';
        snowflake.style.left = left + 'px';
        
        if (top > window.innerHeight) {
            clearInterval(interval);
            snowflake.remove();
        }
    }, 50);
}

// Создаём снежинки каждые 300ms
setInterval(createSnowflake, 300);
const toggleButton = document.getElementById('theme-toggle');
let startTime = 0;
let elapsedTime = 0;
let timerInterval;

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark');
});

function start() {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(updateTime, 10);
}

function stop() {
    clearInterval(timerInterval);
}

function reset() {
    clearInterval(timerInterval);
    elapsedTime = 0;
    document.getElementById("display").textContent = "00:00:00";
}

function updateTime() {
    elapsedTime = Date.now() - startTime;

    let milliseconds = Math.floor((elapsedTime % 1000) / 10);
    let seconds = Math.floor((elapsedTime / 1000) % 60);
    let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);

    document.getElementById("display").textContent =
        `${String(minutes).padStart(2, "0")}:` +
        `${String(seconds).padStart(2, "0")}:` +
        `${String(milliseconds).padStart(2, "0")}`;
}
