const $btn = $('.teste'); //trocar pra $('#start')
const blue = $('#blue');
const green = $('#green');
const red = $('#red');
const yellow = $('#yellow');

let ordem = [];
let clicado = [];
let qtClicado = 0;
let cor;

$score = $('#score');
let score = 0;

/////ready
$score.html(score);

//////random ordem
function randomCor() {
    cor = Math.floor(Math.random() * 4)

    switch (cor) {
        case 0:
            cor = 'blue'
            break;
        case 1:
            cor = 'green'
            break;
        case 2:
            cor = 'red'
            break;
        case 3:
            cor = 'yellow'
            break;
    }
}

////PLAY
$btn.click(() => {
    // $btn.attr('disabled', true)
    randomCor()
    ordem.push(cor)
    qtMaxClicado = ordem.length;
   
    destaca(cor)
});

//pega clicado
let $cor = $('.cor');
let corClicada;
let qtMaxClicado;

$cor.click(function pegaiD() {
    qtClicado++
    if ( qtClicado <= qtMaxClicado ) {
        corClicada = this.closest('div').id;
        clicado.push(corClicada);
        checaJogada();
    } else {
        checaJogada();
    }
}) 

//destaca a cor sorteada
function destaca(cor) {
    if (cor === 'blue') {
        cor = blue
    } else if (cor === 'green') {
        cor = green
    } else if (cor === 'red') {
        cor = red
    } else if (cor === 'yellow') {
        cor = yellow
    }

    ordem.forEach(element => {
        setTimeout(() => {
            cor.addClass('selected')    
        }, 200);
        
        setTimeout(() => {
            cor.removeClass('selected')    
        }, 1000);
    });
}

////checa se clicado é igual à ordem
function checaJogada() {
    let a = ordem.toString()
    let b = clicado.toString()
    if (a===b) {
        console.log(`ordem: ${ordem}, clicado: ${clicado}`)
        console.log('ok')
        nextLevel()
    } else {
        console.log('errou')
    }
}

//segue o jogo se acertou
function nextLevel() {
    console.log('chamou next level')
    clicado = [];

    setTimeout(() => {
        randomCor()

        ordem.push(cor)
        qtMaxClicado = ordem.length; 

        destaca(cor)

        console.log(ordem)
    }, 500);

}