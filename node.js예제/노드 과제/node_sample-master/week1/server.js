let http = require('http');
// 함수를 외부에서 import
let parseParam = require('./parseParam');
let createHtml = require('./html');

const server = http.createServer();

const port = 3000;
const host = '127.0.0.1';


// 서버 생성 후 유저의 응답을 받을 준비 (listen)
server.listen(port, host);

// 유저와 연결되었을 때
server.on('connection', ()=>{
    console.log('connect');
})

// 실제 request시에 호출되는 함수
const requestEvent = (req, res) => 
{
    // 사용자와 연결하는 네트워크 방식 PROTOCOL - HTTP  
    res.setHeader('Content-Type', 'text/html;charset=utf-8');

    // 객체를 받을 때 변수명을 그대로 사용할 것이라면 이렇게 받는 것도 가능하다. 
    const {param, requestURL} = parseParam(req);

    const html = createHtml(requestURL, param);

    res.write(html);

}

// 서버가 응답을 받았을 때
server.on('request', requestEvent);