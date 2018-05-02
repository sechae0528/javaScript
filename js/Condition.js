// JavaScript source code
function conditionDf() {
    // 나이 입력
    var number = prompt("나이를 입력하세요", "");
    number = Number(number);

    // 조건문
    if (number < 20) {
        alert("성인이 아닙니다");
    } else if ((number >= 20) &&
               (number < 60)) {
        alert("중년입니다");
    } else {
        alert("노인입니다");
    } 
}