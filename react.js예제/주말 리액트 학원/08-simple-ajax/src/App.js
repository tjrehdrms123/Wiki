import React from 'react';

import styled from 'styled-components';
import { Route, NavLink, Switch } from 'react-router-dom';

import DepartmentAdd from './pages/DepartmentAdd';
import DepartmentList from './pages/DepartmentList';

/** 메뉴링크 --> 07-hook-event 예제의 App.js 파일의 내용과 동일 */
const MenuLink = styled(NavLink)`
    font-size: 20px;
    cursor: pointer;
    text-decoration: none;
    padding-bottom: 2px;
    color: #222;

    &:hover {
        color: #22b8cf;
    }

    &:after {
        content: '|';
        display: inline-block;
        padding: 0 7px;
        color: #ccc;
    }

    &:last-child {
        &:after {
            color: #fff;
        }
    }

    &.active {
        text-decoration: underline;
        color: #22b8cf;
        &:after {
            border-bottom: 4px solid #fff !important;
        }
    }
`;

const App = () => {
    return (
        <div>
            <h1>08-Simple-Ajax</h1>

            <nav>
                <MenuLink to='/department_list'>학과목록</MenuLink>
                <MenuLink to='/department_add'>학과추가</MenuLink>
            </nav>

            <hr />

            <Switch>
                <Route path={['/department_list', '/']} exact={true} component={DepartmentList} />
                <Route path='/department_add' component={DepartmentAdd} />
            </Switch>
        </div>
    );
};

export default App;
