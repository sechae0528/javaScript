// JavaScript source code
function defineNumber() {
    var number = prompt("?ซ์๋ฅ??๋ ฅ?์ธ??, "");
    number = Number(number)
    switch (number % 2) {
        case 0:
            alert("์ง์?๋??);
            break;
        case 1:
            alert("??์?๋ค");
            break;
        default:
            alert("?ซ์๊ฐ ?๋?๋ค");
            break
    }
}
function getNameOfDay() {

    var week = new Array('??, '??, '??, '??, '๋ช?, '๊ธ?, '??);
    var today = new Date();
    var year = today.getFullYear();
    var month = today.getMonth() + 1;
    var day = today.getDate();
    var nameIndex = today.getDay();
    var dayName = week[nameIndex];

    switch (nameIndex) {
        case 0:
            today = "?ผ์??;
            break;
        case 1:
            today = "?์??;
            break;
        case 2:
            today = "?์??;
            break;
        case 3:
            today = "?์??;
            break;
        case 4:
            today = "๋ชฉ์??;
            break;
        case 5:
            today = "๊ธ์??;
            break;
        case 6:
            today = "? ์??;
            break;
    }
    alert(today)
}

function conditionDf() {
    //?ฌ์ฉ?๋ก๋ถ???๋ ฅ??๋ฐ์ ๋ณ?์ ???
    var number1 = prompt('?ซ์1???๋ ฅ?์ธ??, '');
    var number2 = prompt('?ซ์2๋ฅ??๋ ฅ?์ธ??, '');

    //?๋ ฅ๋ฐ์? ๋ฌธ์?ด์ ?ซ์๋ก?๋ณ?ํ???ฌ์ ??
    number1 = Number(number1);
    number2 = Number(number2);

    //์กฐ๊ฑด๋ฌ?
    if (number1 > number2) {
        //์ฒ?๋ฒ์งธ ?๋ ฅ๋ฐ์? ?๊? ??๋ฒ์งธ ?๋ ฅ๋ฐ์? ?๋ณด???????คํ
        alert(number1 + ' >' + number2);
    } else if (number1 == number2) {
        //์ฒ?๋ฒ์งธ ?๋ ฅ๋ฐ์? ?์? ??๋ฒ์งธ ?๋ ฅ๋ฐ์? ?๊? ๊ฐ์ ???คํ
        //if??์กฐ๊ฑด??๊ฒฐ๊ณผ๊ฐ false?????คํ 
        alert(number1 + ' = ' + number2);
    } else {
        //์ฒ?๋ฒ์งธ ?๋ ฅ๋ฐ์? ?๊? ??๋ฒ์งธ ?๋ ฅ๋ฐ์? ?๋ณด???์ ???คํ
        //if? ele if??์กฐ๊ฑด??๊ฒฐ๊ณผ๊ฐ false?????คํ 
        alert(number1 + ' < ' + number2);
    }
 }
