var queryString = require('querystring');
var url = require('url');

// 쿼리스트링을 파싱해서 리턴해주는 함수
const parseParam = (req) =>
{
    const requestURL = url.parse(req.url).query;
    const param = queryString.parse(requestURL, '&'); 

    // 리턴시에 param:param, requestURL:requestURL은 문법상으로 생략 가능하다.
    return {param, requestURL};
}


module.exports = parseParam;