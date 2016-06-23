var positive = ['hi', 'smile', 'beautiful', 'pretty', 'good', 'hello', 'job',
    'cute', 'life', 'together', 'kind' , 'love'];
var negative = ['fuck', 'shit', 'dick', 'angry', 'ugly', 'fat', 'hard', 'clumsy', 'insane', 'stupid'];
var categories = [positive, negative];
var cnames = ['positive', 'negative'];

function getCategory(string) {
    var str = string.split(' ');
    var points = [0, 0];
    for (var i = 0; i < categories.length; i++) {
        var category = categories[i];
        for (var j = 0; j < str.length; j++) {
            var s = str[j];
            for (var k = 0; k < category.length; k++) {
                var cat = category[k];
                if (s.indexOf(cat) >= 0) {
                    points[i]++;
                }
            }
        }
    }

    var top = 0;
    for (var l = 1; l < points.length; l++) {
        if (points[top] <= points[l]) {
            top = l;
        }
    }

    return cnames[top];
}


$('#top').on('input', function() {
    $('#top-content').html($(this).val());
});

$('#bottom').on('input', function() {
    $('#bottom-content').html($(this).val());
});

$('#generate').on('click', function() {
    var str = $('#top-content').html() + ' ' + $('#bottom-content').html();
    console.log(getCategory(str));
    $('#st-control-3').click();
});

$('#generate-again').on('click', function() {
	$('#top').val('');
	$('#bottom').val('');
	$('#top-content').html('');
	$('#bottom-content').html('');
    $('#st-control-2').click();
});