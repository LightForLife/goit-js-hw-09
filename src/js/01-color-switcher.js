const refs = {
  btnStart: document.querySelector('button[data-start]'),
  btnStop: document.querySelector('button[data-stop]'),
  body: document.querySelector('body'),
};

refs.btnStart.addEventListener('click', startRenderRandomColor);
refs.btnStop.addEventListener('click', stopRenderRandomColor);

let timerId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// Запускаем изменения цвета по клику
// Кнопка старт не активна
// Устанавливаем интервал
function startRenderRandomColor(event) {
  refs.btnStart.disabled = true;

  timerId = setInterval(() => {
    getRandomHexColor();
    setBackroundColor();
  }, 1000);
}

// Задаём цвет на body
function setBackroundColor() {
  const randomColor = getRandomHexColor();
  refs.body.style.backgroundColor = randomColor;
}

// Останавливаем изменения цвета при клике на кнопку Stop
// Кнопка старт активна
// Удаляем интервал
function stopRenderRandomColor(event) {
  refs.btnStart.disabled = false;
  clearInterval(timerId);
}
