// JavaScript source code
function defineNumber() {
    var number = prompt("?�자�??�력?�세??, "");
    number = Number(number)
    switch (number % 2) {
        case 0:
            alert("짝수?�니??);
            break;
        case 1:
            alert("?�?�입?�다");
            break;
        default:
            alert("?�자가 ?�닙?�다");
            break
    }
}
function getNameOfDay() {

    var week = new Array('??, '??, '??, '??, '�?, '�?, '??);
    var today = new Date();
    var year = today.getFullYear();
    var month = today.getMonth() + 1;
    var day = today.getDate();
    var nameIndex = today.getDay();
    var dayName = week[nameIndex];

    switch (nameIndex) {
        case 0:
            today = "?�요??;
            break;
        case 1:
            today = "?�요??;
            break;
        case 2:
            today = "?�요??;
            break;
        case 3:
            today = "?�요??;
            break;
        case 4:
            today = "목요??;
            break;
        case 5:
            today = "금요??;
            break;
        case 6:
            today = "?�요??;
            break;
    }
    alert(today)
}

function conditionDf() {
    //?�용?�로부???�력??받아 변?�에 ?�??
    var number1 = prompt('?�자1???�력?�세??, '');
    var number2 = prompt('?�자2�??�력?�세??, '');

    //?�력받�? 문자?�을 ?�자�?변?�하???�선??
    number1 = Number(number1);
    number2 = Number(number2);

    //조건�?
    if (number1 > number2) {
        //�?번째 ?�력받�? ?��? ??번째 ?�력받�? ?�보???????�행
        alert(number1 + ' >' + number2);
    } else if (number1 == number2) {
        //�?번째 ?�력받�? ?��? ??번째 ?�력받�? ?��? 같을 ???�행
        //if??조건??결과가 false?????�행 
        alert(number1 + ' = ' + number2);
    } else {
        //�?번째 ?�력받�? ?��? ??번째 ?�력받�? ?�보???�을 ???�행
        //if?� ele if??조건??결과가 false?????�행 
        alert(number1 + ' < ' + number2);
    }
 }
