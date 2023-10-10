"use strict"
const app = require("../app");

//서버 포트
const port = 3000;

app.listen(port, () =>{
    console.log("서버 가동");
});