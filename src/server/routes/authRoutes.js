const express = require('express');
const { login } = require('../controllers/authController');
const router = express.Router();

router.post('/login', login); // GET 요청을 처리하기 위한 라우트

module.exports = router;
