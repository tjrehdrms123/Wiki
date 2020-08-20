import React from 'react';

import MyStateSub1 from '../components/MyStateSub1';
import MyStateSub2 from '../components/MyStateSub2';

class MyState extends React.Component {
    /** 화면에 렌러링할 JSX 내용을 리턴하는 함수 */
    render() {
        return (
            <div>
                <h2>MyState</h2>
                <MyStateSub1 />
                <MyStateSub2 />
            </div>
        );
    }
}

export default MyState;
