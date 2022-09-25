const $btn = $('#start');
const blue = $('#blue');
const green = $('#green');
const red = $('#red');
const yellow = $('#yellow');

let ordem = [];
let clicado = [];
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
    $btn.attr('disabled', true)
    randomCor()
    ordem.push(cor)
    destaca(cor)
});

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

    setTimeout(() => {
        $(cor).addClass('selected')    
    }, 1600);
    
    setTimeout(() => {
        $(cor).removeClass('selected')    
    }, 1600);

}



