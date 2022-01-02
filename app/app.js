// 모듈 
const express = require('express');
const ejs = require('ejs');
const app = express();

app.set('views', __dirname + '/src/views'); // 경로명 . 등 유의
app.set('view engine', 'ejs');
app.engine('html', ejs.renderFile);

const home = require("./src/routes/home"); // 
app.use(express.static(`${__dirname}/src/public`));
app.use("/", home);

// listen  모듈로 분리 
module.exports = app; 