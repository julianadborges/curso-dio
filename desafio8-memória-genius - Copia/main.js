const green = $('.green');
const red = $('.red');
const yellow = $('.yellow');
const blue = $('.blue');

let order = [];
let clickedOrder = [];
let score = 0;

// let greenSound=document.getElementById("greenBtn");
// let redSound=document.getElementById("redBtn");
// let yellowSound=document.getElementById("yellowBtn");
// let blueSound=document.getElementById("blueBtn");

let playGame = () => {
  document.getElementById("startBtn").disabled = 1;
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
  order[order.length] = colorOrder;
  clickedOrder = [];

  for(let i in order) {
    let elementColor = createColorElement(order[i]);
    lightColor(elementColor, Number(i) + 1);
  }
}

let lightColor = (element, number) => {
  number *= 500;
  setTimeout(() => {
    element.classList.add('selected');
  }, number - 250);
  setTimeout(() => {
    element.classList.remove('selected');
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
  clickedOrder[clickedOrder.length] = color;
  createColorElement(color).classList.add('selected');

  setTimeout(() => {
    createColorElement(color).classList.remove('selected');
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
  document.getElementById("score").innerHTML = score;
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