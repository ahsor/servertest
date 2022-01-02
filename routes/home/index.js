const express = require('express');
const router = express.Router();
// app 대신 Router사용

const ctrl = require('./home.ctrl');

// ctrl로 모듈화 
router.get('/', ctrl.world);
router.get('/login', ctrl.login);

module.exports = router;