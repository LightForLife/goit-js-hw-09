// function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;
//   if (shouldResolve) {
//     // Fulfill
//   } else {
//     // Reject
//   }
// }

// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });

const promise = new Promise((resolve, reject) => {
  const canFulfill = Math.random() > 0.5;
  setTimeout(() => {
    if (canFulfill) {
      resolve('(Промис успешный, результат fulfilled)');
    }

    reject('(Промис с ошибкой rejected)');
  }, 1500);
});

// promise.then(
//   result => {
//     console.log(`✅${result}`);
//   },
//   error => {
//     console.log(`❌${error}`);
//   }
// );

//цепочка промисов

promise
  .then(result => {
    console.log(result);
    return 5;
  })
  .then(x => {
    console.log(x);
    return 10;
  })
  .then(y => {
    console.log(y);
  })
  .catch(error => console.log(error))
  .finally(() => console.log('All result'));
