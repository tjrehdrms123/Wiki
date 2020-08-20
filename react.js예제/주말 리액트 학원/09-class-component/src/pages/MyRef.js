import React from 'react';

import MyRefSub1 from '../components/MyRefSub1';
import MyRefSub2 from '../components/MyRefSub2';

/**
 * React에서 document.getElementById(...)에 해당하는 기능을 사용하는 방법
 */
class MyRef extends React.Component {
    render() {
        return (
            <div>
                <h2>MyRef</h2>

                <MyRefSub1 />
                <MyRefSub2 />
            </div>
        );
    }
}

export default MyRef;