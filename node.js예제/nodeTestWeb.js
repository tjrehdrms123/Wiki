var http = require('http');
var url = require('url');
var queryString = require('querystring');
var server = http.createServer();
var port = 3000;

// 서버 생성

server.listen(port,function(){
   console.log('웹 서버 동작중'); 
});

server.on('request',function(req,res){
    var requestURL = url.parse(req.url).query;
    var param = queryString.parse(requestURL , '&'); //&로 구분하여 객체로 만듬
    res.setHeader('Content-Type','text/html;charset=utf-8');
    var html = ``;
    if(requestURL != null){
        html = `<div>UserName :  ${param.username}~</div>
                <br>
                <div>PhoneNumber : ${param.phonenumber}~</div>
                <script>console.log('메롱');</script>`;        
    }else{        
        html = `<form action="/input">
                    <label for="username">회원이름</label>
                    <input type="text" name="username" id="username"></input>
                    <lable for="phonenumber">핸드폰번호</label>
                    <input type="text" name="phonenumber" id="phonenumber"></input>
                    <input type="submit" value="요청보내기">
                    <script>console.log('메롱');</script>
                </form>`;
               
    }
    res.write(html);
});

server.on('close',function(){
    console.log('웹 서버 동작 중지');
})