const express = require("express");
const { login } = require("../controllers/authController");
const { fmsData } = require("../controllers/fmsdata");
const router = express.Router();

router.post("/login", login); // 로그인 라우트는 POST가 맞습니다.
router.get("/fms-data", fmsData); // 데이터를 조회하기 위한 라우트는 GET으로 변경

module.exports = router;
