import React from 'react';

import sea from '../assets/img/sea.jpg';

class MyLifeCycle extends React.Component {
    /**
     * [Mount] (1) 컴포넌트 생성자
     * 컴포넌트가 생성될 때 최초 1회만 실행된다.
     * 이 메서드의 용도는 초기 state값을 결정하는 것이다.
     * > 이벤트 핸들러를 bind 해야 한다는 불편함 때문에 잘 사용되지 않는다.
     */
    constructor(props) {
        super(props);
        console.log('[Mount] (1) 컴포넌트 생성자');
        
        /** update 상태를 확인하기 위한 state 값 생성 */
        this.state = {
            myBirghtness: 100,
            myWidth: window.innerWidth,
        };
    }

    /** 사용자 정의 함수. */
    // 이 함수는 웹 브라우저의 onResize이벤트와 연결될 것이므로,
    // 컴포넌트가 화면에 최초로 등장할 때 이벤트가 정의되어야 한다.
    onMyResize = () => {
        this.setState({
            ...this.state, 
            myWidth: window.innerWidth
        });
    };

    /**
     * [Mount] (2) 최초 마운트 시와 갱신 시 모두에서 render() 메서드를 호출하기 직전에 호출된다.
     * state를 갱신하기 위한 객체를 반환하거나, null을 반환하여 아무 것도 갱신하지 않을 수 있다.
     * 이 메서드는 시간이 흐름에 따라 변하는 props에 state가 의존하는 아주 드문 사용례를 위하여 존재한다.
     * ==> 화면 갱신 여부를 결정한다.
     * 코드가 장황해지고, 이로 인하여 컴포넌트를 이해하기 어려워지므로 보다 간단한 다른 대안들에 익숙해지는 것을 권장한다.
     */
    static getDerivedStateFromProps(props, state) {
        console.log('[Mount] (2) getDerivedStateFromProps 실행되었습니다.');
        return state;
    }

    /**
     * [Mount] (3) 렌더링(=화면출력) 함수
     * 라이프사이클 메서드 중 유일한 필수 메서드
     * 이 메서드 안에서 this.props나 this.state에 접근할 수 있으며,
     * 리액트 요소(HTML태그,다른 컴포넌트)를 반환한다.
     * 
     * 이 메서드 안에서는 이벤트 핸들러가 아닌 곳에서 setState()를 사용 하면 안되며
     * 브라우저의 DOM(document.getElementById(...))에 직접 접근해서도 안된다.
     * 
     * DOM 정보를 가져오거나 state에 변화를 줄 때는 componentDidMount()에서 처리해야 한다.
     */
    render() {
        return (
            <div>
                <h2>MyLifeCycle</h2>

                <h3>Window Width: {this.state.myWidth}</h3>

                <div>
                    <input
                        type='range'
                        min='0'
                        max='200'
                        step='1'
                        value={this.state.myBirghtness}
                        onChange={(e) => {
                            console.debug(this.state)
                            this.setState({
                                ...this.state,
                                // 모든 input요소의 value는 string 타입이므로,
                                // 숫자 형식으로 사용해야 할 경우 형변환 필요함.
                                myBirghtness: parseInt(e.currentTarget.value)
                            })
                        }}
                    />
                </div>

                <img
                    alt='Hello React'
                    src={sea}
                    width='480'
                    style={{
                        filter: 'brightness(' + this.state.myBirghtness + '%)',
                    }}
                />
            </div>
        );
    }

    /**
     * [Mount] (4) render() 함수에 의해 브라우저에게 DOM이 표시된 직후 호출된다.
     * jQuery등의 기타 외부 라이브러리로 DOM을 제어하고자 할 경우 이 위치에서 구현해야 한다.
     * setTimeout, setInterval, Ajax 요청 같은 작업도 이 함수 안에서 구현한다.
     * 그 외에 웹 브라우저에 적용되는 이벤트 정의도 이 함수 안에서 처리해야 한다.
     * <body>태그의 onload 이벤트 개념으로 이해하자.
     */
    componentDidMount() {
        console.log('[Mount] (4) componentDitMount가 실행되었습니다.');
        window.addEventListener('resize', this.onMyResize);
    }

    /** [Unmound] 컴포넌트가 화면에서 제거될 때 호출. componentDidMount의 반대 */
    componentWillUnmount() {
        console.log('[Unmount] componentWillUnmount가 실행되었습니다.');
        window.removeEventListener('resize', this.onMyResize);
    }

    /**
     * [Update] (2) 컴포넌트의 상태가 변경되어 화면이 갱신되기 직전에 호출된다.
     * 컴포넌트의 상태가 변경 ==> props값이나 state값이 변경된 경우를 의미.
     *                            this.setState()가 호출된 후를 말한다.
     * 즉, update 상태에서 render() 함수가 실행되기 직전에 호출된다.
     * 이 함수에서 true를 리턴하면 render()가 실행되고, false를 리턴하면 render()를 실행하지 않는다.
     *  --> setState()를 통해 상태 값이 변경되었을 경우
     *      이 함수에서 state값의 변경 내역을 화면에 반영할지를 결정하는 역할
     *
     * -- update가 발생하는 경우 --
     * 1) props값이 새롭게 전달된 경우 : getDerivedStateFromProps -> shouldComponentUpdate -> render
     * 
     * 2) setState()가 호출된 경우 : shouldComponentUpdate -> render
     * 
     * 3) forceUpdate()가 호출되어 화면이 강제로 갱신되는 경우 : render
     */
    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Update] (2) shouldComponentUpdate 실행되었습니다.');
        // nextState는 this.state에서 변경될 값을 의미한다.
        console.log(" >> 원본state=%d, nextState=%d", this.state.myBirghtness, nextState.myBirghtness);

        // 밝기가 3의 배수인 경우만 화면을 갱신하도록(render()가 실행되도록) 제어
        return nextState.myBirghtness % 3 === 0;
    }

    /** [Update] (3) 컴포넌트 변화를 DOM에 반영하기 바로 직전(render실행 직후)에 호출된다. (거의 사용 안함) */
    // -> getDerivedStateFromProps에 대응된다.
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Unmount] (3) getSnapshotBeforeUpdate 실행되었습니다.');
        return prevState;
    }
    
    /** [Update] (4) 컴포넌트의 업데이트 작업이 끝난 후(render실행 후) 호출된다. */
    componentDidUpdate(prevProps, prevState) {
        console.log('[Unmount] (4) componentDidUpdate 실행되었습니다.');
    }
}

export default MyLifeCycle;


/**
 * [정리]
 * 
 * 클래스 기반 컴포넌트에서 필수적으로 사용해야 하는 메서드
 * 
 * 1) 화면 출력
 *          render()
 * 
 * 2) 화면이 최초로 등장할 때에 대한 프로그램 기능 구현
 *          componentDidMount()
 *          -> React.useEffect(function() {}, [])
 * 
 * 3) 화면이 종료될 때에 대한 프로그램 기능 구현
 *          componentWillUnmount()
 *          -> React.useEffect(function() { return function() {} })
 * 
 * 4) 사용자의 조작에 의해 props나 state가 변경된 후에 대한 프로그램 구현
 *          componentDidUpdate()
 *          -> React.useEffect(function() {})
 *          -> React.useEffect(function() {}, [props나 state값 이름 지정])
 */