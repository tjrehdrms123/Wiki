import React from 'react';

/**
 * Path 파라미터를 전달받는 페이지.
 * 
 * @param {*} props 컴포넌트에게 전달되는 부가정보
 */
const DepartmentPath = (props) => {
    /** 요청 데이터 확인하기 */
    console.group("DepartmentPath");

    // path 파라미터는 props의 match.params객체로 내장되어있다.
    const urlParams = props.match.params;
    console.debug(urlParams);
    console.debug('---------');
    console.debug(urlParams);
    // 필요한 변수값과 타입 확인
    console.debug('요청된 학과번호 값=%s (%s)', urlParams.deptno, typeof urlParams.deptno);
    console.debug('요청된 메시지 내용=%s (%s)', urlParams.msg, typeof urlParams.msg);
    console.groupEnd();

    /** 한 페이지에서 GET파라미터에 따라 다르게 표현할 데이터 준비 */
    // --> 실전에서는 이 값에 해당하는 JSON을 백엔드로부터 받아와야 한다. ==> Ajax
    const departmentList = {
        item: [
            { deptno: 201, dname: '전자공학과', loc: '3호관' },
            { deptno: 202, dname: '기계공학과', loc: '4호관' }
        ]
    };

    /** 전달된 파라미터에 따라 화면에 출력할 내용 조회하기 */
    // 미리 준비된 JSON 객체에서 요청정보(urlParams.deptno)와 동일한 deptno값을 갖는 객체를 조회
    const deptno = parseInt(urlParams.deptno);

    // 조회결과가 저장될 객체
    let departmentItem = null;

    // 미리 준비한 JSON에서 deptno값이 일치하는 정보를 조회
    departmentList.item.some((item, index) => {
        if (item.deptno === deptno) {
            departmentItem = item;
            return true;
        }
        return false;
    });

    /** 조회 결과가 없는 경우 */
    if (!departmentItem) {
        return (<h2>존재하지 않는 데이터에 대한 요청입니다.</h2>);
    }

    /** 정상 화면 출력 */
    return (
        <div>
            <h2>{departmentItem.dname}</h2>
            <ul>
                <li>학과번호: {departmentItem.deptno}</li>
                <li>학과위치: {departmentItem.loc}</li>
            </ul>
        </div>
    );
};

export default DepartmentPath;