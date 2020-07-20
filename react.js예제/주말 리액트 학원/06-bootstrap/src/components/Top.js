import React from 'react';

import MyNavLink from './MyNavLink';

/* bootstrap 메뉴바, 색상반전, 상단 고정 */
const Top = () => {
    return (
        <nav className='navbar navbar-inverse navbar-fixed-top'>
            {/* 메뉴 안에서의 컨텐츠 영역 넓이 조정 */}
            <div className='container'>
                {/* 로고 + 모바일 메뉴 버튼 */}
                <div className='navbar-header'>
                    <button type='button' className='navbar-toggle collapsed' data-toggle='collapse' data-target='#navbar-collapse'>
                        <span className='sr-only'>Toggle navigation</span>
                        <span className='icon-bar'></span>
                        <span className='icon-bar'></span>
                        <span className='icon-bar'></span>
                    </button>
                    <a className='navbar-brand' href='/'>
                        Hello React
                    </a>
                </div>

                {/* 메뉴 영역 */}
                <div className='collapse navbar-collapse' id='navbar-collapse'>
                    {/* 메뉴 항목들 */}
                    <ul className='nav navbar-nav'>
                        <MyNavLink to="/page1" exact={true} activeClassName='active'>페이지1</MyNavLink>
                        <MyNavLink to="/page2" activeClassName='active'>페이지2</MyNavLink>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Top;
