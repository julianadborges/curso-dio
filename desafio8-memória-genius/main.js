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

    qtMaxClicado = ordem.length;
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
function destaca(cor, element) {
    if (cor === 'blue' || element === 'blue') {
        cor = blue
    } else if (cor === 'green' || element === 'green') {
        cor = green
    } else if (cor === 'red' || element === 'red') {
        cor = red
    } else if (cor === 'yellow' || element === 'yellow') {
        cor = yellow
    }

    //preciso pegar cada elemento da array ordem
    //pra cada um tenho que chamar dois timeouts

    $.each(ordem, function (index, cor) { 
        setTimeout(() => {
            $(`#${cor}`).addClass('selected')    
        }, 200);
        
        setTimeout(() => {
            $(`${ordem[index]}`).removeClass('selected')    
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
        qtMaxClicado = ordem.length;
        nextLevel()
    } else {
        console.log('errou')
        console.log(`ordem: ${ordem}, clicado: ${clicado}`);
    }
}

//segue o jogo se acertou
function nextLevel() {
    console.log('chamou next level')
    qtMaxClicado = ordem.length;
    clicado = [];

    setTimeout(() => {
        randomCor()

        ordem.push(cor)
        qtMaxClicado = ordem.length; 

        destaca(cor)

        console.log(ordem)
    }, 500);

}