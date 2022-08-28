$('.inicio a').click(function start() {
    $('.box-inicio').hide();
    
    $('.heli').append('<img src="/imgs/apache1.png" alt="helicóptero" height="60">');
    $('.foe1').append('<img src="/imgs/inimigo1-1.png" alt="inimigo" height="60">');
    $('.foe2').append('<img src="/imgs/inimigo2.png" alt="inimigo" height="60">');
    $('.amigo').append('<img src="/imgs/amigo1.png" alt="amigo" height="60">');

    asasHeli();
    asasFoe();
    walkAmigo();

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
    let i = 100;

    setInterval(() => {
    $('.amigo').html('<img src="/imgs/amigo2.png" alt="amigo" height="60">')
}, i*2);
    i=i;
    setInterval(() => {
        $('.amigo').html('<img src="/imgs/amigo3.png" alt="amigo" height="60">')
}, 200);
    setInterval(() => {
        $('.amigo').html('<img src="/imgs/amigo4.png" alt="amigo" height="60">')
}, 300);
    setInterval(() => {
        $('.amigo').html('<img src="/imgs/amigo5.png" alt="amigo" height="60">')
}, 400);
setInterval(() => {
    $('.amigo').html('<img src="/imgs/amigo6.png" alt="amigo" height="60">')
}, 500);
setInterval(() => {
    $('.amigo').html('<img src="/imgs/amigo7.png" alt="amigo" height="60">')
}, 600);
setInterval(() => {
    $('.amigo').html('<img src="/imgs/amigo8.png" alt="amigo" height="60">')
}, 700);
setInterval(() => {
    $('.amigo').html('<img src="/imgs/amigo9.png" alt="amigo" height="60">')
}, 800);
setInterval(() => {
    $('.amigo').html('<img src="/imgs/amigo10.png" alt="amigo" height="60">')
}, 900);
setInterval(() => {
    $('.amigo').html('<img src="/imgs/amigo11.png" alt="amigo" height="60">')
}, 1000);
setInterval(() => {
    $('.amigo').html('<img src="/imgs/amigo12.png" alt="amigo" height="60">')
}, 1100);
}