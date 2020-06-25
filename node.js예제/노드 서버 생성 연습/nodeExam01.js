var http = require('http');

var server = http.createServer();
var port = 3000;

// 웹 서버를 실행하여서 localhost:3000에서 대기하도록 지정
// 백로그(동시에 접속 연결수 , 동시접속할수있는 인원)
server.listen(port,function(){
	console.log('웹서버 실행');
});

server.on('request',function(req,res){
	res.setHeader('Content-Type','text/html;charest=utf-8');
	var html = `Hello World~`;
	res.write(html);
});

server.on('connection',function(socket){
	console.log(socket.address().port);
});

server.on('close',function(){
	console.log('연결 종료');
});