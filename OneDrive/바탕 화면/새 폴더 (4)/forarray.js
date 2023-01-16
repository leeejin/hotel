var 출석부 = ['흥민', '영희', '철수', '재석', '철수'];
function 이름찾기(name) {

    for (var i = 0; i < 출석부.length; i++) {
        if (name == 출석부[i]) {
            return console.log('있어요');
        }
    }

}

이름찾기('철수'); //있어요 나옴
이름찾기('명수'); //안 나옴

for (let i = 2; i < 10; i++) {
    console.log(`*******${i}단*******`);
    for (let j = 1; j < 10; j++) {
        var mul = i * j;
        console.log(`${i}*${j}=${mul}`);
    }
}



function 함수(data, predata) {
    let sum = 0;
    for (let i = 0; i < data.length; i++) {
        sum += data[i];
    }
    var avg = sum / data.length;
    if (avg - predata < 0) {
        console.log(`평균보다 ${predata - avg}점이 올랐네요`);

    }
    else if (avg - predata > 0) {
        console.log(`평균보다 ${avg - predata}점이 떨어졌네요 재수추천`);
    }
    else if (avg - predata == 0) {
        console.log(`지난번 평균 ${avg}이랑 똑같네요`);
    }
    else {
        console.log(`? 제대로 숫자로 입력하시죠 !`);
    }
}

함수([10, 20, 30, 40, 50], 40);
함수([40, 40, 40], 20);
함수([40, 40, 40], 40);
함수(['ㄴㅇㄹ'], 'ㄴㄴㄴ');