/**
 * 프로그램 시작점.
 * - 향후 Redux 라는 패키지를 사용하기 전까지는 특별한 작업은 안함.
 */
// 리액트의 기본을 구성하는 패키지 참조
import React from 'react';

// 리액트가 DOM을 구성하기 위한 기능을 참조
import ReactDOM from 'react-dom';

// 실제 페이지 작업시에 기본 css는 사용하지 않을 것이므로 이 라인은 삭제
// import './index.css';

// 이 소스파일과 동일한 위치의 App.js("./App")를 App이라는 이름으로 가져온다.
import App from './App';
import * as serviceWorker from './serviceWorker';

/** 컴포넌트를 페이지에 랜더링한다. */
// App.js에서 정의한 `App`이라는 이름의 컴포넌트를 HTML 태그처럼 사용한다.
// -> 첫 번째 파라미터: 사용할 컴포넌트
// -> 두 번째 파라미터: 컴포넌트를 출력할 public/index.html 페이지에 정의되어 있는 요소
//    프로그램 실행시 "http://localhost:3000/" 에 대응되는 위치가 public 폴더.
// -> <React.StrictMode> 이 적용되어 있는 경우, 선언만 하고 사용되지 않는 변수들에 대한 경고 메시지가 브라우저 콘솔에 표시된다.
//    개발용이므로 최종 빌드시에는 제거하는 것이 좋다.
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
