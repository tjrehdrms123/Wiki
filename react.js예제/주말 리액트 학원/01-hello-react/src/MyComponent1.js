// react 기본 패키지 참조 (필수)
import React from 'react';

// 하위 컴포넌트 참조 --> 정의한 이름을 HTML태그처럼 사용.
import MySubComponent from './MySubComponent';

/**
 * 함수형 컴포넌트 정의
 * - 함수 이름은 혼선을 방지하기 위해 소스파일 이름과 동일하게 구성하는 것이 일반적.
 */
function MyComponent1() {
    // 리턴은 항상 HTML구조를 의미하는 JSX 문법이어야 하고,
    // JSX 구조는 무조건 단 하나의 태그요소만 반환해야 함.
    // --> 복잡한 구조는 부모 요소 하나에 모두 포함되어야 한다는 의미
    return (
        <div>
            <h2>안녕하세요 리액트</h2>
            <p>리액트 컴포넌트 구조 연습입니다.</p>
            
            <MySubComponent />
        </div>
    );
}

// 이 소스파일에서 정의하는 기능을 -
// 이 파일을 import 하는 다른 파일에서 참조할 수 있도록 내보낸다.
export default MyComponent1;
