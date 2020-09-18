import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

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

/*middleware : 유저와 마지막 응답사이에 존재, 완료하기 전까지 실행할 함수 
구글 클롬에 접근할 권한을 줘야함 ex.유저의 로그인 여부를 확인하는데 사용가능 */
const betweenHome = (req, res, next) => {
  console.log("between");
  next();
};
/*[middleware]loggin,즉 기록을 위해 morgan 설치 */
/*[middleware]보안을 위해 helmet 설치 */
app.use(morgan("tiny"));
app.use(helmet());

/*res.send("not happening") => middleware가 연결을 끊을 수 있음 
  body-parser: form으로 전송한 데이터에 접근할 때 사용
  cookie-parser: cookie에 유저 정보를 저장, session을 다루기 위함
*/
app.use(cookieParser());

/*body-parser는 옵션을 정의해야함. json, text, ...*/
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//전역으로 middleware사용
app.use(betweenHome);

//main url로 접근시(route생성) handleHome응답
app.get("/", handleHome);

//listening하기 시작할 때 handleListening호출
app.listen(PORT, handleListening);
