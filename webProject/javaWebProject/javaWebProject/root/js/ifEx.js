function ageNumber() {
    var age = prompt("당신의 나이는?","");
    age = Number(age);

    if (age < 20) {
        alert("미성년자입니다.");
    } else if (age >= 20) {
        alert("성년입니다.");
    } else
        alert("다시 입력해주세요.");
}



function Number() {
    //사용자로부터 입력받은 문자열을 변수 number에 저장 
    var number = prompt('숫자를 입력하세요', '');
    //입력받은 문자열을 Number()를 이용하여 자료형 숫자로 변환하여 재선언
    number = Number(number);

    //number를 2로 나누었을 때 나머지가 0인 경우 true
    if (number % 2 == 0) {
        alert('짝수입니다.');
    }

    //number를 2로 나누었을 때 나머지가 1인 경우 true
    if (number % 2 == 1) {
        alert('홀수입니다.');
    }
}