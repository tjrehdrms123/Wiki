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
    return (
      <div className="App">
        <Subject 
          title={this.state.subject.title} 
          subTitle={this.state.subject.subTitle}></Subject>
        <Subject title="Node" subTitle="Npm start !"></Subject>
        <Nav></Nav> 
        <Footer date={this.state.contents}></Footer>
      </div>
    )
  }
}

export default App;