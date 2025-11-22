// --- 1. SET THE BIRTHDAY DATE ---
// Format: Year, Month (0=Jan, 11=Dec), Day, Hour, Minute, Second
// **CHANGE THIS DATE** to Zeba Ayisha's actual birthday!
const BIRTHDAY = new Date('2026-06-25T00:00:00').getTime();

// Function to update the countdown
function updateCountdown() {
    const now = new Date().getTime();
    const distance = BIRTHDAY - now;
    const countdownEl = document.getElementById('countdown');

    if (distance < 0) {
        // Birthday is TODAY or has passed
        countdownEl.innerHTML = "It's your moment to shine. ✨";
        countdownEl.classList.add('party-time');
        createConfetti(60); // Launch confetti when it's the birthday!
        clearInterval(timerInterval);
        return;
    }

    // Calculations for time
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownEl.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s until the main event.`;
}

// Update the countdown every second
const timerInterval = setInterval(updateCountdown, 1000);
updateCountdown(); // Run immediately so it doesn't start blank

// --- 2. SECRET MESSAGE REVEAL ---
function revealSecretMessage() {
    const secretDiv = document.getElementById('secretMessage');
    const button = document.querySelector('.reveal-btn');
    secretDiv.classList.add('revealed');
    button.textContent = 'Message Revealed!'; 
    button.disabled = true;
    button.style.opacity = 0.5;
}

// --- 3. CONFETTI EFFECT (JavaScript + CSS) ---
function createConfetti(count) {
    const container = document.body;
    for (let i = 0; i < count; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.animationDuration = (Math.random() * 2 + 3) + 's';
        confetti.style.opacity = Math.random();
        confetti.style.width = confetti.style.height = (Math.random() * 8 + 4) + 'px';
        container.appendChild(confetti);
    }
}
