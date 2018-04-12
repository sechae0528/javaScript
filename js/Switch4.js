// JavaScript source code
function defineNumber() {
    var number = prompt("?«ìë¥??…ë ¥?˜ì„¸??, "");
    number = Number(number)
    switch (number % 2) {
        case 0:
            alert("ì§ìˆ˜?…ë‹ˆ??);
            break;
        case 1:
            alert("?€?˜ì…?ˆë‹¤");
            break;
        default:
            alert("?«ìê°€ ?„ë‹™?ˆë‹¤");
            break
    }
}
function getNameOfDay() {

    var week = new Array('??, '??, '??, '??, 'ëª?, 'ê¸?, '??);
    var today = new Date();
    var year = today.getFullYear();
    var month = today.getMonth() + 1;
    var day = today.getDate();
    var nameIndex = today.getDay();
    var dayName = week[nameIndex];

    switch (nameIndex) {
        case 0:
            today = "?¼ìš”??;
            break;
        case 1:
            today = "?”ìš”??;
            break;
        case 2:
            today = "?”ìš”??;
            break;
        case 3:
            today = "?˜ìš”??;
            break;
        case 4:
            today = "ëª©ìš”??;
            break;
        case 5:
            today = "ê¸ˆìš”??;
            break;
        case 6:
            today = "? ìš”??;
            break;
    }
    alert(today)
}

function conditionDf() {
    //?¬ìš©?ë¡œë¶€???…ë ¥??ë°›ì•„ ë³€?˜ì— ?€??
    var number1 = prompt('?«ì1???…ë ¥?˜ì„¸??, '');
    var number2 = prompt('?«ì2ë¥??…ë ¥?˜ì„¸??, '');

    //?…ë ¥ë°›ì? ë¬¸ì?´ì„ ?«ìë¡?ë³€?˜í•˜???¬ì„ ??
    number1 = Number(number1);
    number2 = Number(number2);

    //ì¡°ê±´ë¬?
    if (number1 > number2) {
        //ì²?ë²ˆì§¸ ?…ë ¥ë°›ì? ?˜ê? ??ë²ˆì§¸ ?…ë ¥ë°›ì? ?˜ë³´???????¤í–‰
        alert(number1 + ' >' + number2);
    } else if (number1 == number2) {
        //ì²?ë²ˆì§¸ ?…ë ¥ë°›ì? ?˜ì? ??ë²ˆì§¸ ?…ë ¥ë°›ì? ?˜ê? ê°™ì„ ???¤í–‰
        //if??ì¡°ê±´??ê²°ê³¼ê°€ false?????¤í–‰ 
        alert(number1 + ' = ' + number2);
    } else {
        //ì²?ë²ˆì§¸ ?…ë ¥ë°›ì? ?˜ê? ??ë²ˆì§¸ ?…ë ¥ë°›ì? ?˜ë³´???‘ì„ ???¤í–‰
        //if?€ ele if??ì¡°ê±´??ê²°ê³¼ê°€ false?????¤í–‰ 
        alert(number1 + ' < ' + number2);
    }
 }
