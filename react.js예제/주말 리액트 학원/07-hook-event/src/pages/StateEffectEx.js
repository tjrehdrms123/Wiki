import React from 'react';

import $ from 'jquery';

const StateEffectEx = () => {

    /** 화면에 표시할 상태값 -> 초기값을 빈 배열로 정의 */
    const [department, setDepartment] = React.useState([]);

    /** 이 컴포넌트가 화면에 막 등장함과 동시에 1회 실행됨  */
    // 보통 Ajax의 결과가 저장될 변수를 지정한다.
    React.useEffect( () => {
        $.get('http://itpaper.co.kr/demo/react/api/dept_list.php', {}, json => {
            console.log(json);
            setDepartment(json.item);
        });
    }, []);

    const onTrClick = e => {
        const current = $(e.currentTarget);
        current.css('background-color', '#ff0');
        $('tr').not(current).css('background-color', '#fff');
    };

    return (
        <div>
            <h2>StateEffectEx</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>학과번호</th>
                        <th>학과명</th>
                        <th>학과위치</th>
                    </tr>
                </thead>
                <tbody>
                    {department.map((item, index) => {
                        return (
                            <tr key={item.deptno} onClick={onTrClick}>
                                <td>{item.deptno}</td>
                                <td>{item.dname}</td>
                                <td>{item.loc}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default StateEffectEx;