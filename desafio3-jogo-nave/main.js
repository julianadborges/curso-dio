$('.inicio a').click(function start() {
    $('.box-inicio').hide();
    $('.heli').append('<img src="/imgs/apache1.png" alt="helicóptero" height="60">');
    $('.foe1').append('<img src="/imgs/inimigo1-1.png" alt="inimigo" height="60">');
    $('.foe2').append('<img src="/imgs/inimigo2.png" alt="inimigo" height="60">');
    $('.amigo').append('<img src="/imgs/amigo1.png" alt="amigo" height="60">');
    asasHeli();
    asasFoe();
    walkAmigo();
    moveFundo();
    atacaInimigo();

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
    }, 40);
}

function moveFundo() {
    let fundo = 0;
    setInterval(() => {
        fundo = fundo +0.3;
        $('.inicio').css('background-position-x', `right -${(fundo)}%`);
    }, 20)
}

//mecânica
let windowHeight = $(window).height();
let windowWidth = $(window).width();

$(document).keypress(function (e) {
    let topHeli = parseInt($('.heli').css('top'));
    let minPxHeliTop = (windowHeight/100)*8;
    let maxPxHeliTop = (windowHeight/100)*73;
    
    //movimentos
    //se o helicóptero estiver depois do mínimo e antes do máximo, move pra cima e pra baixo
    if( topHeli >= minPxHeliTop && topHeli <= maxPxHeliTop) {
        if( e.key === 's') {
        topHeli = topHeli + 4;
        $('.heli').css('top', `${topHeli}px`)

        } if ( e.key === 'w') {
            topHeli = topHeli - 4;
            $('.heli').css('top', `${topHeli}px`)
        }
        //se estiver antes do mínimo, move pra baixo
    } else if (topHeli <= minPxHeliTop) {
        if ( e.key === 's') {
            topHeli = topHeli + 4;
            $('.heli').css('top', `${topHeli}px`)
        }
        //se estiver depois do máximo, move pra cima
    } else if (topHeli >= maxPxHeliTop) {
        if( e.key === 'w') {
            topHeli = topHeli - 4;
            $('.heli').css('top', `${topHeli}px`)
        }
    }
})

function atacaInimigo() {
    let rTop;
    function randomTop() {
        rTop = Math.floor(Math.random() * (maxPxFoeTop - minPxFoeTop) + minPxFoeTop)
    }

    let topHeliFoe = parseInt($('.foe1').css('top'));
    let foe1Right = parseInt($('.foe1').css('right'));

    let minPxFoeTop = (windowHeight/100)*8;
    let maxPxFoeTop = (windowHeight/100)*73;
    let minPxFoeRight = (windowWidth/100)*6;
    let maxPxFoeRight = (windowWidth/100)*77;

    let velox = 0.4;

// se o foe1Right (posição da direita) do inimigo estiver abaixo do max direita, faz ele andar pra esquerda
// se o foe1Right (posição da direita) do inimigo estiver dpois do max direita, faz ele voltar pro mínimo direita (minPxFoeRight)
    setInterval(() => {
        if (foe1Right <= maxPxFoeRight ) {
            foe1Right = foe1Right + 5;
            $('.foe1').css('right', `${foe1Right}px`)
        } else if (foe1Right >= maxPxFoeRight) {
            foe1Right = minPxFoeRight;
            $('.foe1').css('right', `${foe1Right}px`)
            randomTop();
            topHeliFoe = rTop;
            $('.foe1').css('top', `${rTop}px`)
            //aumentar velocidade
        }
    }, velox);
}