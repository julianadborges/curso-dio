const $btn = $('.square button');
const $start = $('.start');
const $player = $('.player');
const $square = $('.square');

const players = ['X', 'O'];
let player;

const casas = ['A1', 'A2', 'A3', 'B1', 'B2', 'B3', 'C1', 'C2', 'C3'];
///////////////

if ( $start.html() === 'Recomeçar') {
    location.reload();
}

///////////////
$start.click(function escolheJogador() {
    $start.html('Recomeçar');

    function randomPlayer() {
        player = Math.floor(Math.random() * players.length)
    }

    if ( $start.html() === 'Começar' ) {

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

    } else if ( $start.html() === 'Recomeçar') {
        
    }


})

$square.click(function joga() {
    //pega ID
    let clickedId = $(this).children().attr('id');

    $(`#${clickedId}`).html(player);


})