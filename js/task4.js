function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}
function createBoxes(amount) {
  const boxesContainer = document.getElementById('boxes');
  boxesContainer.innerHTML = '';
  let boxHeight = 30;
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.classList.add('box');
    box.style.backgroundColor = getRandomHexColor();
    box.style.height = `${boxHeight}px`;
    boxesContainer.appendChild(box);
    boxHeight += 10;
  }
}
const destroyBoxes = () => {
  const boxesContainer = document.getElementById('boxes');
  boxesContainer.innerHTML = '';
}
document.querySelector('[data-create]').addEventListener('click', () => {
  const input = document.querySelector('input');
  const amount = parseInt(input.value);
  createBoxes(amount);
});
document.querySelector('[data-destroy]').addEventListener('click', destroyBoxes);
