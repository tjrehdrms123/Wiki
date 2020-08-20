import React from 'react';

import MyChildrenSub from '../components/MyChildrenSub';

class MyChildren extends React.Component {
    /** 화면에 렌러링할 JSX 내용을 리턴하는 함수 */
    render() {
        return (
            <div>
                <h2>MyChildren</h2>

                {/* props 전달시 문자열 이외의 데이터 타입은 중괄호로 묶어야 함 */}
                <MyChildrenSub width={400} height={100}>Hello World</MyChildrenSub>
                <MyChildrenSub width={300} height={80}>안녕 React</MyChildrenSub>
                <MyChildrenSub width={200} height={50} />
            </div>
        );
    }
}

export default MyChildren;
