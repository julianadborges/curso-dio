const $btn = $('#start');
const $cor = $('.cor');
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

    ordem.push(cor)

    for(let i in ordem) {
        let elementColor = createColorElement(i);
        destaca(elementColor, Number(i) + 1);
      }
}

////PLAY
$btn.click(() => {
    $btn.attr('disabled', true)
    $cor.removeClass('dont-click')
    $btn.html('Jogando...')
    nextLevel()
});

//next level/começar
function nextLevel() {
    $score.html(score)
    randomCor()

    console.log(`ordem: ${ordem}`)

}


let createColorElement = (color) => {
    if(color == 0) {
      return blue;
    } else if(color == 1) {
        return green;
    } else if (color == 2) {
        return red;
    } else if (color == 3) {
        return yellow;
    }    
}

let destaca = (element, number) => {
    number *= 1000;
    setTimeout(() => {
        element.addClass('active');
    }, number - 800);
    setTimeout(() => {
        element.removeClass('active');
    }, number);
}

//destaca a cor sorteada


//pega os btns clicados
$cor.click(function click() {
    let max = ordem.length;
    if (clicado.length < max) {
        clicado.push(this.closest('.cor').id)
        console.log(`clicado: ${clicado}`)
        checaJogada()
    } else {
        console.log('jogar de novo')
        restart() /////////////////////////////////////////////declarar, recomeçar
    }
})

//checar jogada
function checaJogada() {
    for (let i in ordem) {
        if (ordem[i] != clicado[i]) {
            console.log('errou')
            break;
        } else if (clicado.length == ordem.length) {
            console.log('acertou')
            score++
            nextLevel();
        }
    }
}

//se acertar, next level (quase igual ao play)
