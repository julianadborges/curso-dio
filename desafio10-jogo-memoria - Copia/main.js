const card = $('.card');
const frontCard = $('.card-front');
const cards = ['img/bowser.png', 'img/bowser.png', 'img/luigi.png', 'img/luigi.png', 'img/mario.png', 'img/mario.png', 'img/peach.png', 'img/peach.png', 'img/toad.png', 'img/toad.png', 'img/yoshi.png', 'img/yoshi.png']
let clicado = [];

$(function () {
    let shuffled = _.shuffle(cards)
    $.each(shuffled, function (index, value) { 
        $(`[id*='${index}']`).attr('src', value)
    });
});

let limite = false;
card.click(function clica() {
    if(!limite && !$(this).hasClass('acertou')) {
        clicado.push($(this).children().closest('.card-front').attr('src'));
        $(this).addClass('active');
        checaJogada();
    } else if (limite) {
        return false;
    }
})

function checaJogada() {
    if (clicado.length < 2) {
        limite = false;
    } else if (clicado.length == 2) {
        limite = true;
        if (clicado[0] === clicado[1]) {
            $(`img[src='${clicado[0]}']`).parent().addClass('acertou')
            clicado = []
            setTimeout(() => {
                limite = false;
            }, 1100);
        } else {
            setTimeout(() => {
                card.not('.acertou').removeClass('active')
            }, 1100);
            clicado = []
            setTimeout(() => {
                limite = false;
            }, 1100);
        }
    }
    if( card.length === $('.acertou').length) {
        setTimeout(() => {
            if(confirm('Parabéns! Você ganhou!!!\nClique em OK para jogar de novo.')) {
                location.reload()
            }
        }, 200);
    }
}