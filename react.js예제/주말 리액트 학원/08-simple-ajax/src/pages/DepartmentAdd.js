import React from 'react';
import axios from 'axios';

const DepartmentAdd = ({ history }) => {
    const onDepartmentSave = (e) => {
        e.preventDefault();
        const dname = e.currentTarget.dname.value;
        const loc = e.currentTarget.loc.value;
        console.log('학과명: %s, 위치: %s', dname, loc);

        (async function () {
            try {
                const form = new FormData();
                form.append("dname", dname);
                form.append("loc", loc);

                const response = await axios.post('http://itpaper.co.kr/demo/react/api/dept_write.php', form);

                console.debug('Ajax 연동 성공');
                console.debug(response.data);
                console.groupEnd();

                // 목록페이지로 이동
                history.push('/department_list');
            } catch (e) {
                console.error('Ajax 연동 실패');
                console.error(e);
                alert('데이터 저장에 실패했습니다.');
            }
        })();
    };

    return (
        <div>
            <h2>학과추가</h2>

            <form onSubmit={onDepartmentSave}>
                <div>
                    <label htmlFor='dname'>학과명</label>
                    <input type='text' name='dname' id='dname' />
                </div>

                <div>
                    <label htmlFor='loc'>학과위치</label>
                    <input type='text' name='loc' id='loc' />
                </div>

                <button>저장하기</button>
            </form>
        </div>
    );
};

export default DepartmentAdd;
