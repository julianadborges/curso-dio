const card = $('.card');
const frontCard = $('.card-front');
const cards = ['img/bowser.png', 'img/bowser.png', 'img/luigi.png', 'img/luigi.png', 'img/mario.png', 'img/mario.png', 'img/peach.png', 'img/peach.png', 'img/toad.png', 'img/toad.png', 'img/yoshi.png', 'img/yoshi.png']
let clicado = [];

//array da ordem aleatória
let shuffled;
function randomCards(array) {
    shuffled = array.sort(() => 0.5 - Math.random());
} 

//posiciona as cartas aleatórias
$(function () {
    randomCards(cards);
    $.each(shuffled, function (index, value) { 
        $(`[id*='${index}']`).attr('src', value)
    });
});

//teste mostra tudo //////////////////// apagar
$('.start').click(function vira() {
    $('.card-back').addClass('d-none');
    $('.card-front').removeClass('d-none');
})

//clica pra virar
let limite = false;
card.click(function teste() {
    if(limite === false) {
        $(this).children().closest('.card-back').addClass('d-none');
        $(this).children().closest('.card-front').removeClass('d-none');
        clicado.push($(this).children().closest('.card-front').attr('src'));
        checaJogada();
    } else if (limite === true) {
        return false;
    }
    
})

//checa a cada duas
function checaJogada() {
    if (clicado.length < 2) {
        limite = false;
    } else if (clicado.length == 2) {
        limite = true;
        if (clicado[0] === clicado[1]) {
            //passar a classe 'acertou'
            $(`img[src='${clicado[0]}']`).addClass('acertou')
            $(`img[src='${clicado[0]}']`).siblings().addClass('acertou')
            clicado = []
            limite = false;
        } else {
            setTimeout(() => {
                if ($('.card-front').hasClass('acertou') && !$('.card-back').hasClass('acertou')) {
                    return false
                } else if (!$('.card-front').hasClass('acertou') && !$('.card-back').hasClass('acertou')) {
                    $('.card-front').addClass('d-none');
                    $('.card-back').removeClass('d-none');
                }
                limite = false
            }, 1000);
            clicado = []
        }
    }
}