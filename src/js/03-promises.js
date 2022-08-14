import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  form: document.querySelector('form'),
};

refs.form.addEventListener('submit', onCreatepromise);

let intervalId = null;
let position = 1;

function onCreatepromise(event) {
  event.preventDefault();
  let delay = Number(refs.form.delay.value);
  let step = Number(refs.form.step.value);
  let amount = Number(refs.form.amount.value);

  if (delay < 0 || step < 0 || amount <= 0) {
    return Notify.failure(`Введите положительные числа и amount > 0 `);
  }
  intervalId = setInterval(() => {
    amount -= 1;
    console.log(amount);
    if (amount === 0) {
      clearInterval(intervalId);
    }
    createPromise(position, delay)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    position += 1;
    delay += step;
  }, 0);
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
