var http = require('http');

//웹 서버 객체를 만듭니다
var server = http.createServer();
var port = 3000;
server.listen(port, function(){
   console.log('웹 서버가 실행되었습니다.' , port );
});

// 클라이언트 요청 이벤트 처리
// req : 사용자의 요청 , res : 서버의 응답

server.on('request',function(req , res){
    var result = function(a,b){
        return a+b;
    }
    res.setHeader('Content-Type','text/html;charset=utf-8');
    var html = `<div>1+1처리 하겠습니다</div>
    <br>
    <div>1+1의 결과는 ${result(1,1)}</div>`
    res.write(html);
});

server.on('close',function(){
   console.log('서버가 종료되었습니다.'); 
});