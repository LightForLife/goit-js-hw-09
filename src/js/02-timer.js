import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const refs = {
  //   input: document.querySelector('#datetime-picker'),
  btnStart: document.querySelector('button[data-start]'),
  days: document.querySelector('span[data-days]'),
  hours: document.querySelector('span[data-hours]'),
  minutes: document.querySelector('span[data-minutes]'),
  seconds: document.querySelector('span[data-seconds]'),
};
// refs.days.textContent = 20;
// refs.hours.textContent = 10;
// refs.minutes.textContent = 5;
// refs.seconds.textContent = 12;

refs.btnStart.addEventListener('click', startTimer);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const startTime = options.defaultDate;
    console.log('start:', startTime);
    const currentTime = selectedDates[0];
    console.log('end:', currentTime);
    // console.log(selectedDates[0]);
    // console.log(Date.now(selectedDates[0]));
  },
};

flatpickr('#datetime-picker', options);

// console.log(options.defaultDate);

function startTimer() {
  console.log('fff');
  const timer = {
    start() {
      const startTime = Date.now();

      setInterval(() => {
        const currentTime = Date.now();
        //   console.log('начальное время:', startTime);
        //   console.log('текущее время:', currentTime);
        const deltatTime = currentTime - startTime;
        // const timeComponents = convertMs(deltatTime);
        const { days, hours, minutes, seconds } = convertMs(deltatTime);
        // console.log(timeComponents);
        // console.log(`${days}:${hours}:${minutes}:${seconds}`);
        renderTime(days, hours, minutes, seconds);
      }, 1000);
    },
  };

  timer.start();
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = pad(Math.floor(ms / day));
  // Remaining hours
  const hours = pad(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = pad(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

function renderTime(days, hours, minutes, seconds) {
  refs.days.textContent = days;
  refs.hours.textContent = hours;
  refs.minutes.textContent = minutes;
  refs.seconds.textContent = seconds;
}

function pad(value) {
  return String(value).padStart(2, '0');
}
