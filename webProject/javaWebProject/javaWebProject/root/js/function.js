function add() {
    
    var output = '';
    var sum = 0;

    for (var i = 0; i < arguments.length; i++) {
        output += arguments[i] + ' ';
        sum += arguments[i];
    }
    output = '입력된 매개변수' + output + '을 더한 값은\n' + sum + '입니다.';
    return output;
  
}
//가변인자 함수
function parameter() {
    var out = '';
    var length = arguments.length;
    if (length == 0) {
        out += 'Zero';
    } else if (length == 1) {
        out += 'One';
    } else {
        out += 'Else';
    }
    return out;
}
//내부함수
function outerFunction() {
    var a = 10;
    var b = 20;

    function innerFunction() {
        var b = 30;

        alert(a);
        alert(b);
    }

    innerFunction();
    alert('outerFunction');
}

//자기호출함수
(function (name) {
    alert('입력받은 자기호출함수의 이름은 \n' + name);
})('self-invoking');

//콜백함수
function check(message) {
    var i = 0;
    var sum = 0;

    while (1) {
        i++;
        sum += i;
        if (sum > 20) {
            message();
            break;
        }
    }
}


