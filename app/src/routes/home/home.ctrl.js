'use strict';
// 모듈화된 ctrl 
const world = (req, res)=>{
    res.render("home/index");
}
const login = (req, res)=>{
    res.render("home/login");
}

module.exports = {  world,  login }