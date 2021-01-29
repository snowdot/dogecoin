const countdown = document.getElementById('countdown');
const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const date = 1611950400000;

const x = setInterval(function () {
    const now = new Date().getTime();
    const remaining = date - now;

    const d = Math.floor(remaining / (1000 * 60 * 60 * 24));
    const h = Math.floor((remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((remaining % (1000 * 60)) / 1000);

    days.innerHTML = d;
    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;

    if (remaining < 0) {
        clearInterval(x);
        countdown.innerHTML = 'HODL!';
    }
}, 1000);
