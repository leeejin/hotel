$('#s1').on('click', function () {
    let num = $('#q1').val();
    if (num % 9 == 0) {
        $('#a1').html('박수!x2');
    }
    else if (num % 3 == 0) {
        $('#a1').html('박수!');
    }
    else {
        $('#a1').html('통과!');
    }
});

$('#s2').on('click', function () {
    var str = $('#q2').val();
    let last_char = str.substr(str.length - 1, 1);
    if (last_char == 3 || last_char == 6 || last_char == 9) {
        $('#a2').html('박수!');
    } else {
        $('#a2').html('통과!');
    }
});

$('#s3').on('click', function () {
    var num1 = Number($('#q3-1').val());
    var num2 = Number($('#q3-2').val());
    if (num1 >= 0 && num1 <= 100 && num2 >= 0 && num2 <= 100) {
        if (num1 < 40 || num2 < 40) {
            $('#a3').html('불합격!');
        } else if (num1 + num2 >= 120) {
            $('#a3').html('합격!');
        } else {
            $('#a3').html('불합격!');
        }
    }
    else {
        $('#a3').html('제대로 입력하소');
    }

});

$('#s4').on('click', function () {
    let age = $('#age').val();
    const region = $('#region').val();
    $('#a4').html(age + '살, ' + region);
});

$('#s5').on('click', function () {
    var money = Number($('#money').val());
    var year = Number($('#year').val());
    if (money < 50000) {
        money = money * 1.15 ** year;
        $('#a5').html(money + '원');
    }
    else if (money >= 50000) {
        money = money * 1.2 ** year;
        $('#a5').html(money + '원');
    }
    else {
        $('#a5').html('똑바로 입력하소');
    }
});
let count1 = 0;
$('#s6').on('click', function () {
    var first = Number($('#coffee').val());
    first += 2 / 3 * first + 2 / 3 * 2 / 3 * first;
    count1 = first;
    $('#a6').html(count1 + 'ml 마실수 있음');
});
$('#s7').on('click', function () {
    var first = Number($('#coffee').val());
    count1 = first / (1 - 2 / 3);
    // first += 2/3 * first + 2/3*2/3*first+2/3*2/3*2/3*first+2/3*2/3*2/3*2/3*first+2/3*2/3*2/3*2/3*2/3*first+2/3*2/3*2/3*2/3*2/3*2/3*first+2/3*2/3*2/3*2/3*2/3*2/3*2/3*first+2/3*2/3*2/3*2/3*2/3*2/3*2/3*2/3*first+2/3*2/3*2/3*2/3*2/3*2/3*2/3*2/3*2/3*first;
    $('#a6').html(count1 + 'ml 마실수 있음');
});


$('#s8').on('click', function () {
    var min = Number($('#min').val());
    var sec = Number($('#sec').val());
    var result = Number(min * 60 + sec) * 1000;
    $('#a7').html(result + 'ms 입니다.');
});

$('#s9').on('click', function () {
    var price = Number($('#price').val()) * 0.9;
    var real = $('#real').val();
    if (real == 'true') {
        price = price - 1.5;
        $('#a8').html(price + '원');
    }
    else if (real == 'false') {
        $('#a8').html(price + '원');
    }
});