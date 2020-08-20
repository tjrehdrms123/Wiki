import React from "react";
import axios from "axios";

class DepartmentList extends React.Component {
    /** 화면에 표시할 상태값 -> 초기값을 빈 배열로 정의 */
    state = {
        department: [],
    };

    /** 검색어 입력 요소에 연결할 참조 변수 */
    myKeywordInput = React.createRef();

    /** 검색 버튼에 대한 클릭 이벤트 */
    onButtonClick = (e) => {
        const current = this;

        (async () => {
            try {
                const response = await axios.get(
                    "http://itpaper.co.kr/demo/react/api/dept_list.php",
                    {
                        params: {
                            keyword: current.myKeywordInput.current.value,
                        },
                    }
                );

                console.debug("Ajax 연동 성공");
                console.debug(response.data);
                console.groupEnd();

                // 상태값에 Ajax 연동 결과 갱신
                current.setState({ department: response.data.item });
            } catch (e) {
                console.error(e);
                alert("Ajax 연동 실패");
            }
        })();
    };

    /** 페이지 열림과 동시에 실행되는 부분 */
    componentDidMount() {
        this.onButtonClick();
    }

    render() {
        return (
            <div>
                <h2>학과목록</h2>

                <form>
                    <input type="text" name="keyword" ref={this.myKeywordInput} />
                    <button type="button" onClick={this.onButtonClick}>
                        검색
                    </button>
                </form>

                <hr />

                <table border="1">
                    <thead>
                        <tr>
                            <th>학과번호</th>
                            <th>학과명</th>
                            <th>학과위치</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.department.length > 0 ? (
                            this.state.department.map((item, index) => {
                                return (
                                    <tr key={item.deptno}>
                                        <td>{item.deptno}</td>
                                        <td>{item.dname}</td>
                                        <td>{item.loc}</td>
                                    </tr>
                                );
                            })
                        ) : (
                            <tr>
                                <td colSpan="3" align="center">
                                    검색결과가 없습니다.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default DepartmentList;
