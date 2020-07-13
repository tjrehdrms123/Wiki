import React from 'react';

/**
 * jsx 반복 처리 (1) - 함수를 통한 반복문 활용
 */
const Loop1 = () => {
    /** 목록정의 태그를 구성하기 위한 사용자 정의 함수 */
    const createListItems = (count) => {
        // <li>...</li> 단위를 저장할 배열
        let li = [];

        // 주어진 count 수 만큼 반복
        for (let i = 0; i < count; i++) {
            li.push(<li>Item {i}</li>);
        }

        return li;
    };

    return (
        <div>
            <h2>Loop1</h2>
            <ul>{createListItems(5)}</ul>
        </div>
    );
};

export default Loop1;
