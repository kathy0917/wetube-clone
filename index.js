import express from "express";
//윗줄이 최신문법. const express = require("express"); //express를 불러옴
//babel이 es6문법을 과거 버전으로 변형해줌.

const { response } = require("express");
const app = express(); // express를 실행

const PORT = 4000;

function handleListening() {
  console.log(`Listening on: http://localhost:${PORT}`);
}

const handleHome = (request, reponse) => response.send("Hello from home");

//main url로 접근시(route생성) handleHome응답
app.get("/", handleHome);
//listening하기 시작할 때 handleListening호출
app.listen(PORT, handleListening);
