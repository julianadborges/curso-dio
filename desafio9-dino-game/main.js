//SCORE
const score = $('#score');
let scorePoints = 0;

$(function () {
    score.html(scorePoints)
    getTime()
    velocidade()
});

function refreshScore() {
    score.html(scorePoints)
};

let jogando = true;

function getTime() {
        setInterval(() => {
            if (jogando === true) {
            scorePoints += 10
            refreshScore()
            }
        }, 300);
}

//VELOCIDADE (background e jogo talvez)
let velox = 1;

function velocidade() { ///////////////////////chamei no ready
   setTimeout(() => {
        velox *= 2;
   }, 3000);
}

//BACKGROUND
let background = $('.game').css('background-position-x').slice(0, -2);

$(function moveBackground() {
        let bgInterval = setInterval(() => {
            if (jogando === true) {
                background--
                $('.game').css('background-position-x', `${background}px`)
            } else {
                clearInterval(bgInterval);
            }
        }, velox);
});

//PULA
const dino = $('#dino');
let isJumping = false;

$(window).keypress(function jump(e) { 
    if ( e.key === ' ' && isJumping === false) {
        isJumping = true;
        let bottom = parseInt(dino.css('bottom').slice(0, -2));
        
        let upInterval = setInterval(() => {
            if (bottom < 180) {
                bottom += 6
                dino.css('bottom', `${bottom}px`)
                $('#check-dino').css('bottom', `${bottom}px`) //////////////////////////////////////////
            } else if (bottom >= 180) {
                let downInterval = setInterval(() => {
                    if (bottom > 2) {
                        bottom -= 6 
                        dino.css('bottom', `${bottom}px`)
                        $('#check-dino').css('bottom', `${bottom}px`)
                    } else {
                        isJumping = false;
                        clearInterval(downInterval)
                    }
                });
                clearInterval(upInterval)
            }
        });
    }
});

//CRIA CACTO
const cactoPlace = $('#cacto-place');
let cacto = $('.cactus');

$(function createCacto() {
    if (jogando === true) {
        let random;
        randomNumber(600, 6000);

        function randomNumber(min, max) {
            random = Math.floor(Math.random()*(max-min+1)+min);;
        }

        setTimeout(() => {
            if (jogando === true) {
                randomNumber()
                cactoPlace.append('<img src="/media/cactus.png" class="cactus"><div class="check" id="check-cacto-x"></div>')
                moveCacto();
            }
        }, random);

        function moveCacto() {
            if(jogando === true) {
                $('#cacto-place > .cactus, #cacto-place > .check').each(function () {
                    let right = parseInt($(this).css('right').slice(0, -2));
    
                    let interval = setInterval(() => {
                        let valor = 0;
                        setTimeout(() => {
                            valor += 2
                        }, 3000);

                        if (right < 900 && jogando) {
                            right += valor + 4;
                            $(this).css('right', `${right}px`)
                            checkColision()
                        } else if (jogando) {
                            $(this).remove()
                        } 
                    });
                })
        }
        setTimeout(createCacto, random);
}}

//COLISÃO / GAME OVER
function checkColision() {
    let dinoCheck = $('#check-dino').offset();
    let cactoCheck = $('#check-cacto-x').offset();
    let dinoPositionX = dinoCheck.left;
    let cactoPositionX = cactoCheck.left;
    let dinoPositionY = dinoCheck.top;
    let cactoPositionY = cactoCheck.top;

    if (cactoPositionX <= dinoPositionX && cactoPositionY <= dinoPositionY) {
        jogando = false;
        gameOver();
    }
}})

function gameOver() {
    alert(`Game over! Seu score: ${scorePoints}`)
    location.reload()
}