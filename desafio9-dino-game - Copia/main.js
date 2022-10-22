const $score = $('#score');
const $start = $('#start');
const $cacto = $('#cacto');
const $dino = $('#dino');

let jogando = false;
let score = 0;
let velox = 1;

$(function () {
    if (window.confirm('Bora começar?')) {
        jogando = true;
        atualizaScore();
        moveBackground();
        criaCacto();
    } else {
        alert('Vou começar do mesmo jeito ;)')
        jogando = true;
        atualizaScore();
        moveBackground();
        criaCacto();
        
    }
});

function atualizaScore() {
    $score.html(score);
}

function moveBackground() {
    let backgroundXFull = $('html').css('background-position-x');
    let backgroundSlice = parseInt(backgroundXFull.slice(0,1))
    setInterval(() => {
        backgroundSlice -= 2;
        $('.game').css('background-position-x', `${backgroundSlice}px`);
    }, velox);
}

function criaCacto() {
    $('#cacto-place').append("<img src='/media/cactus.png' class='col' id='cacto'><div class='check' id='check-cacto'></div>")

    //colocar um set interval com interval de math random
    let randomInterval = Math.floor(Math.random() * 6000)
    setTimeout(criaCacto, randomInterval);

    let maxRight = 100;
    let minRight = 0;
    let cactoRightVH;

    let cactoRight = $('#cacto').css('right');
    let cactoRightPx = parseInt(cactoRight.slice(0, 2));
    
    function convertCactoPx(positionW, width) {
        cactoRightVH = positionW * 100/width
    }

    let divWidthPx = $('.game').width();
    convertCactoPx(cactoRightPx, divWidthPx)

    moveCacto();

    function moveCacto() {
        let cactoInterval = setInterval(() => {
            if(cactoRightVH > maxRight) {
                clearInterval(cactoInterval);
                $('#cacto-place').find('#cacto:first').remove();
                $('#cacto-place').find('#check-cacto:first').remove();
            } else if (cactoRightVH <= maxRight) {
                cactoRightVH += 0.5;
                checkCacto = cactoRightVH + 4;
                $('#cacto').css('right', `${cactoRightVH}vw`)
                $('#check-cacto').css('right', `${checkCacto++}vw`)
            }
        }, velox);
    }

}

//pula
$('html').keydown(function (e) { 
    if( e.key === ' ' && jogando && !isJumping) {
        jump()
    } else {
        return false;
    }})

//jump
let isJumping = false;

function jump() {
    isJumping = true;
    let maxHeight = 40;
    let minHeight = 5;
    let positionDinoVH;

    let dinoHeight = $dino.css('bottom');
    let dinoHeightPx = parseInt((dinoHeight.slice(0, 2)-10))
    
    let divHeightPx = $('.game').height();
    convertDinoPx(dinoHeightPx, divHeightPx);

    function convertDinoPx(positionH, height) {
        positionDinoVH = parseInt(positionH * 100/height)
    }

    let upInterval = setInterval(() => {
        if (positionDinoVH >= maxHeight) {
            let downInterval = setInterval(() => {
                if (positionDinoVH >= minHeight) {
                    positionDinoVH -= 1.7;
                    $dino.css('bottom', `${positionDinoVH}vh`)
                } else if (positionDinoVH < minHeight) {
                    isJumping = false;
                    clearInterval(downInterval)
                }
            });
            clearInterval(upInterval);

        } else if (positionDinoVH < maxHeight) {
            positionDinoVH += 1.7;
            $dino.css('bottom', `${positionDinoVH}vh`)
        } 
    });
}

function checaMovimento() {
    let dinoWidth = $dino.css('right');
    let dinoHeight = $dino.css('bottom');
    let cactoHeight = $cacto.css('bottom')

    let checaInterval = setInterval(() => {
        let cactoPos = $cacto.css('right');
        
        if (dinoWidth === cactoPos && dinoHeight === cactoHeight) {
            console.log('perdeu')
            clearInterval(checaInterval)
        }
    }, 1000);

    // setInterval(() => {
    //     if (dinoBottom === 5 && dinoRight === cactoRight) {
    //         console.log('perdeu')
    //     } else {
    //         console.log('segue')
    //     }
    // });
}