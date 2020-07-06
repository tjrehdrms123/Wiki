/*---------------------------------------------------------
 * 03_array.js
 * 배열 객체가 제공하는 함수
 *---------------------------------------------------------*/

// 테스트를 위한 배열
const data = [10, 20, 30, 40, 50];

/**
 * 배열에 대한 반복 처리(1) - 배열의 원소 스캔하기
 */
for (let i=0; i<data.length; i++) {
    if (i == 3) {
        break;
    }
    console.log("%d번째 원소 ==> %d", i, data[i]);
}

console.log("---------------");

data.forEach((v, i) => {
    // for문은 반복을 중단하고자 할 경우 break를 사용한다.
    // forEach의 콜백함수에서 반복을 중단하고자 return을 사용할 경우 현재 동작중인 콜백만 종료될 뿐 전체 반복에는 영향이 없다.
    if (i == 3) {
        return true;
    }
    console.log("%d번째 원소 ==> %d", i, v);
});

console.log("---------------");


/**
 * 배열에 대한 반복 처리(2) - 순환 중단
 */
 data.some((v, i) => {
    // some 함수는 콜백함수가 true를 리턴하는 순간 순환을 중단한다.
    if (i == 3) {
        return true;
    }
    console.log("%d번째 원소 ==> %d", i, v);
});

console.log("---------------");


/**
 * 배열에 대한 반복 처리(3) - 콜백함수에서 리턴하는 값들을 하나의 배열로 묶기
 */
// 전통적인 방법
const d1 = [];
for (let i=0; i<data.length; i++) {
    d1.push(data[i] + 1);
}
console.log(d1);


// foreach를 사용하는 방법
const d2 = [];
data.forEach((v, i) => {
    d2.push(v + 1);
});    
console.log(d2);

// map함수에 전달된 콜백이 리턴하는 값들을 하나의 배열로 묶어서 hello에 저장
const hello = data.map( function(v, i) {
    return v + 1;
});
 
// -> Array(5) [20, 30, 40, 50, 60]
console.log(hello);
