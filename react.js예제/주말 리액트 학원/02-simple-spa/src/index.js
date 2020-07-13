import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

/** router --> URL에 따라 실행할 js 코드를 분배하는 기능 */
// route를 사용하기 위해 react-router-dom 패키지에서 BrowserRouter함수만 골라서 import.
// --> `yarn add react-router-dom` 명령으로 패키지 설치가 필요하다.
// HTML5의 History API를 사용하여 페이지 새로고침 없이 URL을 변경하는 기능을 제공한다.
import { BrowserRouter } from 'react-router-dom';

// BrowserRouter 컴포넌트로 전체 앱(<App />)을 감싼다.
ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
