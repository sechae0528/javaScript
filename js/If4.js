function ageNumber() {
    var age = prompt("����� ���̴�?");
    age = Number(age);

    //�Է¹��� age ������ ���� ���ο��� �Ǵ�
    if (age < 20) {
        alert("�̼������Դϴ�.");
    }
    else if(age >= 20) {
        alert("�����Դϴ�.");
    } else 
        alert("�ٽ� �Է����ּ���.");
    
}