let tapCount = 0;
const candle = document.getElementById('candle');
const flame = document.getElementById('flame');
const message = document.getElementById('message');
const celebrationSound = document.getElementById('celebrationSound');

candle.addEventListener('click', () => {
    tapCount++;
    if (tapCount < 3) {
        message.textContent = `Tap ke-${tapCount}! ${3 - tapCount} lagi...`;
    } else if (tapCount === 3) {
        flame.classList.add('blowout');
        setTimeout(() => {
            candle.textContent = '🎂';
            message.textContent = 'Mat ulang tahun..🥰😇🥳';
            flame.classList.remove('blowout');
            celebrationSound.play(); // Putar audio saat selesai tap
        }, 1000);
    } else {
        message.textContent = 'Lilin wes mati. Mat ulang tahun 🥰😇🥳';
    }
});