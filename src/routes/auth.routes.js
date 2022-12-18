const  verifySignUp  = require("../middlewares/verifySignUp");
const controller = require("../controller/auth.controller");
const express=require('express')
const app=express()
app.use(function(req, res, next) {

  res.header(
    "Access-Control-Allow-Headers",
    "Origin, Content-Type, Accept"
  );
  next();
});

app.post(
  "/api/auth/signup",
  [
    verifySignUp.checkDuplicateUsernameOrEmail,
  ],
  controller.signup
);


module.exports = app