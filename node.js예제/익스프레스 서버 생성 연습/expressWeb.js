var express = require('express')
var http = require('http');

// 익스프레스 객체 생성
var app = express();

// 기본포트 설정
app.set('port', process.env.PORT || 3000);

// 익스프레스 서버 시작
http.createServer(app).listen(app.get('port'), function(){
	console.log('익스프레스 웹 서버 시작')
});