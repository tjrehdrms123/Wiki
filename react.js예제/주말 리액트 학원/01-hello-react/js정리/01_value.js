/*---------------------------------------------------------
 * 01_value.js
 * 변수
 *---------------------------------------------------------*/

/** [ES5] 변수 -------------------------------- */
// 특별히 선언하지 않고 변수 사용 가능.
name = "Hello World";
console.log(name);                              // >>> Hello World

// 선언한다면 var 키워드 사용
var age = 19;
console.log(age);                               // >>> 19

// 중복선언 가능함.
var age = 20;
console.log(age);                               // >>> 20

// if나 for 안에서 선언된 변수를 밖에서 식별 가능.
if (true) {
    var foo = 1234;
}

console.log(foo);                               // >>> 1234

// 선언을 나중에 해도 에러 발생하지는 않는다.
// --> 값이 할당되지 않은 변수를 출력하므로 undefined가 실행됨.
console.log(bar);                               // >>> undefined
var bar = 1;



/** [ES6] 변수 ------------------------------------ */
// let 키워드를 사용하면 일반적인 프로그래밍 언어의 변수규칙을 따름
// 1) 중복선언 X
// 2) 변수를 사용하기 위해서는 반드시 선언이 먼저 이루어져야 한다.
// 3) if, for 등의 블록 안에서 생성된 변수는 블록 밖으로 나오지 못함.
let userName = "js학생";
//let userName = "...";
console.log(userName);                               // >>> js학생

if (true) {
    let nickName = "123";
}

//console.log(nickName);


/** [ES6] 상수 ------------------------------------- */
// 읽기 전용 변수를 생성함.
// --> 선언과 동시에 최초 1회만 값을 할당하고 내용을 수정할 수 없는 변수
// --> 상수
const URL = "http://www.naver.com";

// 배열이나 객체가 상수로 정의되더라도 원소는 변경할 수 있다.
const data = {a: 123, b: 234};
console.log(data);

data.a = 100;
data.b = 200;
console.log(data);


/** [ES6] 비구조 문법 -------------------------------- */
// 배열의 원소들을 개별 변수에 분할하여 할당하기
const arr = [1, 2, 3];
const [a, b, c] = arr;
console.log(a);
console.log(b);
console.log(c);

// JSON 객체의 원소들을 개별 변수에 분할하여 할당하기
const json = {first: "hello", second: "world", third: "react"};
// 원하는 원소만 개별 변수로 추출.
// 단, json객체의 key와 변수 이름이 동일해야 함
const {first, second} = json;
console.log(first);
console.log(second);


/** [ES5] 얕은 복사, 깊은 복사 -------------------------------- */
const origin = {"a": 100, "b": 200};

// 객체나 배열간의 대입은 복사가 아닌 참조 ==> 얕은복사
const copy1 = origin;
console.log("origin=%s", origin);
console.log("copy1=%s", copy1);

// 얕은 복사의 경우 원본이나 복사본이 변경되면 반대쪽도 함께 변경된다.
origin.a++;
copy1.b++;
console.log("origin=%s", origin);
console.log("copy1=%s", copy1);

// 실질적인 복사를 위해서는 원소를 하나하나 개별적으로 복사해야 한다. ==> 깊은복사
const copy2 = {"a": null, "b": null};
copy2.a = origin.a;
copy2.b = origin.b;
console.log("origin=%s", origin);
console.log("copy2=%s", copy2);

// 깊은복사는 서로의 변경사항에 대한 영향을 받지 않는다.
origin.a++;
copy2.b++;
console.log("origin=%s", origin);
console.log("copy2=%s", copy2);


/** [ES6] 깊은 복사 -------------------------------- */
const copy3 = {...origin, b: 300};
console.log("origin=%s", origin);
console.log("copy3=%s", copy3);

origin.a++;
copy3.b++;
console.log("origin=%s", origin);
console.log("copy3=%s", copy3);