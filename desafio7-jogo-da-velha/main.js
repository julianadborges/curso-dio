const $btn = $('.square button');
const $start = $('.start');
const $restart = $('.restart');
const $player = $('.player');
const $square = $('.square');

const players = ['X', 'O'];
let player;

let casas = ['A1', 'A2', 'A3', 'B1', 'B2', 'B3', 'C1', 'C2', 'C3'];

let jogandoVar = false;
let ganhou = false;
///////////////
setInterval(function checaBtn() {
    //antes de começar
    if ( jogandoVar === false ) {
        $start.attr('disabled', false)
        $restart.attr('disabled', true)
        $('.square button').attr('disabled', true)
    //se alguém ganhou
    } else if (ganhou === false) {
        $start.attr('disabled', true)
        $restart.attr('disabled', false)
        $('.square button').attr('disabled', false)
    } else {
        $start.attr('disabled', true)
        $restart.attr('disabled', false)
        $('.square button').attr('disabled', false)
    }
}, 0);

$restart.click(() => {
    location.reload()
})

///////////JOGADAS
setInterval(function checaJogadas() {
    let A1 = $("button[id*='A1']").html();
    let A2 = $("button[id*='A2']").html();
    let A3 = $("button[id*='A3']").html();
    let B1 = $("button[id*='B1']").html();
    let B2 = $("button[id*='B2']").html();
    let B3 = $("button[id*='B3']").html();
    let C1 = $("button[id*='C1']").html();
    let C2 = $("button[id*='C2']").html();
    let C3 = $("button[id*='C3']").html();
    
    
        if ( A1 !== '' && A1 === B1 && B1 === C1 ) {
            $('.vencedor').removeClass('d-none')
            $('.winner').html(A1)
            ganhou = true
        } else if ( A2 !== '' && A2 === B2 && B2 === C2) {
            $('.vencedor').removeClass('d-none')
            $('.winner').html(A2)
            ganhou = true
        } else if ( A3 !== '' && A3 === B3 && B3 === C3) {
            $('.vencedor').removeClass('d-none')
            $('.winner').html(A3)
            ganhou = true
        } else if ( A1 !== '' && A1 === A2 && A2 === A3) {
            $('.vencedor').removeClass('d-none')
            $('.winner').html(A1)
            ganhou = true
        } else if ( B1 !== '' && B1 === B2 && B2 === B3) {
            $('.vencedor').removeClass('d-none')
            $('.winner').html(B1)
            ganhou = true
        } else if ( C1 !== '' && C1 === C2 && C2 === C3) {
            $('.vencedor').removeClass('d-none')
            $('.winner').html(C1)
            ganhou = true
        } else if ( A1 !== '' && A1 === B2 && B2 === C3) {
            $('.vencedor').removeClass('d-none')
            $('.winner').html(A1)
            ganhou = true
        } else if ( A3 !== '' && A3 === B2 && B2 === C1) {
            $('.vencedor').removeClass('d-none')
            $('.winner').html(A3)
            ganhou = true
        }

    
}, 0)


/////////////////
$start.click(function escolheJogador() {
    jogandoVar = true;

    function randomPlayer() {
        player = Math.floor(Math.random() * players.length)
    }
    randomPlayer();
        switch (player) {
            case 0:
                player = 'X';
                break;
            case 1:
                player = 'O';
                break;
        }
    $player.html(player)
})
/////////////////
$square.click(function joga() {
    if(jogandoVar === true) {
        let clickedId = $(this).children().attr('id');

        if ($(`#${clickedId}`).hasClass('busy')) {
            return false;
        } else {
            $(`#${clickedId}`).html(player);
            $(`#${clickedId}`).addClass('busy');
            $(`#${clickedId}`).prop('disabled', true);
            let indexPlayer = casas.indexOf(`${clickedId}`)
            casas.splice(indexPlayer, 1);
        }

   /////////////////
        if(ganhou === true) {
            return false;
        } else if (ganhou === false) {
            setTimeout(function jogaAI() {
                let casaAI;
                let casaAIConvert;
                
                function randomAI() {
                    casaAI = Math.floor(Math.random() * casas.length)
                }
                randomAI();
                    switch (casaAI) {
                        case 0:
                            casaAIConvert = casas[`${casaAI}`];
                            break;
                        case 1:
                            casaAIConvert = casas[`${casaAI}`];
                            break;
                        case 2:
                            casaAIConvert = casas[`${casaAI}`];
                            break;
                        case 3:
                            casaAIConvert = casas[`${casaAI}`];
                            break;
                        case 4:
                            casaAIConvert = casas[`${casaAI}`];
                            break;
                        case 5:
                            casaAIConvert = casas[`${casaAI}`];
                            break;
                        case 6:
                            casaAIConvert = casas[`${casaAI}`];
                            break;
                        case 7:
                            casaAIConvert = casas[`${casaAI}`];
                            break;
                        case 8:
                            casaAIConvert = casas[`${casaAI}`];
                            break;      
                    }
                
                    if (player === 'X') {
                        $(`button[id*='${casaAIConvert}']`).html('O');
                        $(`button[id*='${casaAIConvert}']`).addClass('busy');
                        let indexAI = casas.indexOf(`${casaAIConvert}`)
                        casas.splice(indexAI, 1);
                    } else {
                        $(`button[id*='${casaAIConvert}']`).html('X');
                        $(`button[id*='${casaAIConvert}']`).addClass('busy');
                        let indexAI = casas.indexOf(`${casaAIConvert}`)
                        casas.splice(indexAI, 1);
                    }
                }, 300);
            
            }
    }
}) //FUNCTION JOGA





/////////////////
