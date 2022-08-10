$('#btnsearch').click(function abrirInput(e) {
    e.preventDefault()
    var input = $(this);
    console.log('teste');

    $('form input').toggleClass('active');
    $('form input').toggleClass('d-none');
})
