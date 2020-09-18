import express from "express";
//윗줄이 최신문법. const express = require("express"); //express를 불러옴
//babel이 es6문법을 과거 버전으로 변형해줌.

/* dependencies는 프로젝트가 필요한 것,
   devDependencies는 개발자가 필요한 것
   npm install [package명] -D로 설치 가능 */

/*nodemon은 코드 수정 시 수동으로 서버를 시작해야하는 번거로움을 해결하는 패키지
nodemon app crashed error -> 작업관리자에서 node.js:server-side종료한 뒤 재실행*/
const app = express(); // express를 실행

const PORT = 4000;

function handleListening() {
  console.log(`Listening on: http://localhost:${PORT}`);
}

const handleHome = (request, response) => response.send("Hello from home");

//main url로 접근시(route생성) handleHome응답
app.get("/", handleHome);
//listening하기 시작할 때 handleListening호출
app.listen(PORT, handleListening);
