import React from 'react';
import { Link, withRouter } from 'react-router-dom';

// props에 전달되는 location, history 객체는 
// 이 js 컴포넌트가 <Switch><Route ...></Switch>에 명시된 경우만 사용할 수 있다.
// 하지만 export시에 withRouter()함수로 가공하면 
// Route를 거치지 않더라도 props에 location 객체가 전달된다.
const MyNavLink = (props) => {
    // 현재 웹 브라우저에 표시되고 있는 URL이 to 속성에 지정된 값과 일치하는지 여부를 boolean값으로 저장
    const isActive = (props.location.pathname === props.to);
    const exact = (props.exact === true);

    // 기본 class 이름
    let classes = props.className;

    // isActive가 true인 경우 activeClassName 병합
    if (isActive) {
        classes += " " + props.activeClassName;
    }

    return (
        <li className={classes}>
            <Link to={props.to} exact={exact}>{props.children}</Link>
        </li>
    );
};

MyNavLink.defaultProps = {
    className: '',
    exact: false,
    to: '#',
    children: ''
};

export default withRouter(MyNavLink);
