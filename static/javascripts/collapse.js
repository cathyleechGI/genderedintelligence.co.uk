$('[data-click]').on('click', function (e) {
    $( $(this).attr('href') ).trigger('click');
});