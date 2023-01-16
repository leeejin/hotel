// 버튼0 누르면
// ~ 모든 버튼에 붙은 orange 클래스명 제거
// ~ 버튼 0에 orange 클래스명 추가
// ~ 모든 div에 붙은 show 클래스명 제거
// ~ div 0에 show 클래스명 추가

var tabbtn = $('.tab-button');
var tabcont = $('.tab-content');

// for (let i = 0; i < tabbtn.length; i++) {
//     tabbtn.eq(i).on('click', function () {
//         탭열기(i);
//     })
// }

$('.list').click(function (e) {

    탭열기(e.target.dataset.id);

});

function 탭열기(구멍) {
    tabbtn.removeClass('orange');
    tabbtn.eq(구멍).addClass('orange');
    tabcont.removeClass('show');
    tabcont.eq(구멍).addClass('show');
}

var car = ['소나타', 50000, 'white'];
// car[0] = '아반떼'; //array 자료 추가/수정
// console.log(car[0]);
// console.log(car.sort());
// console.log(car.slice(1,3));
var car2 = { name: '소나타', price: [50000, 3000, 4000] };
// car2.price = 60000;
// console.log(car2['name']);
// console.log(car2.price);
document.querySelector('.carName').innerHTML = car2['name']; //변수넣기 가능
document.querySelector('.carPrice').innerHTML = car2.price[0]; //변수넣기 불가능

// $('.form-select').eq(0).on('input', function () {
//     // var value = $('.form-select').eq(0).val();
//      var value = this.value;
//     if (value == '셔츠')
//        $('.form-select').eq(1).removeClass('form-hide');
//     else if (value == '모자')
//         $('.form-select').eq(1).addClass('form-hide');
// });

var obj = {name : 'kim',age:20};
for(var key in obj){
    console.log(key+' : '+obj[key]);
}

var pants = [28, 30, 32, 34];
var shirts = [95, 100, 105];
document.querySelectorAll('.form-select')[0].addEventListener('input', function () {
    var value = this.value;
    // var 바지 = '<option>28</option><option>30</option>';
    //var 셔츠 = ' <option>95</option><option>100</option>';
    if (value == '셔츠') {
        document.querySelectorAll('.form-select')[1].style.display = 'block';
        document.querySelectorAll('.form-select')[1].innerHTML = '';
        shirts.forEach(function (data) { 
            //function 안에서 쓰면 this가 알맞게 재정의 됨
            //그래서 e.currentTarget이런거 쓰면 그냥 function쓰는게 알맞음
            document.querySelectorAll('.form-select')[1].insertAdjacentHTML('beforeend', `<option>${data}</option>`)
        })
    }
    else if (value == '모자') {
        document.querySelectorAll('.form-select')[1].style.display = 'none';
    }
    else if (value == '바지') {
        document.querySelectorAll('.form-select')[1].style.display = 'block';
        document.querySelectorAll('.form-select')[1].innerHTML = '';
        // document.querySelectorAll('.form-select')[1].insertAdjacentHTML('beforeend', 바지);
        //array자료에만 쓸수 있는 반복문
        pants.forEach( (data) => {
            //this값을 쓸 경우 arrowfunction을 안에서 쓰면 바깥에 있던 this를 그대로 가져다 씀
            document.querySelectorAll('.form-select')[1].insertAdjacentHTML('beforeend', `<option>${data}</option>`);
        });
    }
})
// var a = document.createElement('p');
// a.innerHTML = '안녕';
// document.querySelector('#test').appendChild(a);

// var 템플릿 = '<p>안녕</p>';
// //HTML을 추가해주는 문법
// //createElement()가 더 빠름, 실은 별차이 없음
// document.querySelector('#test').insertAdjacentHTML('beforeend',템플릿);
// $('#test').append(템플릿);



