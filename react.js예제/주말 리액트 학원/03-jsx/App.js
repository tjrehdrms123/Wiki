import React from 'react';

// route 기능을 위한 패키지에서 Route 함수와 Link 함수, Switch함수만 골라서 참조
import { Route, Link, Switch } from "react-router-dom";

/** 각 예제별 컴포넌트 import */
import Expr from './pages/Expr';
import If1 from './pages/If1';
import If2 from './pages/If2';
import If3 from './pages/If3';
import If4 from './pages/If4';
import Loop1 from './pages/Loop1';
import Loop2 from './pages/Loop2';
import Loop3 from './pages/Loop3';

/**
 * 프로그램 메인
 */
//function App() {
const App = () => {
    return (
        <div>
            <h1>03-jsx</h1>
            {/* Link 구성 */}
            <Link to="/expr">[Expr]</Link>
            <Link to="/if1">[If1]</Link>
            <Link to="/if2">[If2]</Link>
            <Link to="/if3">[If3]</Link>
            <Link to="/if4">[If4]</Link>
            <Link to="/loop1">[Loop1]</Link>
            <Link to="/loop2">[Loop2]</Link>
            <Link to="/loop3">[Loop3]</Link>
            <hr />

            {/* 각 예제 페이지 Route 적용 */}
            <Switch>
                <Route path="/expr" component={Expr} />
                <Route path="/if1" component={If1} />
                <Route path="/if2" component={If2} />
                <Route path="/if3" component={If3} />
                <Route path="/if4" component={If4} />
                <Route path="/loop1" component={Loop1} />
                <Route path="/loop2" component={Loop2} />
                <Route path="/loop3" component={Loop3} />
            </Switch>
        </div>
    );
}

export default App;
