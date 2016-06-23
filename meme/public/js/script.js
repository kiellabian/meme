console.log($('#top'));

$('#top').on('input', function() {
    $('#top-content').html($(this).val());
});

$('#bottom').on('input', function() {
    $('#bottom-content').html($(this).val());
});