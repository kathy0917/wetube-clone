const express = require("express"); //express를 불러옴
const { response } = require("express");
const app = express(); // express를 실행

const PORT = 4000;

function handleListening() {
  console.log(`Listening on: http://localhost:${PORT}`);
}

function handleHome(req, res) {
  //console.log(req);
  res.send("Hello from home");
}

//main url로 접근시
app.get("/", handleHome);
//listening하기 시작할 때 handleListening호출
app.listen(PORT, handleListening);
