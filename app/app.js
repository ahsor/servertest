// 모듈 
const express = require('express');
const bodyparser = require('body-parser');  // bodyparser 
const ejs = require('ejs');
const app = express();

app.set('views', __dirname + '/src/views'); // 경로명 . 등 유의
app.set('view engine', 'ejs');
app.engine('html', ejs.renderFile);


const home = require("./src/routes/home"); // 
const bodyParser = require('body-parser');
app.use(express.static(`${__dirname}/src/public`));
// public 경로를 정적 경로로 사용하겠다. 
// login.ejs와 login.js를 연결할 준비 

// bodyparser 미들웨어 등록 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
// URL을 통해서 전달 받은 데이터에 특수문자가 포함되어도 인식하도록 설정 

app.use("/", home);

// listen  모듈로 분리 
module.exports = app; 

