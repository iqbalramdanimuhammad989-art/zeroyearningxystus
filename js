// COUNTDOWN TIMER INTERAKTIF
function startTimer() {
    // Set target waktu (misal: 144 hari dari sekarang)
    let totalSeconds = (144 * 24 * 3600) + (7 * 3600) + (17 * 60) + 55;

    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');

    const timerInterval = setInterval(() => {
        if (totalSeconds <= 0) {
            clearInterval(timerInterval);
            return;
        }

        totalSeconds--;

        const days = Math.floor(totalSeconds / (3600 * 24));
        const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = Math.floor(totalSeconds % 60);

        daysEl.textContent = String(days).padStart(3, '0');
        hoursEl.textContent = String(hours).padStart(2, '0');
        minutesEl.textContent = String(minutes).padStart(2, '0');
        secondsEl.textContent = String(seconds).padStart(2, '0');
    }, 1000);
}

// HANDLER FORM RESERVASI
const reservationForm = document.getElementById('reservationForm');
const successMessage = document.getElementById('successMessage');

reservationForm.addEventListener('submit', function(e) {
    e.preventDefault();
    reservationForm.classList.add('hidden');
    successMessage.classList.remove('hidden');
});

function resetForm() {
    reservationForm.reset();
    successMessage.classList.add('hidden');
    reservationForm.classList.remove('hidden');
}

// JALANKAN TIMERS SAAT Halaman DIBUKA
document.addEventListener('DOMContentLoaded', startTimer);
