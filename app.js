// 모듈 
const express = require('express');
const ejs = require('ejs');
const app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', ejs.renderFile);

const home = require("./routes/home");
app.use("/", home);

// listen  모듈로 분리 
module.exports = app; 