const express = require('express');
const router = express.Router();
// app 대신 Router사용

const ctrl = require('./home.ctrl');

// ctrl로 모듈화 
router.get('/', ctrl.output.world);
router.get('/login', ctrl.output.login);
router.post('/login', ctrl.process.login);

module.exports = router;