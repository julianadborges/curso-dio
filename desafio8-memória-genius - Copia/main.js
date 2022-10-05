const green = $('.green');
const red = $('.red');
const yellow = $('.yellow');
const blue = $('.blue');
const $startBtn = $('.startBtn');
const $score = $('#score');

let order = [];
let clickedOrder = [];
let score = 0;

// let greenSound=document.getElementById("greenBtn");
// let redSound=document.getElementById("redBtn");
// let yellowSound=document.getElementById("yellowBtn");
// let blueSound=document.getElementById("blueBtn");

let playGame = () => {
  $startBtn.attr('disabled', true);
  score = 0;

  nextLevel();
}

let nextLevel = () => {
  score++;
  scoreboardRefresh();
  shuffleOrder();
}

let shuffleOrder = () => {
  let colorOrder = Math.floor(Math.random() * 4);
  order.push(colorOrder)
  clickedOrder = [];

  for(let i in order) {
    let elementColor = createColorElement(order[i]);
    lightColor(elementColor, Number(i) + 1);
  }
}

let lightColor = (element, number) => {
  number *= 500;
  setTimeout(() => {
    element.addClass('selected');
  }, number - 250);
  setTimeout(() => {
    element.removeClass('selected');
  }, number);
}

let checkOrder = () => {
  for(let i in clickedOrder) {
    if(clickedOrder[i] != order[i]) {
      gameOver();
      break;
    }
  }
  if(clickedOrder.length == order.length) {
    nextLevel();
  }
}

let click = (color) => {
  clickedOrder.push(color);
  createColorElement(color).addClass('selected');

  setTimeout(() => {
    createColorElement(color).removeClass('selected');
    checkOrder();
  },250);
}

let createColorElement = (color) => {
  if(color == 0) {
    return green;
  } else if(color == 1) {
      return red;
  } else if (color == 2) {
      return yellow;
  } else if (color == 3) {
      return blue;
  }
}

let scoreboardRefresh = () => {
  $score.html(score);
}

let gameOver = () => {
  document.getElementById("startBtn").disabled = 0;
  alert(`Você errou, Vamos tentar outra vez!`);
  order = [];
  score = 0;
}

green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);