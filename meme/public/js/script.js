var positive = ['hi', 'smile', 'beautiful', 'pretty', 'good', 'hello', 'job',
    'cute', 'life', 'self', 'smile', 'together', 'kind' , 'love'];
var negative = ['fuck', 'shit', 'dick', 'angry', 'ugly', 'fat', 'hard', 'clumsy', 'insane', 'stupid'];
var categories = [positive, negative];
var cnames = ['positive', 'negative'];

function getCategory(string) {
    for (var i = 0; i < categories.length; i++) {
        var category = categories[i];
    }
}


$('#top').on('input', function() {
    $('#top-content').html($(this).val());
});

$('#bottom').on('input', function() {
    $('#bottom-content').html($(this).val());
});

$('#generate').on('click', function() {
    var str = $('#top-content').html() + ' ' + $('#bottom-content').html();
    str = str.trim();
});
