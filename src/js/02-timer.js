import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const refs = {
  input: document.querySelector('#datetime-picker'),
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

// let startTime = 0;
// let futuretTime = 0;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const startTime = options.defaultDate;
    // console.log('start:', startTime);
    const futuretTime = selectedDates[0];
    console.log(futuretTime);
    // console.log('end:', futuretTime);
    const deltatTime = futuretTime - startTime;
    return futuretTime;
    console.log(deltatTime);
  },
};

// console.log(options.onClose);

flatpickr('#datetime-picker', options);

// console.log(options.onClose);
// const deltatTime = futuretTime - startTime;
// console.log(fff);
// console.log(options.defaultDate);

// const futerData = new Date();
// const futuretTime = futerData.getTime(refs.input.value);
// console.log(futuretTime);

function startTimer() {
  console.log('fff');
  const startTime = Date.now();
  setInterval(() => {
    // const futuretTime = Date.now();
    const futuretTime = refs.input.value;
    console.log('начальное время:', startTime);
    console.log('будущее время:', futuretTime);
    const deltatTime = startTime - futuretTime;
    console.log(deltatTime);
    // const timeComponents = convertMs(deltatTime);
    const { days, hours, minutes, seconds } = convertMs(deltatTime);
    // console.log(timeComponents);
    // console.log(`${days}:${hours}:${minutes}:${seconds}`);
    renderTime(days, hours, minutes, seconds);
  }, 1000);
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
