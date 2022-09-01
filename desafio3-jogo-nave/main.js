$('.inicio a').click(function start() {
    $('.box-inicio').hide();
    $('.heli').prepend('<img src="/imgs/apache1.png" alt="helicóptero" height="60">');
    $('.foe1').prepend('<img src="/imgs/inimigo1-1.png" alt="inimigo" height="60">');
    $('.caminhao').prepend('<div class="check-colisao-right-bottom"></div><img src="/imgs/inimigo2.png" alt="caminhão" height="60">');
    $('.amigo').prepend('<img src="/imgs/amigo1.png" alt="amigo" height="60">');
    asasHeli();
    asasFoe();
    walkAmigo();
    moveFundo();
    atacaInimigo();
    moveAmigo();
    moveCaminhao();

    checkColisao();
})

function asasHeli() {
    let i = 1;
    setInterval(() => {
        if( i >= 2) {
            i=1;
            $('.heli').html(`<div class="check-colisao-left"></div><img src="/imgs/apache${i}.png" alt="helicóptero" height="60">`)
        } else {
            i++;
            $('.heli').html(`<div class="check-colisao-left"></div><img src="/imgs/apache${i}.png" alt="helicóptero" height="60">`)
        }
    }, 100);
}

function asasFoe() {
    let i = 1;
    setInterval(() => {
        if( i >= 2) {
            i=1;
            $('.foe1').html(`<div class="check-colisao-right"></div><img src="/imgs/inimigo1-${i}.png" alt="inimigo" height="60">`)
        } else {
            i++;
            $('.foe1').html(`<div class="check-colisao-right"></div><img src="/imgs/inimigo1-${i}.png" alt="inimigo" height="60">`)
        }
    }, 100);
}

function walkAmigo() {
    let i = 1;
    setInterval(() => {
        if(i>=12) {
            i = 1;
        } else {
            i++;
        }
        $('.amigo').html(`<div class="check-colisao-left-bottom"></div><img src="/imgs/amigo${i}.png" alt="amigo" height="60">`)
    }, 50);
}

function moveFundo() {
    let fundo = 0;
    setInterval(() => {
        fundo = fundo +0.3;
        $('.inicio').css('background-position-x', `right -${(fundo)}%`);
    }, 20)
}

////////////////////////////////////////////////////////////
/////MECÂNICA
//dimensões da janela em px
let windowHeight = $(window).height();
let windowWidth = $(window).width();
//posições: tiro e min max tiro
let tiroLeft = parseInt($('.tiro').css('left'));
let tiroTop = parseInt($('.tiro').css('top'));
let minPxTiroLeft = (windowWidth/100)*15;
let maxPxTiroLeft = (windowWidth/100)*90; //o máximo tem que ser o fim do inimigo
//posições: player e min max player
let topHeli = parseInt($('.heli').css('top'));
let minPxHeliTop = (windowHeight/100)*8;
let maxPxHeliTop = (windowHeight/100)*73;
//posições: inimigo e min max inimigo (top e right)
let topHeliFoe = parseInt($('.foe1').css('top'));
let foe1Right = parseInt($('.foe1').css('right'));
let minPxFoeTop = (windowHeight/100)*8;
let maxPxFoeTop = (windowHeight/100)*65;
let minPxFoeRight = (windowWidth/100)*6;
let maxPxFoeRight = (windowWidth/100)*77;
//posições: amigo e min max amigo
let amigoLeft = parseInt($('.amigo').css('left'));
let minPxAmigoLeft = (windowWidth/100)*7;
let maxPxAmigoLeft = (windowWidth/100)*89; //o máximo tem que ser o fim do caminhão
//posições: caminhão e min max caminhão
let caminhaoRight = parseInt($('.caminhao').css('right'));
let minPxCaminhaoRight = (windowWidth/100)*7;
let maxPxCaminhaoRight = (windowWidth/100)*82;

$(document).keypress(function (e) {
    //movimentos, player
    //se o helicóptero estiver depois do top mínimo e antes do máximo, move pra cima e pra baixo
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

    /////////////////////////////tiro
    if ( e.key === ' ') {
        $('.tiro').html('<div class="check-colisao-left"></div><img src="imgs/disparo.png" alt="disparo"></img>')
        $('.tiro').css('top', `${topHeli+26}px`)

        let interval = setInterval(() => {
            tiroLeft += 10;

            if ( tiroLeft >= maxPxTiroLeft ) { ////se o tiro estiver no máximo left, faz o tiroLeft voltar pro mínimo
                clearInterval(interval);
                tiroLeft = minPxTiroLeft;
                $('.tiro').css('left', `${minPxTiroLeft}px`)
                $('.tiro').hide()
            } else { ////////////////////////////////se não estiver no máximo left, faz ele andar pra direita
                $('.tiro').show();
                $('.tiro').css('left', `${tiroLeft}px`)
                $('#check-colisao-tiro').css('left', 100)
            }
        }, 5)
    } ///////////////////tiro
})

/////////MOVIMENTOS AUTOMÁTICOS
// inimigo
function atacaInimigo() {
    let rTop;
    function randomTop() {
        rTop = Math.floor(Math.random() * (maxPxFoeTop - minPxFoeTop) + minPxFoeTop)
    }

    let velox = 10;

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
            //aumentar velocidade - não tá funcionando
            // velox += 200;
        }
    }, velox);
}

/////amigo
function moveAmigo() {
    setInterval(() => {
        if (amigoLeft <= maxPxAmigoLeft) {
            amigoLeft += 3;
            $('.amigo').css('left', `${amigoLeft}px`)

        } else if (amigoLeft >= maxPxAmigoLeft) {
            amigoLeft = minPxAmigoLeft;
            $('.amigo').css('left', `${minPxAmigoLeft}px`)
        }
        }, 40);
}

/////caminhão
function moveCaminhao() {
    setInterval(() => {
        if (caminhaoRight >= maxPxCaminhaoRight) {
            caminhaoRight = minPxCaminhaoRight;
            $('.caminhao').css('right', `${caminhaoRight}px`)
        } else {
            caminhaoRight += 3;
            $('.caminhao').css('right', `${caminhaoRight}px`)
        }
    }, 15)
}



//check colisao teste

function checkColisao() {

    let posicaoCheckAmigo = parseInt($('.check-colisao-left-bottom').css('right'));

    setInterval(() => {
    //     function checkBottom() {
    //         if ( amigoLeft === posicaoCheckAmigo ) {
    //             console.log('bateu')
    //         } else if ( amigoLeft != posicaoCheckAmigo ) {
    //             console.log('não bateu')
    //         }

    // }

    //  checkBottom();

    function checkBottom() {
        console.log(`posicaoCheckAmigo = ${posicaoCheckAmigo}, amigoLeft = ${amigoLeft}`)
    }

    checkBottom();




    }, 10);


}
