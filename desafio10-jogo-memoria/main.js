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
card.click(function teste() {
    $(this).children().closest('.card-back').addClass('d-none');
    $(this).children().closest('.card-front').removeClass('d-none');
    clicado.push($(this).children().closest('.card-front').attr('src'));
    checaJogada();
})

//checa a cada duas
function checaJogada() {
    if (clicado.length < 2) {
        console.log('joga mais um')
    } else if (clicado.length == 2) {
        if (clicado[0] === clicado[1]) {
            console.log('acertou')
            //passar a classe 'acertou'
            $(`img[src='${clicado[0]}']`).addClass('acertou')
            $(`img[src='${clicado[1]}']`).addClass('acertou')
            clicado = []
        } else {
            setTimeout(() => {
                $('.card-front').not('acertou').addClass('d-none');
                $('.card-back').not('acertou').removeClass('d-none');
            }, 1000);
            clicado = []
            console.log('errou')
        }
    }
}