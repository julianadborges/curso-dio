let cores = ['blue', 'green', 'red', 'yellow']
let ordem = [];
let clicado = [];
let score = 0;

let qt = 0;

let cor;

const $btn = $('button');

/////////classes/cores
const blue = $('#blue');
const green = $('#green');
const red = $('#red');
const yellow = $('#yellow');

//score na pag
$('#score').html(score);

    ///////push clicado
    $('.cor').click(function push() {
        let id = $(this).closest('.cor').attr('id')
        console.log(id)
    })


$btn.click(function play() {
    ///////random cor
    function randomCor(){
        cor = Math.floor(Math.random()*cores.length);
        qt++
        switch (cor) {
            case 0:
                cor = 'blue' 
            break;
            case 1:
                cor = 'green' 
            break;
            case 2:
                cor = 'red' 
            break;
            case 3:
                cor = 'yellow' 
            break;
        }
    }
    ///////random cor

    ///////joga a cor sorteada pra array de cores
    let interval = setInterval(function corToArray() {
        let qtMax = ordem.length+1;

            randomCor()
            ordem.push(cor)
            console.log(ordem)

    });



    //////checa jogada
    function checa() {
        
    }



    ///////joga a cor sorteada pra array de cores

    ///////destaca a cor random
    function destaca() {
        let interval = 1600;


        // ordem.forEach(function(el) {
        //     var run = setTimeout(function() {
        //         setInterval(() => {
        //             $(`[id*='${el}']`).toggleClass('active');
        //         }, 1500);

        //         clearTimeout(run);

        //     }, interval);
          

        //   });

    }

    destaca();
    ///////destaca a cor random



})