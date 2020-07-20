import React from "react";

// route 기능을 위한 패키지에서 Route 함수와 Link 함수, Switch함수만 골라서 참조
import { Route, Link, Switch } from "react-router-dom";

import Home from './pages/Home';
import About from './pages/About';
import Main from './pages/Main';
import DepartmentGet from './pages/DepartmentGet';
import DepartmentPath from './pages/DepartmentPath';
import Error404 from './pages/Error404';

const App = () => {
    return (
        <div>
            <h1>Hello World</h1>
            {/* ------- 페이지로 링크 적용 ------- */}
            <Link to="/">[Home]</Link>
            <Link to="/about">[About(1)]</Link>
            <Link to="/introduce">[About(2)]</Link>
            <Link to="/main">[Main(SubRoute)]</Link>
            {/* HTTP GET 파라미터를 포함하는 링크 구성 (한글사용X) */}
            <Link to="/department_get?deptno=101&msg=hello">[컴퓨터공학과]</Link>
            <Link to="/department_get?deptno=102&msg=world">[멀티미디어학과]</Link>
            {/* PATH 파라미터를 포함하는 링크 구성 */}
            <Link to="/department_path/201/hello">[전자공학과]</Link>
            <Link to="/department_path/202/world">[기계공학과]</Link>    
            <hr />

            {/* ------- 페이지로 사용될 컴포넌트들 명시하기 ------- */}
            <Switch>
                {/* 첫 페이지로 사용되는 컴포넌트의 경우 exact={true}를 명시해야 한다. */}
                {/* 첫 페이지로 사용되는 컴포넌트는 path에 "/"를 권장 */}
                <Route path="/" component={Home} exact={true}  />
                {/* 한 페이지에 두 개 이상의 URL을 적용할 경우 배열 형식으로 처리함 */}
                <Route path={["/about", "/introduce"]} component={About} />
                {/* 서브라우팅 사용 */}
                <Route path='/main' component={Main} />
                {/* GET 파라미터 사용 */}
                <Route path="/department_get" component={DepartmentGet} />
                {/* Path 파라미터는 URL 형식에 변수의 위치와 이름을 정해줘야 한다. */}
                <Route path='/department_path/:deptno/:msg' component={DepartmentPath} />

                {/* path 속성 없이 Route 지정 -> 지정되지 않은 모든 요청에 반응. 단 switch블록의 맨 마지막에 배치해야 함 */}
                <Route component={Error404} />
            </Switch>
        </div>
    );
};

export default App;
