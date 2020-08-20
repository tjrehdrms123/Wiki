import React from 'react';
import styled from 'styled-components';
import { Route, NavLink, Switch } from 'react-router-dom';

import MyProps from './pages/MyProps';
import MyPropTypes from './pages/MyPropTypes';
import MyChildren from './pages/MyChildren';
import MyState from './pages/MyState';
import MyRef from './pages/MyRef';
import MyLifeCycle from './pages/MyLifeCycle';
import DepartmentList from './pages/DepartmentList';
import DepartmentAdd from './pages/DepartmentAdd';

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

/** 클래스 기반의 컴포넌트 */
// 항상 'React.Component'를 상속받아야 한다.
// 초기화 단축키 : rcc
class App extends React.Component {
    /**
     * 화면에 렌러링할 JSX 내용을 리턴하는 함수
     * --> 클래스형 컴포넌트는 render() 메서드를 반드시 포함해야 한다.
     */
    render() {
        return (<div>
            <h1>09-class-component</h1>

            <MenuLink to="/myprops">[MyProps]</MenuLink>
            <MenuLink to="/myproptypes">[MyPropTypes]</MenuLink>
            <MenuLink to="/mychildren">[MyChildren]</MenuLink>
            <MenuLink to="/mystate">[MyState]</MenuLink>
            <MenuLink to="/myref">[MyRef]</MenuLink>
            <MenuLink to="/mylifecycle">[MyLifeCycle]</MenuLink>
            <MenuLink to="/department_list">[DepartmentList]</MenuLink>
            <MenuLink to="/department_add">[DepartmentAdd]</MenuLink>

            <hr />

            <Switch>
                <Route path="/myprops" component={MyProps} />
                <Route path="/myproptypes" component={MyPropTypes} />
                <Route path="/mychildren" component={MyChildren} />
                <Route path="/mystate" component={MyState} />
                <Route path="/myref" component={MyRef} />
                <Route path="/mylifecycle" component={MyLifeCycle} />
                <Route path="/department_list" component={DepartmentList} />
                <Route path="/department_add" component={DepartmentAdd} />
            </Switch>

        </div>)
    }
}

export default App;