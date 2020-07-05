import React, { Component } from 'react';

class Nav extends Component{
    render(){
        var lists = [];
        const data = this.props.data;
        var i = 0;
        while( i < data.length){
            lists.push(<li key={data.[i].id}><a href={"/contents/"+data[i].id}>{data[i].title}</a></li>);
/*              지금은 각각의 link를 연결하지 않은 상황이라 임시로 넣어둔 것 같습니다. 
                -> 이후 html, css, js 각각에 대한 title과 description을 담은 문서를 
                -> content라는 폴더에 생성해놓으면 그 파일로 연결되게끔이요. */
            i = i + 1;
        }
        return(
            <nav>
            <ul>
                {lists}       
            </ul>
            </nav>
        )
    }
}

  export default Nav;