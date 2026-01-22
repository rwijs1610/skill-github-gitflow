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