"use strict"

// 모듈
const express = require('express');
const app = express();

//서버 포트
const port = 3000;

//라우팅
const home = require("./routes/home")

//앱 세팅 view 화면 import
app.set("views", "./views");
app.set("view engine", "ejs");

//미들웨어 등록 메서드
app.use("/", home);

module.exports = app;