import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';

import MyProps from './pages/MyProps';
import MyPropTypes from './pages/MyPropTypes';
import MyChildren from './pages/MyChildren';

const App = () => {

    return (
        <div>
            <h1>05-props</h1>
            <Link to="/myprops">[MyProps]</Link>
            <Link to="/myproptypes">[MyPropTypes]</Link>
            <Link to="/mychildren">[MyChildren]</Link>

            {/* Route 처리할 컴포넌트 정의 */}
            <Switch>
                <Route path="/myprops" component={MyProps} />
                <Route path="/myproptypes" component={MyPropTypes} />
                <Route path="/mychildren" component={MyChildren} />
            </Switch>
        </div>
    );
};

export default App;
