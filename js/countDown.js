
const countDown = () => {
    const endDate = new Date('June 17, 2021 12:34:56');
    const currentDate = new Date();
    const gap = endDate - currentDate;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const remainingDays = Math.floor(gap / day);
    const remainingHours = Math.floor((gap % day) / hour);
    const remainingMinutes = Math.floor((gap % hour) / minute);
    const remainingSeconds = Math.floor((gap % minute) / second);

    document.querySelector('.days').innerText = remainingDays
    document.querySelector('.hours').innerText = remainingHours
    document.querySelector('.Minutes').innerText = remainingMinutes
    document.querySelector('.Seconds').innerText = remainingSeconds
}
setInterval(countDown, 1000);