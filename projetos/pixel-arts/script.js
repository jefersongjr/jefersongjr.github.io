const palette = document.getElementById('color-palette');
const board = document.getElementById('pixel-board');
const btn = document.getElementById('generate-board');
const input = document.getElementById('board-size');
const btnClear = document.querySelector('#clear-board');

function createColors(color) {
  const div = document.createElement('div');
  div.classList = color;
  div.addEventListener('click', changeSelected);
  return div;
}

function addDivs() {
  for (let index = 1; index <= 4; index += 1) {
    palette.appendChild(createColors('color'));
  }
}

addDivs();

const color1 = document.querySelectorAll('.color')[0];
const color2 = document.querySelectorAll('.color')[1];
const color3 = document.querySelectorAll('.color')[2];
const color4 = document.querySelectorAll('.color')[3];

color1.classList.add('selected');
const randomColor1 = `rgb(${Math.floor(Math.random() * 254)},
${Math.floor(Math.random() * 254)} ,
${Math.floor(Math.random() * 254)})`;

const randomColor2 = `rgb(${Math.floor(Math.random() * 254)},
${Math.floor(Math.random() * 254)} ,
${Math.floor(Math.random() * 254)})`;
const randomColor3 = `rgb(${Math.floor(Math.random() * 254)},
 ${Math.floor(Math.random() * 254)} ,
${Math.floor(Math.random() * 254)})`;

color1.style.backgroundColor = 'rgb(0, 0, 0)';
color2.style.backgroundColor = randomColor1;
color3.style.backgroundColor = randomColor2;
color4.style.backgroundColor = randomColor3;

function changeSelected(event) {
  const pickColor = document.querySelectorAll('.color');
  for (let i = 0; i < pickColor.length; i += 1) {
    pickColor[i].classList.remove('selected');
  }
  event.target.classList.add('selected');
}

function createBoard(pixel) {
  const div = document.createElement('div');
  div.classList = pixel;
  div.addEventListener('click', print);
  return div;
}

createBoard();
function appendBoard() {
  for (let index = 1; index <= 49; index += 1) {
    board.appendChild(createBoard('pixel'));
  }
}

appendBoard();

const div = document.getElementsByTagName('div');
function remove1() {
  for (let index = div.length - 1; index >= 0; index -= 1) {
    if (div[index].classList.contains('pixel')) {
      div[index].remove();
    }
  }
}
function appendBoard1() {
  let y = input.value;
  const largura = 250;
  remove1();
  if (y <= 5) {
    y = 5;
    for (let index = 0; index < y * y; index += 1) {
      board.appendChild(createBoard('pixel'));
    }
  } else if (y >= 50) {
    y = 50;
    for (let index = 0; index < y * y; index += 1) {
      board.appendChild(createBoard('pixel'));
    }
  } else {
    for (let index = 0; index < y * y; index += 1) {
      board.appendChild(createBoard('pixel'));
    }
  }
  if (y === '') {
    y = 0;
    board.style.width = `${largura}px`;
  } else {
    board.style.width = `${y * 45}px`;
  }
}

appendBoard1();

btn.addEventListener('click', appendBoard1);

// referência de pesquisa=  https://www.w3schools.com/jsref/jsref_getcomputedstyle.asp

function print(event) {
  const getCollor = document.querySelector('.selected');
  const setPrint = window.getComputedStyle(getCollor);
  const printPixel = setPrint.getPropertyValue('background-color');

  event.target.style.backgroundColor = printPixel;
}

function clearBoard() {
  const pixels = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'rgb(255, 255, 255)';
  }
}

btnClear.addEventListener('click', clearBoard);
