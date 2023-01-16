$('#open').on('click', function () {
    $('.black-bg').addClass('show-modal');
})
$('#close').on('click', function () {
    $('.black-bg').removeClass('show-modal');
})
$('.navbar-toggler').on('click', function () {
    $('.list-group').toggleClass('show');
})
document.querySelector('.black-bg').addEventListener('click', function (e) {
    // e.target; //유저가 실제로 누른거
    // console.log(e.target); 
    // e.currentTarget;  //이벤트 리스너 달린 곳 =this

    // e.preventDefault(); //이벤트 기본동작 막아줌
    // e.stopPropagation(); //내 상위요소로 이벤트 버블링 막아줌
    // = $(e.target).is($('.black-bg'))
    // = e.target == e.currentTarget
    // = e.target == this
    if (e.target == document.querySelector('.black-bg')) {
        document.querySelector('.black-bg').classList.remove('show-modal');
    }
});


$('form').on('submit', function (e) {
    var email = $('#email').val();
    var pw = $('#password').val();
    if (email == '') {
        alert('아이디입력하시오.');
        e.preventDefault(); //폼 전송 막음
    }
    else if (pw == '') {
        alert('비밀번호입력하시오.');
        e.preventDefault();
    }
    else if (pw.length < 6) {
        alert('비밀번호 6자리이상 써주세요.');
        e.preventDefault();
    }
    if (/\S+@\S+.\S+/.test(email) == false) {
        alert('이메일 형식 아님');
        e.preventDefault();
    }
    if (/[A-Z]/.test(pw) == false) {
        alert('비밀번호에 대문자를 꼭 포함해주세요');
        e.preventDefault();
    }
});
$('#password').on('change', function () {

    if ($('#password').val().length < 6) {
        $('#pwinform').html('비밀번호 6자리이상 써주세요.');
        $('#password').addClass('errorinform');
        e.preventDefault();
    }
    else {
        $('#pwinform').html('password');
        $('#password').removeClass('errorinform');
    }
});

var count = 0;
$('#mode').on('click', function () {
    count++;
    if (count % 2 == 0) {
        $('.navbar').removeClass('navbar-dark bg-dark');
        $('.list-group-item').removeClass('bg-dark');
        $('.navbar-brand').css('color', 'black');
        $('#mode').addClass('bg-dark');
        $('#mode').removeClass('bg-light');
        $('#mode').html('Dark 🔄');
    }
    else {
        $('.navbar').addClass('navbar-dark bg-dark');
        $('.list-group-item').addClass('bg-dark');
        $('.navbar-brand').css('color', 'white');
        $('#mode').removeClass('bg-dark');
        $('#mode').addClass('bg-light');
        $('#mode').html('Light 🔄');
    }
})


setTimeout(function () {
    $('.alert').hide();
}, 5000); //1초당 1000ms

var sec = 5;
setInterval(function () {
    sec--;
    $('#num').html(sec);
}, 1000);

var SlideScreen = 0;
for (let i = 0; i < 3; i++) {
    $('.slide').eq(i).on('click', function () {
        $('.slide-container').css('transform', 'translateX(-' + i + '00vw)');
        SlideScreen = i;
    });
}

// $('.slide-1').on('click', function () {
//     $('.slide-container').css('transform', 'translateX(0vw)');
//     SlideScreen = 0;
// });
// $('.slide-2').on('click', function () {
//     $('.slide-container').css('transform', 'translateX(-100vw)');
//     SlideScreen = 1;
// });
// $('.slide-3').on('click', function () {
//     $('.slide-container').css('transform', 'translateX(-200vw)');
//     SlideScreen = 2;
// });

$('.slide-before').on('click', function () {
    SlideScreen--;
    $('.slide-container').css('transform', 'translateX(-' + SlideScreen + '00vw)');

    if (SlideScreen == -1) {
        $('.slide-container').css('transform', 'translateX(-200vw)');
        SlideScreen = 2;
    }
});
$('.slide-next').on('click', function () {
    SlideScreen++;
    $('.slide-container').css('transform', 'translateX(-' + SlideScreen + '00vw)');

    if (SlideScreen == 3) {
        $('.slide-container').css('transform', 'translateX(0vw)');
        SlideScreen = 0;
    }
});

$(window).on('scroll', function () {
    if (window.scrollY >= 100) {
        $('.navbar-brand').css('font-size', '20px');
    }
    else if (window.scrollY == 0) {
        $('.navbar-brand').css('font-size', '23px');
    }
});
//div의 스크롤바 내린 양 + 눈에보이는 div높이 == div의 실제높이
$('.lorem').on('scroll', function () {
    var 스크롤양 = document.querySelector('.lorem').scrollTop;
    var 실제높이 = document.querySelector('.lorem').scrollHeight;
    var 높이 = document.querySelector('.lorem').clientHeight;
    // 스크롤양 + 높이 == 실제높이
    if (스크롤양 + 100 == 실제높이) {
        alert('정독완료');
    }
    // if (스크롤양 + 높이 > 실제높이 - 10) {
    //     alert('정독완료');
    // }

    //  document.querySelector('html').scrollHeight; //현재 페이지 실제 높이
    // //  = document.documentElement.scrollHeight
    // document.querySelector('.lorem').clientHeight; //페이지 보이는 높이
    // // var 높이 = document.querySelector('.lorem').scrollTop; //현재 페이지 스크롤양
    // window.scrollY // = 현재 페이지 스크롤양
});

$(window).on('scroll', function () {
    let totalY = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollY = document.documentElement.scrollTop;
    let currentPercentage = (scrollY / totalY) * 100;
    document.querySelector(".scrollrange").style.width = currentPercentage + "%";
    $('.scrollrange span').html(currentPercentage.toFixed(0) + "%");

});