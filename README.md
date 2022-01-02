1. vs code 설치
2. node 설치
3. express 설치 npm install express --save

```app01.js 
const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    // 브라우저에서 root 경로로 요청이 들어오면 할일 
    res.send('여기는 루트경로입니다.');
    // 브라우저에서 localhost:3000
});

app.get('/login', (req, res)=>{
    // login 경로로 요청이 들어오면 할일 
    res.send('로그인 화면입니다.');
    // 브라우저에서 localhost:3000/login
});

app.listen(3000, ()=>{
    // express를 이용한 서버 띄우기 
    console.log('server start');
});
```

# http 서버 실행 

```app2.js 
const http = require('http');
// http : 별도의 프로그램 설치없이 node의 내장 모듈

// http는 콜백함수로 req, res를 받을 수 있음 
const app = http.createServer((req, res)=>{
    console.log(req.url);
    // 루트 출력 아래 콘솔창 확인 
});

app.listen(3000, ()=>{
    console.log("http server start");
    // 브라우저의 localhost:3000 하면 /를 못찾아서 계속 빙글빙글 돌고 있는 상태임 
})
```

# http 서버 한글 처리 
const http = require('http');

// http는 콜백함수로 req, res를 받을 수 있음 
const app = http.createServer((req, res)=>{
    res.writeHead( 200, { "content-Type":"text/html;charset=utf-8"});
    // 한글을 처리하기 위한 head 추가 

    if(req.url === '/'){
        res.end('경로는 루트입니다. ');
    }else if(req.url === '/login'){
        res.end('로그인 화면입니다.');
    }
});

app.listen(3000, ()=>{
    console.log("http server start");
})


# express 서버로 응답하기 
```
const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    res.send(`
        <!DOCTYPE html>
        <html lang="ko">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
            <style>

            </style>
        </head>
        <body>
           <h1> 루트 경로 입니다. </h1>
        </body>
        </html>    
    `);
});

app.get('/login', (req, res)=>{
    res.send(`
        <!DOCTYPE html>
        <html lang="ko">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
            <style>

            </style>
        </head>
        <body>
            <label>아 이 디<input type="text" id="userid"></label> <br>
            <label>비밀번호<input type="password"></label>
        </body>
        </html>    
    `);
});

app.listen(3000, ()=>{
    console.log('server start');
});
```


# view 디자인 
- 폴더 경로 확인 
login/app.js
login/views/home/index.ejs
login/views/home/login.ejs

## index.ejs
```
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>

    </style>
</head>
<body>
   <h1> 루트 경로 입니다. </h1>
</body>
</html> 
```

## login.ejs
```
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>

    </style>
</head>
<body>
    <label>아 이 디<input type="text" id="userid"></label> <br>
    <label>비밀번호<input type="password"></label>
</body>
</html>    
```

```
// app.js
- npm install ejs --save

const express = require('express');
const ejs = require('ejs');
const app = express();

app.set('views', __dirname + '/views');
// 디렉토리 패스 연결 
app.set('view engine', 'ejs');
app.engine('html', ejs.renderFile);
// ejs 랜더 연결 

app.get('/', (req, res)=>{
    res.render("home/index");
});

app.get('/login', (req, res)=>{
    res.render("home/login");
});

app.listen(3000, ()=>{
    console.log('server start');
});
```



# package.json 설명

```{
  
  "name": "login",
  "description": "npm 사이트에서 검색이 됨",
  "version": "1.0.0",
  "main": "app.js",
  "bin": {
    // 실행파일이 담기게 됨 
    "login": "bin/www.js"
  },
  "dependencies": {
    "ejs": "^3.1.6",
    "express": "^4.17.2"
    // ^ : 3. 대 버전만 설치하겠다. 
    // ~ : 3.3. 이하 변경만 허용 
    // x : 3.3.x  어떠한 버전이든 상관 없음
  },
  "devDependencies": {},
  // test도구, 바벨, 웹펙 들을 나열할 수 있음 
  "scripts": {
    "start":"node ./bin/www.js",
    // 서버 명령어 변경 
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords":["javascript","login","home"],
  "author": "kims",
  "repository":{
    "type":"git",
    "url":"..."
  }
  "license": "ISC"
  // ISC 기본설정 , 누구든 사용할 수 있는 open source
  // 보통 MIT : 가장 널리 사용, 상업적이용도 가능, 저작권 설정 필요도 없고 
}
```