const green = $('#green');
const red = $('#red');
const yellow = $('#yellow');
const blue = $('#blue');
const $cor = $('.cor');
const $start = $('#start');
const $score = $('#score');

let ordem = [];
let clicado = [];
let score = 0;

let gameOverVar = false;

//ready
$(function () {
  $score.html(score)
});

//dark mode
$('#dark-mode').click(function dark() {
	if($('#dark-mode').is(':checked')) {
		$('body').css('background-color', 'rgb(37, 49, 49)');
	  } else {
		$('body').css('background-color', 'rgb(175, 207, 207)'); 
	  }
})

//atualiza score
function atualizaScore() {
	$score.html(score)
}

//start
$start.click(function playGame() {
    $start.attr('disabled', true);
    $cor.removeClass('dont-click')
    score = 0;
    nextLevel();
})

//random cor
function randomCor() {
	$start.html('Jogando...')
	let corIndex = Math.floor(Math.random() * 4)

	switch (corIndex) {
		case 0:
			corIndex = blue
			break;
		case 1:
			corIndex = green
			break;
		case 2:
			corIndex = red
			break;
		case 3:
			corIndex = yellow
			break;
}
  ordem.push(corIndex)
}

//próximo nível (ou primeiro nível)
function nextLevel() {
	setTimeout(() => {
		atualizaScore()
		randomCor()
		destacaOrdem()
		clicado = [];
	}, 500);
}

//destaca ordem
function destacaOrdem() {
	$.each(ordem, function (index, value) { 
		setTimeout(() => {
			value.addClass('selected');
		 }, ((index + 1) * 1000)-550);
		 setTimeout(() => {
			value.removeClass('selected');
		}, (index + 1) * 1000);
	});
		setTimeout(() => {
			$start.html('Sua vez!')
		}, (score + 1) * 1000);
}

//click
$cor.click(function click() {
	let corClicada = this.closest('.cor').id
	switch (corClicada) {
		case 'blue':
			corClicada = blue
			break;
		case 'green':
			corClicada = green
			break;
		case 'red':
			corClicada = red
			break;
		case 'yellow':
			corClicada = yellow
			break;
	}

	setTimeout(() => {
		corClicada.addClass('selected');
	 });
	 setTimeout(() => {
		corClicada.removeClass('selected');
	}, 250);

	clicado.push(corClicada)
	checaJogada()
})

function checaJogada() {
	$.each(clicado, function (indexInArray) { 
		 if(clicado[indexInArray] != ordem[indexInArray]) {
			gameOverVar = true
			gameOver();
			return false;
		 }
	});

	if (clicado.length === ordem.length && gameOverVar === false) {
		setTimeout(() => {
			score++
			nextLevel()
		}, 500);
	 }
}

//game over
function gameOver() {
	if (confirm(`Você errou! Seu score: ${score}\nClique em OK para jogar de novo :)`)) {
		location.reload();
	} else {
		$start.html('Recomeçar')
		$cor.addClass('dont-click')
		$start.attr('disabled', false)
	}
}