const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const usersRouter = require("./routes/users")
var cookieParser = require('cookie-parser')
// const db = require("./db");

// const auth = require("./routes/auth");
// const post = require("./routes/posts");
const app = express();

//septup middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());
app.use("/login/login", usersRouter);
app.use("/login/health", (req, res, next) => {
  return res.status(200).json({message:"ok, woking from login"});
});
app.use(cookieParser());
// app.use("/api", post);

app.use((req, res, next) => {
  const error = new Error("not found");
  error.status = 404;
  next(error);
});

module.exports = app;