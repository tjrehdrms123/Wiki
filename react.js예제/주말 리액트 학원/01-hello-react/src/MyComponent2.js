import React from 'react';

// 하위 컴포넌트 참조 --> 정의한 이름을 HTML태그처럼 사용.
import MySubComponent from './MySubComponent';

/** 함수형 컴포넌트 정의 */
function MyComponent2() {
    return (
        <div>
            <h2>Virtual DOM</h2>
            <p>This is React Component</p>
            
            <MySubComponent />
            <MySubComponent />
            <MySubComponent />
            <MySubComponent />
        </div>
    );
}

export default MyComponent2;