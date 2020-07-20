import React from 'react';

import { Route, NavLink, Switch } from 'react-router-dom';

import Meta from './components/Meta';
import Top from './components/Top';

import Page1 from './pages/Page1';
import Page2 from './pages/Page2';

const App = () => {
    return (
        <div style={{paddingTop: '50px'}}>
            <Meta />
            <Top />

            <Switch>
                <Route path="/page1" component={Page1} />
                <Route path="/page2" component={Page2} />
            </Switch>
        </div>
    );
};

export default App;
