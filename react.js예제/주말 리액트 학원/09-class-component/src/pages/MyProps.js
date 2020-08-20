import React from 'react';

import MyPropsSub from '../components/MyPropsSub';

class MyProps extends React.Component {
    /** 화면에 렌러링할 JSX 내용을 리턴하는 함수 */
    render() {
        return (
            <div>
                <h2>MyProps</h2>

                {/* 컴포넌트에게 props 전달하기 */}
                <MyPropsSub />
                <MyPropsSub name='민호' age='19' />
                <MyPropsSub name='수영' age='21' />
            </div>
        );
    }
}

export default MyProps;
