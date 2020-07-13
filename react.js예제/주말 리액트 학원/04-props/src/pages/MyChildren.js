import React from 'react';

import MyChildrenSub from '../components/MyChildrenSub';

const MyChildren = () => {
    return (
        <div>
            <h2>MyChildren</h2>

            {/* props 전달시 문자열 이외의 데이터타입은 중괄호로 묶어야 함 */}
            <MyChildrenSub width={400} height={100}><b>Hello World</b></MyChildrenSub>

            <MyChildrenSub width={300} height={80}>안녕 React</MyChildrenSub>

            <MyChildrenSub width={200} height={50} />
        </div>
    );
};

export default MyChildren;