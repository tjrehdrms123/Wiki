/* 
 제목 : 생성자 함수로 객체 찍어내기
 var 객체이름 = new 생성자함수('인자');
 
 new 없이 computerClass를 실행하면 ?
    computerClass는 일반함수로서 실행,
    this는 전역객체에 바인딩
*/

function computerClass(name , professor ,classno){
    this.name = name;
    this.professor = professor;
    this.classno = classno;
    this.printInfo = function(){
        console.log(`안녕하세요 저의 이름은 ${this.name}입니다. 저의 듣고있는 강의는 ${this.classno}입니다. 교수님은 ${this.professor}입니다.`);
    }
}
var class1 = new computerClass('석동근','이동희 교수님','쉽게 배우는 노드JS');
class1.printInfo();

/*
  제목 : this의 모든것
  bind : 호출한 실제대상에게 연결 , 올바른 객체에 올바른 메소드를 연결하는 행위
  browser : window객체
  server side : global객체 
  
  중요 : 내부함수의 this는 무조권 전역객체의 바인딩된다 그걸해결해주는 메소드 : bind , call , apply
*/

// 일반함수에서 this 호출 : 전역객체를 가리킨다
var name = '석동근';
console.log(window.name);

var sayHello = function(){
    var name = '김영민';
    console.log(this.name);
}

sayHello();

// 객체의 메서드에서 사용된 this : 그 메서드를 호출한 객체로 바인딩

var myObj = {
    name : 'dongGeun',
    sayName : function(){
        console.log(this.name);
    }
}

var otherObj = {
    name : 'youngMin'
}

otherObj.sayName = myObj.sayName; // 이 부분에서 myObj에있는 sayName을 otherObj에도 추가
myObj.sayName();
otherObj.sayName();

// 생성자 함수에서의 this : 그 생성자 함수를 통해 생성되어 반환되는 객체에 바인딩

var person = function(name){
    this.name = name;
} 
var boy = new person('민철이');
console.log(boy.name);

var girl = new person('희경이');
console.log(girl.name);

/* 
  제목 : 화살표 함수 > 이름X (익명함수)
  사용법 : (매개변수) => { 함수본문 , 리턴값 }
  만약 매개변수가 하나라면 소괄호 생략가능
  만약 본문이 한 줄이라면 중괄호도 생략가능
    만약 중괄호가 생략되었다면 return은 암묵적으로 이루어짐 
*/

const sumAdd = (num1,num2) => num1 + num2;
console.log(sumAdd(10,29));

/* 
    제목 : 배열을 순회하는 두 가지 방법
    forEach : 배열명.forEach(함수로 정의한 순회하면서 할 일);
    map : 배열명.map(함수로 정의한 순회하면서 할 일); > 새로운 배열을 반환받을수있음
*/

const pepleList = ['동근','민수','영진','희경','재민','도희','지희'];
pepleList.forEach(name => console.log(`우리반 아이들은 ${name}가 있어.`));

const pepleNumber = [36,43,37,46,29]
let numList = pepleNumber.map((num) => num*2);
console.log(numList);

/* 
    제목 : 필터링 하기 
    filter : 배열명.filter(함수로 정의한 순회하면서 할 일);
*/

const postList = [{'date' : 'yesterday','id' : '1'},{'date' : 'yesterday','id' : '2'},{'date' : 'today','id' : '1'}];

const postFiler = postList.filter( post => post.date === 'yesterday');
console.log(postFiler);


/* 
    제목 : 구조분해할당으로 똑똑하게 값 빼내기
*/

const song = { autor : '비' , date : '2020-09-15' , title : '깡' , body : '화려한 조명이 나를 감싸네'}
// const {autor , date , title , body} = song;
const {autor : songname , date : songday , title : songjemok , body : songlist} = song; // 다른이름으로 가져오기

console.log(songname,songday,songjemok,songlist);


const popSong = {
    title : 'ali',
    date : '2020-02-05',
    body : {
        list : 'say my name',
        number : '82'
    }
}

const {title : popTitle , date : popDay , body : {list : popList}} = popSong;
console.log(popTitle,popDay,popList);

/* 
    제목 : Spread , Destructuring
    Spread : 객체나 배열의 내부나  함수를 호출하는 인자에서 사용 > 이거 받고 이거 추가
    rest : 객체나 배열을 받아오는 변수나 (값을 받아오는) 함수 파라미터에서 주로쓰임
*/

const student = {
    name : '석동근',
    hackbun : '18'
}

const univStudent = {
    ...student,            // 이거 받고
    major : '컴퓨터 공학과' // 이거 추가
}

const koeraUnivStudent = {
    ...univStudent,
    region : 'koera'
}

console.log(koeraUnivStudent);

// rest
const oneNumber = [1,3,6,7];
const twoNumber = [5,9,11,15];

const allNumber = [...oneNumber , ...twoNumber];
function sum(...rest){
    console.log(rest);  
}

const result = sum(...allNumber);

const {region , ...restName} = koeraUnivStudent; // region을 제외한 값 가져오기
console.log(restName);

/* 
    제목 : class
    사용 방법 : class 클래스명 {
        초기화 부분 : 변수( constructor )
        메서드 부분 : 동작
    }
    
    상속할때 자식만의 상태를 갖고 싶다면 (자식 클래스의 constructor에서 this 키워드를 사용하고시다면)
    반드시 부모클래스의 생성자 (super)가 먼저 호출되어야 한다
    
*/

class myPerson{
    constructor(name){
        this.name = name;
    }
    myName(){
        console.log(`안녕 나는 ${this.name}이야`);
    }
}

// 인스턴스

const dong = new myPerson('동근');
const minsu = new myPerson('민수');

console.log(dong.myName());
console.log(minsu.myName());

// 상속 myPerson을 상속시키기
// Student가 상속한 Person의 constructor 속 name을 인스턴스가 만들어질 때 받아온 name값으로 초기화해줄거야

class sayMyName extends myPerson {
    //constructor
    constructor(name , school , major){
        super(name); // 부모클래스의 name 속성을 이것으로 초기화 해주세요 , 부모클래스를 초기화해주기 위해 호출
        this.school = school;
        this.major = major;
    }
    //method
    getMajor(){
        console.log(`안녕 나는 ${this.name}이야 ${this.school}다니고 ${this.major}를 듣고있어.`);
    }
}

const helloName = new sayMyName('동근','서울아이티고등학교','웹프로그래밍강의');
helloName.getMajor();

/* 
    제목 : 예외처리하기
*/

try {
    console.log('try에 있는 문장');
    throw "에러 발생";
}
catch(e){
    console.log('catch에 있는 문장');
    console.log(e.name);
    console.log(e.message);    
}
finally{
    console.log('finally에 있는 문장');
}

/* 
    제목 : Promise Async Await
    사용 방법 : async functionName(...){
        const result = awit sayName()
    }
*/

function sayHello(name){
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            console.log(`내 이름은 ${name} 이야`);
            resolve(`${name}`);
        }, 2000);
    })
}

async function foo(name){
    const resultName = await sayHello(name);
    console.log('2초 뒤 실행될 코드');
}

foo("민철");