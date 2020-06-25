// 모듈 , 변수 생성 //
var http = require('http');
var url = require('url');
var queryString = require('querystring');
var server = http.createServer();
var port = 3000;

// 기능 분리 //
var webStart = function(){ // 웹서버 시작
	return console.log('웹서버 시작'); 
};

var webStop = function(){ // 웹서버 종료
	return console.log('웹서버 중지'); 
};

// 웹서버 생성 //
var createWeb = function(req,res){
	requestURL = url.parse(req.url).query; // var 제거 전역 변수로 선언 > 아래 HTML 분리 부분에서 requestURL사용
    res.setHeader('Content-Type','text/html;charset=utf-8');
    res.write(webHtml() );
}

// HTML 분리 //
var webHtml  = function(){	
	var param = queryString.parse(requestURL , '&'); //&로 구분하여 객체로 만듬
	var html = ``;
	 if(requestURL != null){
        html = `<div>UserName :  ${param.username}</div>
                <br>
                <div>PhoneNumber : ${param.phonenumber}</div>
                <script>console.log('콘솔 출력');</script>`;    
		 return html;
    }else{        
        html = `<form action="/input">
                    <label for="username">회원이름</label>
                    <input type="text" name="username" id="username"></input>
                    <lable for="phonenumber">핸드폰번호</label>
                    <input type="text" name="phonenumber" id="phonenumber"></input>
                    <input type="submit" value="요청보내기">
                    <script>console.log('콘솔 출력');</script>
                </form>`;    
		return html;
    }
}

// 실행문 //
server.listen(port,webStart);

server.on('request',createWeb);

server.on('close',webStop);
