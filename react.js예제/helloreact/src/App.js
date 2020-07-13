import React, { Component } from 'react';
import Subject from './component/subject';
// import Nav from './component/nav';
import Footer from './component/footer';
// import './App.css';

// React > Component 상속해서 새로운 App Class를 생성
// ES6부터 Class안의 함수는 function 키워드 생략가능
// class 안에 render함수는 화살표 함수로 사용 가능한가요?
// 컴포넌트를 분리했을때 페이지를 나눠서 모듈처럼 나눠서 작업해야되나요?
// -> 아니면 한페이지에 컴포넌트를 만드나요?

/* class Subject extends Component{
  render(){
    return(
      <header>
        <h1>{this.props.title}</h1>
        {this.props.subTitle}
      </header>
    )
  }
} */
 class Name extends Component{
   
   render(){
     return(
      <from>
        <label>
          Korea Name : <input type="text" name="name" />
        </label>
        <button>Click Me !</button>
        <br />
        <br />        
          English Name : <input type="text" name="name" />
        <button>Click Me !</button>
      </from>
     )
   }
 }

 class Nav extends Component{
  render(){
    return(
      <nav>
        <ul>
          <li><a href="01test.js">리액트 연습 하기</a></li>
          <li><a href="02test.js">리액트 구조 연습</a></li>
          <li><a href="03test.js">리액트 컴포넌트 연습</a></li>          
        </ul>
      </nav>
    )
  }
} 

/* class Footer extends Component {
  render(){
    return(
      <div>
        <p>{this.props.footer}</p>
        <h1>{this.props.subFooter}</h1>
      </div>
    );
  }
} */

function computerClass( name , classNumber , today){
  this.name = name;
  this.classNumber = classNumber;
  this.today = today;
  this.showMy = function(){
    console.log(`안녕하세요 저의 이름은 ${name} 입니다. 저가 듣고 있는 수업은 ${classNumber}입니다. ${today}부터 수강할 계획입니다.`);
  }
}
let myName = new computerClass('석동근','리액트','월요일');
myName.showMy();

class limeClass{
  constructor(number , nickName){
    this.number = number;
    this.nickName = nickName;
  }
  lime(){
    console.log(`출석번호 : ${this.number}번 / 이름 : ${this.nickName}입니다.`);
  }
}

let showLime = new limeClass(1,'석동근');
showLime.lime();


class App extends Component {
  constructor(props){ 
    super(props);   // props를 초기화해주는 부분
    this.state = {  // 내부적 : state 
      subject:{title:'React',subTitle:'Component start !'},
      contents: [
        {id : 1 , title : '리액트 연습 하기' , desc : 'react happy!'},
        {id : 2 , title : '리액트 구조 연습 하기' , desc : 'react no happy!'},
        {id : 3 , title : '리액트 컴포넌트 연습 하기' , desc : 'react sad!'},
      ]
    }
  }   

  render(){
    const limeFriends = 'Lime Friends';
    const style = {
      backgroundColor: 'black',
      color: 'aqua',
      fontSize: 24, // 기본 단위 px
      padding: '1rem' // 다른 단위 사용 시 문자열로 설정
    }
    return (
      <div className="App">
        <div style={style}>{limeFriends}</div>
        <Subject 
          title={this.state.subject.title} 
          subTitle={this.state.subject.subTitle}></Subject>
        <Subject title="Node" subTitle="Npm start !"></Subject>
        <Nav></Nav>         
        <Name></Name>
        <Footer date={this.state.contents}></Footer>       
      </div>
    )
  }
}

export default App;
