import React from 'react';

import MyPropTypesSub from '../components/MyPropTypesSub';

class MyPropTypes extends React.Component {
    /** 화면에 렌러링할 JSX 내용을 리턴하는 함수 */
    render() {
        return (
            <div>
                <h2>MyPropTypes</h2>

                <MyPropTypesSub name='민호' age={19} hobby='사진찍기' />
                <MyPropTypesSub name='수영' age='스물한살' hobby='영화보기' />
                <MyPropTypesSub name='철민' age={22} />
            </div>
        );
    }
}

export default MyPropTypes;
