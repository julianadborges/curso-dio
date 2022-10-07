const green = $('.green');
const red = $('.red');
const yellow = $('.yellow');
const blue = $('.blue');
const $startBtn = $('.startBtn');
const $score = $('#score');

let ordem = [];
let clicado = [];
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
  let color = Math.floor(Math.random() * 4);
  ordem.push(color)
  clicado = [];

  for(let i in ordem) {
    let elementColor = createColorElement(ordem[i]);
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
  for(let i in clicado) {
    if(clicado[i] != ordem[i]) {
      gameOver();
      break;
    }
  }
  if(clicado.length == ordem.length) {
    nextLevel();
  }
}

let click = (color) => {
  clicado.push(color);
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
  $("#startBtn").attr('disabled', true)
  alert(`Você errou, Vamos tentar outra vez!`)
  ordem = [];
  score = 0;
}

green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);