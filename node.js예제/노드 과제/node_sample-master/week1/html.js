// 응답시 queryString 동적으로 출력
const createAnswerHtml = (param) =>
{
    
    let html = '';
    for(key in param)
    {
        html += `<h1>${key} : ${param[key]}</h1>`;
    }
    return html;
}


// 나중에 동적으로 변환할거면 수정
const createQuestHtml = () => 
{
    let html = ``;
    
    // 로직이 생기면 추가
    html = `<form action="/input">
    
    <label for='username'>회원이름</label><input type="text" name="username" id="username"/>
    <label for='phonenum'>전화번호</label><input type="text" name="phonenum" id="phonenum"/>
    <input type="submit" value="요청보내기"/>
    </form>`;
    
    return html;
}

// 얘만 사용한다면 나머지까지 자동으로 실행 됨
const createHtml = (requestURL, param) =>
{
    if(requestURL != null)
    {
        html = createAnswerHtml(param);
    }else{
        html = createQuestHtml();
    }
    return html;
}


module.exports = createHtml;