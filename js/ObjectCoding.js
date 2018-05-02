// JavaScript source code
function objectUsage() {
    var car = {
        name: "var1",

        run: function (how) {
            alert(this.name + " is running " + how)
        }

    };

    car.run("very fast")
}

function arrayObjectInit() {
    var arr = [];

    for (var i = 0; i < 4; i++) {
        arr[i] = i + 1;
    }

    for (var j = 0; j < arr.length; j++) {
        alert(arr[j]);
    }
}

function forInKeywordUsage() {

    var flight = {
        airline: "korea",
        number: 777,
        arrival: {
            city:"seoul"
        }
    }
    for (var air in flight) {
        alert(flight[air]);
    }
}

function inKeywordUsage() {

    var car = {
        name: "car1",
        model: 400,
        color: "black",

        company: {
            start: 1997,
            logo:'star'
        },

        run: function () {
            alert(this.name + "is running");
        }
    }

    alert("name" in car);
    alert("company" in car);
    alert("run" in car);
    alert("test" in car);
}

function objectAddRemoveUsage() {
    var flight = {};
    flight.airline = "Korea";
    flight.number = 777;
    flight.arrival = "Seoul";

    flight.printAirline = function () {
        alert("The flight is airline : " + this.airline);
    }
    flight.printNumber = function () {
        alert("The flight is number : " + this.number);
    }

    var out = "";
    for (var i in flight) {
        out += i + ":\t" + flight[i] + "\n";
    }

    // 
    alert(out);
    flight.printAirline();
    flight.printNumber();

    delete (flight.printAirline);
    var out2 = ""
    for (var j in flight) {
        out2 += j + ":\t" + flight[j] + "\n";
    }

    alert(out2);
}

function objectDynamicAllocate() {

    var car = {
        name: "car1",
        model: 400,
        color: "black",
        run: function () {
            alert(this.name + "   is running");
        }
    }

    var student = {
        name: "홍길동"
    }

    // student run 에 car run 동적 할당함
    student.run = car.run;

    car.run();
    student.run();
}

function objectUsageExample() {

    function Make(name, korean, english, math, history) {
        var student = {
            name: name,
            korean: korean,
            english: english,
            math: math,
            history: history,
            getSum: function () {
                return this.korean + this.english + this.math + this.history;
            },
            getAverage: function () {
                return this.getSum() / 4;
            }
        }
        return student;
    }

    var students = [];

    // 생성자를 통해 students 객체 push
    students.push(new Make("홍길동1", 91, 92, 93, 94));
    students.push(new Make("홍길동2", 92, 92, 93, 94));
    students.push(new Make("홍길동3", 93, 92, 93, 94));
    students.push(new Make("홍길동4", 94, 92, 93, 94));
    students.push(new Make("홍길동5", 95, 92, 93, 94));

    alert("ok");

    // students 객체 print 하기
    var out = "";
    for (var j in students) {
        with (students[j]) {
            out += name + "총점:" + getSum() + "평균" + getAverage() + "\n";
        }
    }
    alert(out);

}

function objectConstructorUsageExample() {

    function Make(name, korean, english, math, history) {
        this.name = name;
        this.korean = korean;
        this.english = english;
        this.math = math;
        this.history = history;
    }

    function Func() {
        object = this;
    }

    var student = new Make("홍길동", 96, 95, 93, 92);
    var object2 = new Func;

    alert(student instanceof Make);
    alert(object2 instanceof Func);
    alert(object2 instanceof Make);
    alert(student instanceof Func);

}