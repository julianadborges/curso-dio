$('#btnsearch-large').click(function abrirInput(e) {
    e.preventDefault()
    var input = $(this);
    console.log('teste');

    $('#form-large input').toggleClass('active');
    $('#form-large input').toggleClass('d-none');
})

$('#chevron-title').hover(function () {
        // over
        $(this).toggleClass('show-chevron');


    }, function () {
        // out
        $(this).removeClass('show-chevron');
    }
);