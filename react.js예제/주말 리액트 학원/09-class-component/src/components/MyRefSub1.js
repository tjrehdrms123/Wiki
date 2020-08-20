import React from "react";

class MyRefSub1 extends React.Component {
    // React.createRef() 함수를 통해 참조변수를 생성
    // 함수형 컴포넌트에서는 React.useRef() 함수를 사용했었다.
    // 이렇게 생성된 참조변수는 render() 함수 안에서 this를 통해 접근할 수 있다.
    myDname = React.createRef();
    myLoc = React.createRef();
    myResult = React.createRef();

    render() {
        return (
            <div>
                <h3>MyRefSub1</h3>

                {/* 미리 준비한 컴포넌트 참조변수와 HTML 태그를 연결 */}
                <div>
                    <label htmlFor="dname">학과명</label>
                    <input type="text" ref={this.myDname} id="dname" />
                </div>

                <div>
                    <label htmlFor="dname">학과위치</label>
                    <input type="text" ref={this.myLoc} id="loc" />
                </div>

                <h3>
                    입력값: <span ref={this.myResult}></span>
                </h3>

                <button
                    onClick={(e) => {
                        // 컴포넌트 참조변수를 사용해서 다른 HTML 태그에 접근 가능
                        // --> "참조변수.current" 해당 HTML을 의미하는 Javascript DOM 객체
                        console.log(this.myDname);
                        console.log(this.myLoc);

                        const dname = this.myDname.current.value;
                        const loc = this.myLoc.current.value;

                        this.myResult.current.innerHTML = dname + ", " + loc;
                    }}
                >
                    클릭
                </button>
            </div>
        );
    }
}

export default MyRefSub1;
