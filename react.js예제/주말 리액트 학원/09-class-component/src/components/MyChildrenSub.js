import React from 'react';

import PropTypes from 'prop-types';

class MyChildrenSub extends React.Component {
    // 속성들에 대한 타입 정의
    static propTypes = {
        width: PropTypes.number.isRequired,
        height: PropTypes.number.isRequired,
        children: PropTypes.string
    };

    // 속성들에 대한 기본값을 JSON으로 정의 (객체이름 고정)
    static defaultProps = {
        width: 300,
        height: 100,
        children: '내용이 없습니다.'
    };

    // inline css를 정의하기 위한 getter 함수
    get myStyle() {
        // props에 포함되어 있는 넓이, 높이값을 비구조 문법으로 추출
        const { width, height } = this.props;

        // 부모로부터 전달받은 props에 포함된 값으로 width, height 결정
        return {
            width: width + 'px',
            height: height + 'px',
            border: '5px solid #d5d5d5',
            padding: '20px',
            margin: '10px',
            backgroundColor: '#eeeeee'
        };
    }

    /** 화면에 렌러링할 JSX 내용을 리턴하는 함수 */
    render() {
        return (
            <div>
                <h3>MyChildrenSub</h3>

                <p style={this.myStyle}>{this.props.children}</p>
            </div>
        );
    }
}

export default MyChildrenSub;
