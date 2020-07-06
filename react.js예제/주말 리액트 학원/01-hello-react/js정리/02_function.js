/*---------------------------------------------------------
 * 02_function.js
 * 함수 정의 문법
 *---------------------------------------------------------*/

/** [ES5] 일반 함수 정의 -------------------------- */
function foo(a, b) {
    var c = a + b;
    return c;
}

// %d 정수,실수, %s 문자열,배열,객체, %o 객체형
console.log("foo ==> %d", foo(10, 20));


/** [ES5] 익명 함수 정의 -------------------------- */
// JS에서 function은 object 타입의 변수. --> 다른 변수에 대입 가능
var bar = foo;

// 함수가 대입된 변수는 그 자체가 함수 역할을 함
console.log("bar ==> %d", bar(10, 20));

// 익명함수 타입
var noname = function(a, b) {
    var c = a + b;
    return c;
};

console.log("noname ==> %d", noname(10, 20));


/** [ES5] 콜백 함수 ------------------------------ */
// 파라미터로 전달되는 함수 --> 콜백함수
// useCallback 함수에서 a와 b를 어떤식으로든 연산을 수행하고 그 결과를 리턴하고자 할 때 -
// 수행해야 할 연산이 매번 달라져야 한다면 그 부분을 함수로 전달받는다.
function useCallback(a, b, something) {
    const result = something(a, b);
    return result;
}

console.log("useCallback ==> %d", useCallback(100, 200, foo));

// 미리 정의한 함수를 전달하는 것이 아닌,
// 호출 과정에서 함수 정의를 함께 처리할 수 있다. --> 익명함수 활용
console.log("useCallback ==> %d", useCallback(100, 200, function(a, b) {
    var c = a * b;
    return c;
}));


/** [ES5] 클로저 ------------------------------ */
// 함수를 리턴하는 형태
// 어떤 함수에 파라미터를 전달해서 결과값이 아닌 결과를 만들기 위한 규칙을 반환받는 경우
function getCloser(k) {
    function plus(a, b) {
        return a + b;
    }

    function minus(a, b) {
        return a - b;
    }

    if (k === "+") {
        return plus;
    } else {
        return minus;
    }
}

const a = getCloser("+");
console.log("a ==> %d", a(10, 20));

const b = getCloser("-");
console.log("b ==> %d", b(10, 20));


/** [ES5] 불필요한 파라미터 생략 -------------------- */
function foobar(x, y) {
    console.log("x=%s, y=%s", x, y);

    // undefined값은 연산을 수행할 수 없으므로, 파라미터를 검사 후 처리해야 함
    var result = 0;
    if (x != undefined) { result += x; }
    if (y != undefined) { result += y; }
    console.log(" >> result=%d", result);
}

foobar(100, 200);   // var x=100,y=200
foobar(1000);       // var x=1000,y=undefined
foobar();           // var x=undefined,y=undefined

/** [ES5] 파라미터 생략 기본값 정의 -------------------- */
// 값이 전달되지 않을 경우를 대비하여 뒤에서부터 하나씩 기본값을 설정할 수 있음.
function helloworld(x=1, y=2) {
    console.log("x=%s, y=%s", x, y);
    var result = x + y;
    console.log(" >> result=%d", result);
}

helloworld(100, 200);   // var x=100,y=200
helloworld(1000);       // var x=1000,y=2
helloworld();           // var x=1,y=2





/** [ES5] JSON객체를 파라미터로 받는 함수 ----------------- */
const json = {first: "hello", second: "world", third: "react"};

// json을 파라미터로 받아서 first와 third만 활용하는 함수
function setJson1(obj) {
    console.log(obj.first);
    console.log(obj.third);
}

setJson1(json);


/** [ES6] 비구조 문법을 활용한 함수 파라미터 --------------- */
// 파라미터에 비구조 문법을 적용하여 선언한다.
function setJson2({first, third}) {
    console.log(first);
    console.log(third);
}

setJson2(json);




/** [ES6] 화살표 함수 -------------------------- */
// 익명함수의 변형
const arrow1 = function(a, b) {
    var c = a + b;
    return c;
};
console.log("[ES6] arrow1 ==> %d", arrow1(1, 2));

// function 키워드가 제거되고 ()와 {} 사이에 화살표를 표기
const arrow2 = (a, b) => {
    var c = a + b;
    return c;
};
console.log("[ES6] arrow2 ==> %d", arrow2(10, 20));

// 파라미터가 하나뿐이라면 ()는 생략 가능하지만,
// 파라미터가 없거나 두 개 이상인 경우는 () 생략 불가
const arrow3 = a => {
    return a + 100;
};
console.log("[ES6] arrow3 ==> %d", arrow3(100));

// 함수 안에 포함된 구문이 리턴을 목적으로 하는 한 줄로 된 구문이라면
// {}와 return 키워드를 생략 가능
const arrow4 = a => a + 100;
console.log("[ES6] arrow4 ==> %d", arrow4(100));



/** [ES6] 화살표 함수 활용 (1) ---------------------- */
// 콜백함수로서 사용하기
setTimeout(() => {
    console.log("3초후에 출력되는 메시지 >> Hello Javascript");
}, 3000);



/** [ES6] 화살표 함수 활용 (2) ---------------------- */
// JSON 객체에서 메서드로 활용
const user = {
    name: null,
    // setName: function(value) {
    //     this.name = value;
    // },
    // getName: function() {
    //     return this.name;
    // }
    setName: value => { this.name = value; },
    getName: () => this.name
};

user.setName("helloworld");
console.log("name: %s", user.getName());


/** jQuery에 접목할 경우 주의사항 */
// -> 아래 코드는 node로 실행할 경우 `$`가 정의되지 않았다는 에러가 발생함.
$("#btn").click(function(e) {
    e.preventDefault();
    $(this).html("Hello World");
});

$("#btn").click( e => {
    e.preventDefault();
    // this 객체에 대한 접근 방법이 변경됨.
    $(e.currentTarget).html("Hello World");
});