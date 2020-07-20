import React from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';

import InlineCss from './pages/InlineCss';
import CssClass from './pages/CssClass';
import CssModule from './pages/CssModule';
import Scss from './pages/Scss';
import ScssModule from './pages/ScssModule';
import StyledComponent from './pages/StyledComponent';

const App = () => {
    // 활성 링크에 적용할 InlineCSS 정의
    // --> CSS는 JS 속성으로 기술해야 함.
    // --> 전체 구조는 JSON객체.
    const myStyle = {
        fontWeight: 'bold',
        color: '#b82514',
        textDecoration: 'none'
    };

    return (
        <div>
            <h1>04-stylesheet</h1>

            {/* Link 구성 */}
            <NavLink activeStyle={myStyle} to='/inline_css'>[InlineCss]</NavLink>
            <NavLink activeStyle={myStyle} to='/css_class'>[CssClass]</NavLink>
            <NavLink activeStyle={myStyle} to='/css_module'>[CssModule]</NavLink>
            <NavLink activeStyle={myStyle} to='/scss'>[Scss]</NavLink>
            <NavLink activeStyle={myStyle} to='/scss_module'>[ScssModule]</NavLink>
            <NavLink activeStyle={myStyle} to='/styled_component'>[StyledComponent]</NavLink>
            <hr />

            <Switch>
                <Route path="/inline_css" component={InlineCss} />
                <Route path="/css_class" component={CssClass} />
                <Route path="/css_module" component={CssModule} />
                <Route path="/scss" component={Scss} />
                <Route path="/scss_module" component={ScssModule} />
                <Route path="/styled_component" component={StyledComponent} />
            </Switch>
        </div>
    );
};

export default App;
