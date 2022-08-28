$('.inicio a').click(function start() {
    $('.box-inicio').hide();
    
    $('.heli').append('<img src="/imgs/apache1.png" alt="helicóptero" height="60">');
    $('.foe1').append('<img src="/imgs/inimigo1-1.png" alt="inimigo" height="60">');
    $('.foe2').append('<img src="/imgs/inimigo2.png" alt="inimigo" height="60">');
    $('.amigo').append('<img src="/imgs/amigo1.png" alt="amigo" height="60">');

    $('.inicio').css('height', '100vh');
    $('.inicio').removeClass('mt-5');

    asasHeli();
    asasFoe();
    walkAmigo();
    moveFundo();

})

function asasHeli() {
    setInterval(() => {
    $('.heli').html('<img src="/imgs/apache2.png" alt="helicóptero" height="60">')
}, 100);
    setInterval(() => {
    $('.heli').html('<img src="/imgs/apache1.png" alt="helicóptero" height="60">')
}, 200);
}

function asasFoe() {
    setInterval(() => {
    $('.foe1').html('<img src="/imgs/inimigo1-2.png" alt="inimigo" height="60">')
}, 100);
    setInterval(() => {
    $('.foe1').html('<img src="/imgs/inimigo1-1.png" alt="inimigo" height="60">')
}, 200);
}

function walkAmigo() {
    let i = 1;
    setInterval(() => {
        if(i>=12) {
            i = 1;
        } else {
            i++;
        }

        $('.amigo').html(`<img src="/imgs/amigo${i}.png" alt="helicóptero" height="60">`)
    }, 50);
}

function moveFundo() {
    let fundo = 0;
    setInterval(() => {
        fundo = fundo +0.3;
        $('.inicio').css('background-position-x', `right -${(fundo)}%`);
    }, 20)
}

//mecânica
var teclas = {
    W: 87,
    S: 83,
    A: 65,
    D: 68,
}

$(document).keypress(function (e) {
    let minTopHeli = 0;
    let topHeli = parseInt($('.heli').css('top'));

   
    if( topHeli >= minTopHeli ) {
        if( e.key === 's') {
        topHeli = topHeli + 4;
        $('.heli').css('top', `${topHeli}px`)

        } if ( e.key === 'w') {
            topHeli = topHeli - 4;
            $('.heli').css('top', `${topHeli}px`)
        }

    } else if ( e.key === 's') {
        topHeli = topHeli + 4;
        $('.heli').css('top', `${topHeli}px`)

    } else if ()
    
})