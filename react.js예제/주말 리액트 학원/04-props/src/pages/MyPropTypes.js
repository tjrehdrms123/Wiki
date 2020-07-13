import React from 'react';

import MyPropTypesSub from '../components/MyPropTypesSub';

const MyPropTypes = () => {
    return (
        <div>
            <h2>MyPropTypes</h2>

            {/* 문자열이 아닌 형식은 {}로 감싸야 한다. */}
            <MyPropTypesSub name='민호' age={19} hobby="사진찍기" />
            <MyPropTypesSub name='수영' age='스물한살' hobby="영화보기" />
            <MyPropTypesSub name='철민' age={22} />
        </div>
    );
};

export default MyPropTypes;
