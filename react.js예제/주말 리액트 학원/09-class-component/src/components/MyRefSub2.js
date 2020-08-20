import React from "react";

class MyRefSub2 extends React.Component {
    render() {
        return (
            <div>
                <h3>MyRefSub2</h3>

                {/* 미리 준비한 컴포넌트 참조변수와 HTML 태그를 연결 */}
                <div>
                    <label htmlFor="dname">학과명</label>
                    <input type="text" id="dname" ref={ref => this.myDname = ref} />
                </div>

                <div>
                    <label htmlFor="dname">학과위치</label>
                    <input type="text" id="loc" ref={ref => this.myLoc = ref} />
                </div>

                <h3>
                    입력값: <span ref={ref => this.myResult = ref}></span>
                </h3>

                <button
                    onClick={(e) => {
                        // 컴포넌트 참조변수를 사용해서 다른 HTML 태그에 접근 가능
                        // --> "참조변수 자체"가 해당 HTML을 의미하는 Javascript DOM 객체
                        console.log(this.myDname);
                        console.log(this.myLoc);

                        const dname = this.myDname.value;
                        const loc = this.myLoc.value;

                        this.myResult.innerHTML = dname + ", " + loc;
                    }}
                >
                    클릭
                </button>
            </div>
        );
    }
}

export default MyRefSub2;
