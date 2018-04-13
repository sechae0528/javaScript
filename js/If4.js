function ageNumber() {
    var age = prompt("당신의 나이는?");
    age = Number(age);

    //입력받은 age 변수에 대한 성인여부 판단
    if (age < 20) {
        alert("미성년자입니다.");
    }
    else if(age >= 20) {
        alert("성인입니다.");
    } else 
        alert("다시 입력해주세요.");
    
}