import React from 'react';

/**
 * 생성자를 사용하지 않는 클래스 컴포넌트.
 */
class MyStateSub2 extends React.Component {
    // 생성자가 없는 경우 state값 직접 정의
    state = {
        myName: '',
        myPoint: 50
    };

    /** 이벤트 핸들러 함수 -> 생성자가 없는 경우 반드시 화살표 함수 형태로 정의 */
    onMyNameChange = e => {
        // this.state와 동일한 구조의 JSON을 준비한다.
        const myData = {
            ...this.state,
            myName: e.currentTarget.value
        };

        // 준비한 json을 전달한다. --> json 안에 있는 값이 화면에 반영된다.
        // 함수형은 각각의 state값마다 setter 함수가 존재하지만
        // 클래스형은 setState() 함수를 통해 모든 상태값을 json 객체로 묶어 일괄 갱신한다.
        this.setState(myData);
    }

    render() {
        return (
            <div>
                <h3>MyStateSub1</h3>

                <h4>{this.state.myName}님의 점수는 {this.state.myPoint}점 입니다.</h4>
                
                <hr />

                <div>
                    <label htmlFor='myNameInput'>이름: </label>
                    <input id='myNameInput' type='text' value={this.state.myName} onChange={this.onMyNameChange} />
                </div>

                <div>
                    <label htmlFor='myPointInput'>점수: </label>
                    <input
                        id='myPointInput'
                        type='range'
                        min='0'
                        max='100'
                        value={this.state.myPoint}
                        step='1'
                        // 이벤트 핸들러를 익명 화살표 함수 형식으로 정의한 경우
                        onChange={e => {
                            // 자기 스스로의 입력값을 myPoint라는 state값에 반영함
                            this.setState({
                                ...this.state,
                                myPoint: e.currentTarget.value
                            })
                        }}
                    />
                </div>
            </div>
        );
    }
}

export default MyStateSub2;