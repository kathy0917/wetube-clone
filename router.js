/*
/logout ->/user/logout
이런식으로 route를 쪼개기 위해 사용 
*/
import express from "express";

export const userRouter = express.Router();

userRouter.get("/,", (req, res) => {
  res.send("user index");
});
userRouter.get("/edit,", (req, res) => {
  res.send("user edit");
});
userRouter.get("/password,", (req, res) => {
  res.send("user pw");
});
